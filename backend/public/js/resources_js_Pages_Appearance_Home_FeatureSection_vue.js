(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Appearance_Home_FeatureSection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: this.$inertia.form({
        id: null,
        title: null,
        subtitle: null,
        icon: null,
        iconUrl: null
      }),
      showDialog: false,
      edit: false
    };
  },
  methods: {
    addFeature: function addFeature() {
      this.edit = false;
      this.form.reset();
      this.showDialog = true;
    },
    save: function save() {
      var _this = this;

      if (this.edit) {
        this.form.put(route("features.update", this.form.id), {
          onSuccess: function onSuccess() {
            _this.edit = false;

            _this.closeModal();

            _this.form.reset();
          }
        });
      } else {
        this.form.post(route("features.store"), {
          onSuccess: function onSuccess() {
            _this.closeModal();

            _this.form.reset();
          }
        });
      }
    },
    handleIconChange: function handleIconChange(file) {
      this.form.icon = file;
    },
    closeModal: function closeModal() {
      this.showDialog = false;
    },
    editFeature: function editFeature(index) {
      this.showDialog = true;
      this.edit = true;
      this.form.id = this.$page.props.features[index].id;
      this.form.title = this.$page.props.features[index].title;
      this.form.subtitle = this.$page.props.features[index].subtitle;
      this.form.iconUrl = this.$page.props.features[index].primaryMediaUrl;
    },
    deleteFeature: function deleteFeature(index) {
      this.form["delete"](route("features.destroy", this.$page.props.features[index].id));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=template&id=8329ac06&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=template&id=8329ac06&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-8329ac06");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-8329ac06");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Feature Section");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Change home page features content.");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Feature");

var _hoisted_4 = {
  key: 0,
  "class": "w-full divide-y divide-gray-200"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", {
  "class": "bg-gray-50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "Content"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
}, "Action")])], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "bg-white divide-y divide-gray-200"
};
var _hoisted_7 = {
  "class": "px-6 py-4 whitespace-nowrap"
};
var _hoisted_8 = {
  "class": "flex items-center"
};
var _hoisted_9 = {
  "class": "bg-gray-100"
};
var _hoisted_10 = {
  "class": "ml-4"
};
var _hoisted_11 = {
  "class": "text-sm font-medium text-gray-900"
};
var _hoisted_12 = {
  "class": "text-sm text-gray-500"
};
var _hoisted_13 = {
  "class": "px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ti-pencil-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ti-trash"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = {
  key: 1,
  "class": "flex justify-center items-center text-gray-600 h-32"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "No Feature Added", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Feature");

var _hoisted_19 = {
  "class": "mt-4"
};
var _hoisted_20 = {
  "class": "mt-4"
};
var _hoisted_21 = {
  "class": "mt-4"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("small", {
  "class": "mt-1 font-thin text-gray-400"
}, "* Icon should be minimum 256x144 px. Maximum file size: 5MB/5120KB. ", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancel");

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  var _component_jet_danger_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-danger-button");

  var _component_jet_card_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-card-section");

  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_jet_image_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-image-input");

  var _component_jet_secondary_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-secondary-button");

  var _component_jet_dialog_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-dialog-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_card_section, {
    onSubmitted: $options.save
  }, {
    title: _withId(function () {
      return [_hoisted_1];
    }),
    description: _withId(function () {
      return [_hoisted_2];
    }),
    action: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
        type: "button",
        onClick: $options.addFeature
      }, {
        "default": _withId(function () {
          return [_hoisted_3];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"])];
    }),
    card: _withId(function () {
      return [_ctx.$page.props.features.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("table", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$page.props.features, function (feature, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
          "class": "h-16 w-32 object-contain",
          src: feature.primaryMediaUrl,
          alt: ""
        }, null, 8
        /* PROPS */
        , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(feature.title), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(feature.subtitle), 1
        /* TEXT */
        )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
          type: "button",
          "class": "mr-2",
          onClick: function onClick($event) {
            return $options.editFeature(index);
          }
        }, {
          "default": _withId(function () {
            return [_hoisted_14];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_danger_button, {
          onClick: function onClick($event) {
            return $options.deleteFeature(index);
          }
        }, {
          "default": _withId(function () {
            return [_hoisted_15];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["onClick"])])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_16, [_hoisted_17]))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onSubmitted"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add feature modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_dialog_modal, {
    show: $data.showDialog,
    onClose: $options.closeModal
  }, {
    title: _withId(function () {
      return [_hoisted_18];
    }),
    content: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "title",
        value: "Title"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        type: "text",
        "class": "mt-1 block w-full",
        ref: "title",
        modelValue: $data.form.title,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.form.title = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.title,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "subtitle",
        value: "Subtitle"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        type: "text",
        "class": "mt-1 block w-full",
        ref: "subtitle",
        modelValue: $data.form.subtitle,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.form.subtitle = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.subtitle,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "icon",
        value: "Icon"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_image_input, {
        url: $data.form.iconUrl,
        onChange: $options.handleIconChange
      }, null, 8
      /* PROPS */
      , ["url", "onChange"]), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.icon,
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
          return [_hoisted_23];
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
          return [_hoisted_24];
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

/***/ "./resources/js/Pages/Appearance/Home/FeatureSection.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Appearance/Home/FeatureSection.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeatureSection_vue_vue_type_template_id_8329ac06_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureSection.vue?vue&type=template&id=8329ac06&scoped=true */ "./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=template&id=8329ac06&scoped=true");
/* harmony import */ var _FeatureSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureSection.vue?vue&type=script&lang=js */ "./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=script&lang=js");



_FeatureSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _FeatureSection_vue_vue_type_template_id_8329ac06_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_FeatureSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-8329ac06"
/* hot reload */
if (false) {}

_FeatureSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Appearance/Home/FeatureSection.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FeatureSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FeatureSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=template&id=8329ac06&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=template&id=8329ac06&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureSection_vue_vue_type_template_id_8329ac06_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeatureSection_vue_vue_type_template_id_8329ac06_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FeatureSection.vue?vue&type=template&id=8329ac06&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Home/FeatureSection.vue?vue&type=template&id=8329ac06&scoped=true");


/***/ })

}]);