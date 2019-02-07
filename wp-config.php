<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'Online Portfolio 2019');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2xEP~u$&fR_4BuRiFd=_si4H!8MYvdqrD=eWTb,$J0bS,/+*^3xljvm++=zP0%A%');
define('SECURE_AUTH_KEY',  'UlZyW#;Ikr5>S9deqQ]fx(]G6Qv>MN,dbNr S5WrHF)0uZBIi4hN9&k>8+Qs Hpw');
define('LOGGED_IN_KEY',    '|/KgrYOw&<YSCVri|q65j`+z=&$`S:v] tsU]7DQc4gu&KCu V{CB,mb<-;D1hU0');
define('NONCE_KEY',        'ExIwiD(|C[_h-((GnkAotHRAbG0PNunMbygk9Cg6k}kzB<Q~75kFg@1s5>J&U?~4');
define('AUTH_SALT',        'dLiKg+hgyM9B/8 ?S5xfoIaM`E9!]m+Ar9hG^OB,WiF.)Cc&?z38SN]3V@14|N=`');
define('SECURE_AUTH_SALT', '?r;%9./H-#kDo[zLL ^21O/3q#Mc.>/8DdTbrP4+g$6yc^:Y>kWjp}F4k>?$M#/t');
define('LOGGED_IN_SALT',   'EF;mxY$ZD__RWw:nL:=X) 0 -(09!QtT~5Q0{!sE eXyJc1H|^6=x_G}{ET1#[r0');
define('NONCE_SALT',       'Fi(]EJF92W)YK{L3MgWsP&-uTI.F&G(g8]ISP<@mjWF]5tx&Qp5-XgJ|Ggy,copE');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
