# Setup ThomasBiddle.info
class thomasbiddle_info {

  # Ensure apache2 is installed and up to date.
  package { 'apache2':
    ensure => 'latest',
  }

  # Setup the Apache Virtual Host
  # (After testing, will set this up using the PuppetLabs apache module)
  file { '/etc/apache2/sites-available/thomasbiddle.info':
    ensure  => present,
    require => Package['apache2'],
    content => template('thomasbiddle_info/apache2.erb'),
  }

  file { '/etc/apache2/sites-enabled/thomasbiddle.info':
    ensure => link,
    target => '/etc/apache2/sites-available/thomasbiddle.info',
    require => File['/etc/apache2/sites-available/thomasbiddle.info'],
  }

  # Ensure the file structure is in place.
  file { '/srv/':
    ensure => directory,
  }
  file { '/srv/www/':
    ensure  => directory,
    require => File['/srv/'],
  }
  file { '/srv/www/thomasbiddle.info':
    ensure  => link,
    target  => '/home/tj/Sites/ThomasBiddle.info/', # Hard coding this for now.
    require => File['/srv/www/'],
  }

}
