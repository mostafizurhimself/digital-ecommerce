(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_CustomOrders_Feedback_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _this$$page$props$cus, _this$$page$props$cus2, _this$$page$props$cus3, _this$$page$props$cus4, _this$$page$props$cus5;

    return {
      form: this.$inertia.form({
        feedback: this.$page.props.customOrder.feedback,
        productName: (_this$$page$props$cus = this.$page.props.customOrder.product) === null || _this$$page$props$cus === void 0 ? void 0 : _this$$page$props$cus.name,
        productSku: (_this$$page$props$cus2 = this.$page.props.customOrder.product) === null || _this$$page$props$cus2 === void 0 ? void 0 : _this$$page$props$cus2.sku,
        productPrice: (_this$$page$props$cus3 = this.$page.props.customOrder.product) === null || _this$$page$props$cus3 === void 0 ? void 0 : _this$$page$props$cus3.price,
        productDescription: (_this$$page$props$cus4 = this.$page.props.customOrder.product) === null || _this$$page$props$cus4 === void 0 ? void 0 : _this$$page$props$cus4.description,
        colorId: (_this$$page$props$cus5 = this.$page.props.customOrder.product) === null || _this$$page$props$cus5 === void 0 ? void 0 : _this$$page$props$cus5.colorId,
        thumbnail: null,
        images: null,
        downloadable: null,
        _method: "put"
      })
    };
  },
  methods: {
    save: function save() {
      this.form.post(route("custom-orders.update", this.$page.props.customOrder.id));
    },
    handleImagesChange: function handleImagesChange(images) {
      this.form.images = images;
    },
    handleThumbnailChange: function handleThumbnailChange(thumbnail) {
      this.form.thumbnail = thumbnail;
    },
    handleFileChange: function handleFileChange(file) {
      this.form.downloadable = file;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=template&id=7f64df05&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=template&id=7f64df05&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-7f64df05");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7f64df05");

var _hoisted_1 = {
  "class": "mb-4"
};
var _hoisted_2 = {
  "class": "mb-4"
};
var _hoisted_3 = {
  "class": "mb-4"
};
var _hoisted_4 = {
  "class": "mb-4"
};
var _hoisted_5 = {
  "class": "mb-4"
};
var _hoisted_6 = {
  "class": "mb-4"
};
var _hoisted_7 = {
  "class": "mb-4"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("small", {
  "class": "mt-1 font-thin text-gray-400"
}, "* Image should be minimum 1920x1080 px. Maximun file size: 10MB/10240KB.", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mb-4"
};
var _hoisted_10 = {
  "class": "w-2/3"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("small", {
  "class": "mt-1 font-thin text-gray-400"
}, "*Thumbnail should be minimum 425x240 px. Maximun file size: 5MB/5120KB.", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "mb-4"
};
var _hoisted_13 = {
  "class": "text-right mt-5"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$page$props$cust, _ctx$$page$props$cust2, _ctx$$page$props$cust3;

  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_text_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-text-input");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-select");

  var _component_jet_multiple_image_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-multiple-image-input");

  var _component_jet_image_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-image-input");

  var _component_jet_file_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-file-input");

  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("form", {
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.save && $options.save.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    "for": "feedback",
    value: "Feedback"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_text_input, {
    id: "feedback",
    type: "text",
    "class": "mt-1 block w-full",
    modelValue: $data.form.feedback,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.feedback = $event;
    }),
    ref: "feedback",
    autocomplete: "feedback",
    rows: "3"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.feedback,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    "for": "productName",
    value: "Product Name"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
    id: "productName",
    type: "text",
    "class": "mt-1 block w-full",
    modelValue: $data.form.productName,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.productName = $event;
    }),
    ref: "productName",
    autocomplete: "productName"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.productName,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sku "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    "for": "productSku",
    value: "Product SKU"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
    id: "productSku",
    type: "text",
    "class": "mt-1 block w-full",
    modelValue: $data.form.productSku,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.productSku = $event;
    }),
    ref: "productSku",
    autocomplete: "productSku"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.productSku,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Price "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    "for": "productPrice",
    value: "Product Price"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
    id: "productPrice",
    type: "text",
    "class": "mt-1 block w-full",
    modelValue: $data.form.productPrice,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.productPrice = $event;
    }),
    ref: "productPrice",
    autocomplete: "productPrice"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.productPrice,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Description "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    "for": "productDescription",
    value: "Description"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_text_input, {
    id: "productDescription",
    type: "text",
    "class": "mt-1 block w-full",
    modelValue: $data.form.productDescription,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.productDescription = $event;
    }),
    ref: "productDescription",
    autocomplete: "productDescription",
    rows: "3"
  }, null, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.productDescription,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Color"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    "for": "name",
    value: "Color"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_select, {
    modelValue: $data.form.colorId,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.colorId = $event;
    }),
    options: _ctx.$page.props.colors
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.colorId,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Images "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    value: "Images",
    "class": "mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_multiple_image_input, {
    medias: (_ctx$$page$props$cust = _ctx.$page.props.customOrder.product) === null || _ctx$$page$props$cust === void 0 ? void 0 : _ctx$$page$props$cust.mediaCollection,
    onChange: $options.handleImagesChange
  }, null, 8
  /* PROPS */
  , ["medias", "onChange"]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.images,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.form.images, function (i, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_jet_input_error, {
      key: index,
      message: $data.form.errors["images.".concat(index)],
      "class": "mt-2"
    }, null, 8
    /* PROPS */
    , ["message"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Thumbnail "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    value: "Thumbnail",
    "class": "mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_image_input, {
    url: (_ctx$$page$props$cust2 = _ctx.$page.props.customOrder.product) === null || _ctx$$page$props$cust2 === void 0 ? void 0 : _ctx$$page$props$cust2.thumbnailMediaUrl,
    onChange: $options.handleThumbnailChange,
    height: "200px"
  }, null, 8
  /* PROPS */
  , ["url", "onChange"])]), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.thumbnail,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Downloadable "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    value: "Downloadable",
    "class": "mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_file_input, {
    url: (_ctx$$page$props$cust3 = _ctx.$page.props.customOrder.product) === null || _ctx$$page$props$cust3 === void 0 ? void 0 : _ctx$$page$props$cust3.downloadableMediaUrl,
    onChange: $options.handleFileChange
  }, null, 8
  /* PROPS */
  , ["url", "onChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.downloadable,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Buttons "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
    "class": {
      'opacity-25': $data.form.processing
    },
    disabled: $data.form.processing
  }, {
    "default": _withId(function () {
      return [_hoisted_14];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class", "disabled"])])], 32
  /* HYDRATE_EVENTS */
  );
});

/***/ }),

/***/ "./resources/js/Pages/CustomOrders/Feedback.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/CustomOrders/Feedback.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Feedback_vue_vue_type_template_id_7f64df05_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feedback.vue?vue&type=template&id=7f64df05&scoped=true */ "./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=template&id=7f64df05&scoped=true");
/* harmony import */ var _Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feedback.vue?vue&type=script&lang=js */ "./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=script&lang=js");



_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Feedback_vue_vue_type_template_id_7f64df05_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-7f64df05"
/* hot reload */
if (false) {}

_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/CustomOrders/Feedback.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Feedback.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=template&id=7f64df05&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=template&id=7f64df05&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feedback_vue_vue_type_template_id_7f64df05_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feedback_vue_vue_type_template_id_7f64df05_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Feedback.vue?vue&type=template&id=7f64df05&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CustomOrders/Feedback.vue?vue&type=template&id=7f64df05&scoped=true");


/***/ })

}]);