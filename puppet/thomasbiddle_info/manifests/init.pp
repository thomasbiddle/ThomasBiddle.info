# Setup ThomasBiddle.info
class thomasbiddle_info {

  # Setup the Apache Virtual Host
  file { '/etc/apache2/sites-available/thomasbiddle.info':
    ensure  => present,
    content => template('thomasbiddle_info/apache2.erb'),
  }

  file { '/etc/apache2/sites-enabled/thomasbiddle.info':
    ensure => link,
    target => '/etc/apache2/sites-available/thomasbiddle.info',
    require => File['/etc/apache2/sites-available/thomasbiddle.info'],
  }

  file { '/srv/www/ThomasBiddle.info':
    ensure => directory,
    owner => www-data,
    group => www-data,
    recurse => true,
  }

  # Bash script will git clone/git pull to deploy the project.
  file { '/srv/www/update_thomasbiddle_info.sh':
    ensure => present,
    source => "puppet:///modules/thomasbiddle_info/update_thomasbiddle_info.sh",
  }

}
