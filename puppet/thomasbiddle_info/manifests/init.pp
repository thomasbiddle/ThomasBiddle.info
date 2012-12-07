# Setup ThomasBiddle.info
class thomasbiddle_info {

  # Setup the Apache Virtual Host
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
