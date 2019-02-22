cmas_options.spot_redir = 'https://' + window.location.hostname + '/data/sp/';

cmas_spotify = function () {
    $('#loader').fadeOut();
}

cmas_notification = function () {
    return true;
}

cmas_spotifyplay = function () {
    return true;
}

cmas_recordingaction = function (list) {
    if (list.status.success == "true") {
        if (list.recording.spotify_available == 1) {
            
            $('#nowplaying div').hide();
            $('#tuning-modal').closeModal();
            $('#playerinfo').html(cmas_recordingitem(list.recording, list.work));
            $('#playertracks').html('');
            $('#nowplaying #recording').show();

            var currtrack = 0;
            
            for (track in list.recording.tracks) {
                var pctsize = ((list.recording.tracks[track].length) / list.recording.length) * 100;
                currtrack = currtrack + 1;
                $('#playertracks').append('<li><a class="tracktitle" href="javascript:cmas_track(' + track + ')">' + list.recording.tracks[track].title + '</a><div id="timer-' + list.recording.tracks[track].spotify_trackid + '" class="timer">0:00</div><div id="slider-' + list.recording.tracks[track].spotify_trackid + '" class="slider"><div class="buffer"></div><div class="bar"></div></div><div class="duration">' + cmas_readabletime(list.recording.tracks[track].length) + '</div></li>');
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

cmas_editcomposer = function (id)
{
    $.ajax({
        url: cmas_options.backend + '/composer/list/id/' + id + '.json',
        method: "GET",
        success: function (response) {

            $("#nowplaying #composer form button").html('Edit');
            $('#nowplaying #composer form :input[name="name"]')[0].value = response.composers[0].name;
            $('#nowplaying #composer form :input[name="complete_name"]')[0].value = response.composers[0].complete_name;
            $('#nowplaying #composer form :input[name="birth"]')[0].value = response.composers[0].birth.split('-')[0];
            $('#nowplaying #composer form :input[name="death"]')[0].value = (response.composers[0].death != '0000-00-00' && response.composers[0].death != null ? response.composers[0].death.split('-')[0] : '');
            $('#nowplaying #composer form :input[name="id"]')[0].value = id;
            $('#nowplaying #composer form select').val(response.composers[0].epoch);

            $('#nowplaying div').hide();
            $('#tuning-modal').closeModal();
            $('#nowplaying').show();
            $('#nowplaying #composer').show();
        }
    });
}

cmas_editingcomposer = function () {
    $.ajax({
        url: cmas_options.backend + '/dyn/composer/edit/',
        method: "POST",
        data: {
            id: localStorage.spotify_userid,
            cid: $('#nowplaying #composer form :input[name="id"]')[0].value,
            name: $('#nowplaying #composer form :input[name="name"]')[0].value,
            complete_name: $('#nowplaying #composer form :input[name="complete_name"]')[0].value,
            birth: $('#nowplaying #composer form :input[name="birth"]')[0].value + '-01-01',
            death: ($('#nowplaying #composer form :input[name="death"]')[0].value ? $('#nowplaying #composer form :input[name="death"]')[0].value + '-01-01' : ''),
            epoch: $('#nowplaying #composer form select').val(),
            auth: cmas_authgen()
        },
        success: function (response) {
            cmas_refreshcomposers();
        }
    });
}