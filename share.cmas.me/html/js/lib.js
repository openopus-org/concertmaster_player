options = {};
options.backend = 'https://api.concertmaster.app';
options.frontend = 'https://concertmaster.app'

init = function () {
    vars = window.location.pathname.split("/");

    if (vars[3] == "widget") {
        $('#toolbar').addClass('widget');
        $('#container').addClass('widget');
        $('#container').removeClass('page');
    }

    rid = parseInt(vars[2], 16);
    concertmaster_uri = options.frontend + '/r/' + vars[2];

    for (link in $('.playaction'))
    {
        $('.playaction')[link].href = concertmaster_uri;
    }
    
    $.ajax({
        url: options.backend + '/recording/detail/' + rid + '.json',
        method: "GET",
        success: function (response) {
            recording(response);
        }
    });
}

recording = function (response) {
    alb = '';
    albp = '';
    albc = '';
    albo = '';
    albor = '';
    classmain = '';

    alb = alb + '<li class="cover"><a href="' + concertmaster_uri + '"><img src="' + response.recording.cover + '" /></a></li>';
    alb = alb + '<li class="composer">' + response.work.composer.name + '</li>';
    alb = alb + '<li class="work">' + response.work.title + '</li>';

    document.title = `${response.work.composer.name}: ${response.work.title} - Concertmaster`;

    if (response.recording.performers.length <= 4) {
        classmain = 'mainperformer';
    }

    perfnum = 0;

    for (performers in response.recording.performers) {
        perfnum = perfnum + 1;

        if (response.recording.performers[performers].role.trim() == "Conductor" || response.recording.performers[performers].role.trim() == "Director") {
            albc = albc + '<li class="mainperformer"><strong>' + response.recording.performers[performers].name + '</strong>, ' + response.recording.performers[performers].role + '</li>';
        }
        else if (perfnum <= 2 && (response.recording.performers[performers].role.trim() == "Harpsichord" || response.recording.performers[performers].role.trim() == "Piano" || response.recording.performers[performers].role.trim() == "Violin" || response.recording.performers[performers].role.trim() == "Clarinet" || response.recording.performers[performers].role.trim() == "Cello")) {
            albc = albc + '<li class="mainperformer"><strong>' + response.recording.performers[performers].name + '</strong>, ' + response.recording.performers[performers].role + '</li>';
        }
        else if (response.recording.performers[performers].role.trim() == "Chamber Ensemble" || response.recording.performers[performers].role.trim() == "String Quartet" || response.recording.performers[performers].role.trim() == "Ensemble" || response.recording.performers[performers].role.trim() == "Orchestra" || response.recording.performers[performers].role.trim() == "Chamber Orchestra") {
            albor = albor + '<li class="mainperformer"><strong>' + response.recording.performers[performers].name + '</strong></li>';
        }
        else if (response.recording.performers[performers].role.trim() == "Chorus/Choir" || response.recording.performers[performers].role.trim() == "Choir") {
            albo = albo + '<li class="' + classmain + '"><strong>' + response.recording.performers[performers].name + '</strong></li>';
        }
        else {
            albp = albp + '<li class="' + classmain + '"><strong>' + response.recording.performers[performers].name + '</strong>, ' + response.recording.performers[performers].role + '</li>';
        }
    }

    albp = albp + albo + albor + albc;
    alb = alb + '<li class="performers"><ul>' + albp + '</ul></li>';
    alb = alb + '<li class="label">' + response.recording.label.replace(/\'/gi, '') + '</li>';

    $('#playerinfo').html(alb);
    $('#durationglobal').html(readabletime (response.recording.length));

    for (pidd in response.recording.tracks) {
        $('#playertracks').append('<li><div class="tracktitle">' + response.recording.tracks[pidd].title + '</div><div class="duration">' + readabletime (response.recording.tracks[pidd].length) + '</div></li>');
    }
}

playingdetails = function () {
    if (document.getElementById('nowplaying').className == 'up') {
        document.getElementById('nowplaying').className = 'down';
        document.getElementById('togglebar').className = 'down';
        $('#nowplaying').scrollTop(110);
    }
    else {
        document.getElementById('nowplaying').className = 'up';
        document.getElementById('togglebar').className = 'up';
        $('#nowplaying').scrollTop(0);
    }
}

readabletime = function (time) {
    if (time && time > 0.0) {
        var sec = parseInt(time % 60);
        return parseInt(time / 60) + ':' + (sec < 10 ? '0' + sec : sec);
    }
    else {
        return '0:00';
    }
}
