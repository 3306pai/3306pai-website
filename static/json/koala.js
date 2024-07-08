!(function (t) {
  if (window.ko) return;
  (window.ko = []),
    ["identify", "track", "removeListeners", "open", "on", "off", "qualify", "ready"].forEach(function (t) {
      ko[t] = function () {
        var n = [].slice.call(arguments);
        return n.unshift(t), ko.push(n), ko;
      };
    });
  var n = document.createElement("script");
  (n.async = !0), n.setAttribute("src", "https://cdn.getkoala.com/v1/pk_d72e634399dae9be5aa6aad1d462877dc340/sdk.js"), (document.body || document.head).appendChild(n);
})();
