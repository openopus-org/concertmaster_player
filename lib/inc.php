<?
    // web server directories

    define ("INFRADIR", "/var/www");
    define ("BASEDIR", INFRADIR. "/concertmaster_player");
    define ("WEBDIR", BASEDIR. "/html");
    define ("LIB", BASEDIR. "/lib");
    define ("LOG", BASEDIR. "/log");
    define ("DEBUG", LOG. '/debug.txt');

    // admin

    define ("SOFTWAREMAIL", "adrianosbr@gmail.com");

    // spotify auth

    define ("SPOTIFYID", "d51f903ebcac46d9a036b4a2da05b299");
    define ("SPOTIFYSECRET", "1d153756c5f140408fd611619eded44a");

    // library initialization

    include_once (LIB. "/lib.php");