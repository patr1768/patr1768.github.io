require([
  'esri/layers/FeatureLayer'
], function(mod0) {
  var adoptables = [{
    name: 'esri/layers/FeatureLayer',
    obj: mod0
  }];
  var isVendor = new RegExp('vendor(.*js)');

  function recursiveRequire(i, scripts) {
    if (i >= scripts.length) {
      return;
    }
    require([scripts[i]], function() {
      if (isVendor.test(scripts[i])) {
        adoptables.forEach(function(adoptable) {
          enifed(adoptable.name, [], function() {
            if (typeof adoptable.obj === 'function' || typeof adoptable.obj === 'object') {
              return new Proxy(adoptable.obj, {
                get(obj, prop) {
                  return prop === 'default' && !(prop in obj) ? obj : obj[prop];
                }
              });
            }
            return adoptable.obj;
          });
        });
      }
      recursiveRequire(++i, scripts);
    });
  }
  recursiveRequire(0, ["/testem.js", "/assets/vendor.js", "/assets/test-support.js", "/assets/explore-tabulator.js", "/assets/tests.js", "/assets/after-amd-loading-tests.js"]);
});