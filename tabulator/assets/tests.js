'use strict';

enifed("explore-tabulator/tests/integration/components/demo-footer-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | demo-footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                <DemoFooter />
                                                              */
      { "id": "vWkTOkmv", "block": "{\"symbols\":[],\"statements\":[[8,\"demo-footer\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                
                                                                    <DemoFooter>
                                                                      template block text
                                                                    </DemoFooter>
                                                                  
                                                              */
      { "id": "wsMtzUJQ", "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"demo-footer\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
enifed("explore-tabulator/tests/integration/components/table-five-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | table-five', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                <TableFive />
                                                              */
      { "id": "A+5TI2W1", "block": "{\"symbols\":[],\"statements\":[[8,\"table-five\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                
                                                                    <TableFive>
                                                                      template block text
                                                                    </TableFive>
                                                                  
                                                              */
      { "id": "46+slDF1", "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"table-five\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
enifed("explore-tabulator/tests/integration/components/table-four-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | table-four', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                <TableFour />
                                                              */
      { "id": "O8SNf+X4", "block": "{\"symbols\":[],\"statements\":[[8,\"table-four\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                
                                                                    <TableFour>
                                                                      template block text
                                                                    </TableFour>
                                                                  
                                                              */
      { "id": "ig59NwG4", "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"table-four\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
enifed("explore-tabulator/tests/integration/components/table-one-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | table-one', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                <TableOne />
                                                              */
      { "id": "kER8ewTv", "block": "{\"symbols\":[],\"statements\":[[8,\"table-one\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                
                                                                    <TableOne>
                                                                      template block text
                                                                    </TableOne>
                                                                  
                                                              */
      { "id": "Tvhx2Gn0", "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"table-one\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
enifed("explore-tabulator/tests/integration/components/table-three-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | table-three', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                <TableThree />
                                                              */
      { "id": "V/qpKOH2", "block": "{\"symbols\":[],\"statements\":[[8,\"table-three\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                
                                                                    <TableThree>
                                                                      template block text
                                                                    </TableThree>
                                                                  
                                                              */
      { "id": "avo+CRJI", "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"table-three\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
enifed("explore-tabulator/tests/integration/components/table-two-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | table-two', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                <TableTwo />
                                                              */
      { "id": "X+7omaY5", "block": "{\"symbols\":[],\"statements\":[[8,\"table-two\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
                                                                
                                                                    <TableTwo>
                                                                      template block text
                                                                    </TableTwo>
                                                                  
                                                              */
      { "id": "oqFRx+qq", "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"table-two\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}", "meta": {} }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
enifed("explore-tabulator/tests/test-helper", ["explore-tabulator/app", "explore-tabulator/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
enifed("explore-tabulator/tests/unit/routes/table-demo-five-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | table-demo-five', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:table-demo-five');
      assert.ok(route);
    });
  });
});
enifed("explore-tabulator/tests/unit/routes/table-demo-four-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | table-demo-four', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:table-demo-four');
      assert.ok(route);
    });
  });
});
enifed("explore-tabulator/tests/unit/routes/table-demo-one-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | table-demo-one', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:table-demo-one');
      assert.ok(route);
    });
  });
});
enifed("explore-tabulator/tests/unit/routes/table-demo-three-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | table-demo-three', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:table-demo-three');
      assert.ok(route);
    });
  });
});
enifed("explore-tabulator/tests/unit/routes/table-demo-two-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | table-demo-two', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:table-demo-two');
      assert.ok(route);
    });
  });
});
enifed('explore-tabulator/config/environment', [], function () {
  var prefix = 'explore-tabulator';
  try {
    var metaName = prefix + '/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    var config = JSON.parse(decodeURIComponent(rawConfig));

    var exports = { 'default': config };

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;
  }
  catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '".');
  }

});

eriuqer('explore-tabulator/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map