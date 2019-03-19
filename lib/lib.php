<?
  define ("SOFTWARENAME", "Concertmaster");
  define ("SOFTWAREVERSION", "0.19");
  define ("USERAGENT", SOFTWARENAME. "/" . SOFTWAREVERSION. " ( ". SOFTWAREMAIL. " )");

  function CURL_Internals ($url, $bust = true, $plusheader, $pluspost, $token)
  {
    $ts = time ();
    $ch = curl_init ();

    $fp = fopen (DEBUG, "w");

    $header = array();
    $header[] = 'Accept: text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5';
    $header[] = 'Cache-Control: max-age=0';
    $header[] = 'Connection: keep-alive';
    $header[] = 'Keep-Alive: 300';
    $header[] = 'Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7';
    $header[] = 'Accept-Language: en-us,en;q=0.5';
    $header[] = 'Pragma: ';

    if ($plusheader)
    {
      if (is_array ($plusheader))
      {
        $credentials = base64_encode ($plusheader[0].":".$plusheader[1]);
        $header[] = 'Authorization: Basic '. $credentials;
      }
    }
    else if ($token)
    {
      $header[] = 'Authorization: Bearer '.$token;
    }

    if ($bust)
    {
        curl_setopt ($ch, CURLOPT_URL, $url. "?". $ts);
    }
    else
    {
        curl_setopt ($ch, CURLOPT_URL, $url);
    }

    curl_setopt ($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt ($ch, CURLOPT_USERAGENT, USERAGENT);
    curl_setopt ($ch, CURLOPT_HTTPHEADER, $header);
    curl_setopt ($ch, CURLOPT_AUTOREFERER, true);
    curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt ($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt ($ch, CURLOPT_ENCODING, '');
    curl_setopt ($ch, CURLOPT_TIMEOUT, 200);
    //curl_setopt ($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
    curl_setopt ($ch, CURLOPT_VERBOSE, TRUE);
    curl_setopt ($ch, CURLOPT_STDERR, $fp);

    if ($pluspost)
    {
      curl_setopt ($ch, CURLOPT_POST, 1);
      curl_setopt ($ch, CURLOPT_POSTFIELDS, $pluspost);
    }

    $api = curl_exec ($ch);

    curl_close ($ch);
    fclose ($fp);

    return $api;
  }