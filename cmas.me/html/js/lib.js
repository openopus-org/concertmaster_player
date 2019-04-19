if (localStorage.confighistorical == undefined)
{
    localStorage.confighistorical = false;
}

if (localStorage.configcompilations == undefined)
{
    localStorage.configcompilations = false;
}

if (localStorage.smartradio == undefined)
{
    localStorage.smartradio = false;
}

if (localStorage.lastcomposerid == undefined)
{
    localStorage.lastcomposerid = 145;
}

cmas_timer = false;
cmas_state = {};
cmas_playbuffer = {};
cmas_favorites = [];
cmas_favoritecomposers = [];
cmas_forbiddencomposers = [];
cmas_favoriteworks = [];
cmas_playlists = {};
cmas_onair = false;
cmas_radioqueue = [];
cmas_radiofilter = {};
cmas_recoverplayer = {};
cmas_disabled = false;

cmas_options = {
    historical: JSON.parse(localStorage.confighistorical),
    compilations: JSON.parse(localStorage.configcompilations),
    timeout: 10000,
    backend: 'https://api.' + window.location.hostname,
    publicsite: 'https://getconcertmaster.com',
    shareurl: 'https://cmas.me',
    smartradio: JSON.parse(localStorage.smartradio),
    notshow: false,
    spot_scopes: 'user-read-private user-read-birthdate user-read-email user-modify-playback-state streaming',
    spot_id: 'd51f903ebcac46d9a036b4a2da05b299',
    spot_redir: 'https://' + window.location.hostname +'/sp/',
    version: '0.19'
};

window.onpopstate = function (event) {
  if (window.location.pathname != "/") {
    vars = window.location.pathname.split("/");
    if (vars[1] == "u") {
      cmas_recording (vars[2], vars[3], vars[4], 1);
    }
    else if (vars[1] == "p") {
      cmas_playlistdetail(parseInt(vars[2], 16));
    }
  }
};

// spotify auth window

cmas_spotifywindow = function ()
{
  window.location.assign('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + cmas_options.spot_id +
    (cmas_options.spot_scopes ? '&scope=' + encodeURIComponent(cmas_options.spot_scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(cmas_options.spot_redir));
}

// spotify basics

cmas_spotifyauth = function ()
{
  if (window.location.pathname != "/") {
    vars = window.location.pathname.split("/");
    if (vars[1] == "u") {
      localStorage.lastwid = vars[2];
      localStorage.lastaid = vars[3];
      localStorage.lastset = vars[4];
      localStorage.fromurl = 1;
    }
    else if (vars[1] == "p") {
      cmas_playlistdetail(parseInt(vars[2], 16));
    }
  }

  $.ajax ({
     url: cmas_options.backend + '/dyn/user/login/',
     method: "POST",
     data: { token: localStorage.access_token },
     success: function(response)
     {
        if (response.status.success == "true")
        {
          localStorage.spotify_userid = response.user.id;
          localStorage.user_country = response.user.country;
          localStorage.user_auth = response.user.auth;
          localStorage.user_product = response.user.product;

          cmas_spotify();
          cmas_init();
        }
        else
        {
          if (localStorage.refresh_token)
          {
            cmas_spotify();
            cmas_init();
          }
          else
          {
            cmas_spotifywindow ();
          }
        }
     }
  });
}

cmas_spotify = function ()
{
  if (typeof spotplayer !== 'undefined') spotplayer.disconnect();

  spotplayer = new Spotify.Player({
    name: 'Concertmaster Web App',
    getOAuthToken: cb => {
      $.ajax ({
       url: cmas_options.backend + '/dyn/token/',
       method: "POST",
       data: { token: localStorage.refresh_token },
       success: function(response)
       {
          localStorage.access_token = response.auth.access_token;
          cb (localStorage.access_token);
       }
    })
  }});

  // Error handling
  spotplayer.addListener('initialization_error', () => { 
    cmas_disabled = true; cmas_disabledreason = "browsernotsupported";
    $('#loader').fadeOut();
    if (localStorage.lastwid) {
      cmas_recording(localStorage.lastwid, localStorage.lastaid, localStorage.lastset, !parseInt(localStorage.fromurl));
      if (parseInt(localStorage.fromurl)) localStorage.fromurl = 0;
    }
  });
  
  spotplayer.addListener('authentication_error', ({ message }) => { console.error(message); });
  spotplayer.addListener('account_error', ({ message }) => { console.error(message); });
  spotplayer.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  spotplayer.addListener('player_state_changed', state => { cmas_playstate(state) });

  // Ready
  spotplayer.addListener('ready', ({ device_id }) => {
    device = device_id;
    cmas_state = {};
    console.log('Ready with Device ID', device_id);
    $('#loader').fadeOut();

    if (localStorage.user_product == "open")
    {
      cmas_disabled = true;
      cmas_disabledreason = "premiumneeded";
    }
    else {
      cmas_showplayerbar();
    }

    if (cmas_recoverplayer.tracks)
    {
      $('#nowplaying').css('display', "block");
      $('#favorites').css('bottom', "348px");
      cmas_spotifyplay(cmas_recoverplayer.tracks, cmas_recoverplayer.offset);
      cmas_recoverplayer = {};
    }
    else {
      if (localStorage.lastwid) {
          cmas_recording(localStorage.lastwid, localStorage.lastaid, localStorage.lastset, (window.location.search != "?play"));
        if (parseInt(localStorage.fromurl)) localStorage.fromurl = 0;
      }
    }
  });

  // Connect to the player!
  spotplayer.connect();
}

cmas_spotifyplay = function (tracks, offset)
{
  if (cmas_disabled) {
    $('#tuning-modal').hide();
    $(`#${cmas_disabledreason}`).leanModal();
    return;
  }

  $.ajax({
    url: 'https://api.spotify.com/v1/me/player/play?device_id=' + device,
    method: "PUT",
    headers: { "Authorization": "Bearer " + localStorage.access_token },
    contentType: "application/json", 
    data: JSON.stringify ({ uris: tracks, offset: { "position": offset } }),
    processData: false,
    error: function (request, error) {

      error = request.responseJSON.error;

      if (error.message == 'Invalid access token')
      {
        // token error, try to catch another token

        console.log('token error...');

        $.ajax({
          url: cmas_options.backend + '/dyn/token/',
          method: "POST",
          data: { token: localStorage.refresh_token },
          success: function (response) 
          {
            if (response.status.success == "true") 
            {  
              // refresh token OK

              localStorage.access_token = response.auth.access_token;
              cmas_spotifyplay(tracks, offset);
            }
            else 
            {
              cmas_spotifywindow();
            }
          }
        });
      }
      else
      {
        // player error, try to re-init it

        console.log('player error...');

        cmas_recoverplayer = { tracks: tracks, offset: offset };

        cmas_spotify();
      }
    },
    success: function (response) {
        // success, playing!

        if (cmas_timer) {
          clearInterval(cmas_timer);
        }

        cmas_state = {};
        $('#tuning-modal').closeModal();
        cmas_pressplaypause();
    }
  });
}

cmas_toggleplay = function ()
{
  if (Object.keys(cmas_state).length > 0)
  {
    spotplayer.togglePlay();
  }
  else
  {
    if (!$('#tuning-modal').is(':visible')) { $('#tuning-modal').leanModal(); }
    cmas_spotifyplay(cmas_playbuffer.tracksuris, 0);
  }
}

cmas_nexttrack = function ()
{
  spotplayer.nextTrack();
}

cmas_prevtrack = function ()
{
  spotplayer.previousTrack();
}

cmas_pressplaypause = function ()
{
  $(".slider").find('.bar').css('width', '0%');
  $(".timer").html('0:00');

  $('#playpause').removeClass("play");
  $('#playpause').addClass("pause");
}

cmas_track = function (offset)
{
  cmas_spotifyplay(cmas_playbuffer.tracksuris, offset);
}

// player state and timers

cmas_playstate = function (state)
{
  var itsover = false;

  // treating player shutdown

  if (!state)
  {
    clearInterval(cmas_timer);
    $("#timerglobal").html("0:00");
    $("#timer-" + cmas_state.id).html("0:00");
    $("#slider-" + cmas_state.id).find('.bar').css('width', '0%');
    $("#globalslider-" + cmas_state.id).find('.bar').css('width', '0%');
    $('#playpause').removeClass("pause");
    $('#playpause').addClass("play");
    cmas_state = {};

    return;
  }

  // treating 'track redirects' -- thanks, spotify!

  if (state.track_window.current_track.linked_from.id)
  {
    state.track_window.current_track.id = state.track_window.current_track.linked_from.id;
  }

  if (state.paused != cmas_state.paused)
  {
    // play pause status has changed

    clearInterval (cmas_timer);

    if (state.paused)
    {
      $('#playpause').removeClass("pause");
      $('#playpause').addClass("play");

      // is the recording over?

      if (state.paused && state.track_window.current_track.id == cmas_playbuffer.tracks[0] && state.position == 0)
      {
        console.log ('Over, next');
        itsover = true;
        cmas_radioskip ();
      }
    }
    else
    {
      cmas_timer = setInterval (cmas_autoslider, 1000);

      $('#playpause').removeClass("play");
      $('#playpause').addClass("pause");
    }
  }

  // has the track changed?

  if (state.track_window.current_track.id != cmas_state.id && Object.keys(cmas_state).length > 0)
  {
    for (trid in cmas_playbuffer.tracks)
    {
      if (cmas_playbuffer.tracks[trid] != state.track_window.current_track.id)
      {
        cmas_slider ({ changed: true, paused: state.paused, id: cmas_playbuffer.tracks[trid], position: 0, duration: 0 });
      }
    }
  }

  // update current track position

  cmas_state = { paused: state.paused, id: state.track_window.current_track.id, position: Math.floor (state.position / 1000), duration: Math.floor (state.duration / 1000) };
  if (cmas_state.position > 0 || itsover)
  {
    cmas_slider(cmas_state);
  }
}

cmas_autoslider = function ()
{
  cmas_state = { paused: cmas_state.paused, id: cmas_state.id, position: cmas_state.position + 1, duration: cmas_state.duration };
  cmas_slider (cmas_state);
}

cmas_slider = function (arg)
{
  if (arg.changed)
  {
    $("#timer-"+arg.id).html("0:00");
    $("#slider-"+arg.id).find('.bar').css('width', '0%');
    $("#globalslider-"+arg.id).find('.bar').css('width', '0%');
  }
  else
  {
    $("#timerglobal").html(cmas_readabletime(cmas_playbuffer.accdurations[cmas_playbuffer.tracks.indexOf(arg.id)] + arg.position));
    $("#timer-"+arg.id).html(cmas_readabletime(arg.position));
    $("#slider-"+arg.id).find('.bar').css('width', (100*arg.position/arg.duration) + '%');
    $("#globalslider-"+arg.id).find('.bar').css('width', (100*arg.position/arg.duration) + '%');
  }
}

// slug gen

cmas_slug = function (str)
{
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

// converting seconds to string

cmas_readabletime = function(time)
{
    if (time && time > 0.0)
    {
        var sec = parseInt(time % (60));
        return parseInt(time / (60)) + ':' + (sec < 10 ? '0'+sec : sec);
    }
    else
    {
        return '0:00';
    }
}

// composer list

cmas_composersbyname = function (letter)
{
  $.ajax({
    url: cmas_options.backend + '/composer/list/name/' + letter + '.json',
    method: "GET",
    success: function (response) {
      cmas_composers (response);
    }
  });
}

cmas_composersbysearch = function (search)
{
  if (search.length > 3)
  {
    $.ajax({
      url: cmas_options.backend + '/composer/list/search/' + search + '.json',
      method: "GET",
      success: function (response) {
        cmas_composers(response);
      }
    });
  }
  else if (search.length == 0)
  {
    cmas_composersbyname ('all');
  }
}

cmas_composersbyepoch = function (epoch)
{
  $.ajax({
    url: cmas_options.backend + '/composer/list/epoch/' + epoch + '.json',
    method: "GET",
    success: function (response) {
      cmas_composers(response);
    }
  });
}

cmas_composersbyfav = function ()
{
  $.ajax({
    url: cmas_options.backend + '/user/' + localStorage.spotify_userid + '/composer/fav.json',
    method: "GET",
    success: function (response) {
      cmas_composers(response);
    }
  });
}

cmas_composers = function (response)
{
  var list = response;

    if (1==1 || list.status.success == "true")
    {
      compcontent = '';

      switch (list.request.type)
      {
        case "epoch":
          compcontent = '<li class="index period"></li>';
          $('#library #composersearch').val('');
          break;

        case "search":
          compcontent = '<li class="index search"></li>';
          $('#library select.periods').val('all');
          $('#library select.periods').trigger('change.select2');
          break;

        case "fav":
          compcontent = '<li class="index favorite"></li>';
          $('#library #composersearch').val('');
          $('#library select.periods').val('all');
          $('#library select.periods').trigger('change.select2');
          break;

        case "name":
        default:
          if (list.request.item == "all")
          {
            compcontent = '<li class="index all"></li>';
          }
          else
          {
            compcontent = '<li class="index">'+list.request.item+'</li>';
          }
          $('#library #composersearch').val('');
          $('#library select.periods').val('all');
          $('#library select.periods').trigger('change.select2');
          break;
      }

      $('#composers').html(compcontent);

      docs = list.composers;
      for (composer in docs)
      {
        if (!docs[composer].death) docs[composer].death = '0000';
        
        if ($.inArray(docs[composer].id.toString(), cmas_favoritecomposers) != -1)
        {
          cfav = 'favorite';
        }
        else
        {
          cfav = '';
        }

        if ($.inArray(docs[composer].id.toString(), cmas_forbiddencomposers) != -1) 
        {
          cforb = 'forbidden';
        }
        else
        {
          cforb = '';
        }
        
        $('#composers').append('<li class="composer"><ul class="composerdetails"><li class="photo"><a href="javascript:cmas_genresbycomposer(\'' + docs[composer].id + '\');"><img src="/img/portraits/' + cmas_slug(docs[composer].name) + '.jpg" /></a></li><li class="name"><a href="javascript:cmas_genresbycomposer(\'' + docs[composer].id + '\');">' + docs[composer].name + '</a></li><li class="fullname">' + docs[composer].complete_name + '</li><li class="dates">(' + docs[composer].birth.substring(0, 4) + (docs[composer].death.substring(0, 4) != '0000' ? '-' + docs[composer].death.substring(0, 4) : '') + ')</li><li id="forb_' + docs[composer].id + '" class="forb ' + cforb + '"><a href="javascript:cmas_compforbid(\'' + docs[composer].id + '\');">forbidden</a></li><li id="cfav_' + docs[composer].id + '" class="fav ' + cfav + '"><a href="javascript:cmas_compfavorite(\'' + docs[composer].id + '\');">fav</a></li><li class="radio"><a href="javascript:cmas_newradio({composer:' + docs[composer].id + '});">radio</a></li><li class="edit"><a href="javascript:cmas_editcomposer(\'' + docs[composer].id + '\');">edit</a></li></ul></li>');
      }

      $('#composers').scrollLeft(0);
    }
    /*else
    {
      $('#composers').html(compcontent);
    }*/
}

// genres list

cmas_genresbycomposer = function (composer, genre)
{
  window.albumlistnext = 0;

  $.ajax({
    url: cmas_options.backend + '/genre/list/composer/' + composer + '.json',
    method: "GET",
    success: function (response) {
      
      var list = response;

      if (list.status.success == "true") {
        localStorage.lastcomposerid = list.composer.id;

        $('#genresworks h4').html('');
        $('#playlistdetail').hide();
        $('#genresworks h2').html('<a href="javascript:cmas_genresbycomposer (' + list.composer.id + ')">' + list.composer.name + '</a>');
        $('#genresworks h3').html('');
        $('#genres').css("display", "inline-block");
        $('#works').css("display", "inline-block");
        $('#searchbywork').css("display", "block");
        $('#genres').html('');
        $('#works').html('');
        $('#albums').html('');
        $('#albums').hide();

        $('#genres').append('<li id="all"><a href="javascript:cmas_worksbycomposer(\'' + list.composer.id + '\',\'all\');">All</a><a class="radio" href="javascript:cmas_newradio({composer:' + list.composer.id + '});">radio</a></li>');
        $('#genres').append('<li id="fav"><a href="javascript:cmas_listfavoriteworks(\'' + list.composer.id + '\');">Favorites</a><a class="radio" href="javascript:cmas_newradio({composer:' + list.composer.id + ',work:\'fav\'});">radio</a></li>');

        var lastgenre = '';

        docsg = list.genres;
        for (dgenre in docsg) {
          $('#genres').append('<li id="' + cmas_slug(docsg[dgenre]) + '"><a href="javascript:cmas_worksbycomposer(\'' + list.composer.id + '\',\'' + docsg[dgenre] + '\');">' + docsg[dgenre] + '</a><a class="radio" href="javascript:cmas_newradio({composer:' + list.composer.id + ',genre:\'' + docsg[dgenre] + '\'});">radio</a></li>');
        }

        if (!genre) {
          genre = 'all';
        }

        if (genre == 'fav')
        {
          cmas_listfavoriteworks(list.composer.id);
        }
        else
        {
          cmas_worksbycomposer(list.composer.id, genre);
        }
      }
      
    }
  });
}

// works list

cmas_worksbycomposer = function (composer, genre)
{
  $('#worksearch').val('');

  $.ajax({
    url: cmas_options.backend + '/work/list/composer/' + composer + '/' + genre + '.json',
    method: "GET",
    success: function (response) {
      cmas_works(response);
    }
  });
}

cmas_listfavoriteworks = function (composer) 
{
  $('#worksearch').val('');

  $.ajax({
    url: cmas_options.backend + '/user/' + localStorage.spotify_userid + '/composer/' + composer + '/work/fav.json',
    method: "GET",
    success: function (response) {
      cmas_works(response);
    }
  });
}

cmas_worksbysearch = function (composer, genre, search)
{
  if (genre == 'fav' && search.length > 3)
  {
    $.ajax({
      url: cmas_options.backend + '/user/' + localStorage.spotify_userid + '/composer/' + composer + '/work/fav/search/' + search + '.json',
      method: "GET",
      success: function (response) {
        cmas_works(response);
      }
    });
  }
  else if (search.length > 3)
  {
    $.ajax({
      url: cmas_options.backend + '/work/list/composer/' + composer + '/genre/' + genre + '/search/' + search + '.json',
      method: "GET",
      success: function (response) {
        cmas_works(response);
      }
    });
  }
  else if (genre == 'fav' && search.length == 0)
  {
    cmas_listfavoriteworks (composer);
  }
  else if (search.length == 0)
  {
    cmas_worksbycomposer (composer, genre);
  }
}

cmas_works = function (response)
{
  var list = response;

  localStorage.lastgenre = list.request.item;

  $('#works').html('');
  $('#albums').html('');

  $('#genres li').removeClass('active');
  $('#'+cmas_slug(list.request.item)).addClass('active');

  $('#works').html('');

  docsw = list.works;
  for (work in docsw)
  {
    favorite = '';
    if ($.inArray(docsw[work].id.toString(), cmas_favoriteworks) != -1) 
    {
      favorite = 'favorite';
    }

    docsw[work].title = docsw[work].title.replace(/\"/g,"");
    $('#works').append('<li><a href="javascript:cmas_favoritework(\'' + docsw[work].id + '\')" class="wfav wfav_' + docsw[work].id + ' ' + favorite + '">fav</a><a href="javascript:cmas_recordingsbywork(' + docsw[work].id + ',0,{work:{title:\'' + docsw[work].title.replace(/\'/g, "\\'") + '\'},composer:{id:' + list.composer.id + ', name:\'' + list.composer.name.replace(/\'/g, "\\'") +'\'}});">'+docsw[work].title+'</a></li>');
  }
}

// recordings list

cmas_recordingsbywork = function (work, offset, data)
{
  $('#worksearch').val('');
  window.albumlistwork = work;
  window.albumlistoffset = offset;
  window.albumlistnext = 0;

  if (!offset) {
    $('#genres').css("display", "none");
    $('#works').css("display", "none");
    $('#searchbywork').css("display", "none");
    $('#playlistdetail').hide();
    $('#playlistradio').hide();
    $('#albums').removeClass();
    $('#albums').html('');
    $('#genresworks h2').html('<a href="javascript:cmas_genresbycomposer (' + data.composer.id + ')">' + data.composer.name + '</a>');
    $('#genresworks h3').html(data.work.title);
    $('#genresworks h4').html('');
    $('#albums').addClass(work.toString());
    $('#albums').show();
  }

  $('#albums.'+work).append('<li class="loading"></li>');

  $.ajax({
    url: cmas_options.backend + '/recording/list/work/' + work + '/' + offset + '.json',
    method: "GET",
    success: function (response) {

      var list = response;
      $('li.loading').remove();

      if (list.status.success == "true" && $('#albums').attr('class') == work.toString()) {
        
        window.albumlistnext = list.next;
        docsr = list.recordings;

        for (performance in docsr) {
          listul = '#albums.' + list.work.id;

          draggable = "";
          pidsort = "";
          extraclass = "";
          extratitle = "";

          notshow = false;

          if (docsr[performance].compilation == "true") {
            if (!cmas_options.compilations) {
              notshow = true;
            }
          }

          if (docsr[performance].historical == "true") {
            if (!cmas_options.historical) {
              notshow = true;
            }
          }

          if (docsr[performance].verified == "true") {
            extraclass = "verified";
            extratitle = "Verified recording";
          }

          if (!notshow && !$("ul#albums." + list.work.id + " li[pid=" + list.work.id + '-' + docsr[performance].spotify_albumid + '-' + docsr[performance].set + "]").length) {
            $(listul).append('<li pid="' + list.work.id + '-' + docsr[performance].spotify_albumid + '-' + docsr[performance].set + '" ' + pidsort + ' class="performance ' + draggable + ' ' + extraclass + '" title="'+ extratitle + '"><ul>' + cmas_recordingitem(docsr[performance], list.work) + '</ul></li>');
          }
        }

        if (list.status.rows <= 4 && list.next)
        {
          cmas_recordingsbywork(list.work.id, list.next, {});
        }
      }
    }
  });
}

// random recording

cmas_randomrecording = function (wid) {
  $.ajax({
    url: cmas_options.backend + '/recording/list/work/' + wid + '/0.json',
    method: "GET",
    success: function (response) {
      
      if (response.status.success == "true") {

        if (!cmas_options.compilations) {
          comprec = [];

          for (rec in response.recordings) {
            if (response.recordings[rec].compilation != "true") {
              comprec.push(response.recordings[rec]);
            }
          }
        }
        else {
          comprec = response.recordings;
        }

        var rnd = Math.floor((Math.random() * (comprec.length - 1)));
        var rcd = comprec[rnd];
        cmas_recording(wid, rcd["spotify_albumid"], rcd["set"]);
      }
      else {
        cmas_radioskip();
      }
    }
  });
}

// recording detail

cmas_thisrecording = function (album, wid, set) {
  $('#radiotop #goradio').removeClass('on');
  $('#playercontrols #skip').removeClass('radio');
  $('#radiotop select').prop("disabled", false);

  cmas_radioqueue = [];
  cmas_radiofilter = {};
  cmas_onair = false;
  
  cmas_recording (wid, album, set);
}

cmas_recording = function (wid, album, set, auto)
{
  if (!auto)
  {
    $('#tuning-modal').leanModal();
    $('#worksearch').val('');
  }

  $.ajax({
    url: cmas_options.backend + '/recording/detail/work/' + wid + '/album/' + album + '/' + set + '.json',
    method: "GET",
    success: function (response) {
      $('#nowplaying').css('display', "block");
      if (cmas_disabled) {
        $('#favorites').css('bottom', "280px");
      }
      else {
        $('#favorites').css('bottom', "348px");
      }
      $("#timerglobal").html('0:00');
      cmas_recordingaction (response, auto);
    }
  });
}

cmas_recordingaction = function (list, auto)
{
  if (list.status.success == "true") {

    if (list.recording.length == 0) {
      cmas_notavailable();
    }
    else if (list.recording.markets.indexOf(localStorage.user_country) != -1) {

      if (window.location.pathname != '/u/' + list.work.id + '/' + list.recording.spotify_albumid + '/' + list.recording.set) {
        window.history.pushState({}, 'Concertmaster', '/u/' + list.work.id + '/' + list.recording.spotify_albumid + '/' + list.recording.set);
      }

      document.title = `${list.work.composer.name}: ${list.work.title} - Concertmaster`;

      $('#playerinfo').html(cmas_recordingitem(list.recording, list.work));

      verify = '<li class="notverified"><a href="javascript:cmas_qualify()">This recording was fetched automatically and its metadata was not verified. Is everything right? CLICK HERE TO QUALIFY IT! Thank you!</a></li>';
      verify += '<li class="verified"><a href="javascript:cmas_qualify()">This recording was verified by a human and its metadata is right. Disagree? Click here and help us to improve our data.</a></li>';
      verify += '<li class="button verify"><a href="javascript:cmas_rectag(' + list.work.id + ',\'' + list.recording.spotify_albumid + '\',' + list.recording.set + ',\'verified\',1)">verified</a></li>';
      verify += '<li class="button partial"><a href="javascript:cmas_rectag(' + list.work.id + ',\'' + list.recording.spotify_albumid + '\',' + list.recording.set + ',\'compilation\',1)">compilation</a></li>';
      verify += '<li class="button wrongdata"><a href="javascript:cmas_rectag(' + list.work.id + ',\'' + list.recording.spotify_albumid + '\',' + list.recording.set + ',\'wrongdata\',1)">wrongdata</a></li>';
      verify += '<li class="button badquality"><a href="javascript:cmas_rectag(' + list.work.id + ',\'' + list.recording.spotify_albumid + '\',' + list.recording.set + ',\'badquality\',1)">badquality</a></li>';

      $('#playerverify').html(verify);
      $('#playerverify').toggleClass((list.recording.verified == 'true' ? 'verified' : 'notverified'));
      $('#playertracks').html('');
      $('#globaltracks').html('');

      if (list.recording.tracks.length >= 60) {
        trackadjust = ' - 0.03px';
        $('#globaltracks').addClass("tootoomanytracks");
      }
      else {
        trackadjust = ' - 2px';
        $('#globaltracks').removeClass("tootoomanytracks");
        if (list.recording.tracks.length >= 12) 
        {
          $('#globaltracks').addClass("toomanytracks");
        }
        else
        {
          $('#globaltracks').removeClass("toomanytracks");
        }
      }

      var currtrack = 0;
      cmas_playbuffer.accdurations = [0];
      cmas_playbuffer.tracks = [];
      cmas_playbuffer.tracksuris = list.recording.spotify_tracks;

      for (track in list.recording.tracks) {
        cmas_playbuffer.tracks[track] = list.recording.tracks[track].spotify_trackid;
        cmas_playbuffer.accdurations[parseInt(track) + 1] = parseInt(list.recording.tracks[track].length) + parseInt(cmas_playbuffer.accdurations[parseInt(track)]);

        var pctsize = ((list.recording.tracks[track].length) / list.recording.length) * 100;
        currtrack = currtrack + 1;
        $('#playertracks').append('<li><a class="tracktitle" href="javascript:cmas_track(' + track + ')">' + list.recording.tracks[track].title + '</a><div id="timer-' + list.recording.tracks[track].spotify_trackid + '" class="timer">0:00</div><div id="slider-' + list.recording.tracks[track].spotify_trackid + '" class="slider"><div class="buffer"></div><div class="bar"></div></div><div class="duration">' + cmas_readabletime(list.recording.tracks[track].length) + '</div></li>');
        $('#globaltracks').append('<li style="width: calc(' + Math.round(pctsize * 1000) / 1000 + '%' + trackadjust + ')"><a class="tracktitle" href="javascript:cmas_track(' + track + ')">' + currtrack + '</a><div id="globalslider-' + list.recording.tracks[track].spotify_trackid + '" class="slider"><div class="buffer"></div><div class="bar"></div></div><div id="globaltimer-' + track + '" class="timer">0:00</div><div class="duration">' + cmas_readabletime(list.recording.tracks[track].length) + '</div></li>');
      }

      $('#durationglobal').html(cmas_readabletime(list.recording.length));

      if (!auto) {
        cmas_notification(list.work.title, list.recording.cover, list.work.composer.name);
        cmas_spotifyplay(list.recording.spotify_tracks, 0);

        // registering play
        localStorage.lastwid = list.work.id;
        localStorage.lastaid = list.recording.spotify_albumid;
        localStorage.lastset = list.recording.set;
        $.ajax({
          url: cmas_options.backend + '/dyn/user/recording/played/',
          method: "POST",
          data: { id: localStorage.spotify_userid, wid: list.work.id, aid: list.recording.spotify_albumid, set: list.recording.set, cover: list.recording.cover, performers: JSON.stringify(list.recording.performers), auth: cmas_authgen() },
          success: function (response) {
            if ($('#favtitle select option:checked').val() == 'rec') {
              cmas_recentrecordings();
            }
          }
        });
      }

    }
    else {
      cmas_notavailable();
    }
  }
  else {
    cmas_notavailable();
  }
}

cmas_playingdetails = function ()
{
    if (document.getElementById('nowplaying').className == 'up')
    {
        document.getElementById('nowplaying').className = 'down';
    }
    else
    {
        document.getElementById('nowplaying').className = 'up';
    }
}

// recording item

cmas_recordingitem = function (item, work, playlist)
{
  if (typeof item.label === 'undefined') item.label = '';

  alb = '';
  alb = alb + '<li class="permalink"><a href="javascript:cmas_permalink(' + work.id + ',\'' + item.spotify_albumid + '\',' + item.set + ')">permalink</a></li>';
  
  rid = work.id + '-' + item.spotify_albumid + '-' + item.set;

  if ($.inArray(rid, cmas_favorites) != -1)
  {
    alb = alb + '<li class="favorite"><a href="javascript:cmas_recfavorite(' + work.id + ',\'' + item.spotify_albumid + '\',' + item.set + ')" class="is fav_' + rid + '">unfavorite</a></li>';
  }
  else
  {
    alb = alb + '<li class="favorite"><a href="javascript:cmas_recfavorite(' + work.id + ',\'' + item.spotify_albumid + '\',' + item.set + ')" class="go fav_' + rid + '">favorite</a></li>';
  }

  if (playlist) {
    if (playlist.owner.id == localStorage.spotify_userid) {
      plaction = 'unplaylist';
      plfunction = 'cmas_unplaylistperformance(' + work.id + ',\'' + item.spotify_albumid + '\',' + item.set + ',' + playlist.id + ')';
    }
    else {
      plaction = 'doplaylist';
      plfunction = 'cmas_playlistmodal(' + work.id + ',\'' + item.spotify_albumid + '\',' + item.set + ')';
    }
  }
  else {
    plaction = 'doplaylist';
    plfunction = 'cmas_playlistmodal(' + work.id + ',\'' + item.spotify_albumid + '\',' + item.set + ')';
  }

  alb = alb + '<li class="playlist '+ plaction +'"><a href="javascript:'+ plfunction +'">playlist</a></li>';

  alb = alb + '<li class="cover"><a href="javascript:cmas_thisrecording(\'' + item.spotify_albumid +'\','+work.id+','+item.set+')">';
  alb = alb + '<img src="' + item.cover + '" onerror="this.src=\'/img/nocover.png\'" />';
  alb = alb + '<div class="overlay"></div></a></li>';

  alb = alb+'<li class="composer"><a href="javascript:cmas_genresbycomposer('+work.composer.id+')">'+work.composer.name+'</a></li>';
  alb = alb + '<li class="work"><a href="javascript:cmas_recordingsbywork(' + work.id + ',0,{work:{title:\'' + work.title.replace(/\'/g, "\\'") + '\'},composer:{id:' + work.composer.id + ', name:\'' + work.composer.name.replace(/\'/g, "\\'") +'\'}})">'+work.title+'</a></li>';

  albp = '';
  albc = '';
  albo = '';
  albor = '';
  classmain = '';

  if (item.performers.length <= 4)
  {
      classmain = 'mainperformer';
  }

  perfnum = 0;

  for (performers in item.performers)
  {
      if (item.performers[performers].role.trim() == "Conductor")
      {
        albp = albp + '<li class="mainperformer"><strong>'+item.performers[performers].name+'</strong>, ' + item.performers[performers].role + '</li>';
      }
      else if (item.performers[performers].role.trim() == "Ensemble" || item.performers[performers].role.trim() == "Orchestra")
      {
        albp = albp + '<li class="mainperformer"><strong>'+item.performers[performers].name+'</strong></li>';
      }
      else if (item.performers[performers].role.trim() == "Choir")
      {
        albp = albp + '<li class="'+classmain+'"><strong>'+item.performers[performers].name+'</strong></li>';
      }
      else if (item.performers[performers].role.trim() == "")
      {
        albp = albp + '<li class="' + classmain + '"><strong>' + item.performers[performers].name + '</strong></li>';
      }
      else
      {
        albp = albp + '<li class="'+classmain+'"><strong>'+item.performers[performers].name+'</strong>, ' + item.performers[performers].role + '</li>';
      }
  }

  alb = alb + '<li class="performers"><ul>' + albp + '</ul></li>';
  alb = alb + '<li class="label">'+item.label+'</li>';

  return alb;
}

// error messages

cmas_notavailable = function () {
  if (cmas_onair) {
    cmas_radioskip();
  }
  else {
    $('#tuning-modal').hide();
    $("#notavailable").leanModal();
  }
}

// showing playing bar

cmas_showplayerbar = function ()
{
  $('#playerbar').css('display',"block");
  $('#main').css('bottom',"68px");
  $('#nowplaying').css('bottom',"68px");
  $('#sidebar').css('bottom',"68px");
  $('#favorites').css('bottom', "68px");
}

// notification

cmas_notification = function (text, icon, title)
{
  if (cmas_disabled) return;

  let options =
    {
      body: text,
      icon: icon,
      silent: true
    };

  var n = new Notification (title, options);
  setTimeout(n.close.bind(n), 5000);
}

// generating auth hash

cmas_authgen = function ()
{
  let timestamp = (((new Date() / 1000 | 0) + (60 * 1)) / (60 * 5) | 0);
  let auth = md5 (timestamp + "-" + localStorage.spotify_userid + "-" + localStorage.user_auth);

  return auth;
}

// tagging or untagging a recording

cmas_rectag = function (wid, aid, set, tag, value) {
  rid = wid + '-' + aid + '-' + set;
  if (value == 1) {
    action = 'tag';
  }
  else {
    action = 'untag';
  }

  $.ajax({
    url: cmas_options.backend + '/recording/detail/work/' + wid + '/album/' + aid + '/' + set + '.json',
    method: "GET",
    success: function (response) {

      $.ajax({
        url: cmas_options.backend + '/dyn/recording/' + action + '/',
        method: "POST",
        data: { id: localStorage.spotify_userid, wid: wid, aid: aid, set: set, cover: response.recording.cover, performers: JSON.stringify(response.recording.performers), auth: cmas_authgen(), tag: tag },
        success: function (nresponse) {
          if (nresponse.status.success == "true" && window.albumlistwork == wid) {
            cmas_recordingsbywork(wid, 0, { work: response.work, composer: response.work.composer });
          }
        }
      });

    }
  });
}

// adding or removing favorite recording

cmas_recfavorite = function (wid, aid, set)
{
  rid = wid + '-' + aid + '-' + set;
  if ($.inArray(rid, cmas_favorites) != -1)
  {
    action = 'unfavorite';
  }
  else
  {
    action = 'favorite';
  }

  $.ajax({
    url: cmas_options.backend + '/recording/detail/work/' + wid + '/album/' + aid + '/' + set + '.json',
    method: "GET",
    success: function (response) {

      $.ajax({
        url: cmas_options.backend + '/dyn/user/recording/' + action + '/',
        method: "POST",
        data: { id: localStorage.spotify_userid, wid: wid, aid: aid, set: set, cover: response.recording.cover, performers: JSON.stringify(response.recording.performers), auth: cmas_authgen() },
        success: function (response) {
          if (response.status.success == "true") {
            
            if (action == 'favorite') {
              $('.fav_' + rid).removeClass('go');
              $('.fav_' + rid).addClass('is');
            }
            else {
              $('.fav_' + rid).removeClass('is');
              $('.fav_' + rid).addClass('go');
            }

            if (action == 'favorite' || $('#favtitle select').val() == "fav") {
              cmas_playlist("fav");
            }
          }
        }
      });

    }
  });  
}

// adding or removing favorite work

cmas_favoritework = function (wid) {
  if ($.inArray(wid.toString(), cmas_favoriteworks) != -1) {
    action = 'unfavorite';
  }
  else {
    action = 'favorite';
  }

  $.ajax({
    url: cmas_options.backend + '/dyn/user/work/' + action + '/',
    method: "POST",
    data: { id: localStorage.spotify_userid, wid: wid, auth: cmas_authgen() },
    success: function (response) {
      if (response.status.success == "true") {
        cmas_favoriteworks = (response.list ? response.list : []);
        $('.wfav_' + wid).toggleClass('favorite');

        if ($('li#fav').hasClass('active')) {
          cmas_listfavoriteworks(localStorage.lastcomposerid);
        }
      }
    }
  });
}

// initializing interface

cmas_init = function ()
{
  $.ajax({
    url: cmas_options.backend + '/user/' + localStorage.spotify_userid + '/lists.json',
    method: "GET",
    success: function (response) 
    {
      cmas_favoritecomposers = (response.favorite ? response.favorite : []);
      cmas_forbiddencomposers = (response.forbidden ? response.forbidden : []);
      cmas_favoriteworks = (response.works ? response.works : []);
      cmas_playlists = (response.playlists ? response.playlists : {});

      cmas_composersbyname('all');
      cmas_genresbycomposer(localStorage.lastcomposerid, localStorage.lastgenre);
      cmas_playlist("fav");
    }
  });
}

// favorite recordings

cmas_favoriterecordings = function ()
{
  $('#favorites .performance').remove();
  $.ajax({
    url: cmas_options.backend + '/user/' + localStorage.spotify_userid + '/recording/fav.json',
    method: "GET",
    success: function (response) {
      cmas_favorites = response.list;
      docsr = response.recordings;
      
      for (performance in docsr) {
        listul = '#favalbums';

        draggable = "";
        pidsort = "";

        $(listul).append('<li pid="' + docsr[performance].work.id + '-' + docsr[performance].spotify_albumid + '-' + docsr[performance].set + '" ' + pidsort + ' class="performance ' + draggable + '"><ul>' + cmas_recordingitem(docsr[performance], docsr[performance].work) + '</ul></li>');
      }
    }
  });
}

// recent recordings

cmas_recentrecordings = function () {
  $('#favorites .performance').remove();
  $.ajax({
    url: cmas_options.backend + '/user/' + localStorage.spotify_userid + '/recording/recent.json',
    method: "GET",
    success: function (response) {
      docsr = response.recordings;

      for (performance in docsr) {
        listul = '#favalbums';

        $(listul).append('<li pid="' + docsr[performance].work.id + '-' + docsr[performance].spotify_albumid + '-' + docsr[performance].set + '" class="performance"><ul>' + cmas_recordingitem(docsr[performance], docsr[performance].work) + '</ul></li>');
      }
    }
  });
}

// playlist recordings

cmas_playlistrecordings = function (pid) {
  $('#favorites .performance').remove();
  $.ajax({
    url: cmas_options.backend + '/recording/list/playlist/'+pid+'.json',
    method: "GET",
    success: function (response) {
      docsr = response.recordings;

      for (performance in docsr) {
        listul = '#favalbums';
        draggable = "draggable";
        pidsort = "";

        $(listul).append('<li pid="' + docsr[performance].work.id + '-' + docsr[performance].spotify_albumid + '-' + docsr[performance].set + '" class="performance"><ul>' + cmas_recordingitem(docsr[performance], docsr[performance].work, response.playlist) + '</ul></li>');
      }
    }
  });
}

// adding or removing favorite composers

cmas_compfavorite = function (cid) {
  if ($('#cfav_' + cid).hasClass('favorite'))
  {
    action = 'unfavorite';
  }
  else 
  {
    action = 'favorite';
  }

  $.ajax({
    url: cmas_options.backend + '/dyn/user/composer/' + action + '/',
    method: "POST",
    data: { id: localStorage.spotify_userid, cid: cid, auth: cmas_authgen() },
    success: function (response) {
      if (response.status.success == "true") {
        
        cmas_favoritecomposers = (response.list ? response.list : []);

        $('#cfav_' + cid).toggleClass('favorite');

        if ($('#composers li.index').hasClass('favorite')) {
          cmas_composersbyfav();
        }
      }
    }
  });
}

// adding or removing forbidden composers

cmas_compforbid = function (cid) {
  if ($('#forb_' + cid).hasClass('forbidden')) {
    action = 'permit';
  }
  else {
    action = 'forbid';
  }

  $.ajax({
    url: cmas_options.backend + '/dyn/user/composer/' + action + '/',
    method: "POST",
    data: { id: localStorage.spotify_userid, cid: cid, auth: cmas_authgen() },
    success: function (response) {
      if (response.status.success == "true") {

        cmas_forbiddencomposers = (response.list ? response.list : []);

        $('#forb_' + cid).toggleClass('forbidden');
      }
    }
  });
}

// playlists menu

cmas_listplaylists = function (playlist_slug) {
  $('#favtitle select').css('visibility', 'hidden');

  if (!playlist_slug || playlist_slug == "fav") {
    playlist_slug = "fav";
    $('#sidebar').removeClass('sequenplay');
  }
  else if (playlist_slug == "rec") {
    playlist_slug = "rec";
    $('#sidebar').removeClass('sequenplay');
  }
  else {
    $('#sidebar').addClass('sequenplay');
  }

  $('#favtitle select').html('');

  var favoption = new Option("Favorites", "fav");
  $('#favtitle select').append($(favoption));

  var favoption = new Option("Recently Played", "rec");
  $('#favtitle select').append($(favoption));

  for (pllst in cmas_playlists)
  {
    var favoption = new Option(cmas_playlists[pllst].name, cmas_playlists[pllst].id);
    $('#favtitle select').append($(favoption));
  }

  $('#favtitle select').val(playlist_slug);
  $('#favtitle select').css('visibility', 'visible');
}

cmas_playlist = function (playlist) {
  cmas_listplaylists (playlist);
  if (playlist == "fav") {
    cmas_favoriterecordings();
  }
  else if (playlist == "rec") {
    cmas_recentrecordings();
  }
  else {
    cmas_playlistrecordings(playlist);
  }
}

// playlist modal

cmas_playlistmodal = function (wid, aid, set) {
  $('#playlistmodal #existingplaylist').html('');
  var favoptions = Array();
  
  var favoption = new Option("Choose a playlist", "0");
  $('#playlistmodal #existingplaylist').append($(favoption));

  for (pllst in cmas_playlists) {
    if (cmas_playlists[pllst].owner == localStorage.spotify_userid)
    {
      var favoption = new Option(cmas_playlists[pllst].name, cmas_playlists[pllst].id);
      $('#playlistmodal #existingplaylist').append($(favoption));
    } 
  }

  $('#playlistmodal #newplaylist').val('');
  window.playlistwid = wid;
  window.playlistaid = aid;
  window.playlistset = set;
  $('#tuning-modal').hide();
  $("#playlistmodal").leanModal();
}

cmas_addtoplaylist = function () {
  if ($('#playlistmodal #newplaylist').val() != "") {
    cmas_playlistperformance(window.playlistwid, window.playlistaid, window.playlistset, 'new', $('#playlistmodal #newplaylist').val(), 1);
  }
  else if ($('#playlistmodal #existingplaylist').val() != "0") {
    cmas_playlistperformance(window.playlistwid, window.playlistaid, window.playlistset, $('#playlistmodal #existingplaylist').val(), $('#playlistmodal #existingplaylist option:checked').text(), 1);
  }
}

// add to playlist

cmas_playlistperformance = function (wid, aid, set, pid, name) {

  $.ajax({
    url: cmas_options.backend + '/recording/detail/work/' + wid + '/album/' + aid + '/' + set + '.json',
    method: "GET",
    success: function (response) {
      
      $.ajax({
        url: cmas_options.backend + '/dyn/recording/addplaylist/',
        method: "POST",
        data: { id: localStorage.spotify_userid, wid: wid, aid: aid, set: set, pid: pid, name: name, cover: response.recording.cover, performers: JSON.stringify(response.recording.performers), auth: cmas_authgen() },
        success: function (response) {
          if (response.status.success == "true") {
            cmas_playlists = (response.list ? response.list : {});
            cmas_playlist(response.playlist.id);
            $('#playlistmodal').closeModal();
          }
        }
      });

    }
  });
}

// remove from playlist

cmas_unplaylistperformance = function (wid, aid, set, pid) {
  $.ajax({
    url: cmas_options.backend + '/dyn/recording/unplaylist/',
    method: "POST",
    data: { id: localStorage.spotify_userid, wid: wid, aid: aid, set: set, pid: pid, auth: cmas_authgen() },
    success: function (response) {
      if (response.status.success == "true") {
        cmas_playlists = (response.list ? response.list : {});
        cmas_playlist(pid);
        $('#playlistmodal').closeModal();
      }
    }
  });
}

// renaming and deleting playlists

cmas_editplaylist = function () {

  window.editplaylist = $('#favtitle select option:checked').val();
  $('#tuning-modal').hide();

  for (pllst in cmas_playlists) {
    if (cmas_playlists[pllst].id == window.editplaylist) {
      playlist_owner = cmas_playlists[pllst].owner;
    }
  }

  if (playlist_owner == localStorage.spotify_userid) {
    $('#playlist_newname').val($('#favtitle select option:checked').text());
    $('#toggle_delpl').toggles(false);
    $("#editplaylistmodal").leanModal();
  }
  else {
    $('#playlist_dupname').val($('#favtitle select option:checked').text());
    $('#toggle_unsubpl').toggles(false);
    $("#unsubscribemodal").leanModal();
  }
}

cmas_renameplaylist = function () {

  if ($('#playlist_newname').val()) {
    $.ajax({
      url: cmas_options.backend + '/dyn/playlist/rename/',
      method: "POST",
      data: { id: localStorage.spotify_userid, pid: window.editplaylist, name: $('#playlist_newname').val(), auth: cmas_authgen() },
      success: function (response) {
        if (response.status.success == "true") {
          cmas_playlists = (response.list ? response.list : {});
          cmas_playlist(window.editplaylist);
          $('#editplaylistmodal').closeModal();
        }
      }
    });
  }
}

cmas_deleteplaylist = function () {
  $.ajax({
    url: cmas_options.backend + '/dyn/playlist/delete/',
    method: "POST",
    data: { id: localStorage.spotify_userid, pid: window.editplaylist, auth: cmas_authgen() },
    success: function (response) {
      if (response.status.success == "true") {
        cmas_playlists = (response.list ? response.list : {});
        cmas_playlist("fav");
        $('#editplaylistmodal').closeModal();
        $('#toggle_delpl').toggles(false);
      }
    }
  });
}

// importing and unsubscribing playlists

cmas_importplaylist = function (name) {
  $.ajax({
    url: cmas_options.backend + '/dyn/user/playlist/duplicate/',
    method: "POST",
    data: { name: name, id: localStorage.spotify_userid, pid: window.editplaylist, auth: cmas_authgen() },
    success: function (response) {
      if (response.status.success == "true") {
        window.newplaylist = response.playlist.id;
        cmas_gounsubplaylist(window.editplaylist, function (response) {
          cmas_playlists = (response.list ? response.list : {});
          cmas_playlist(window.newplaylist);
          $('#unsubscribemodal').closeModal();
        });
      }
    }
  });
}

cmas_subplaylist = function (pid) {
  $.ajax({
    url: cmas_options.backend + '/dyn/user/playlist/subscribe/',
    method: "POST",
    data: { id: localStorage.spotify_userid, pid: pid, auth: cmas_authgen() },
    success: function (response) {
      if (response.status.success == "true") {
        cmas_playlists = (response.list ? response.list : {});
        cmas_playlist(pid);
      }
    }
  });
}

cmas_unsubplaylist = function () {
  cmas_gounsubplaylist(window.editplaylist, function (response) {
    if (response.status.success == "true") {
      cmas_playlists = (response.list ? response.list : {});
      cmas_playlist("fav");
      $('#unsubscribemodal').closeModal();
      $('#toggle_unsubpl').toggles(false);
    }
  });
}

cmas_gounsubplaylist = function (pid, action) {
  $.ajax({
    url: cmas_options.backend + '/dyn/user/playlist/unsubscribe/',
    method: "POST",
    data: { id: localStorage.spotify_userid, pid: pid, auth: cmas_authgen() },
    success: action
  });
}

// playlist detail

cmas_playlistdetail = function (pid) {

  $.ajax({
    url: cmas_options.backend + '/recording/list/playlist/' + pid + '.json',
    method: "GET",
    success: function (response) {
      docsr = response.recordings;

      window.playlistid = pid;

      $('#playlistdetail').hide();
      $('#playlistdetail .unsubscribe').hide();
      $('#playlistdetail .subscribe').show();
      $('#playlistradio').show();

      $('#genres').css("display", "none");
      $('#works').css("display", "none");
      $('#searchbywork').css("display", "none");

      $('#albums').addClass('playlist');
      $('#albums').html('');
      $('#genresworks h2').html('playlist');
      $('#genresworks h3').html(response.playlist.name);
      $('#genresworks h4').html(`by <a href="https://open.spotify.com/user/${response.playlist.owner.id}">${response.playlist.owner.name}</a>`);

      for (pllst in cmas_playlists) {
        if (cmas_playlists[pllst].id == pid) {
          $('#playlistdetail .subscribe').hide();
          $('#playlistdetail .unsubscribe').show();
        }
      }

      if (response.playlist.owner.id != localStorage.spotify_userid) {
        $('#playlistdetail').show();
      }

      for (performance in docsr) {
        listul = '#albums';
        draggable = "";
        pidsort = "";

        $(listul).append('<li pid="' + docsr[performance].work.id + '-' + docsr[performance].spotify_albumid + '-' + docsr[performance].set + '" class="performance"><ul>' + cmas_recordingitem(docsr[performance], docsr[performance].work, response.playlist) + '</ul></li>');
      }
    }
  });
}

// new radio

cmas_newradio = function (filter) {
  if (cmas_disabled) {
    $(`#${cmas_disabledreason}`).leanModal(); return;
  }
  $.ajax({
    url: cmas_options.backend + '/dyn/work/random/',
    method: "POST",
    data: { id: localStorage.spotify_userid, genre: filter.genre, epoch: filter.epoch, composer: filter.composer, work: filter.work },
    success: function (response) {
      if (response.status.success == "true") {

        cmas_radioqueue = [];

        // removing forbidden composers

        for (wk in response.works)
        {
          if ($.inArray(response.works[wk].composer.toString(), cmas_forbiddencomposers) == -1)
          {
            cmas_radioqueue.push(response.works[wk]);
          } 
        }

        cmas_onair = true;
        cmas_radiofilter = filter;
        cmas_radiofilter.type = 'radio';

        if (!$('#tuning-modal').is(':visible')) { $('#tuning-modal').leanModal(); }

        $('#radiotop #goradio').removeClass('on');
        $('#radiotop #goradio').addClass('on');

        $('#playercontrols #skip').removeClass('radio');
        $('#playercontrols #skip').addClass('radio');

        $('#radiotop select').prop("disabled", true);

        cmas_randomrecording (cmas_radioqueue.shift().id);
      }
    }
  });
}

// radio skip

cmas_radioskip = function () {
  if (cmas_onair) {
    if (cmas_radioqueue.length) {
      if (Object.keys(cmas_state).length > 0 && !cmas_state.paused) {
        spotplayer.pause();
      }
      if (!$('#tuning-modal').is(':visible')) { $('#tuning-modal').leanModal(); }
      if (cmas_radiofilter.type == 'playlist') {
        var thisrec = cmas_radioqueue.shift();
        thisrec = thisrec.split('-');
        cmas_recording (thisrec[0], thisrec[1], thisrec[2]);
      }
      else {
        cmas_randomrecording(cmas_radioqueue.shift().id);
      }
    }
    else {
      if (cmas_radiofilter.type == 'playlist') {
        cmas_radiobutton();
      }
      else {
        cmas_newradio (cmas_radiofilter);
      }
    }
  }
}

// radio button

cmas_radiobutton = function () {
  if (cmas_disabled) {
    $(`#${cmas_disabledreason}`).leanModal(); return;
  }
  $('#radiotop #goradio').toggleClass('on');
  $('#playercontrols #skip').toggleClass('radio');

  if ($('#radiotop #goradio').hasClass('on')) {
    filter = { genre: $('#radiotop select.genres option:checked').val(), epoch: $('#radiotop select.periods option:checked').val() };
    if ($('#radiotop select.composers option:checked').val() == "wfav") {
      filter.work = "fav";
    }
    else {
      filter.composer = $('#radiotop select.composers option:checked').val();
    }
    cmas_newradio(filter);
  }
  else {
    cmas_radioqueue = [];
    cmas_radiofilter = {};
    cmas_onair = false;
    $('#radiotop select').prop("disabled", false);
  }
}

// playlist radio

cmas_playlistradio = function (where) {

  if (cmas_disabled) {
    $(`#${cmas_disabledreason}`).leanModal(); return;
  }

  var performances = $(where).children().get();
  var pids = [];

  for (p in performances) {
    pids[p] = $(performances[p]).attr("pid");
  }

  if (pids.length)
  {
    for (let i = pids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pids[i], pids[j]] = [pids[j], pids[i]];
    }

    cmas_onair = true;
    cmas_radioqueue = pids;
    cmas_radiofilter = { type: 'playlist' };

    if (!$('#tuning-modal').is(':visible')) { $('#tuning-modal').leanModal(); }

    $('#radiotop #goradio').removeClass('on');
    $('#radiotop #goradio').addClass('on');

    $('#playercontrols #skip').removeClass('radio');
    $('#playercontrols #skip').addClass('radio');

    $('#radiotop select').prop("disabled", true);

    var thisrec = pids.shift();
    thisrec = thisrec.split("-");
    cmas_recording (thisrec[0], thisrec[1], thisrec[2]);
  }
}

// permalink

cmas_permalink = function (wid, aid, set) {
  $('#sharedialog').show();
  $('#shareconfirm').hide();
  permauri = cmas_options.shareurl + '/u/' + wid + '/' + aid + '/' + set;
  $('#permalink-direct').val(permauri);
  $('#permalink-widget').text(`<iframe src="${permauri}/widget" width="593" height="388" frameborder="0"></iframe>`);
  $('#permalink-modal').leanModal();
}

cmas_linkcopy = function (obj) {
  fobj = $(`#permalink-${obj}`);
  fobj.select();
  document.execCommand("copy");
  $('#sharedialog').hide();
  $('#shareconfirm').show();
}

// refreshing the composer list

cmas_refreshcomposers = function () {
  if ($('#composers li.index').hasClass('all')) {
    cmas_composersbyname('all');
  }
  else if ($('#composers li.index').hasClass('favorite')) {
    cmas_composersbyfav();
  }
  else if ($('#composers li.index').hasClass('period')) {
    cmas_composersbyepoch($('#library .periods').val());
  }
  else {
    cmas_composersbyname($('#composers li.index').html());
  }
}

// album pagination by scrolling

cmas_albumscroll = function (o) {
  if (o.offsetHeight + o.scrollTop > o.scrollHeight - 400) {
    if (window.albumlistnext) {
      if (window.albumlistnext != window.albumlistoffset) {
        cmas_recordingsbywork(window.albumlistwork, window.albumlistnext, {});
      }
    }
  }
}

// recording tagging

cmas_qualify = function () {
  $('#playerverify').toggleClass('opened');
}