console.log('in serviceworker.. ')
var CACHE_NAME = 'v1';
var urlsToCache = [
    'testfile.json'
];

self.addEventListener('install', (event) => {
    self.skipWaiting()

    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache: ', CACHE_NAME);
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('clearCache', () => {
    console.log('serviceWorker clearing cache...')
    caches.delete(CACHE_NAME).then((data) => console.log('then: ', data)).catch((e) => console.log('catch: ', e))
})

self.addEventListener('fetch', (event) => {
    console.log('fetch event... event.request: ', event.request)
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                    // Cache hit - return response
                    if (response) {
                        console.log('Cache hit - returning cached response')
                        return response;
                    }
                    console.log('No hit in cache, fetching..')
                    return fetch(event.request);
                }
            )
    );
});