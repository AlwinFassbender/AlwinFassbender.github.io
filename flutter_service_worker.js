'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.wasm": "2778fe4a13eac805b37df04590085ba3",
"canvaskit/skwasm.wasm": "045364c77c9eedecbd12d2c77fe8fa0a",
"canvaskit/canvaskit.js.symbols": "34eb740000df15c03210028f34bc9cf5",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js.symbols": "36607a151127e3736083d241f6e7356b",
"canvaskit/chromium/canvaskit.wasm": "1ec8ac7ed8ea5906c2e03fc14cb2c22a",
"canvaskit/chromium/canvaskit.js.symbols": "afe994e4d3d6d23db1d643573c9839ce",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"flutter.js": "7a1d76a8729d1add7a6ce2a4b4db043f",
"icons/Icon-maskable-192.png": "6c3804f2d98833fc4a11fa8771deebf3",
"icons/Icon-512.png": "fdcbfba7f542dce52481687f767b80b4",
"icons/Icon-maskable-512.png": "fdcbfba7f542dce52481687f767b80b4",
"icons/Icon-192.png": "6c3804f2d98833fc4a11fa8771deebf3",
"index.html": "a17ceb47ffba6d7eac47a57b5873ed2b",
"/": "a17ceb47ffba6d7eac47a57b5873ed2b",
"main.dart.js": "31d5daea035962385f7cd6090457edf6",
"assets/NOTICES": "4421896072db997028ec02169b875af5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/font/RubikMonoOne-Regular.ttf": "f5486d33c22f837e905d600a5407da06",
"assets/assets/sound/key-17.wav": "52f51cf5bb7d4758bee0a548aa444b42",
"assets/assets/sound/key-2.wav": "eff0f0f0f78fb2e0af01acda71cf0f4d",
"assets/assets/sound/key-10.wav": "faae712f85cc447a340afaa241ac7a6c",
"assets/assets/sound/synth-6.wav": "b98e09e19680f21beddcacbede2572a0",
"assets/assets/sound/key-11.wav": "16c1ba26f6f64eea8d11494f31e9fd08",
"assets/assets/sound/synth-8.wav": "d59d0308aad7bc319e018f1c67d1e720",
"assets/assets/sound/key-15.wav": "8e12afe552cc3bba5e0b8e1c7613189f",
"assets/assets/sound/key-16.wav": "b0533645ddc85ae2e6f0cce48b95b942",
"assets/assets/sound/key-20.wav": "7617fd3aaac4ae07e48c0fede87fdf5d",
"assets/assets/sound/key-5.wav": "e3f6a625a35dbca17b14563da0b1bfcd",
"assets/assets/sound/synth-2.wav": "3ed47e102c1ced91eed53c28f2e9228b",
"assets/assets/sound/key-8.wav": "5977302267483ffc7c6969a2dca9808a",
"assets/assets/sound/key-4.wav": "832b5f7e87f77ab5576cbe9ba68fcc5f",
"assets/assets/sound/key-6.wav": "82f6203237632907979e44563dfcd329",
"assets/assets/sound/key-19.wav": "89c12ea25550f121c2a473f84cae89d1",
"assets/assets/sound/key-3.wav": "6026a5b78cc843b2eaaa38c3a65aedf5",
"assets/assets/sound/key-13.wav": "96b78453f4219ea462e1ca010e5a32d4",
"assets/assets/sound/key-1.wav": "70490e1404e3d936183de5c20227d2b3",
"assets/assets/sound/key-9.wav": "49d24e94e11c215e406ad43964e1b041",
"assets/assets/sound/synth-3.wav": "f784beb387eb4d0d110db961f9144d62",
"assets/assets/sound/hi-hat.mp3": "e9ce284446643d01672abac913d3eee2",
"assets/assets/sound/key-12.wav": "c4b2a86df6304acc4c909f3a1385afa5",
"assets/assets/sound/key-18.wav": "74a701eaf3642b2e59cc08f2e8331eb4",
"assets/assets/sound/synth-4.wav": "69ab9a34123bd7227892d903683f8b54",
"assets/assets/sound/synth-5.wav": "ef72e187c01c21668c0bf91dc41ad42f",
"assets/assets/sound/key-7.wav": "6109759da48b99c52befe0d50eab327c",
"assets/assets/sound/key-14.wav": "1864ad511cdcb91e0caadfea4efee4bb",
"assets/assets/sound/drumstick.mp3": "426e1ad99693d47385f773953e849a5f",
"assets/AssetManifest.bin.json": "717a127ebeabab7b5d9256ecff2ebf58",
"assets/AssetManifest.bin": "a55a5b8d88e7d157fd6d14c712e986de",
"assets/AssetManifest.json": "798a231843a99e65746966d2cc790f33",
"assets/FontManifest.json": "cdbb8d709672d420366f8ebc605e02d5",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"manifest.json": "8dd5b3a91f390238025f4252952242ee",
"favicon.png": "e87d9d8258e89f8fbdc9be4e99b1c9e8",
"version.json": "a65bbd86729fcfa591e2e4df49b91063"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
