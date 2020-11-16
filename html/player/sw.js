const cacheName = '1.20';
const precacheResources = [
    '/css/main.css',
    '/css/mobile.css',
    '/css/PetitaBold.ttf',
    '/css/PetitaMedium.ttf',
    '/css/Sanchezregular.otf',
    '/css/toggles-full.css',

    '/js/select2/css/select2.css',
    '/js/select2/js/select2.js',
    '/js/jquery.js',
    '/js/jquery.mousewheel.js',
    '/js/jquery.leanModal.min.js',
    '/js/html.sortable.0.1.3.js',
    '/js/toggles.min.js',
    '/js/js-md5.js',
    '/js/lib.js',

    '/img/smartradio.png',
    '/img/edit_mob.png',
    '/img/notchecked.png',
    '/img/maximize_on.png',
    '/img/expand_on.png',
    '/img/check.png',
    '/img/cancel-on.png',
    '/img/back.png',
    '/img/wrongdata_on.png',
    '/img/setup.png',
    '/img/spinner.svg',
    '/img/skiptrack_off.png',
    '/img/minimize_on.png',
    '/img/edit.png',
    '/img/incomplete_off.png',
    '/img/previoustrack_mob.png',
    '/img/trayicon_play.png',
    '/img/brec.png',
    '/img/radioonair-selected.svg',
    '/img/badaudio_on.png',
    '/img/datalogo.png',
    '/img/permalink.png',
    '/img/fav_favorite_un.png',
    '/img/partial_on.png',
    '/img/minimize.png',
    '/img/play.png',
    '/img/favorite_big_yl.png',
    '/img/bpop.png',
    '/img/cancel.png',
    '/img/spotify_on.png',
    '/img/library_mobon.png',
    '/img/postwar.png',
    '/img/lateromantic.png',
    '/img/medieval.png',
    '/img/21stcentury.png',
    '/img/romantic.png',
    '/img/earlyromantic.png',
    '/img/20thcentury.png',
    '/img/renaissance.png',
    '/img/classical.png',
    '/img/baroque.png',
    '/img/permalink_big_on.png',
    '/img/editmeta_off.png',
    '/img/favorite_big_bl.png',
    '/img/partial_off.png',
    '/img/toggle_down.png',
    '/img/square.png',
    '/img/incomplete_on.png',
    '/img/vocal_on.png',
    '/img/popular.png',
    '/img/vocal.png',
    '/img/keyboard.png',
    '/img/orchestral.png',
    '/img/essential_on.png',
    '/img/stage_on.png',
    '/img/favorites_on.png',
    '/img/essential.png',
    '/img/keyboard_on.png',
    '/img/chamber_on.png',
    '/img/stage.png',
    '/img/favorites.png',
    '/img/orchestral_on.png',
    '/img/chamber.png',
    '/img/popular_on.png',
    '/img/version_off.png',
    '/img/pause_mob.png',
    '/img/spotify.png',
    '/img/slider_right_gr.png',
    '/img/twitter.png',
    '/img/favorite_is.png',
    '/img/radioonair.svg',
    '/img/spotify_off.png',
    '/img/fav_favorite_is.png',
    '/img/trayicon_pause@2x.png',
    '/img/trayicon_play@2x.png',
    '/img/rdio.png',
    '/img/setup_moboff.png',
    '/img/crec.png',
    '/img/play_playlist.png',
    '/img/version_on.png',
    '/img/close.png',
    '/img/deezer.png',
    '/img/favorite_go.png',
    '/img/playlist_remove.png',
    '/img/forbidden_go.png',
    '/img/play_fav.png',
    '/img/square-gray.png',
    '/img/badaudio_off.png',
    '/img/maximize.png',
    '/img/update.png',
    '/img/verified_off.png',
    '/img/history_big_yl.png',
    '/img/close_on.png',
    '/img/skiptrack.png',
    '/img/playlist_remove_on.png',
    '/img/radioonair-menu-active.svg',
    '/img/library.png',
    '/img/pause_on.png',
    '/img/spotifyi.png',
    '/img/nofavorites.png',
    '/img/icon512.png',
    '/img/skip_mob.png',
    '/img/collapse_on.png',
    '/img/permalink_big.png',
    '/img/help_on.png',
    '/img/radio_top.png',
    '/img/play_mob.png',
    '/img/favorites_mobon.png',
    '/img/icon192.png',
    '/img/tuning.svg',
    '/img/radio_on.png',
    '/img/collapse.png',
    '/img/trayicon_pause.png',
    '/img/radio.png',
    '/img/history_big_bl.png',
    '/img/previoustrack_on.png',
    '/img/skiptrack_on.png',
    '/img/forbidden_is.png',
    '/img/expand.png',
    '/img/cfav.png',
    '/img/spinner-gr.svg',
    '/img/sitelogo.png',
    '/img/forbidden_un.png',
    '/img/comboarrow.png',
    '/img/toggle_up.png',
    '/img/permalink_on.png',
    '/img/all.png',
    '/img/trayicon.png',
    '/img/previoustrack.png',
    '/img/play_playlist_on.png',
    '/img/comboarrow_fav.png',
    '/img/verified_on.png',
    '/img/nocover.png',
    '/img/slider_right_bl.png',
    '/img/radioonair-menu.svg',
    '/img/slider_left_bl.png',
    '/img/compfav.png',
    '/img/setup_on.png',
    '/img/setup_mobon.png',
    '/img/cpop.png',
    '/img/spinner-wt.svg',
    '/img/miniplay.png',
    '/img/playlist_add.png',
    '/img/wrongdata_off.png',
    '/img/smartradio_on.png',
    '/img/fav_favorite_go.png',
    '/img/nextrack_mob.png',
    '/img/period.png',
    '/img/help.png',
    '/img/comboarrow_disabled.png',
    '/img/pause.png',
    '/img/logo.png',
    '/img/playlist_add_on.png',
    '/img/radio_mob.png',
    '/img/check-on.png',
    '/img/search.png',
    '/img/nextrack_on.png',
    '/img/editmeta_on.png',
    '/img/nextrack.png',
    '/img/favorite_un.png',
    '/img/spinner-ld.svg',
    '/img/edit_on.png',
    '/img/play_on.png',

    '/img/genres/chamber.png',
    '/img/genres/chamber_on.png',
    '/img/genres/essential.png',
    '/img/genres/essential_on.png',
    '/img/genres/favorites.png',
    '/img/genres/favorites_on.png',
    '/img/genres/keyboard.png',
    '/img/genres/keyboard_on.png',
    '/img/genres/orchestral.png',
    '/img/genres/orchestral_on.png',
    '/img/genres/popular.png',
    '/img/genres/popular_on.png',
    '/img/genres/stage.png',
    '/img/genres/stage_on.png',
    '/img/genres/vocal.png',
    '/img/genres/vocal_on.png',

    '/img/periods/20thcentury.png',
    '/img/periods/21stcentury.png',
    '/img/periods/baroque.png',
    '/img/periods/classical.png',
    '/img/periods/earlyromantic.png',
    '/img/periods/lateromantic.png',
    '/img/periods/medieval.png',
    '/img/periods/postwar.png',
    '/img/periods/renaissance.png',
    '/img/periods/romantic.png',

    '/img/icons/120x120.png',
    '/img/icons/152x152.png',
    '/img/icons/180x180.png',
    '/img/icons/167x167.png',
    '/img/splashscreens/iphone5_splash.png',
    '/img/splashscreens/iphone6_splash.png',
    '/img/splashscreens/iphoneplus_splash.png',
    '/img/splashscreens/iphonex_splash.png',
    '/img/splashscreens/iphonexr_splash.png',
    '/img/splashscreens/iphonexsmax_splash.png',
    '/img/splashscreens/ipad_splash.png',
    '/img/splashscreens/ipadpro1_splash.png',
    '/img/splashscreens/ipadpro3_splash.png',
    '/img/splashscreens/ipadpro2_splash.png',

    '/favicon.ico'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(precacheResources);
            })
    );
});

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return true;
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }

            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
                function (response) {
                    
                    var responseToCache = response.clone();

                    if (event.request.url.indexOf("/cover/") != -1 || 
                        event.request.url.indexOf("/genre/list/composer/") != -1 ||
                        event.request.url.indexOf("/work/list/composer/") != -1 ||
                        event.request.url.indexOf("/composer/list/") != -1 ||
                        event.request.url.indexOf("/recording/list/work/") != -1 ||
                        event.request.url.indexOf("/recording/detail/") != -1
                    )
                    {
                        caches.open(cacheName)
                            .then(function (cache) {
                                cache.put(event.request, responseToCache);
                            });
                    }

                    return response;
            });
        })
    );
});
