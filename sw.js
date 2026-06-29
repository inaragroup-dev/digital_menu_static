/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-d87763d2'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "/",
    "revision": "3d5be0990f73f278425f478a7d5943b4"
  }, {
    "url": "promo/sajiva/detail",
    "revision": "873c38de86abd2f33608b14b38aec83e"
  }, {
    "url": "promo/lucky-cat/detail",
    "revision": "3a31fa346df16740a4c0432eb3c8c7bc"
  }, {
    "url": "promo/dim-sum-inc-signature",
    "revision": "a009d7e3721acd922d242edebb67c643"
  }, {
    "url": "promo/dim-sum-inc-signature/detail",
    "revision": "8726f19c262e4e7638892605a46e1711"
  }, {
    "url": "promo/dim-sum-inc/detail",
    "revision": "5279c63e3eafac38854e84dc24f0e4f6"
  }, {
    "url": "outlets",
    "revision": "5806d8a74c9e1463f99454a6d604be75"
  }, {
    "url": "events/sajiva/detail",
    "revision": "f5a063818dda371cf698e2ad04b32325"
  }, {
    "url": "events/lucky-cat/detail",
    "revision": "fc8b796b5f2b5c901a8abfa996aeaf43"
  }, {
    "url": "events/dim-sum-inc-signature",
    "revision": "4b1d372726273644eacabbd95ab0e740"
  }, {
    "url": "events/dim-sum-inc-signature/detail",
    "revision": "e0f8ab98176b119a6c2ce76094c42c6a"
  }, {
    "url": "events/dim-sum-inc/detail",
    "revision": "e37f8fe3d5fbad82e5632c5a55e4cb30"
  }, {
    "url": "dim-sum-inc-signature",
    "revision": "c8ee87770b1586e8dcca80bde62ba950"
  }, {
    "url": "_astro/workbox-window.prod.es5.BBnX5xw4.js",
    "revision": null
  }, {
    "url": "_astro/restaurantData.Dbw2cmyg.css",
    "revision": null
  }, {
    "url": "_astro/pagination.CCWFfXP7.js",
    "revision": null
  }, {
    "url": "_astro/page.BMJwY8xr.js",
    "revision": null
  }, {
    "url": "_astro/navigation.DFZ_-MAW.css",
    "revision": null
  }, {
    "url": "_astro/hash-navigation.DWN6sI3_.js",
    "revision": null
  }, {
    "url": "_astro/dev.DmEZMACI.js",
    "revision": null
  }, {
    "url": "_astro/client.B9iCGMzx.js",
    "revision": null
  }, {
    "url": "_astro/autoplay.RCJFMAeJ.js",
    "revision": null
  }, {
    "url": "_astro/_...promotion_.astro_astro_type_script_index_0_lang.CuH5hU4V.js",
    "revision": null
  }, {
    "url": "_astro/_...events_.astro_astro_type_script_index_0_lang.BZX_MgxK.js",
    "revision": null
  }, {
    "url": "_astro/SearchOverlayMenu.CrOdTWpP.js",
    "revision": null
  }, {
    "url": "_astro/RestaurantHome.CLLd0Bc7.js",
    "revision": null
  }, {
    "url": "_astro/PwaUpdatePrompt.CSXZa-_o.js",
    "revision": null
  }, {
    "url": "_astro/PromotionCarousel.astro_astro_type_script_index_0_lang.ByXr5aa_.js",
    "revision": null
  }, {
    "url": "_astro/HomeMenuBrowser.XDdWbV4n.js",
    "revision": null
  }, {
    "url": "_astro/FullscreenViewerSwiper.DgB6ODLD.css",
    "revision": null
  }, {
    "url": "_astro/FullscreenViewerSwiper.C3kNpGzn.js",
    "revision": null
  }, {
    "url": "favicon.svg",
    "revision": "263ab746747111bd141fd77f1a958a55"
  }, {
    "url": "favicon-sajiva.svg",
    "revision": "4c3d5c9fe2d1ede15641c403988a0eda"
  }, {
    "url": "favicon-lc.svg",
    "revision": "b302d56e3611299a6e8d5bca9a215d27"
  }, {
    "url": "favicon-dsi.svg",
    "revision": "263ab746747111bd141fd77f1a958a55"
  }, {
    "url": "manifest.webmanifest",
    "revision": "27a1d5be345fb34f5a3a103d558dd400"
  }], {
    "directoryIndex": "index.html"
  });
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(({
    url
  }) => url.pathname.startsWith('/images/'), new workbox.CacheFirst({
    "cacheName": "menu-images",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 600,
      maxAgeSeconds: 2592000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(({
    url
  }) => url.pathname.startsWith('/fonts/'), new workbox.CacheFirst({
    "cacheName": "fonts",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 20,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
