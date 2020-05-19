if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"cfe2119c16cccf1c242b46cb1ebba754","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"e1f0cf91c3c19dc35580d13ad3e01aa7","url":"fonts/Archia/archia-light-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"02155d96e4a3f18305ab944925389c77","url":"fonts/Archia/archia-regular-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e88f1cf30180bd74b3201844b0c03c69","url":"fonts/Archia/archia-thin-webfont.woff2"},{"revision":"cfe2119c16cccf1c242b46cb1ebba754","url":"index.html"},{"revision":"7f79559975dbff4e16fd8c700c8ea37f","url":"precache-manifest.7f79559975dbff4e16fd8c700c8ea37f.js"},{"revision":"cb740fc90ec139afa150d1df7e351d57","url":"static/css/13.93b3b32d.chunk.css"},{"revision":"af8453130b1be16226b521e09b95aebb","url":"static/css/main.dde7c33d.chunk.css"},{"revision":"9fedd94083ceae8b31708882f2afb041","url":"static/js/0.af784392.chunk.js"},{"revision":"d4115a7750d9f81f8947d8f47399cb62","url":"static/js/1.e20e1d09.chunk.js"},{"revision":"71ab80dbc56c7d7ff3098f191a274b09","url":"static/js/11.2784dd7b.chunk.js"},{"revision":"04413f072ed156be974c479a672dc83a","url":"static/js/12.48acd55e.chunk.js"},{"revision":"c7664fccfafbc85bb1f44d0a49491542","url":"static/js/13.583ad582.chunk.js"},{"revision":"09f6687b406f5676af0a053046cbcf0d","url":"static/js/14.1f65c4ad.chunk.js"},{"revision":"175111dabe09c6e77272c8121470494d","url":"static/js/15.607631d9.chunk.js"},{"revision":"aa4eb6332dbe29c7d64ed67a31164ff3","url":"static/js/16.e0b61754.chunk.js"},{"revision":"f233a93b24dc97bdf8010fbabb294827","url":"static/js/2.54042c5d.chunk.js"},{"revision":"3ba88a7985e05e254291c73afad1984f","url":"static/js/DeepDive.c7cdaac4.chunk.js"},{"revision":"f9279218f2812359dcec7ab2cf6bfe34","url":"static/js/Essentials.bb489650.chunk.js"},{"revision":"4d0bfb33234c5ff1a8927da61510478e","url":"static/js/FAQ.ac138e62.chunk.js"},{"revision":"f9e044d231e7c56b138c921840206800","url":"static/js/Home.74043ed8.chunk.js"},{"revision":"9349ee0914d05a5fdce88d5638f83b55","url":"static/js/main.6e5050e7.chunk.js"},{"revision":"3ecab4619e068d2b6845d2f6926c53f6","url":"static/js/PatientDB.16bbc3a7.chunk.js"},{"revision":"52560891806fa17c35e6466ef38afd9c","url":"static/js/runtime-main.6fa8f444.js"},{"revision":"83fed2f41235485bbc202a0b0144a4bb","url":"static/js/State.0ce5a5f3.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
