'use strict';



;enifed("explore-tabulator/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    } });

});
;enifed("explore-tabulator/app", ["exports", "ember-resolver", "ember-load-initializers", "explore-tabulator/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }}



  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;enifed("explore-tabulator/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    } });

});
;enifed("explore-tabulator/components/demo-footer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
                                                            <div class="demo-footer">
                                                            <LinkTo @route="table-demo-one" class="button">Table 1</LinkTo>
                                                            <LinkTo @route="table-demo-two" class="button">Table 2</LinkTo>
                                                            <LinkTo @route="table-demo-three" class="button">Table 3</LinkTo>
                                                            <LinkTo @route="table-demo-four" class="button">Table 4</LinkTo>
                                                            <LinkTo @route="table-demo-five" class="button">Table 5</LinkTo>
                                                          </div>
                                                          */
  { "id": "BAwFrhHS", "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"demo-footer\"],[12],[2,\"\\n  \"],[8,\"link-to\",[[24,0,\"button\"]],[[\"@route\"],[\"table-demo-one\"]],[[\"default\"],[{\"statements\":[[2,\"Table 1\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[8,\"link-to\",[[24,0,\"button\"]],[[\"@route\"],[\"table-demo-two\"]],[[\"default\"],[{\"statements\":[[2,\"Table 2\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[8,\"link-to\",[[24,0,\"button\"]],[[\"@route\"],[\"table-demo-three\"]],[[\"default\"],[{\"statements\":[[2,\"Table 3\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[8,\"link-to\",[[24,0,\"button\"]],[[\"@route\"],[\"table-demo-four\"]],[[\"default\"],[{\"statements\":[[2,\"Table 4\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[8,\"link-to\",[[24,0,\"button\"]],[[\"@route\"],[\"table-demo-five\"]],[[\"default\"],[{\"statements\":[[2,\"Table 5\"]],\"parameters\":[]}]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}", "meta": { "moduleName": "explore-tabulator/components/demo-footer.hbs" } });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;enifed("explore-tabulator/components/ember-tabulator", ["exports", "ember-tabulator/components/ember-tabulator"], function (_exports, _emberTabulator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberTabulator.default;
    } });

});
;enifed("explore-tabulator/components/table-five", ["exports", "@glimmer/component", "esri/layers/FeatureLayer"], function (_exports, _component, _FeatureLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) {if (!descriptor) return;Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 });}

  function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {var desc = {};Object.keys(descriptor).forEach(function (key) {desc[key] = descriptor[key];});desc.enumerable = !!desc.enumerable;desc.configurable = !!desc.configurable;if ('value' in desc || desc.initializer) {desc.writable = true;}desc = decorators.slice().reverse().reduce(function (desc, decorator) {return decorator(target, property, desc) || desc;}, desc);if (context && desc.initializer !== void 0) {desc.value = desc.initializer ? desc.initializer.call(context) : void 0;desc.initializer = undefined;}if (desc.initializer === void 0) {Object.defineProperty(target, property, desc);desc = null;}return desc;}

  function _initializerWarningHelper(descriptor, context) {throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');}

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
                                                            <EmberTabulator
                                                            {{did-insert this.setData}}
                                                            @height="600px"
                                                            @headerSort={{true}}
                                                            @resizableColumns={{true}}
                                                            @movableColumns={{true}}
                                                            @columns={{this.columns}}
                                                            @data={{this.rows}}
                                                            @dataTree={{true}}
                                                            @dataTreeStartExpanded={{true}}
                                                            @pagination="local"
                                                            @paginationSize={{20}}
                                                          />
                                                          */
  { "id": "jv528/yx", "block": "{\"symbols\":[],\"statements\":[[8,\"ember-tabulator\",[[4,[38,0],[[32,0,[\"setData\"]]],null]],[[\"@height\",\"@headerSort\",\"@resizableColumns\",\"@movableColumns\",\"@columns\",\"@data\",\"@dataTree\",\"@dataTreeStartExpanded\",\"@pagination\",\"@paginationSize\"],[\"600px\",true,true,true,[32,0,[\"columns\"]],[32,0,[\"rows\"]],true,true,\"local\",20]],null]],\"hasEval\":false,\"upvars\":[\"did-insert\"]}", "meta": { "moduleName": "explore-tabulator/components/table-five.hbs" } });

  let TestTableFourComponent = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._action, (_class = (_temp = class TestTableFourComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "featureResponse", _descriptor, this);

      _initializerDefineProperty(this, "columns", _descriptor2, this);

      _initializerDefineProperty(this, "rows", _descriptor3, this);

      this.featureLayer = new _FeatureLayer.default({
        url: "https://services8.arcgis.com/vrKxMj6W1o5wlmJi/arcgis/rest/services/covid_deaths_usafacts/FeatureServer" });

    } // custom groupBy Method
    // @params: dictionary, key -> dictionary


    separateByKey(xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    }

    async setData() {
      // bring in data through esri js api
      const featureSet = await this.featureLayer.queryFeatures();
      this.featureResponse = featureSet; // these are fields that shouldn't render on the table

      const toExclude = ["State", "stateFIPS", "countyFIPS", "ObjectId"]; // set columns

      this.columns = [{
        title: "State",
        field: "State",
        hozAlign: "center",
        minWidth: 150,
        frozen: true },
      {
        title: "County",
        field: "County_Name",
        hozAlign: "center",
        minWidth: 150,
        frozen: true }];

      this.featureResponse.fields.forEach(field => {
        if (field.alias.startsWith("6") || field.alias.startsWith("7")) {
          // if (!toExclude.includes(field.alias)) {
          this.columns.push({
            title: field.alias,
            field: field.name,
            hozAlign: "center" });

        }
      }); // set rows

      const rowFeature = this.featureResponse.features.mapBy("attributes");
      const dataByState = this.separateByKey(rowFeature, "State");
      Object.keys(dataByState).forEach(stateName => {
        this.rows.push({
          State: stateName,
          hozAlign: "right",
          _children: dataByState[stateName].map(item => {
            const {
              State,
              ...rest } =
            item;
            return { ...rest,
              hozAlign: "left" };

          }) });

      });
    }},

  _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "featureResponse", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null }),
  _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "columns", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    } }),
  _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "rows", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    } }),
  _applyDecoratedDescriptor(_class.prototype, "setData", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "setData"), _class.prototype)), _class));
  _exports.default = TestTableFourComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TestTableFourComponent);
});
;enifed("explore-tabulator/components/table-four", ["exports", "@glimmer/component", "esri/layers/FeatureLayer", "@amcharts/amcharts4/core", "@amcharts/amcharts4/charts", "@amcharts/amcharts4/themes/microchart"], function (_exports, _component, _FeatureLayer, am4core, am4charts, _microchart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) {if (!descriptor) return;Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 });}

  function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {var desc = {};Object.keys(descriptor).forEach(function (key) {desc[key] = descriptor[key];});desc.enumerable = !!desc.enumerable;desc.configurable = !!desc.configurable;if ('value' in desc || desc.initializer) {desc.writable = true;}desc = decorators.slice().reverse().reduce(function (desc, decorator) {return decorator(target, property, desc) || desc;}, desc);if (context && desc.initializer !== void 0) {desc.value = desc.initializer ? desc.initializer.call(context) : void 0;desc.initializer = undefined;}if (desc.initializer === void 0) {Object.defineProperty(target, property, desc);desc = null;}return desc;}

  function _initializerWarningHelper(descriptor, context) {throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');}

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
                                                            <EmberTabulator
                                                            {{did-insert this.setData}}
                                                            @height="600px"
                                                            @headerSort={{true}}
                                                            @resizableColumns={{true}}
                                                            @movableColumns={{true}}
                                                            @columns={{this.columns}}
                                                            @data={{this.rows}}
                                                            @rowFormatter={{this.rowFormatter}}
                                                            @initialSort={{this.initialSort}}
                                                          />
                                                          */
  { "id": "ZlNtGbXT", "block": "{\"symbols\":[],\"statements\":[[8,\"ember-tabulator\",[[4,[38,0],[[32,0,[\"setData\"]]],null]],[[\"@height\",\"@headerSort\",\"@resizableColumns\",\"@movableColumns\",\"@columns\",\"@data\",\"@rowFormatter\",\"@initialSort\"],[\"600px\",true,true,true,[32,0,[\"columns\"]],[32,0,[\"rows\"]],[32,0,[\"rowFormatter\"]],[32,0,[\"initialSort\"]]]],null]],\"hasEval\":false,\"upvars\":[\"did-insert\"]}", "meta": { "moduleName": "explore-tabulator/components/table-four.hbs" } });

  am4core.useTheme(_microchart.default);
  let TableFour = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._action, _dec7 = Ember._action, (_class = (_temp = class TableFour extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "featureResponse", _descriptor, this);

      _initializerDefineProperty(this, "columns", _descriptor2, this);

      _initializerDefineProperty(this, "rows", _descriptor3, this);

      _initializerDefineProperty(this, "initialSort", _descriptor4, this);

      _initializerDefineProperty(this, "chartDataFeed", _descriptor5, this);

      this.featureLayer = new _FeatureLayer.default({
        url: "https://services8.arcgis.com/vrKxMj6W1o5wlmJi/arcgis/rest/services/covid19_cdc_data/FeatureServer" });

      this.DANGER = "rgba(195, 74, 78, 0.3)";
      this.WARNING = "rgba(255, 193, 7, 0.3)";
      this.NORMAL = "rgba(139, 195, 74, 0.3)";
      this.PRIMARY_BG = "white";
    } // custom groupBy Method
    // @params Array, Array -> MapIterator


    groupBy(arr, fields) {
      return arr.filter(obj => obj.State !== "United States").reduce((r, o) => {
        const key = o.State;
        const item = r.get(key) || Object.assign({}, o, fields.reduce((a, b) => (a[b] = 0, a), {}));
        fields.forEach(field => {
          item[field] += o[field];
        });
        return r.set(key, item);
      }, new Map()).values();
    }

    processChartData(arr) {
      const dataByState = arr.reduce(function (r, a) {
        r[a.State] = r[a.State] || [];
        r[a.State].push(a);
        return r;
      }, Object.create(null));
      const result = {};
      Object.entries(dataByState).forEach(data => {
        const stateName = data[0];
        const stateData = data[1];
        const dataByMonth = {};
        stateData.forEach(rowData => {
          const month = new Date(rowData.Start_week).getMonth();

          if (!(month in dataByMonth)) {
            dataByMonth[month] = 0;
          }

          dataByMonth[month] += rowData.COVID_19_Deaths;
        });
        result[stateName] = [];

        for (const [key, value] of Object.entries(dataByMonth)) {
          result[stateName].push({
            date: new Date(2020, key, 0, 0, 0, 0, 0),
            value: value });

        }
      });
      return result;
    }

    getDynamicBgColor(val) {
      const bgColor = val > 100 ? this.DANGER : val > 50 ? this.WARNING : this.NORMAL;
      return bgColor;
    }

    updateFilter() {
      //Define variables for input elements
      var fieldEl = document.getElementById("filter-field");
      var typeEl = document.getElementById("filter-type");
      var valueEl = document.getElementById("filter-value");
      var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
      var typeVal = typeEl.options[typeEl.selectedIndex].value;
      var filter = filterVal;

      if (filterVal == "function") {
        typeEl.disabled = true;
        valueEl.disabled = true;
      } else {
        typeEl.disabled = false;
        valueEl.disabled = false;
      }

      if (filterVal) {
        this.table.setFilter(filter, typeVal, valueEl.value);
      }
    }

    async setData() {
      console.log("setting data..."); // bring in data through esri js api

      const featureSet = await this.featureLayer.queryFeatures();
      this.featureResponse = featureSet;
      const toInclude = ["COVID-19 Deaths", "Pneumonia Deaths", "Influenza Deaths"]; // set columns

      this.columns = [{
        title: "",
        field: "State",
        headerSort: false,
        width: 200,
        hozAlign: "center",
        vertAlign: "middle" },
      {
        title: "Cause of Death",
        columns: [] },
      {
        title: "Fatalities",
        columns: [] }];

      this.featureResponse.fields.forEach(field => {
        if (toInclude.includes(field.alias)) this.columns[1].columns.push({
          title: field.alias,
          field: `${field.name}`,
          hozAlign: "center",
          minWidth: 200,
          vertAlign: "middle",
          bottomCalc: "avg",
          bottomCalcParams: {
            precision: 1 },

          formatter: function (cell) {
            const cellField = cell.getField();

            if (cellField === "COVID_19_Deaths") {
              const bgColor = this.getDynamicBgColor(cell.getValue());
              cell.getElement().style.backgroundColor = bgColor;
            }

            return cell.getValue();
          }.bind(this) });

      });

      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      } // set rows


      const rowFeature = this.featureResponse.features.mapBy("attributes");
      this.rows = Array.from(this.groupBy(rowFeature, ["COVID_19_Deaths", "Pneumonia_Deaths", "Influenza_Deaths"])); // process data to feed into the inline-charts

      this.chartDataFeed = this.processChartData(rowFeature);
      this.rows.forEach(rowData => {
        rowData.Total_Deaths = this.chartDataFeed[rowData.State];
      });
      this.columns[2].columns.push({
        // add Total_Deaths column at the end
        title: "COVID-19 Death Trend",
        field: "Total_Deaths",
        headerSort: false,
        hozAlign: "left",
        formatter: function (cell, formatterParams, onRendered) {
          onRendered(() => {
            let currCell = cell.getElement();
            currCell.style.backgroundColor = "rgba(167, 189, 255, 0.2)";
            currCell.id = "chart" + getRandomInt(1000000000);
            const chart = am4core.create(currCell.id, am4charts.XYChart);
            chart.data = cell.getValue();
            chart.padding(0, 0, 0, 0);
            const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.labels.template.disabled = true;
            dateAxis.startLocation = 0.2;
            dateAxis.endLocation = 0.5;
            dateAxis.cursorTooltipEnabled = false;
            const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.min = 0;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.baseGrid.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.cursorTooltipEnabled = false;
            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineY.disabled = true;
            const series = chart.series.push(new am4charts.LineSeries());
            series.tooltipText = "{date}: [bold]{value}";
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "value";
            series.tensionX = 0.8;
            series.stroke = am4core.color("purple");
            series.strokeWidth = 1; // render data points as bullets

            const bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.opacity = 0;
            bullet.circle.propertyFields.opacity = "opacity";
            bullet.circle.radius = 2;
          });
        }.bind(this) });

    }},

  _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "featureResponse", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null }),
  _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "columns", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    } }),
  _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "rows", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    } }),
  _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "initialSort", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        column: "State",
        dir: "asc" }];

    } }),
  _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "chartDataFeed", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null }),
  _applyDecoratedDescriptor(_class.prototype, "updateFilter", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "updateFilter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setData", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "setData"), _class.prototype)), _class));
  _exports.default = TableFour;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TableFour);
});
;enifed("explore-tabulator/components/table-one", ["exports", "@glimmer/component", "esri/layers/FeatureLayer"], function (_exports, _component, _FeatureLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) {if (!descriptor) return;Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 });}

  function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {var desc = {};Object.keys(descriptor).forEach(function (key) {desc[key] = descriptor[key];});desc.enumerable = !!desc.enumerable;desc.configurable = !!desc.configurable;if ('value' in desc || desc.initializer) {desc.writable = true;}desc = decorators.slice().reverse().reduce(function (desc, decorator) {return decorator(target, property, desc) || desc;}, desc);if (context && desc.initializer !== void 0) {desc.value = desc.initializer ? desc.initializer.call(context) : void 0;desc.initializer = undefined;}if (desc.initializer === void 0) {Object.defineProperty(target, property, desc);desc = null;}return desc;}

  function _initializerWarningHelper(descriptor, context) {throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');}

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
                                                            <EmberTabulator
                                                            {{did-insert this.setData}}
                                                            @height="65vh"
                                                            @headerSort={{true}}
                                                            @resizableColumns={{true}}
                                                            @movableColumns={{true}}
                                                            @columns={{this.columns}}
                                                            @data={{this.rows}}
                                                            @initialSort={{this.initialSort}}
                                                            @groupBy={{this.groupBy}}
                                                            @groupHeader={{this.groupHeader}}
                                                            @groupStartOpen={{this.groupStartOpen}}
                                                            @groupToggleElement="header"
                                                            @groupValues={{this.groupValues}}
                                                          />
                                                          */
  { "id": "+Nbbxsnf", "block": "{\"symbols\":[],\"statements\":[[8,\"ember-tabulator\",[[4,[38,0],[[32,0,[\"setData\"]]],null]],[[\"@height\",\"@headerSort\",\"@resizableColumns\",\"@movableColumns\",\"@columns\",\"@data\",\"@initialSort\",\"@groupBy\",\"@groupHeader\",\"@groupStartOpen\",\"@groupToggleElement\",\"@groupValues\"],[\"65vh\",true,true,true,[32,0,[\"columns\"]],[32,0,[\"rows\"]],[32,0,[\"initialSort\"]],[32,0,[\"groupBy\"]],[32,0,[\"groupHeader\"]],[32,0,[\"groupStartOpen\"]],\"header\",[32,0,[\"groupValues\"]]]],null]],\"hasEval\":false,\"upvars\":[\"did-insert\"]}", "meta": { "moduleName": "explore-tabulator/components/table-one.hbs" } });

  let TableOne = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._action, (_class = (_temp = class TableOne extends _component.default {
    // groupValues = [false, [621]];
    // groupValues = [[451, 611, 321], false]
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "featureResponse", _descriptor, this);

      _initializerDefineProperty(this, "columns", _descriptor2, this);

      _initializerDefineProperty(this, "rows", _descriptor3, this);

      _initializerDefineProperty(this, "initialSort", _descriptor4, this);

      this.featureLayer = new _FeatureLayer.default({
        url: "https://servicesdev.arcgis.com/zImu9NfARSUcVsy1/arcgis/rest/services/Naperville_Fire_Incidents/FeatureServer" });

      this.DANGER = "rgba(195, 74, 78, 0.3)";
      this.WARNING = "rgba(255, 193, 7, 0.3)";
      this.NORMAL = "rgba(139, 195, 74, 0.3)";
      this.PRIMARY_BG = "white";
    }

    getDynamicBgColor(val) {
      const bgColor = val > 100 ? this.DANGER : val > 50 ? this.WARNING : this.NORMAL;
      return bgColor;
    }

    groupBy(data) {
      // return data.Responding_Company + ' - ' + data.NFIRS_Code;
      return [data.Responding_Company, data.NFIRS_Code]; //  return data.NFIRS_Code;
      // return [ data.NFIRS_Code, data.Responding_Company ];
    }

    groupHeader(value, count, data, group) {
      return value + "<span style='color:#d00; margin-left:10px;'>(" + count + " items)</span>";
    }

    groupStartOpen(value, count, data, group) {
      return count < 50;
    }

    async setData() {
      console.log("setting data..."); // bring in data through esri js api

      const featureSet = await this.featureLayer.queryFeatures();
      this.featureResponse = featureSet;
      const toInclude = ["Call Date", "NFIRS Type", "NFIRS Code", "Responding Company", "Cause", "Station", "Station Number"]; // set columns

      this.columns = [];
      this.featureResponse.fields.forEach(field => {
        if (toInclude.includes(field.alias)) this.columns.push({
          title: field.alias,
          field: `${field.name}`,
          hozAlign: "center",
          minWidth: 150 // formatter: function (cell) {
          //   const cellField = cell.getField();
          //   if (cellField === "COVID_19_Deaths") {
          //     const bgColor = this.getDynamicBgColor(cell.getValue());
          //     cell.getElement().style.backgroundColor = bgColor;
          //   }
          //   return cell.getValue();
          // }.bind(this),
        });

      }); // this.columns.push({
      //   // add Total_Deaths column at the end
      //   title: "COVID-19 Deaths / Total Deaths",
      //   field: "Total_Deaths",
      //   hozAlign: "left",
      //   minWidth: 150,
      //   formatter: "progress",
      //   formatterParams: {
      //     color: ["#a990d6"],
      //     legend: (value) => {
      //       return value + " %";
      //     },
      //     legendColor: "#333333",
      //     legendAlign: "center",
      //   },
      // });
      // set rows

      this.rows = [];
      const rowFeature = this.featureResponse.features.mapBy("attributes");
      rowFeature.forEach(feature => {
        this.rows.push({ ...feature,
          Call_Date: new Date(feature.Call_Date).toLocaleDateString("en-US"),
          // Start_week: new Date(feature.Start_week).toLocaleDateString("en-US"),
          End_Week: new Date(feature.End_Week).toLocaleDateString("en-US") });

      });
    }},

  _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "featureResponse", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null }),
  _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "columns", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    } }),
  _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "rows", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    } }),
  _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "initialSort", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        column: "Call_Date",
        dir: "asc" }];

    } }),
  _applyDecoratedDescriptor(_class.prototype, "setData", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "setData"), _class.prototype)), _class));
  _exports.default = TableOne;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TableOne);
});
;enifed("explore-tabulator/components/table-three", ["exports", "@glimmer/component", "esri/layers/FeatureLayer", "tabulator-tables"], function (_exports, _component, _FeatureLayer, _tabulatorTables) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) {if (!descriptor) return;Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 });}

  function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {var desc = {};Object.keys(descriptor).forEach(function (key) {desc[key] = descriptor[key];});desc.enumerable = !!desc.enumerable;desc.configurable = !!desc.configurable;if ('value' in desc || desc.initializer) {desc.writable = true;}desc = decorators.slice().reverse().reduce(function (desc, decorator) {return decorator(target, property, desc) || desc;}, desc);if (context && desc.initializer !== void 0) {desc.value = desc.initializer ? desc.initializer.call(context) : void 0;desc.initializer = undefined;}if (desc.initializer === void 0) {Object.defineProperty(target, property, desc);desc = null;}return desc;}

  function _initializerWarningHelper(descriptor, context) {throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');}

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
                                                            <div class="table-controls-wrapper">
                                                            <div class="table-controls">
                                                              Field:
                                                              <select id="filter-field" {{on "change" this.updateFilter}}>
                                                                <option></option>
                                                                <option value="State">State</option>
                                                                <option value="Start_week">Date</option>
                                                              </select>
                                                          
                                                              Type:
                                                              <select id="filter-type" {{on "change" this.updateFilter}}>
                                                                <option></option>
                                                                <option value="=">=</option>
                                                                <option value="like">like</option>
                                                              </select>
                                                          
                                                              Value:
                                                              <input id="filter-value" type="text" placeholder="Enter value to filter" {{on "keyup" this.updateFilter}}>
                                                            </div>
                                                          
                                                            <div class="table-controls">
                                                                <button {{on "click" (fn this.downloadAsFile "csv")}} id="download-csv">Download CSV</button>
                                                                <button {{on "click" (fn this.downloadAsFile "json")}} id="download-json">Download JSON</button>
                                                                <button {{on "click" (fn this.downloadAsFile "xlsx")}} id="download-xlsx">Download XLSX</button>
                                                            </div>
                                                          </div>
                                                          
                                                          <div {{did-insert this.setData}} id="demo-table-three"></div>
                                                          */
  { "id": "S4eOQBc5", "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"table-controls-wrapper\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"table-controls\"],[12],[2,\"\\n    Field:\\n    \"],[11,\"select\"],[24,1,\"filter-field\"],[4,[38,0],[\"change\",[32,0,[\"updateFilter\"]]],null],[12],[2,\"\\n      \"],[10,\"option\"],[12],[13],[2,\"\\n      \"],[10,\"option\"],[14,2,\"State\"],[12],[2,\"State\"],[13],[2,\"\\n      \"],[10,\"option\"],[14,2,\"Start_week\"],[12],[2,\"Date\"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    Type:\\n    \"],[11,\"select\"],[24,1,\"filter-type\"],[4,[38,0],[\"change\",[32,0,[\"updateFilter\"]]],null],[12],[2,\"\\n      \"],[10,\"option\"],[12],[13],[2,\"\\n      \"],[10,\"option\"],[14,2,\"=\"],[12],[2,\"=\"],[13],[2,\"\\n      \"],[10,\"option\"],[14,2,\"like\"],[12],[2,\"like\"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    Value:\\n    \"],[11,\"input\"],[24,1,\"filter-value\"],[24,\"placeholder\",\"Enter value to filter\"],[24,4,\"text\"],[4,[38,0],[\"keyup\",[32,0,[\"updateFilter\"]]],null],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"div\"],[14,0,\"table-controls\"],[12],[2,\"\\n      \"],[11,\"button\"],[24,1,\"download-csv\"],[4,[38,0],[\"click\",[30,[36,1],[[32,0,[\"downloadAsFile\"]],\"csv\"],null]],null],[12],[2,\"Download CSV\"],[13],[2,\"\\n      \"],[11,\"button\"],[24,1,\"download-json\"],[4,[38,0],[\"click\",[30,[36,1],[[32,0,[\"downloadAsFile\"]],\"json\"],null]],null],[12],[2,\"Download JSON\"],[13],[2,\"\\n      \"],[11,\"button\"],[24,1,\"download-xlsx\"],[4,[38,0],[\"click\",[30,[36,1],[[32,0,[\"downloadAsFile\"]],\"xlsx\"],null]],null],[12],[2,\"Download XLSX\"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[11,\"div\"],[24,1,\"demo-table-three\"],[4,[38,2],[[32,0,[\"setData\"]]],null],[12],[13]],\"hasEval\":false,\"upvars\":[\"on\",\"fn\",\"did-insert\"]}", "meta": { "moduleName": "explore-tabulator/components/table-three.hbs" } });

  let TableThree = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._action, _dec6 = Ember._action, _dec7 = Ember._action, (_class = (_temp = class TableThree extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "featureResponse", _descriptor, this);

      _initializerDefineProperty(this, "columns", _descriptor2, this);

      _initializerDefineProperty(this, "rows", _descriptor3, this);

      _initializerDefineProperty(this, "initialSort", _descriptor4, this);

      this.featureLayer = new _FeatureLayer.default({
        url: "https://services8.arcgis.com/vrKxMj6W1o5wlmJi/arcgis/rest/services/covid19_cdc_data/FeatureServer" });

      this.DANGER = "rgba(195, 74, 78, 0.3)";
      this.WARNING = "rgba(255, 193, 7, 0.3)";
      this.NORMAL = "rgba(139, 195, 74, 0.3)";
      this.PRIMARY_BG = "white";
    }

    getDynamicBgColor(val) {
      const bgColor = val > 100 ? this.DANGER : val > 50 ? this.WARNING : this.NORMAL;
      return bgColor;
    }

    rowFormatter(row) {
      const data = row.getData();
      const covidOverTotal = data.Total_Deaths && data.Total_Deaths > 0 ? (data.COVID_19_Deaths * 100 / data.Total_Deaths).toFixed(2) : null;
      const totalDeathsCell = row.getCell("Total_Deaths");
      totalDeathsCell.setValue(covidOverTotal);
    }

    downloadAsFile(format) {
      this.table.download(format, `data.${format}`);
    }

    updateFilter() {
      //Define variables for input elements
      var fieldEl = document.getElementById("filter-field");
      var typeEl = document.getElementById("filter-type");
      var valueEl = document.getElementById("filter-value");
      var filterVal = fieldEl.options[fieldEl.selectedIndex].value;
      var typeVal = typeEl.options[typeEl.selectedIndex].value;
      var filter = filterVal;

      if (filterVal == "function") {
        typeEl.disabled = true;
        valueEl.disabled = true;
      } else {
        typeEl.disabled = false;
        valueEl.disabled = false;
      }

      if (filterVal) {
        this.table.setFilter(filter, typeVal, valueEl.value);
      }
    }

    async setData() {
      console.log("setting data..."); // bring in data through esri js api

      const featureSet = await this.featureLayer.queryFeatures();
      this.featureResponse = featureSet;
      const toInclude = ["COVID-19 Deaths", "Pneumonia Deaths", "Influenza Deaths"]; // set columns

      this.columns = [{
        title: "Week of",
        field: "Start_week",
        width: 160,
        hozAlign: "center" },
      {
        title: "State",
        field: "State",
        headerFilter: true,
        width: 160,
        hozAlign: "center" },
      {
        title: "Cause of Death",
        columns: [] },
      {
        title: "Fatalities",
        columns: [] }];

      this.featureResponse.fields.forEach(field => {
        if (toInclude.includes(field.alias)) this.columns[2].columns.push({
          title: field.alias === "Start week" ? "Week of" : field.alias,
          field: `${field.name}`,
          hozAlign: "center",
          minWidth: 200,
          bottomCalc: "avg",
          bottomCalcParams: {
            precision: 1 },

          formatter: function (cell) {
            const cellField = cell.getField();

            if (cellField === "COVID_19_Deaths") {
              const bgColor = this.getDynamicBgColor(cell.getValue());
              cell.getElement().style.backgroundColor = bgColor;
            }

            return cell.getValue();
          }.bind(this) });

      });
      this.columns[3].columns.push({
        // add Total_Deaths column at the end
        title: "COVID-19 Deaths / Total Deaths",
        field: "Total_Deaths",
        hozAlign: "left",
        minWidth: 150,
        formatter: "progress",
        formatterParams: {
          color: ["#a990d6"],
          legend: value => {
            return value + " %";
          },
          legendColor: "#333333",
          legendAlign: "center" } });


      const rowFeature = this.featureResponse.features.mapBy("attributes"); // set rows

      this.rows = [];
      rowFeature.forEach(feature => {
        this.rows.push({ ...feature,
          Data_as_of: new Date(feature.Data_as_of).toLocaleDateString("en-US"),
          Start_week: new Date(feature.Start_week).toLocaleDateString("en-US"),
          End_Week: new Date(feature.End_Week).toLocaleDateString("en-US") });

      });
      this.table = new _tabulatorTables.default("#demo-table-three", {
        height: "65vh",
        columns: this.columns,
        data: this.rows,
        rowFormatter: this.rowFormatter,
        initialSort: this.initialSort,
        headerSort: true,
        resizableColumns: true,
        movableColumns: true });

    }},

  _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "featureResponse", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null }),
  _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "columns", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    } }),
  _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "rows", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    } }),
  _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "initialSort", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        column: "State",
        dir: "asc" }];

    } }),
  _applyDecoratedDescriptor(_class.prototype, "downloadAsFile", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "downloadAsFile"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateFilter", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "updateFilter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setData", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "setData"), _class.prototype)), _class));
  _exports.default = TableThree;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TableThree);
});
;enifed("explore-tabulator/components/table-two", ["exports", "@glimmer/component", "esri/layers/FeatureLayer"], function (_exports, _component, _FeatureLayer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) {if (!descriptor) return;Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 });}

  function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {var desc = {};Object.keys(descriptor).forEach(function (key) {desc[key] = descriptor[key];});desc.enumerable = !!desc.enumerable;desc.configurable = !!desc.configurable;if ('value' in desc || desc.initializer) {desc.writable = true;}desc = decorators.slice().reverse().reduce(function (desc, decorator) {return decorator(target, property, desc) || desc;}, desc);if (context && desc.initializer !== void 0) {desc.value = desc.initializer ? desc.initializer.call(context) : void 0;desc.initializer = undefined;}if (desc.initializer === void 0) {Object.defineProperty(target, property, desc);desc = null;}return desc;}

  function _initializerWarningHelper(descriptor, context) {throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');}

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
                                                            <EmberTabulator
                                                            {{did-insert this.setData}}
                                                            @height="65vh"
                                                            @groupBy="State"
                                                            @headerSort={{true}}
                                                            @resizableColumns={{true}}
                                                            @movableColumns={{true}}
                                                            @columns={{this.columns}}
                                                            @data={{this.rows}}
                                                            @rowFormatter={{this.rowFormatter}}
                                                            @initialSort={{this.initialSort}}
                                                          />
                                                          */
  { "id": "qGtKQP8l", "block": "{\"symbols\":[],\"statements\":[[8,\"ember-tabulator\",[[4,[38,0],[[32,0,[\"setData\"]]],null]],[[\"@height\",\"@groupBy\",\"@headerSort\",\"@resizableColumns\",\"@movableColumns\",\"@columns\",\"@data\",\"@rowFormatter\",\"@initialSort\"],[\"65vh\",\"State\",true,true,true,[32,0,[\"columns\"]],[32,0,[\"rows\"]],[32,0,[\"rowFormatter\"]],[32,0,[\"initialSort\"]]]],null]],\"hasEval\":false,\"upvars\":[\"did-insert\"]}", "meta": { "moduleName": "explore-tabulator/components/table-two.hbs" } });

  let TableTwo = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._action, (_class = (_temp = class TableTwo extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "featureResponse", _descriptor, this);

      _initializerDefineProperty(this, "columns", _descriptor2, this);

      _initializerDefineProperty(this, "rows", _descriptor3, this);

      _initializerDefineProperty(this, "initialSort", _descriptor4, this);

      this.featureLayer = new _FeatureLayer.default({
        url: "https://services8.arcgis.com/vrKxMj6W1o5wlmJi/arcgis/rest/services/covid19_cdc_data/FeatureServer" });

      this.DANGER = "rgba(195, 74, 78, 0.3)";
      this.WARNING = "rgba(255, 193, 7, 0.3)";
      this.NORMAL = "rgba(139, 195, 74, 0.3)";
      this.PRIMARY_BG = "white";
    }

    getDynamicBgColor(val) {
      const bgColor = val > 100 ? this.DANGER : val > 50 ? this.WARNING : this.NORMAL;
      return bgColor;
    }

    rowFormatter(row) {
      const data = row.getData();
      const covidOverTotal = data.Total_Deaths && data.Total_Deaths > 0 ? (data.COVID_19_Deaths * 100 / data.Total_Deaths).toFixed(2) : null;
      const totalDeathsCell = row.getCell("Total_Deaths");
      totalDeathsCell.setValue(covidOverTotal);
    }

    async setData() {
      console.log("setting data..."); // bring in data through esri js api

      const featureSet = await this.featureLayer.queryFeatures();
      this.featureResponse = featureSet;
      const toInclude = ["COVID-19 Deaths", "Pneumonia Deaths", "Influenza Deaths"]; // set columns

      this.columns = [{
        title: "Week of",
        field: "Start_week",
        width: 160,
        hozAlign: "center" },
      {
        title: "State",
        field: "State",
        width: 160,
        hozAlign: "center" },
      {
        title: "Cause of Death",
        columns: [] },
      {
        title: "Fatalities",
        columns: [] }];

      this.featureResponse.fields.forEach(field => {
        if (toInclude.includes(field.alias)) this.columns[2].columns.push({
          title: field.alias === "Start week" ? "Week of" : field.alias,
          field: `${field.name}`,
          hozAlign: "center",
          minWidth: 200,
          bottomCalc: "avg",
          bottomCalcParams: {
            precision: 1 },

          formatter: function (cell) {
            const cellField = cell.getField();

            if (cellField === "COVID_19_Deaths") {
              const bgColor = this.getDynamicBgColor(cell.getValue());
              cell.getElement().style.backgroundColor = bgColor;
            }

            return cell.getValue();
          }.bind(this) });

      });
      this.columns[3].columns.push({
        // add Total_Deaths column at the end
        title: "COVID-19 Deaths / Total Deaths",
        field: "Total_Deaths",
        hozAlign: "left",
        minWidth: 150,
        formatter: "progress",
        formatterParams: {
          color: ["#a990d6"],
          legend: value => {
            return value + " %";
          },
          legendColor: "#333333",
          legendAlign: "center" } });

      // set rows

      this.rows = [];
      const rowFeature = this.featureResponse.features.mapBy("attributes");
      rowFeature.forEach(feature => {
        this.rows.push({ ...feature,
          Data_as_of: new Date(feature.Data_as_of).toLocaleDateString("en-US"),
          Start_week: new Date(feature.Start_week).toLocaleDateString("en-US"),
          End_Week: new Date(feature.End_Week).toLocaleDateString("en-US") });

      });
    }},

  _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "featureResponse", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null }),
  _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "columns", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    } }),
  _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "rows", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    } }),
  _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "initialSort", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        column: "State",
        dir: "asc" }];

    } }),
  _applyDecoratedDescriptor(_class.prototype, "setData", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "setData"), _class.prototype)), _class));
  _exports.default = TableTwo;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TableTwo);
});
;enifed("explore-tabulator/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    } });

});
;enifed("explore-tabulator/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    } });

});
;enifed("explore-tabulator/helpers/app-version", ["exports", "explore-tabulator/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;enifed("explore-tabulator/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;enifed("explore-tabulator/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;enifed("explore-tabulator/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "explore-tabulator/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version) };

  _exports.default = _default;
});
;enifed("explore-tabulator/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    } };


  _exports.default = _default;
});
;enifed("explore-tabulator/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    } });

});
;enifed("explore-tabulator/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  /*
                               This code initializes EmberData in an Ember application.
                             
                               It ensures that the `store` service is automatically injected
                               as the `store` property on all routes and controllers.
                             */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default };

  _exports.default = _default;
});
;enifed("explore-tabulator/initializers/export-application-global", ["exports", "explore-tabulator/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          } });

      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize };

  _exports.default = _default;
});
;enifed("explore-tabulator/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default };

  _exports.default = _default;
});
;enifed("explore-tabulator/modifiers/-private/ember-tabulator-init", ["exports", "ember-tabulator/modifiers/-private/ember-tabulator-init"], function (_exports, _emberTabulatorInit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberTabulatorInit.default;
    } });

});
;enifed("explore-tabulator/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    } });

});
;enifed("explore-tabulator/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    } });

});
;enifed("explore-tabulator/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    } });

});
;enifed("explore-tabulator/router", ["exports", "explore-tabulator/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }}



  _exports.default = Router;
  Router.map(function () {
    this.route('table-demo-one');
    this.route('table-demo-two');
    this.route('table-demo-three');
    this.route('table-demo-four');
    this.route('table-demo-five');
  });
});
;enifed("explore-tabulator/routes/table-demo-five", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  class TableDemoFiveRoute extends Ember.Route {}

  _exports.default = TableDemoFiveRoute;
});
;enifed("explore-tabulator/routes/table-demo-four", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  class TableDemoFourRoute extends Ember.Route {}

  _exports.default = TableDemoFourRoute;
});
;enifed("explore-tabulator/routes/table-demo-one", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  class TableDemoOneRoute extends Ember.Route {}

  _exports.default = TableDemoOneRoute;
});
;enifed("explore-tabulator/routes/table-demo-three", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  class TableDemoThreeRoute extends Ember.Route {}

  _exports.default = TableDemoThreeRoute;
});
;enifed("explore-tabulator/routes/table-demo-two", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  class TableDemoTwoRoute extends Ember.Route {}

  _exports.default = TableDemoTwoRoute;
});
;enifed("explore-tabulator/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    } });

});
;enifed("explore-tabulator/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    } });

});
;enifed("explore-tabulator/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    } });

});
;enifed("explore-tabulator/services/amd-loader", ["exports", "ember-cli-amd/services/amd-loader"], function (_exports, _amdLoader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _amdLoader.default;
    } });

});
;enifed("explore-tabulator/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    } });

});
;enifed("explore-tabulator/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3fyAEGoA",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"app-wrapper\"],[12],[2,\"\\n  \"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n  \"],[8,\"demo-footer\",[],[[],[]],null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "explore-tabulator/templates/application.hbs" } });



  _exports.default = _default;
});
;enifed("explore-tabulator/templates/components/ember-tabulator", ["exports", "ember-tabulator/templates/components/ember-tabulator"], function (_exports, _emberTabulator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberTabulator.default;
    } });

});
;enifed("explore-tabulator/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GSrh0JFI",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h1\"],[14,0,\"demo-header\"],[12],[2,\"\\n  Exploring Tabulators\\n  \"],[10,\"div\"],[14,5,\"font-size: 100px\"],[12],[2,\"⇊\"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "explore-tabulator/templates/index.hbs" } });



  _exports.default = _default;
});
;enifed("explore-tabulator/templates/table-demo-five", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "OimtId1l",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h1\"],[14,0,\"demo-header\"],[12],[2,\"\\n  Nested Data Tree \\n\"],[13],[2,\"\\n\\n\"],[8,\"table-five\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "explore-tabulator/templates/table-demo-five.hbs" } });



  _exports.default = _default;
});
;enifed("explore-tabulator/templates/table-demo-four", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QIELWd0u",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h1\"],[14,0,\"demo-header\"],[12],[2,\"\\n  Matrix Table & Inline Charts \\n\"],[13],[2,\"\\n\\n\"],[8,\"table-four\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "explore-tabulator/templates/table-demo-four.hbs" } });



  _exports.default = _default;
});
;enifed("explore-tabulator/templates/table-demo-one", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mX0MFY/D",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h1\"],[14,0,\"demo-header\"],[12],[2,\"\\n  Dynamic Cell Customization\\n\"],[13],[2,\"\\n\\n\"],[8,\"table-one\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "explore-tabulator/templates/table-demo-one.hbs" } });



  _exports.default = _default;
});
;enifed("explore-tabulator/templates/table-demo-three", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "R7Ud5h9W",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h1\"],[14,0,\"demo-header\"],[12],[2,\"\\n  Filtering Data / Download File\\n\"],[13],[2,\"\\n\\n\"],[8,\"table-three\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "explore-tabulator/templates/table-demo-three.hbs" } });



  _exports.default = _default;
});
;enifed("explore-tabulator/templates/table-demo-two", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/+dmzBeA",
    "block": "{\"symbols\":[],\"statements\":[[10,\"h1\"],[14,0,\"demo-header\"],[12],[2,\"\\n  Group By / Calculated Columns / Group Columns\\n\"],[13],[2,\"\\n\\n\"],[8,\"table-two\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "explore-tabulator/templates/table-demo-two.hbs" } });



  _exports.default = _default;
});
;enifed("explore-tabulator/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    } });

});
;enifed("explore-tabulator/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    } });

});
;enifed("explore-tabulator/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    } });

});
;enifed("explore-tabulator/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true });

  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    } });

});
;

;enifed('explore-tabulator/config/environment', [], function () {
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

;
if (!runningTests) {
  eriuqer("explore-tabulator/app")["default"].create({ "name": "explore-tabulator", "version": "0.0.0+4247ead9" });
}

//# sourceMappingURL=explore-tabulator.map