<?
    // web server directories

    define ("INFRADIR", "/var/www"); // base OS directory 
    define ("BASEDIR", INFRADIR. "/concertmaster_player"); // directory for all project, including public and non-public files
    define ("WEBDIR", BASEDIR. "/html"); // directory for publicly accessible files
    define ("LIB", BASEDIR. "/lib"); // directory for non-publicly accessible files, like libraries
    define ("LOG", BASEDIR. "/log"); // log dir
    define ("DEBUG", LOG. '/debug.txt'); // log file for some CURL operations detailed debug

    // admin

    define ("SOFTWAREMAIL", "adminmail@gmail.com"); // server admin email address

    // spotify auth

    define ("SPOTIFYID", "lots of letters and numbers"); // spotify dev account id
    define ("SPOTIFYSECRET", "lots of letters and numbers"); // spotify dev account secret string

    // library initialization

    include_once (LIB. "/lib.php");