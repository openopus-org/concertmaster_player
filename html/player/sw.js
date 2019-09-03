const cacheName = '1.19.09.02';
const precacheResources = [
    '/css/main.css',
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
    '/img/all.png',
    '/img/cfav.png',
    '/img/comboarrow_disabled.png',
    '/img/comboarrow_fav.png',
    '/img/compfav.png',
    '/img/edit_on.png',
    '/img/edit.png',
    '/img/fav_favorite_go.png',
    '/img/fav_favorite_is.png',
    '/img/fav_favorite_un.png',
    '/img/favorite_go.png',
    '/img/favorite_is.png',
    '/img/favorite_un.png',
    '/img/forbidden_go.png',
    '/img/forbidden_is.png',
    '/img/forbidden_un.png',
    '/img/help_on.png',
    '/img/help.png',
    '/img/logo.png',
    '/img/miniplay.png',
    '/img/nextrack_on.png',
    '/img/nextrack.png',
    '/img/nocover.png',
    '/img/pause_on.png',
    '/img/pause.png',
    '/img/period.png',
    '/img/permalink_big_on.png',
    '/img/permalink_big.png',
    '/img/permalink_on.png',
    '/img/permalink.png',
    '/img/play_fav.png',
    '/img/play_on.png',
    '/img/play_playlist_on.png',
    '/img/play_playlist.png',
    '/img/play.png',
    '/img/playlist_add_on.png',
    '/img/playlist_add.png',
    '/img/playlist_remove_on.png',
    '/img/playlist_remove.png',
    '/img/previoustrack_on.png',
    '/img/previoustrack.png',
    '/img/radio_on.png',
    '/img/radio_top.png',
    '/img/radio.png',
    '/img/search.png',
    '/img/setup_on.png',
    '/img/setup.png',
    '/img/sitelogo.png',
    '/img/skiptrack_off.png',
    '/img/skiptrack_on.png',
    '/img/skiptrack.png',
    '/img/smartradio_on.png',
    '/img/smartradio.png',
    '/img/square-gray.png',
    '/img/square.png',
    '/img/toggle_down.png',
    '/img/toggle_up.png',
    '/img/tuning.svg',
    '/img/check.png',
    '/img/check-on.png',
    '/img/cancel.png',
    '/img/cancel-on.png',
    '/img/update.png',
    '/favicon.ico',
    '/img/spotifyi.png',
    '/img/spinner-gr.svg',
    '/img/partial_off.png',
    '/img/partial_on.png',
    '/img/badaudio_on.png',
    '/img/wrongdata_on.png',
    '/img/incomplete_on.png',
    '/img/verified_on.png',
    '/img/badaudio_off.png',
    '/img/wrongdata_off.png',
    '/img/incomplete_off.png',
    '/img/verified_off.png',
    '/img/notchecked.png',
    '/img/spinner-wt.svg',
    '/img/spinner-ld.svg'
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
