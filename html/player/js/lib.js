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
    backend: 'https://' + (window.location.hostname.split('.')[0] == 'beta' ? 'beta.' : '') + 'api.' + window.location.hostname.replace('beta.',''),
    opusbackend: 'https://' + (window.location.hostname.split('.')[0] == 'beta' ? 'beta.' : '') + 'api.openopus.' + (window.location.hostname.split('.').pop() == 'local' ? 'local' : 'org'),
    publicsite: 'https://getconcertmaster.com',
    shareurl: 'https://' + (window.location.hostname.split('.')[0] == 'beta' ? 'beta.' : '') + 'cmas.' + (window.location.hostname.split('.').pop() == 'local' ? 'local' : 'me'),
    smartradio: JSON.parse(localStorage.smartradio),
    notshow: false,
    spot_scopes: 'user-read-private user-read-email user-modify-playback-state streaming',
    spot_id: 'd51f903ebcac46d9a036b4a2da05b299',
    spot_redir: 'https://' + window.location.hostname +'/sp/',
    version: '1.21.423' + (window.location.hostname.split('.')[0] == 'beta' ? ' beta' : ''),
    too_many_tracks: 24,
    no_track_labels: 15
};

window.onpopstate = function (event) {
  if (window.location.hash) {
    cmas_mobilepage(window.location.hash.replace('#',''));
  } else if (window.location.pathname != "/") {
    vars = window.location.pathname.split("/");
    if (vars[1] == "u") {
      cmas_recording(vars[2], vars[3], vars[4], 1);
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

    const iframe = document.querySelector('iframe[src="https://sdk.scdn.co/embedded/index.html"]');

    if (iframe) {
      iframe.style.display = 'block';
      iframe.style.position = 'absolute';
      iframe.style.top = '-1000px';
      iframe.style.left = '-1000px';
    }

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
      $('#favorites').css('bottom', "384px");
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
  //console.log (state);

  var isover = false;

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

  /*
  console.log ('===========--------=========');
  console.log ('state.paused = ' + state.paused);
  console.log ('cmas_state.paused = ' + cmas_state.paused);
  console.log ('cmas_playbuffer.tracks.length = ' + cmas_playbuffer.tracks.length);
  console.log ('state.track_window.current_track.id = ' + state.track_window.current_track.id);
  console.log ('cmas_playbuffer.tracks[0] = ' + cmas_playbuffer.tracks[0]);
  console.log ('state.position = ' + state.position);
  console.log ('Math.floor(state.position / 1000) = ' + Math.floor(state.position / 1000));
  console.log ('Math.floor(state.duration / 1000) = ' + Math.floor(state.duration / 1000));
  console.log ('Math.abs (state.duration-state.position) = ' + Math.abs (state.duration-state.position));
  */

  if (state.paused != cmas_state.paused)
  {
    // play pause status has changed

    clearInterval (cmas_timer);

    if (state.paused)
    {
      $('#playpause').removeClass("pause");
      $('#playpause').addClass("play");

      // is the single-track recording over?

      if (cmas_playbuffer.tracks.length == 1 && state.paused && state.track_window.current_track.id == cmas_playbuffer.tracks[0] && (state.position == 0 || (Math.abs (state.duration-state.position) <= 2000)))
      {
        console.log ('Over, next');
        $("#globalslider-total").find('.bar').css('width', '0%');
        state.position = 0;
        isover = true;
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
    state.position = 0;
    found_track = false;
    for (trid in cmas_playbuffer.tracks)
    {
      if (cmas_playbuffer.tracks[trid] != state.track_window.current_track.id)
      {
        cmas_slider ({ changed: true, paused: state.paused, id: cmas_playbuffer.tracks[trid], position: 0, duration: 0 });
        /*
        if (found_track)
        {
          cmas_slider ({ changed: true, paused: state.paused, id: cmas_playbuffer.tracks[trid], position: 0, duration: 0 });
        }
        else
        {
          cmas_slider ({ changed: false, paused: state.paused, id: cmas_playbuffer.tracks[trid], position: 10, duration: 10 });
        }
        */
      }
      else
      {
        found_track = true
      }
    }

    if (cmas_playbuffer.tracks[0] == state.track_window.current_track.id && (cmas_playbuffer.tracks.length != 1 && state.track_window.next_tracks.length == 0)) {
      console.log('Over, next');
      $("#globalslider-total").find('.bar').css('width', '0%');
      isover = true;
      cmas_radioskip();
    }
  }
  
  // update current track position

  cmas_state = { paused: state.paused, id: state.track_window.current_track.id, position: Math.floor(state.position / 1000), duration: Math.floor(state.duration / 1000) };
  if (cmas_state.position > 0 || isover) {
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
    if (!$('#playercontrols').hasClass('toomanytracks')) $("#globalslider-"+arg.id).find('.bar').css('width', '0%');
  }
  else
  {
    $("#timerglobal").html(cmas_readabletime(cmas_playbuffer.accdurations[cmas_playbuffer.tracks.indexOf(arg.id)] + arg.position));
    if ($('#playercontrols').hasClass('toomanytracks')) $("#globalslider-total").find('.bar').css('width', (100*(cmas_playbuffer.accdurations[cmas_playbuffer.tracks.indexOf(arg.id)] + arg.position)/cmas_playbuffer.accdurations[cmas_playbuffer.accdurations.length - 1]) + '%');

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

cmas_readabletime = function (time) 
{
  if (time && time > 0.0) {
    var sec = parseInt(time % (60));
    var min = parseInt(time / (60));

    if (min > 59) {
      var minutes = parseInt(min % (60));
      var part = parseInt(min / (60)) + ':' + (minutes < 10 ? '0' + minutes : minutes);
    } else {
      var part = min;
    }

    return part + ':' + (sec < 10 ? '0' + sec : sec);
  }
  else {
    return '0:00';
  }
}

// composer list

cmas_composersbyname = function (letter)
{
  $.ajax({
    url: cmas_options.opusbackend + '/composer/list/name/' + letter + '.json',
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
      url: cmas_options.opusbackend + '/composer/list/search/' + search + '.json',
      method: "GET",
      success: function (response) {
        cmas_composers(response);
      }
    });
  }
  else if (search.length == 0)
  {
    cmas_composersbytag ('pop');
  }
}

cmas_composersbyepoch = function (epoch)
{
  $.ajax({
    url: cmas_options.opusbackend + '/composer/list/epoch/' + epoch + '.json',
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

cmas_composersbytag = function (tag) {
  $.ajax({
    url: cmas_options.opusbackend + '/composer/list/' + tag + '.json',
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
          compcontent = '<li class="index period">' + list.request.item + '</li>';
          if (list.request.item == 'all') {
            $('#main #maincomposerlist').html('All composers');
          } else {
            $('#main #maincomposerlist').html('Composers of the ' + list.request.item + ' period');
          }          
          $('#library #composersearch').val('');
          break;

        case "search":
          compcontent = '<li class="index search"></li>';
          $('#main #maincomposerlist').html('Search results');
          $('#library select.periods').val('all');
          $('#library select.periods').trigger('change.select2');
          break;

        case "fav":
          compcontent = '<li class="index favorite">Favorites</li>';
          if (list.status.success == "true") $('#favoritecomposers').removeClass('empty');
          $('#library #composersearch').val('');
          $('#library select.periods').val('all');
          $('#library select.periods').trigger('change.select2');
          break;

        case "pop":
          compcontent = '<li class="index popular">Popular</li>';
          $('#main #maincomposerlist').html('Most requested composers');
          $('#library #composersearch').val('');
          $('#library select.periods').val('all');
          $('#library select.periods').trigger('change.select2');
          break;

        case "rec":
          compcontent = '<li class="index recommended">Essential</li>';
          $('#main #maincomposerlist').html('Essential composers');
          $('#library #composersearch').val('');
          $('#library select.periods').val('all');
          $('#library select.periods').trigger('change.select2');
          break;

        case "name":
        default:
          if (list.request.item == "all")
          {
            compcontent = '<li class="index all">All</li>';
            $('#main #maincomposerlist').html('All composers');
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

      if (list.request.type == "fav" && $(window).width() < 1024)
      {
        ulcomposers = $('#favoritecomposerslist');
        ulcomposers.html('');
      }
      else 
      {
        ulcomposers = $('#composers');
        ulcomposers.html(compcontent);
      }

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
        
        ulcomposers.append('<li class="composer"><ul class="composerdetails"><li class="photo"><a href="javascript:cmas_genresbycomposer(\'' + docs[composer].id + '\');"><img src="' + docs[composer].portrait + '" /></a></li><li class="name"><a href="javascript:cmas_genresbycomposer(\'' + docs[composer].id + '\');">' + docs[composer].name + '</a></li><li class="fullname">' + docs[composer].complete_name + '</li><li class="dates">(' + docs[composer].birth.substring(0, 4) + (docs[composer].death.substring(0, 4) != '0000' ? '-' + docs[composer].death.substring(0, 4) : '') + ')</li><li id="forb_' + docs[composer].id + '" class="forb ' + cforb + '"><a href="javascript:cmas_compforbid(\'' + docs[composer].id + '\', \'#forb_' + docs[composer].id + '\');">forbidden</a></li><li id="cfav_' + docs[composer].id + '" class="fav ' + cfav + '"><a href="javascript:cmas_compfavorite(\'' + docs[composer].id + '\', \'#cfav_' + docs[composer].id + '\');">fav</a></li><li class="radio"><a href="javascript:cmas_newradio({composer:' + docs[composer].id + '});">radio</a></li></ul></li>');
      }

      $('#composers').scrollLeft(0);
    }
    /*else
    {
      $('#composers').html(compcontent);
    }*/
}

// genres list

cmas_genresbycomposer = function (composer, genre, auto=false)
{
  window.albumlistnext = 0;

  $.ajax({
    url: cmas_options.opusbackend + '/genre/list/composer/' + composer + '.json',
    method: "GET",
    success: function (response) {
      
      var list = response;

      if (list.status.success == "true") {
        localStorage.lastcomposerid = list.composer.id;

        if (!list.composer.death) list.composer.death = '0000';
        
        $('#composerprofile li.portrait').html('<img src="' + list.composer.portrait + '" />');
        $('#composerprofile li.name').html(list.composer.name);
        $('#composerprofile li.completename').html(list.composer.complete_name);
        $('#composerprofile li.dates').html('(' + list.composer.birth.substring(0, 4) + (list.composer.death.substring(0, 4) != '0000' ? '-' + list.composer.death.substring(0, 4) : '') + ')');
        
        if ($.inArray(list.composer.id.toString(), cmas_favoritecomposers) != -1) {
          cfav = 'favorite';
        }
        else {
          cfav = '';
        }

        if ($.inArray(list.composer.id.toString(), cmas_forbiddencomposers) != -1) {
          cforb = 'forbidden';
        }
        else {
          cforb = '';
        }
        
        $('#composerprofile li.buttons').html('<a id="mforb_' + list.composer.id + '" href="javascript:cmas_compforbid(\'' + list.composer.id + '\', \'' + '#mforb_' + list.composer.id + '\');" class="forb ' + cforb + '">forbidden</a><a id="mfav_' + list.composer.id + '" href="javascript:cmas_compfavorite(\'' + list.composer.id + '\', \'#mfav_' + list.composer.id + '\');" class="fav ' + cfav + '">fav</a>');

        $('#genresworks h4').html('');
        $('#playlistdetail').hide();
        $('#genresworks div.deskonly h2').html('<a href="javascript:cmas_genresbycomposer (' + list.composer.id + ')">' + list.composer.name + '</a>');
        $('#genresworks h3').html('');
        $('#genres').css("display", "inline-block");
        $('#works').css("display", "inline-block");
        $('#searchbywork').css("display", "block");
        $('#genres').html('');
        $('#works').html('');
        $('#albums').html('');
        $('#albums').hide();

        $('#genres').append('<li id="all"><a href="javascript:cmas_worksbycomposer(\'' + list.composer.id + '\',\'all\');"><span>icon</span>All</a><a class="radio" href="javascript:cmas_newradio({composer:' + list.composer.id + '});">radio</a></li>');
        $('#genres').append('<li id="fav"><a href="javascript:cmas_listfavoriteworks(\'' + list.composer.id + '\');"><span>icon</span>Favorites</a><a class="radio" href="javascript:cmas_newradio({composer:' + list.composer.id + ',work:\'fav\'});">radio</a></li>');

        var lastgenre = '';

        docsg = list.genres;
        for (dgenre in docsg) {
          $('#genres').append('<li id="' + cmas_slug(docsg[dgenre]) + '"><a href="javascript:cmas_worksbycomposer(\'' + list.composer.id + '\',\'' + docsg[dgenre] + '\');"><span>icon</span>' + (docsg[dgenre] == 'Recommended' ? 'Essential' : docsg[dgenre]) + '</a><a class="radio" href="javascript:cmas_newradio({composer:' + list.composer.id + ',genre:\'' + docsg[dgenre] + '\'});">radio</a></li>');
        }

        if (!genre) {
          if ($('#genres #recommended').length) {
            genre = 'Recommended';
          }
          else {
            genre = 'all';
          }
        }

        if (genre == 'fav') {
          cmas_listfavoriteworks(list.composer.id);
        }
        else {
          cmas_worksbycomposer(list.composer.id, genre);
        }

        $('#genresworks h2.mobonly').html('works');
        
        if (auto) { 
          cmas_mobilepage ('library');
        } else {
          cmas_mobilepage ('composer');
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
    url: cmas_options.opusbackend + '/work/list/composer/' + composer + '/' + genre + '.json',
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
      url: cmas_options.opusbackend + '/work/list/composer/' + composer + '/genre/' + genre + '/search/' + search + '.json',
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
  lastrec = '';
  lastgenre = '';

  for (work in docsw) {
    favorite = '';
    if ($.inArray(docsw[work].id.toString(), cmas_favoriteworks) != -1) {
      favorite = 'favorite';
    }

    if (list.request.item == 'Recommended' || list.request.item == 'Popular' || list.request.item == 'fav') {
      if (lastgenre != docsw[work].genre) {
        $('#works').append('<li class="separator">' + docsw[work].genre + '</li>');
      }
    }
    else if (lastrec != docsw[work].recommended && !(lastrec == '' && docsw[work].recommended == '0')) {
      $('#works').append('<li class="separator">' + (docsw[work].recommended == 1 ? 'Essential': 'Other works') + '</li>');
    }

    //docsw[work].title = docsw[work].title.replace(/\"/g, "");
    $('#works').append('<li><a href="javascript:cmas_favoritework(\'' + docsw[work].id + '\',\'' + list.composer.id + '\')" class="wfav wfav_' + docsw[work].id + ' ' + favorite + '">fav</a><a href="javascript:cmas_recordingsbywork(' + docsw[work].id + ',0);">' + docsw[work].title + '<span>' + docsw[work].subtitle + ' </span></a></li>');

    lastrec = docsw[work].recommended;
    lastgenre = docsw[work].genre;
  }

  $("#works li.separator").prev().addClass('beforeseparator');
  $('#radioslider em').html($('#composerprofile li.name').html() + ' ' + ($('#genres li.active a').html().toLowerCase().includes('all') ? '' : $('#genres li.active a').html().toLowerCase()) + ($('#genres li.active a').html().toLowerCase().includes('favorites') ? '' : ' works'));
}

// recordings list

cmas_recordingsbywork = function (work, offset)
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
    $('#genresworks div.deskonly h2').html('');
    $('#genresworks h3').html('');
    $('#genresworks h4').html('');
    $('#albums').addClass(work.toString());
    $('#albums').show();
    $('#workprofile').hide();
    $('#genresworks h2.mobonly').html('recordings').hide();;
    cmas_mobilepage ('work');
    $('#albums.'+work).append('<li class="loading firstload"></li>');
  }
  else {
    $('#albums.'+work).append('<li class="loading"></li>');
  }
  
  $.ajax({
    url: cmas_options.backend + '/recording/list/work/' + work + '/' + offset + '.json',
    method: "GET",
    success: function (response) {

      var list = response;
      $('li.loading').remove();
      listul = '#albums.' + list.work.id;

      if ($('#albums').attr('class') == work.toString()) {
        $('#genresworks div.deskonly h2').html('<a href="javascript:cmas_genresbycomposer (' + list.work.composer.id + ')">' + list.work.composer.name + '</a>');
        $('#genresworks h3').html(list.work.title);
        $('#genresworks h4').html(list.work.subtitle);

        $('#workprofile li.back').html('<a href="javascript:cmas_genresbycomposer (' + list.work.composer.id + ')">back</a>');
        $('#workprofile li.name').html(list.work.composer.name);
        $('#workprofile li.title').html(list.work.title);
        $('#workprofile li.subtitle').html(list.work.subtitle);

        if ($.inArray(list.work.id.toString(), cmas_favoriteworks) != -1) {
          mwfav = 'favorite';
        }
        else {
          mwfav = '';
        }
        
        $('#workprofile li.buttons').html('<a id="mwfav_' + list.work.id + '" href="javascript:cmas_favoritework(\'' + list.work.id + '\', \'' + list.work.composer.id + '\');" class="fav ' + mwfav + '">fav</a>');
      }

      if (list.status.success == "true") {
        window.albumlistnext = list.next;
        docsr = list.recordings;

        for (performance in docsr) {
  
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
          cmas_recordingsbywork(list.work.id, list.next);
        }
      }

      if (list.status.success == "false") $(listul).append('<li class="emptylist"><p>Concertmaster couldn\'t find any recording of this work in the Spotify catalog. It might be an error, though. Please <a href="mailto:concertmaster@openopus.org">reach us</a> if you know a recording. This will help us correct our algorithm.</p></li>')
      if (!list.next && list.status.success == "true") $(listul).append('<li class="disclaimer"><p>Those recordings were fetched automatically from the Spotify catalog. The list might be inaccurate or incomplete. Please <a href="mailto:concertmaster@openopus.org">reach us</a> for requests, questions or suggestions.</p></li>');

      $('#genresworks h2.mobonly').show();
      $('#workprofile').show();
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
  $('body').removeClass('radioonair');
  
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
        $('body').removeClass("showingplayerbar");
      }
      else {
        $('body').addClass("showingplayerbar");
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
      if (!cmas_disabled) cmas_notavailable();
    }
    else if (cmas_disabled || list.recording.markets.indexOf(localStorage.user_country) != -1) {

      $('body').addClass('showingnowplaying');

      if (window.location.pathname != '/u/' + list.work.id + '/' + list.recording.spotify_albumid + '/' + list.recording.set) {
        window.history.pushState({}, 'Concertmaster', '/u/' + list.work.id + '/' + list.recording.spotify_albumid + '/' + list.recording.set);
      }

      document.title = `${list.work.composer.name}: ${list.work.title}`;
      gtag ('config', 'UA-89195986-2', {'page_path': '/u/' + list.work.id + '/' + list.recording.spotify_albumid + '/' + list.recording.set });

      $('#playerinfo').html(cmas_recordingitem(list.recording, list.work));

      verify = '<li class="notverified"><a href="javascript:cmas_qualify()">This recording was fetched automatically with no human verification. Is everything right? Click here and help us to improve our data.</a></li>';
      verify += '<li class="verified"><a href="javascript:cmas_qualify()">This recording was verified by a human and its metadata was considered right. Disagree? Click here and help us to improve our data.</a></li>';
      verify += '<li class="report">Thanks for reporting. This recording will be excluded from our database.</li>';
      
      pform = [];
      for (i in list.recording.performers) {
        pform.push (list.recording.performers[i].name + (list.recording.performers[i].role != '' && list.recording.performers[i].role != 'Orchestra' && list.recording.performers[i].role != 'Ensemble' && list.recording.performers[i].role != 'Choir' ? ', ' + list.recording.performers[i].role : ''));
      }
      
      verify += '<li class="perform"><a href="javascript:cmas_editperformers();cmas_qualify();">Thanks for your collaboration! Edit the performers in the field below. One per line. Specify their roles (instrument, voice etc) after commas.</a><textarea>'+pform.join('\n')+'</textarea><a class="submit" href="javascript:cmas_submitperf(' + list.work.id + ',\'' + list.recording.spotify_albumid + '\',' + list.recording.set + ')">Done</a></li>';
      verify += '<li class="versionform"><a href="javascript:cmas_editobs();cmas_qualify();">Thanks for your help! Specify below which version of the work this recording uses, including instrumentation and author, if not the composer</a><textarea>'+list.work.subtitle+'</textarea><a class="submit" href="javascript:cmas_submitobs(' + list.work.id + ',\'' + list.recording.spotify_albumid + '\',' + list.recording.set + ')">Done</a></li>';

      verify += '<li class="tagloading">loading</li>';
      verify += '<li class="button verify"><a href="javascript:cmas_rectag(' + list.work.id + ',\'' + list.recording.spotify_albumid + '\',' + list.recording.set + ',\'verified\',1)"><strong>Everything OK!</strong>Metadata is correct and the recording is complete</a></li>';
      verify += '<li class="button edit"><a href="javascript:cmas_editperformers()"><strong>Complete but missing information</strong>Recording is complete but data on performers is lacking</a></li>';
      verify += '<li class="button partial"><a href="javascript:cmas_rectag(' + list.work.id + ',\'' + list.recording.spotify_albumid + '\',' + list.recording.set + ',\'compilation\',1)"><strong>Correct but incomplete</strong>Metadata is right but the recording is partial/missing movements</a></li>';
      verify += '<li class="button version"><a href="javascript:cmas_editobs()"><strong>Correct but a different version</strong>Not the original work - it\'s an arrangement or adaptation</a></li>';
      
      verify += '<li class="button wrongdata"><a href="javascript:cmas_rectag(' + list.work.id + ',\'' + list.recording.spotify_albumid + '\',' + list.recording.set + ',\'wrongdata\',1)"><strong>Wrong work</strong>The description doesn\'t match the recording</a></li>';
      verify += '<li class="button badquality"><a href="javascript:cmas_rectag(' + list.work.id + ',\'' + list.recording.spotify_albumid + '\',' + list.recording.set + ',\'badquality\',1)"><strong>Bad quality recording</strong>This isn\'t a real recording - it\'s played by a computer</a></li>';

      $('#playerverify').html(verify);
      $('#playerverify').removeClass('reported').toggleClass('verified', (list.recording.verified == 'true'));
      $('#playertracks').html('');
      $('#globaltracks').html('');

      $('#playercontrols').removeClass("toolong toomanytracks nolabels");

      if (list.recording.length >= 3600) {
        $('#playercontrols').addClass("toolong");
      }

      if (list.recording.tracks.length > cmas_options.no_track_labels) {
        $('#playercontrols').addClass("nolabels");
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

        if (list.recording.tracks.length <= cmas_options.too_many_tracks) {
          $('#globaltracks').append('<li style="width: calc(' + Math.round(pctsize * 1000) / 1000 + '%' + ')"><a class="tracktitle" href="javascript:cmas_track(' + track + ')">' + currtrack + '</a><div id="globalslider-' + list.recording.tracks[track].spotify_trackid + '" class="slider"><div class="buffer"></div><div class="bar"></div></div></li>');
        }
      }

      if (list.recording.tracks.length > cmas_options.too_many_tracks) {
        $('#playercontrols').addClass("toomanytracks");
        $('#globaltracks').append('<li style="width: 100%"><div id="globalslider-total" class="slider"><div class="buffer"></div><div class="bar"></div></div></li>');
      }

      $('#durationglobal').html(cmas_readabletime(list.recording.length));

      if (!auto) {
        cmas_mobilepage ('player');
        cmas_spotifyplay(list.recording.spotify_tracks, 0);
        cmas_notification(list.work.title, list.recording.cover, list.work.composer.name);

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
      if (!cmas_disabled) cmas_notavailable();
    }
  }
  else {
    if (!cmas_disabled) cmas_notavailable();
  }
}

cmas_playingdetails = function ()
{
  if ($('body').hasClass('player'))
  {
    $('#nowplaying').attr('class', 'up');
    $('body').removeClass('player');
  }
  else
  {
    $('#nowplaying').attr('class', 'down');
    $('body').addClass('player');
  }
}

// recording item

cmas_recordingitem = function (item, work, playlist)
{
  if (typeof item.label === 'undefined') item.label = '';
  if (typeof work.subtitle === 'undefined') work.subtitle = '';
  if (typeof item.observation === 'undefined') item.observation = '';

  alb = '';

  alb = alb + '<li class="cover"><a href="javascript:cmas_thisrecording(\'' + item.spotify_albumid +'\',\''+work.id+'\',\''+item.set+'\')">';
  alb = alb + '<img src="' + item.cover + '" onerror="this.src=\'/img/nocover.png\'" />';
  alb = alb + '<div class="overlay"></div></a></li>';

  alb = alb+'<li class="composer"><a href="javascript:cmas_genresbycomposer('+work.composer.id+')">'+work.composer.name+'</a></li>';
  alb = alb + '<li class="work"><a href="javascript:cmas_recordingsbywork(' + work.id + ',0)">' + work.title +'<span>' + work.subtitle + '</span></a></li>';
  if (item.observation) alb = alb + '<li class="version">' + item.observation + '</li>';

  var spotify_link = 'http://open.spotify.com/album/' + item.spotify_albumid;

  if (typeof item.spotify_tracks !== 'undefined') {
    if (item.spotify_tracks.length == 1) {
      spotify_link = 'http://open.spotify.com/track/' + item.spotify_tracks[0].replace ("spotify:track:", "");
    }
  }

  alb = alb + '<li class="performers"><ul>' + cmas_listperformers(item.performers) + '</ul></li>';
  alb = alb + '<li class="label">'+item.label+'</li>';
  alb = alb + '<li class="spotify"><a href="' + spotify_link + '" target="_blank">Listen on Spotify</a></li>';

  rid = work.id + '-' + item.spotify_albumid + '-' + item.set;

  if ($.inArray(rid, cmas_favorites) != -1)
  {
    alb = alb + '<li class="favorite"><a href="javascript:cmas_recfavorite(\'' + work.id + '\',\'' + item.spotify_albumid + '\',\'' + item.set + '\')" class="is fav_' + rid + '">unfavorite</a></li>';
  }
  else
  {
    alb = alb + '<li class="favorite"><a href="javascript:cmas_recfavorite(\'' + work.id + '\',\'' + item.spotify_albumid + '\',\'' + item.set + '\')" class="go fav_' + rid + '">favorite</a></li>';
  }

  alb = alb + '<li class="permalink"><a href="javascript:cmas_permalink(\'' + work.id + '\',\'' + item.spotify_albumid + '\',\'' + item.set + '\')">permalink</a></li>';

  if (playlist) {
    if (playlist.owner.id == localStorage.spotify_userid) {
      plaction = 'unplaylist';
      plfunction = 'cmas_unplaylistperformance(\'' + work.id + '\',\'' + item.spotify_albumid + '\',\'' + item.set + '\',' + playlist.id + ')';
    }
    else {
      plaction = 'doplaylist';
      plfunction = 'cmas_playlistmodal(\'' + work.id + '\',\'' + item.spotify_albumid + '\',\'' + item.set + '\')';
    }
  }
  else {
    plaction = 'doplaylist';
    plfunction = 'cmas_playlistmodal(\'' + work.id + '\',\'' + item.spotify_albumid + '\',\'' + item.set + '\')';
  }

  alb = alb + '<li class="playlist '+ plaction +'"><a href="javascript:'+ plfunction +'">playlist</a></li>';

  return alb;
}

// performers list

cmas_listperformers = function (aperformers) {

  albpone = [];
  albptwo = [];
  albptwohalf = [];
  albpthree = [];
  albc = '';
  albo = '';
  albor = '';
  classmain = '';

  if (aperformers.length <= 4)
  {
      classmain = 'mainperformer';
  }

  perfnum = 0;

  for (performers in aperformers)
  {
    if (aperformers[performers].role === null)
    {
      aperformers[performers].role = "";
    }

    if (aperformers[performers].role.trim() == "Conductor")
    {
      albpthree.push ('<li class="mainperformer"><strong>'+aperformers[performers].name+'</strong>, ' + aperformers[performers].role + '</li>');
    }
    else if (aperformers[performers].role.trim() == "Ensemble" || aperformers[performers].role.trim() == "Orchestra")
    {
      albptwo.push ('<li class="mainperformer"><strong>'+aperformers[performers].name+'</strong></li>');
    }
    else if (aperformers[performers].role.trim() == "Choir")
    {
      albptwohalf.push ('<li class="'+classmain+'"><strong>'+aperformers[performers].name+'</strong></li>');
    }
    else if (aperformers[performers].role.trim() == "")
    {
      albpone.push ('<li class="' + classmain + '"><strong>' + aperformers[performers].name + '</strong></li>');
    }
    else
    {
      albpone.push ('<li class="'+classmain+'"><strong>'+aperformers[performers].name+'</strong>, ' + aperformers[performers].role + '</li>');
    }
  }

  if (aperformers.length > 4 && albpthree.length == 0 && albptwo.length == 0) {
    for (oneperfs in albpone) {
      if (oneperfs <= 3) albpone[oneperfs] = albpone[oneperfs].replace ('class=""', 'class="mainperformer"');
    }
  }

  return albpone.join('') + albptwo.join('') + albptwohalf.join('') + albpthree.join('');
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
  $('body').addClass('showingplayerbar');
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

  if ('mediaSession' in navigator) {

    navigator.mediaSession.metadata = new MediaMetadata({
      title: text,
      artist: title,
      artwork: [
        { src: icon, sizes: '512x512', type: 'image/png' }
      ]
    });
  
    navigator.mediaSession.setActionHandler('play', function() { cmas_toggleplay(); });
    navigator.mediaSession.setActionHandler('pause', function() { cmas_toggleplay(); });
    navigator.mediaSession.setActionHandler('previoustrack', function() { cmas_nexttrack(); });
    navigator.mediaSession.setActionHandler('nexttrack', function() { cmas_prevtrack(); });
  }

  if ($(window).width() >= 1024) {
    var n = new Notification (title, options);
    setTimeout(n.close.bind(n), 5000);
  }
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

  $('#playerverify').toggleClass('loading');

  $.ajax({
    url: cmas_options.backend + '/recording/detail/work/' + wid + '/album/' + aid + '/' + set + '.json',
    method: "GET",
    success: function (response) {

      $.ajax({
        url: cmas_options.backend + '/dyn/recording/' + action + '/',
        method: "POST",
        data: { id: localStorage.spotify_userid, wid: wid, aid: aid, set: set, cover: response.recording.cover, performers: JSON.stringify(response.recording.performers), auth: cmas_authgen(), tag: tag },
        success: function (nresponse) {
          if (nresponse.status.success == "true") {

            $('#playerverify').toggleClass('loading');
            $('#playerverify').toggleClass('opened');

            if (action == 'tag') {

              if (tag == 'verified' || tag == 'compilation') {
                $('#playerverify').toggleClass('verified', true);
                if (window.albumlistwork == wid) {
                  $('#albums li[pid=' + wid + '-' + aid + '-' + set + ']').show();
                  $('#albums li[pid=' + wid + '-' + aid + '-' + set + ']').toggleClass('verified', true);
                  $('#albums li[pid=' + wid + '-' + aid + '-' + set + ']').parent().prepend($('#albums li[pid=' + wid + '-' + aid + '-' + set + ']'));
                }
              }
              else if (tag == 'wrongdata' || tag == 'badquality') {
                $('#playerverify').toggleClass('reported', true);
                if (window.albumlistwork == wid) $('#albums li[pid=' + wid + '-' + aid + '-' + set + ']').hide();
              }
            }
          }
        }
      });

    }
  });
}

// editing performers of a recording 

cmas_editperformers = function () {
  $('#playerverify').toggleClass('editingperf');
}

cmas_submitperf = function (wid, aid, set) {

  if ($('#nowplaying textarea').val().length > 0) {

    $('#playerverify').toggleClass('loading');

    $.ajax({
      url: cmas_options.backend + '/recording/detail/work/' + wid + '/album/' + aid + '/' + set + '.json',
      method: "GET",
      success: function (response) {

        $.ajax({
          url: cmas_options.backend + '/dyn/recording/edit/',
          method: "POST",
          data: { id: localStorage.spotify_userid, wid: wid, aid: aid, set: set, auth: cmas_authgen(), cover: response.recording.cover, performers: JSON.stringify(response.recording.performers), newperformers: $('#nowplaying li.perform textarea').val() },
          success: function (response) {
            if (response.status.success == "true") {

              $('#playerverify').toggleClass('loading');
              $('#playerverify').toggleClass('editingperf');
              $('#playerverify').toggleClass('verified', true);
              $('#playerverify').toggleClass('opened', false);

              $('#nowplaying li.performers ul').html(cmas_listperformers(response.recording.performers));

              if (window.albumlistwork == wid) {
                $('#albums li[pid=' + wid + '-' + aid + '-' + set + ']').show();
                $('#albums li[pid=' + wid + '-' + aid + '-' + set + '] li.performers').html(cmas_listperformers(response.recording.performers));
                $('#albums li[pid=' + wid + '-' + aid + '-' + set + ']').toggleClass('verified', true);
                $('#albums li[pid=' + wid + '-' + aid + '-' + set + ']').parent().prepend($('#albums li[pid=' + wid + '-' + aid + '-' + set + ']'));
              }
            }
          }
        });

      }
    });
  }
}

// editing recording observation

cmas_editobs = function () {
  $('#playerverify').toggleClass('editingobs');
}

cmas_submitobs = function (wid, aid, set) {

  $('#playerverify').toggleClass('loading');

  $.ajax({
    url: cmas_options.backend + '/recording/detail/work/' + wid + '/album/' + aid + '/' + set + '.json',
    method: "GET",
    success: function (response) {

      $.ajax({
        url: cmas_options.backend + '/dyn/recording/edit/',
        method: "POST",
        data: { id: localStorage.spotify_userid, wid: wid, aid: aid, set: set, auth: cmas_authgen(), cover: response.recording.cover, performers: JSON.stringify(response.recording.performers), observation: 1, observationvalue: $('#nowplaying li.versionform textarea').val() },
        success: function (rresponse) {
          if (rresponse.status.success == "true") {

            $('#playerverify').toggleClass('loading');
            $('#playerverify').toggleClass('editingobs');
            $('#playerverify').toggleClass('verified', true);
            $('#playerverify').toggleClass('opened', false);

            $('#nowplaying li.work').html('<a href="javascript:cmas_recordingsbywork(' + response.work.id + ',0)">' + response.work.title +'<span>' + rresponse.recording.observation + '</span></a>');

            if (window.albumlistwork == wid) {
              $('#albums li[pid=' + wid + '-' + aid + '-' + set + ']').show();
              $('#albums li[pid=' + wid + '-' + aid + '-' + set + '] li.version').remove();
              if (rresponse.recording.observation) $('<li class="version">'+rresponse.recording.observation+'</li>').insertBefore('#albums li[pid=' + wid + '-' + aid + '-' + set + '] li.performers');
              $('#albums li[pid=' + wid + '-' + aid + '-' + set + ']').toggleClass('verified', true);
              $('#albums li[pid=' + wid + '-' + aid + '-' + set + ']').parent().prepend($('#albums li[pid=' + wid + '-' + aid + '-' + set + ']'));
            }
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

cmas_favoritework = function (wid, cid) {
  if ($.inArray(wid.toString(), cmas_favoriteworks) != -1) {
    action = 'unfavorite';
  }
  else {
    action = 'favorite';
  }

  $.ajax({
    url: cmas_options.backend + '/dyn/user/work/' + action + '/',
    method: "POST",
    data: { id: localStorage.spotify_userid, wid: wid, cid: cid, auth: cmas_authgen() },
    success: function (response) {
      if (response.status.success == "true") {
        cmas_favoriteworks = (response.list ? response.list : []);
        $('.wfav_' + wid).toggleClass('favorite');
        $('#mwfav_' + wid).toggleClass('favorite');

        if ($('li#fav').hasClass('active') && $(window).width() >= 1024) {
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

      cmas_composersbytag('pop');
      cmas_genresbycomposer(localStorage.lastcomposerid, localStorage.lastgenre, true);
      cmas_playlist("fav");

      if ($(window).width() < 1024) {
        cmas_composersbyfav();
      }

      if (localStorage.lastwid) {
        cmas_recording(localStorage.lastwid, localStorage.lastaid, localStorage.lastset, true);
      }
      cmas_mobilepage('library');
      $('#loader').fadeOut();
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
      listul = '#favalbums';
      draggable = "";
      pidsort = "";
      
      if (response.status.success == "false") {
        $('#favalbumswrapper').addClass('nofavorites');
      } else {
        $('#favalbumswrapper').removeClass('nofavorites');

        for (performance in docsr) {
          $(listul).append('<li pid="' + docsr[performance].work.id + '-' + docsr[performance].spotify_albumid + '-' + docsr[performance].set + '" ' + pidsort + ' class="performance ' + draggable + '"><ul>' + cmas_recordingitem(docsr[performance], docsr[performance].work) + '</ul></li>');
        }
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
      listul = '#favalbums';
      $('#favalbumswrapper').removeClass('nofavorites');

      for (performance in docsr) {
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
      listul = '#favalbums';
      draggable = "draggable";
      pidsort = "";
      $('#favalbumswrapper').removeClass('nofavorites');

      if (response.status.success == "false") {
        cmas_playlist("fav");
      } else {
        docsr = response.recordings;

        for (performance in docsr) {
          $(listul).append('<li pid="' + docsr[performance].work.id + '-' + docsr[performance].spotify_albumid + '-' + docsr[performance].set + '" class="performance"><ul>' + cmas_recordingitem(docsr[performance], docsr[performance].work, response.playlist) + '</ul></li>');
        }
      }
    }
  });
}

// adding or removing favorite composers

cmas_compfavorite = function (cid, classcheck) {
  if ($(classcheck).hasClass('favorite'))
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
        $('#mfav_' + cid).toggleClass('favorite');

        if ($(window).width() < 1024 || $('#composers li.index').hasClass('favorite')) {
          cmas_composersbyfav();
        }
      }
    }
  });
}

// adding or removing forbidden composers

cmas_compforbid = function (cid, classcheck) {
  if ($(classcheck).hasClass('forbidden')) {
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
        $('#mforb_' + cid).toggleClass('forbidden');
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
  $('#playlist-menu').html('');

  var favoption = new Option("Favorites", "fav");
  $('#favtitle select').append($(favoption));

  var favoption = new Option("Recently Played", "rec");
  $('#favtitle select').append($(favoption));

  $('#playlist-menu').append('<li class="favorites" id="playlist_fav"><a href="javascript:cmas_playlist(\'fav\');">Your favorites</a></li><li class="recently" id="playlist_rec"><a href="javascript:cmas_playlist(\'rec\');">Recently played</a></li>');

  for (pllst in cmas_playlists)
  {
    var favoption = new Option(cmas_playlists[pllst].name, cmas_playlists[pllst].id);

    var summary = cmas_playlists[pllst].summary.works.rows + ' work' + (cmas_playlists[pllst].summary.works.rows > 1 ? 's' : '') + ' by ' + cmas_playlists[pllst].summary.composers.names.slice (0,4).join (', ');
    var portraits = '';

    for (cpid in cmas_playlists[pllst].summary.composers.portraits.slice (0, 4)) {
      var portraits = portraits + '<img src="' + cmas_playlists[pllst].summary.composers.portraits[cpid] + '" />'; 
    }

    $('#favtitle select').append($(favoption));
    $('#playlist-menu').append('<li id="playlist_' + cmas_playlists[pllst].id + '" class="playlist"><a href="javascript:cmas_playlist(\'' + cmas_playlists[pllst].id + '\')"><span class="portraits composers-' + cmas_playlists[pllst].summary.composers.portraits.slice (0, 4).length + '">' + portraits + '</span><span class="title">' + cmas_playlists[pllst].name + '</span><span class="summary">' + summary + '</span></a></li>');
  }

  $('#playlist-menu li#playlist_' + playlist_slug).addClass('active');
  $('#favtitle select').val(playlist_slug);
  $('#favtitle select').css('visibility', 'visible');
}

cmas_playlist = function (playlist) {
  $('ul#favalbums').removeClass().addClass((playlist == "fav" || playlist == "rec") ? playlist : "playlist");
  $('body').removeClass("playlist").addClass((playlist == "fav" || playlist == "rec") ? "" : "playlist");

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
  cmas_mobilepage ("favorites");
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
  $('#tuning-modal').hide(0, function () { $("#playlistmodal").leanModal(); });
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
            $('#playlistmodal-existing').fadeTo(0,1);
            $('#playlistmodal-new').fadeTo(0,1);
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
  if (filter.genre) {
    if (filter.genre.toLowerCase() == 'popular') filter.popularwork = 1;
    if (filter.genre.toLowerCase() == 'recommended') filter.recommendedwork = 1;
    if (filter.genre.toLowerCase() == 'fav') filter.work = 'fav';  
    if (filter.genre.toLowerCase() == 'recommended' || filter.genre.toLowerCase() == 'popular' || filter.genre.toLowerCase() == 'fav' || filter.genre.toLowerCase() == 'all') filter.genre = '';  
  }
  if (cmas_disabled) {
    $(`#${cmas_disabledreason}`).leanModal(); return;
  }
  $.ajax({
    url: cmas_options.backend + '/dyn/user/work/random/',
    method: "POST",
    data: { id: localStorage.spotify_userid, popularcomposer: filter.popularcomposer, recommendedcomposer: filter.recommendedcomposer, popularwork: filter.popularwork, recommendedwork: filter.recommendedwork, genre: filter.genre, epoch: filter.epoch, composer: filter.composer, work: filter.work },
    success: function (response) {
      if (response.status.success == "true") {

        cmas_radioqueue = [];
        for (wk in response.works)
        {
          cmas_radioqueue.push(response.works[wk]);
        }

        cmas_onair = true;
        cmas_radiofilter = filter;
        cmas_radiofilter.type = 'radio';

        if (!$('#tuning-modal').is(':visible')) { $('#tuning-modal').leanModal(); }

        $('#radiotop #goradio').removeClass('on');
        $('#radiotop #goradio').addClass('on');

        $('body').addClass('radioonair');

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
    else if ($('#radiotop select.composers option:checked').val() == "wrec") {
      filter.recommendedwork = "1";
    }
    else if ($('#radiotop select.composers option:checked').val() == "rec") {
      filter.recommendedcomposer = "1";
    }
    else if ($('#radiotop select.composers option:checked').val() == "wpop") {
      filter.popularwork = "1";
    }
    else if ($('#radiotop select.composers option:checked').val() == "pop") {
      filter.popularcomposer = "1";
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
    $('body').removeClass('radioonair');
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
    $('body').addClass('radioonair');

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

  $.ajax({
    url: cmas_options.backend + '/recording/shorturl/work/' + wid + '/album/' + aid + '/' + set + '.json',
    method: "GET",
    success: function (response) {
      permauri = cmas_options.shareurl + '/r/' + (Number(response.recording.id)).toString(16);
      $('#permalink-direct').val(permauri);
      $('#permalink-widget').text(`<iframe src="${permauri}/widget" width="593" height="430" frameborder="0"></iframe>`);
      $('#permalink-modal').leanModal();
    }
  });
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
        cmas_recordingsbywork(window.albumlistwork, window.albumlistnext);
      }
    }
  }
}

// recording tagging

cmas_qualify = function () {
  $('#playerverify').toggleClass('opened');
}

// mobile pagination

cmas_mobilepage = function (page) {
  if ($(window).width() < 1024) {
    if (window.location.hash != '#' + page) {
      window.history.pushState({}, 'Concertmaster', window.location.pathname + window.location.search + '#' + page);
    }
  
    if (page == 'player') { 
      $('#nowplaying').removeClass().addClass('down');
      $('body').addClass('player');
    } else {
      $('body').removeClass('player library favorites radio settings composer work').addClass(page);
    }
  }
}

// mobile swipe detection

cmas_swipedetect = function (el, callback) {
  // http://javascriptkit.com/javatutors/touchevents2.shtml
  var touchsurface = el,
  swipedir,
  startX,
  startY,
  distX,
  distY,
  threshold = 10, //required min distance traveled to be considered swipe
  restraint = 1000, // maximum distance allowed at the same time in perpendicular direction
  allowedTime = 10000000, // maximum time allowed to travel that distance
  elapsedTime,
  startTime,
  handleswipe = callback || function(swipedir){}

  touchsurface.addEventListener('touchstart', function(e){
      var touchobj = e.changedTouches[0]
      swipedir = 'none'
      dist = 0
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
      //e.preventDefault()
  }, false)

  touchsurface.addEventListener('touchmove', function(e){
      //e.preventDefault() // prevent scrolling when inside DIV
  }, false)

  touchsurface.addEventListener('touchend', function(e){
      var touchobj = e.changedTouches[0]
      distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
      
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime){ // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
              swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
          }
          else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
              swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
          }
      }
      handleswipe(swipedir)
      //e.preventDefault()
  }, false)
}

// settings screen: patrons listing

cmas_settings = function (mode) {

  $.ajax({
    url: cmas_options.opusbackend + '/patron/list.json',
    method: "GET",
    success: function (response) {

      if (response.status.rows >= 1) {
        ulpatrons = $('#patrons ul');
        ulpatrons.empty();

        for (patron in response.patrons) {
          ulpatrons.append(`<li>${response.patrons[patron]}</li>`);
        }

        $('#patrons').removeClass('hidden');
      }
      
      switch (mode) {
        case "desktop":
          $('#config').leanModal();
          break;
        case "mobile":
          cmas_mobilepage('settings');
          break;
      }
    }
  });

}
