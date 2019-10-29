importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02b341cf26474e8bbb52.js",
    "revision": "a0d8380781f05214acc4c77f6a79f204"
  },
  {
    "url": "/_nuxt/1ae7b36f2b85c53a8075.js",
    "revision": "b62872195b53ecb8ed520be403aea8d5"
  },
  {
    "url": "/_nuxt/217493fd819f0b553bc4.js",
    "revision": "7ca5416b637d5e381ddebf1899101e34"
  },
  {
    "url": "/_nuxt/219b989100d95fd93a1d.js",
    "revision": "dfee4668dc395a964dc0a4b27ec901d6"
  },
  {
    "url": "/_nuxt/2715bba957492dd551fd.js",
    "revision": "e82f33b77b5b27000d81b76c3efeaa07"
  },
  {
    "url": "/_nuxt/338aca0a7b26700f63a8.js",
    "revision": "a5fb9d715a5567581cc36ee4d87be70d"
  },
  {
    "url": "/_nuxt/3e58d9110c1db52002ca.js",
    "revision": "8166ccd30940b24e86f33337f123b5eb"
  },
  {
    "url": "/_nuxt/3e62b2fb9b2423834295.js",
    "revision": "fe04ca9f7aa02facb08c9b6343da9cb9"
  },
  {
    "url": "/_nuxt/5bf0bd742c6a738df628.js",
    "revision": "6ce93b7b080a5f4aebacaa9177b7a392"
  },
  {
    "url": "/_nuxt/8e05de7f9091da2c0175.js",
    "revision": "dfd27f45312f3ba054fd149d913ad44b"
  },
  {
    "url": "/_nuxt/9cb9d733938c8f0a7e73.js",
    "revision": "9962d98493527eb4f798bea3c8cfc1f0"
  },
  {
    "url": "/_nuxt/afd5136e5dd9baf3de38.js",
    "revision": "c45cf224020d47c5bcc2e4924b8ab598"
  },
  {
    "url": "/_nuxt/d4f9cf67e0d130c87316.js",
    "revision": "0af7084104bae5242ed41d6d4fc226e9"
  },
  {
    "url": "/_nuxt/dbbd3f0a286db805eb12.js",
    "revision": "25f2cba09c257f84c4b768b1e33a0635"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
