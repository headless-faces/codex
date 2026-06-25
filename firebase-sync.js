// ============================================================
//  firebase-sync.js — shared Realtime Database sync for the codex.
//
//  A page registers a binding by pushing to window.__FBSYNC (this file
//  may load BEFORE or AFTER the push — order does not matter):
//
//    (window.__FBSYNC = window.__FBSYNC || []).push({
//      path:   'inventory',                      // Realtime DB path
//      object: true,                             // optional: value is a plain object (default: array)
//      merge:  false,                            // optional: additive merge (e.g. unlock maps)
//      get:    function () { return state; },                    // current local value
//      set:    function (incoming) { state = incoming; render(); } // apply remote + re-render
//    });
//
//  Then load this file once per page:  <script src="../../firebase-sync.js"></script>
//
//  Local changes are detected automatically (no need to hook save()).
// ============================================================
(function () {
  var CONFIG = {
    apiKey: "AIzaSyBIKnm0FHWVtUgB3ygYzgPQVcI5d3w9Mx4",
    authDomain: "headless-faces.firebaseapp.com",
    databaseURL: "https://headless-faces-default-rtdb.firebaseio.com",
    projectId: "headless-faces",
    storageBucket: "headless-faces.firebasestorage.app",
    messagingSenderId: "1020491419919",
    appId: "1:1020491419919:web:8306a3559dfa8c0eadae7a"
  };

  var fbPromise = null;
  function loadFb() {
    if (!fbPromise) {
      fbPromise = Promise.all([
        import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'),
        import('https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js')
      ]).then(function (m) {
        var app = m[0].initializeApp(CONFIG);
        return { api: m[1], db: m[1].getDatabase(app) };
      });
    }
    return fbPromise;
  }

  function toArr(x) { return Array.isArray(x) ? x : (x ? Object.keys(x).map(function (k) { return x[k]; }) : []); }

  function start(b) {
    var isObj = b.object || b.merge;
    function norm(v) { return isObj ? (v || {}) : toArr(v); }
    function snap() { return JSON.stringify(b.get()); }
    var ref = null, setFn = null, applying = false, last = null;

    loadFb().then(function (fb) {
      ref = fb.api.ref(fb.db, b.path);
      setFn = fb.api.set;
      last = snap();

      fb.api.onValue(ref, function (s) {
        var raw = s.val();
        if (raw === null || raw === undefined) {
          // database empty: seed it from local data if we have any
          var local = b.get();
          var has = isObj ? (local && Object.keys(local).length) : (local && local.length);
          if (has) setFn(ref, JSON.parse(snap()));
          return;
        }
        var incoming = norm(raw);
        if (b.merge) {
          var cur = b.get(), changed = false;
          Object.keys(incoming).forEach(function (k) { if (incoming[k] && !cur[k]) { cur[k] = incoming[k]; changed = true; } });
          if (changed) { applying = true; b.set(cur); applying = false; }
          last = snap();
          return;
        }
        if (JSON.stringify(incoming) === snap()) { last = snap(); return; }
        applying = true; b.set(incoming); applying = false;
        last = snap();
      }, function (err) { console.warn('Firebase read failed for ' + b.path + ' (check database rules)', err); });

      // push local changes up (decoupled from the page's own save())
      setInterval(function () {
        if (applying || !ref) return;
        var now = snap();
        if (now !== last) {
          last = now;
          setFn(ref, JSON.parse(now)).catch(function (e) { console.warn('Firebase write failed for ' + b.path, e); });
        }
      }, 1200);
    }).catch(function (e) { console.warn('Firebase unavailable for ' + b.path + ', using local storage only', e); });
  }

  // process anything queued before we loaded, then handle live registrations
  var pending = (window.__FBSYNC && window.__FBSYNC.length) ? window.__FBSYNC.slice() : [];
  window.__FBSYNC = { push: function (b) { start(b); } };
  pending.forEach(start);
})();
