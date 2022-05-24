(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Vehicles_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Show.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Show.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VehicleModel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VehicleModel.vue */ "./resources/js/Pages/Vehicles/VehicleModel.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VehicleModel: _VehicleModel_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    vehicle: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "model-add",
  data: function data() {
    return {
      form: this.$inertia.form({
        vehicleId: this.$page.props.vehicle.id,
        name: null,
        description: null
      }),
      showDialog: false
    };
  },
  methods: {
    addModel: function addModel() {
      this.edit = false;
      this.form.reset();
      this.showDialog = true;
    },
    closeModal: function closeModal() {
      this.showDialog = false;
    },
    save: function save() {
      var _this = this;

      if (this.edit) {
        this.form.put(route("vehicle-model.update", this.form.id), {
          onSuccess: function onSuccess() {
            _this.edit = false;

            _this.closeModal();

            _this.form.reset();
          }
        });
      } else {
        this.form.post(route("vehicle-model.store"), {
          onSuccess: function onSuccess() {
            _this.closeModal();

            _this.form.reset();
          }
        });
      }
    },
    editResource: function editResource(index) {
      this.showDialog = true;
      this.edit = true;
      this.form.id = this.$page.props.vehicle.vehicleModels[index].id;
      this.form.name = this.$page.props.vehicle.vehicleModels[index].name;
      this.form.description = this.$page.props.vehicle.vehicleModels[index].description;
    },
    destroyModel: function destroyModel(id) {
      this.deleteResource(route("vehicle-model.destroy", id));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Show.vue?vue&type=template&id=6e96b40c&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Show.vue?vue&type=template&id=6e96b40c&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-6e96b40c");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6e96b40c");

var _hoisted_1 = {
  "class": "max-w-5xl divide-y divide-gray-200"
};
var _hoisted_2 = {
  "class": "flex justify-between py-3 rounded-md"
};
var _hoisted_3 = {
  "class": "truncate text-90 font-normal text-2xl"
};
var _hoisted_4 = {
  "class": "items-center"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ti-pencil-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ti-arrow-left"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "max-w-5xl divide-y divide-gray-200"
};
var _hoisted_8 = {
  "class": "bg-white mb-6 py-4 px-6 rounded-md"
};
var _hoisted_9 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "ID")], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_12 = {
  "class": "text-90"
};
var _hoisted_13 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Name")], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_16 = {
  "class": "text-90"
};
var _hoisted_17 = {
  "class": "flex  -mx-6 px-6"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Description")], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_20 = {
  "class": "text-90"
};
var _hoisted_21 = {
  "class": "py-6"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_vehicle_model = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vehicle-model");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_3, "Vehicle Details: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.vehicle.name), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Route Link for vehicle "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": "btn btn-primary mr-2",
    href: _ctx.route('vehicles.edit', $props.vehicle.id)
  }, {
    "default": _withId(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": "btn btn-primary mr-2",
    href: _ctx.route('vehicles.index')
  }, {
    "default": _withId(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" vehicle Show "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ID "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.vehicle.id), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.vehicle.name), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Description "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.vehicle.description), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Vehicle model component section "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vehicle_model)])], 64
  /* STABLE_FRAGMENT */
  );
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=template&id=28ea4d28&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=template&id=28ea4d28&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-28ea4d28");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-28ea4d28");

var _hoisted_1 = {
  "class": "mr-0 lg:mr-8"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "mb-2 font-bold text-2xl"
}, "Vehicles Model", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "mb-4 flex justify-end items-center"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Vehicle Model");

var _hoisted_5 = {
  "class": "bg-white rounded-md shadow overflow-x-auto"
};
var _hoisted_6 = {
  key: 0,
  "class": "w-full divide-y divide-gray-200"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", {
  "class": "bg-gray-50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "\r\n                px-6\r\n                py-3\r\n                text-left text-xs\r\n                font-medium uppercase\r\n                text-gray-500\r\n                ml-6uppercase\r\n              "
}, " ID "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "\r\n                px-6\r\n                py-3\r\n                text-left text-xs\r\n                font-medium uppercase\r\n                text-gray-500\r\n                ml-6uppercase\r\n              "
}, " Name "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "\r\n                px-6\r\n                py-3\r\n                text-left text-xs\r\n                font-medium uppercase\r\n                text-gray-500\r\n                ml-6uppercase\r\n              "
}, " Description "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th")])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "bg-white divide-y divide-gray-200"
};
var _hoisted_9 = {
  "class": "px-6 py-4 whitespace-nowrap"
};
var _hoisted_10 = {
  "class": "px-6 py-4 whitespace-nowrap"
};
var _hoisted_11 = {
  "class": "px-6 py-4 whitespace-nowrap"
};
var _hoisted_12 = {
  "class": "px-6 py-4 whitespace-nowrap text-right text-sm font-medium uppercase"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ti-pencil-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ti-trash"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = {
  key: 1,
  "class": "flex justify-center items-center text-gray-600 h-32"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "No Feature Added", -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Vehicle Model");

var _hoisted_18 = {
  "class": "my-4"
};
var _hoisted_19 = {
  "class": "mb-4"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancel");

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$page$props$vehi;

  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  var _component_jet_danger_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-danger-button");

  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_jet_text_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-text-input");

  var _component_jet_secondary_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-secondary-button");

  var _component_jet_dialog_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-dialog-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Filter "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" search "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <jet-input\r\n        id=\"name\"\r\n        type=\"text\"\r\n        class=\"mt-1 block w-64\"\r\n        v-model=\"filters.search\"\r\n        ref=\"name\"\r\n        autocomplete=\"name\"\r\n      /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
    "class": "mt-2",
    type: "button",
    onClick: $options.addModel
  }, {
    "default": _withId(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Table  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [_ctx.$page.props.vehicle.vehicleModels && (_ctx$$page$props$vehi = _ctx.$page.props.vehicle.vehicleModels) !== null && _ctx$$page$props$vehi !== void 0 && _ctx$$page$props$vehi.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("table", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$page.props.vehicle.vehicleModels, function (row, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.id), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.description), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
      type: "button",
      "class": "mr-2",
      onClick: function onClick($event) {
        return $options.editResource(index);
      }
    }, {
      "default": _withId(function () {
        return [_hoisted_13];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_danger_button, {
      onClick: function onClick($event) {
        return $options.destroyModel(row.id);
      }
    }, {
      "default": _withId(function () {
        return [_hoisted_14];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["onClick"])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_15, [_hoisted_16]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add vehicle modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_dialog_modal, {
    show: $data.showDialog,
    onClose: $options.closeModal
  }, {
    title: _withId(function () {
      return [_hoisted_17];
    }),
    content: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Model Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "name",
        value: "Model Name"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        type: "text",
        "class": "mt-1 block w-full",
        ref: "name",
        modelValue: $data.form.name,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.form.name = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.name,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Description "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "description",
        value: "Description"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_text_input, {
        id: "description",
        type: "text",
        "class": "mt-1 block w-full",
        modelValue: $data.form.description,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.form.description = $event;
        }),
        ref: "description",
        autocomplete: "description",
        rows: "6"
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.description,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])])];
    }),
    footer: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_secondary_button, {
        onClick: $options.closeModal
      }, {
        "default": _withId(function () {
          return [_hoisted_20];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
        "class": ["ml-2", {
          'opacity-25': $data.form.processing
        }],
        disabled: $data.form.processing,
        onClick: $options.save
      }, {
        "default": _withId(function () {
          return [_hoisted_21];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["class", "disabled", "onClick"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show", "onClose"])]);
});

/***/ }),

/***/ "./resources/js/Pages/Vehicles/Show.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Vehicles/Show.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_6e96b40c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=6e96b40c&scoped=true */ "./resources/js/Pages/Vehicles/Show.vue?vue&type=template&id=6e96b40c&scoped=true");
/* harmony import */ var _Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js */ "./resources/js/Pages/Vehicles/Show.vue?vue&type=script&lang=js");



_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Show_vue_vue_type_template_id_6e96b40c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-6e96b40c"
/* hot reload */
if (false) {}

_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Vehicles/Show.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Vehicles/VehicleModel.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Vehicles/VehicleModel.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VehicleModel_vue_vue_type_template_id_28ea4d28_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VehicleModel.vue?vue&type=template&id=28ea4d28&scoped=true */ "./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=template&id=28ea4d28&scoped=true");
/* harmony import */ var _VehicleModel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VehicleModel.vue?vue&type=script&lang=js */ "./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=script&lang=js");



_VehicleModel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _VehicleModel_vue_vue_type_template_id_28ea4d28_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_VehicleModel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-28ea4d28"
/* hot reload */
if (false) {}

_VehicleModel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Vehicles/VehicleModel.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VehicleModel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Vehicles/Show.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Vehicles/Show.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Show.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VehicleModel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VehicleModel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VehicleModel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Vehicles/Show.vue?vue&type=template&id=6e96b40c&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Vehicles/Show.vue?vue&type=template&id=6e96b40c&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_6e96b40c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_6e96b40c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=6e96b40c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Show.vue?vue&type=template&id=6e96b40c&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=template&id=28ea4d28&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=template&id=28ea4d28&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VehicleModel_vue_vue_type_template_id_28ea4d28_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VehicleModel_vue_vue_type_template_id_28ea4d28_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VehicleModel.vue?vue&type=template&id=28ea4d28&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/VehicleModel.vue?vue&type=template&id=28ea4d28&scoped=true");


/***/ })

}]);