const staticPlayer = "atradio-player-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/main.js",
  "/js/settings.js",
  "/img/bg-atradio.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPlayer).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  