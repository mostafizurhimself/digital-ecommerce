(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ColorChanges_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
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
        feedback: this.$page.props.colorChange.feedback,
        productName: this.$page.props.colorChange.productName,
        productSku: this.$page.props.colorChange.productSku,
        productDescription: this.$page.props.colorChange.productDescription,
        thumbnail: null,
        images: null,
        downloadable: null,
        _method: "put"
      })
    };
  },
  methods: {
    save: function save() {
      this.form.post(route("color-changes.update", this.$page.props.colorChange.id));
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Show.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Show.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Feedback_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feedback.vue */ "./resources/js/Pages/ColorChanges/Feedback.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "color-change-show",
  props: {
    colorChange: Object
  },
  components: {
    Feedback: _Feedback_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    save: function save() {
      this.form.post(route("color-changes.update"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=template&id=7636ef1b&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=template&id=7636ef1b&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-7636ef1b");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7636ef1b");

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

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("small", {
  "class": "mt-1 font-thin text-gray-400"
}, "* Image should be minimum 1920x1080 px. Maximun file size: 10MB/10240KB.", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "mb-4"
};
var _hoisted_8 = {
  "class": "w-2/3"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("small", {
  "class": "mt-1 font-thin text-gray-400"
}, "*Thumbnail should be minimum 425x240 px. Maximun file size: 5MB/5120KB.", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "mb-4"
};
var _hoisted_11 = {
  "class": "text-right mt-5"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_text_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-text-input");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_multiple_image_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-multiple-image-input");

  var _component_jet_image_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-image-input");

  var _component_jet_file_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-file-input");

  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("form", {
    onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
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
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
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
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    "for": "productDescription",
    value: "Description"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_text_input, {
    id: "productDescription",
    type: "text",
    "class": "mt-1 block w-full",
    modelValue: $data.form.productDescription,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
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
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Images "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    value: "Images",
    "class": "mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_multiple_image_input, {
    medias: _ctx.$page.props.colorChange.mediaCollection,
    onChange: $options.handleImagesChange
  }, null, 8
  /* PROPS */
  , ["medias", "onChange"]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
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
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Thumbnail "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    value: "Thumbnail",
    "class": "mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_image_input, {
    url: _ctx.$page.props.colorChange.thumbnailMediaUrl,
    onChange: $options.handleThumbnailChange,
    height: "200px"
  }, null, 8
  /* PROPS */
  , ["url", "onChange"])]), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.thumbnail,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Downloadable "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
    value: "Downloadable",
    "class": "mb-2"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_file_input, {
    url: _ctx.$page.props.colorChange.downloadableMediaUrl,
    onChange: $options.handleFileChange
  }, null, 8
  /* PROPS */
  , ["url", "onChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
    message: $data.form.errors.downloadable,
    "class": "mt-2"
  }, null, 8
  /* PROPS */
  , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Buttons "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
    "class": {
      'opacity-25': $data.form.processing
    },
    disabled: $data.form.processing
  }, {
    "default": _withId(function () {
      return [_hoisted_12];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Show.vue?vue&type=template&id=daf05cda&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Show.vue?vue&type=template&id=daf05cda&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-daf05cda");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-daf05cda");

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
  "class": "ti-arrow-left"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "max-w-5xl divide-y divide-gray-200"
};
var _hoisted_7 = {
  "class": "bg-white mb-6 py-4 px-6 rounded-md"
};
var _hoisted_8 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "ID")], -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_11 = {
  "class": "text-90"
};
var _hoisted_12 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Date")], -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_15 = {
  "class": "text-90"
};
var _hoisted_16 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Name")], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_19 = {
  "class": "text-90"
};
var _hoisted_20 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Email")], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_23 = {
  "class": "text-90"
};
var _hoisted_24 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Phone")], -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_27 = {
  "class": "text-90"
};
var _hoisted_28 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Customer Amount")], -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_31 = {
  "class": "text-90"
};
var _hoisted_32 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Customer VAT")], -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_35 = {
  "class": "text-90"
};
var _hoisted_36 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Customer Grand Total")], -1
/* HOISTED */
);

var _hoisted_38 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_39 = {
  "class": "text-90"
};
var _hoisted_40 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Customer Currency")], -1
/* HOISTED */
);

var _hoisted_42 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_43 = {
  "class": "text-90"
};
var _hoisted_44 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Deposit Amount")], -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_47 = {
  "class": "text-90"
};
var _hoisted_48 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Vat Amount")], -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_51 = {
  "class": "text-90"
};
var _hoisted_52 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Grand Total")], -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_55 = {
  "class": "text-90"
};
var _hoisted_56 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Product Name")], -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_59 = {
  "class": "text-90"
};
var _hoisted_60 = {
  "class": "flex border-b -mx-6 px-6"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Color")], -1
/* HOISTED */
);

var _hoisted_62 = {
  "class": "w-full border divide-y divide-gray-200 my-2"
};

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", {
  "class": "bg-gray-50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": " px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "color"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": " px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "Description")])], -1
/* HOISTED */
);

var _hoisted_64 = {
  "class": "bg-white divide-y divide-gray-200"
};
var _hoisted_65 = {
  "class": "px-6 py-4 whitespace-nowrap"
};
var _hoisted_66 = {
  "class": "px-6 py-4 whitespace-nowrap truncate",
  style: {
    "max-width": "200px"
  }
};
var _hoisted_67 = {
  "class": "flex  -mx-6 px-6"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "font-normal text-80"
}, "Description")], -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "w-3/4 py-4 break-words"
};
var _hoisted_70 = {
  "class": "text-90"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("tab");

  var _component_feedback = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("feedback");

  var _component_tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("tabs");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_3, "Change Color Details: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.id), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Route Link forcustomOrder "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    "class": "btn btn-primary mr-2",
    href: _ctx.route('color-changes.index')
  }, {
    "default": _withId(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Color Change Show "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tabs "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tabs, {
    options: {
      useUrlFragment: false
    },
    "nav-item-class": "tab-item"
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" First Tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        name: "General Info"
      }, {
        "default": _withId(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ID "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.id), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Date "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.dateFormatted), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.customer.name), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Email "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.customer.email), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Phone "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.customer.phone), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Customer Amount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.customerAmountFormatted), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Customer VAT Amount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.customerVatAmountFormatted), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Customer Grand Total "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.customerGrandTotalFormatted), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Customer Currency "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.customerCurrency), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Deposit Amount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.depositAmountFormatted), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" VAT Amount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.vatAmountFormatted), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Grand total Amount "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.grandTotalFormatted), 1
          /* TEXT */
          )])])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Second Tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        name: "Description",
        "class": "mt-5"
      }, {
        "default": _withId(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.product.name), 1
          /* TEXT */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Color "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_62, [_hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", _hoisted_64, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.colorChange.colors, function (row, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
              key: index
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
              "class": "inline-block w-8 h-8",
              style: {
                'background-color': row.colorCode
              }
            }, null, 4
            /* STYLE */
            )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.description), 1
            /* TEXT */
            )]);
          }), 128
          /* KEYED_FRAGMENT */
          ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Description "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_67, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.colorChange.description), 1
          /* TEXT */
          )])])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Third Tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
        name: "Feedback",
        "class": "mt-5"
      }, {
        "default": _withId(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_feedback)];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  })])])], 64
  /* STABLE_FRAGMENT */
  );
});

/***/ }),

/***/ "./resources/js/Pages/ColorChanges/Feedback.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/ColorChanges/Feedback.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Feedback_vue_vue_type_template_id_7636ef1b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feedback.vue?vue&type=template&id=7636ef1b&scoped=true */ "./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=template&id=7636ef1b&scoped=true");
/* harmony import */ var _Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feedback.vue?vue&type=script&lang=js */ "./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=script&lang=js");



_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Feedback_vue_vue_type_template_id_7636ef1b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-7636ef1b"
/* hot reload */
if (false) {}

_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/ColorChanges/Feedback.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/ColorChanges/Show.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/ColorChanges/Show.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_daf05cda_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=daf05cda&scoped=true */ "./resources/js/Pages/ColorChanges/Show.vue?vue&type=template&id=daf05cda&scoped=true");
/* harmony import */ var _Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js */ "./resources/js/Pages/ColorChanges/Show.vue?vue&type=script&lang=js");



_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Show_vue_vue_type_template_id_daf05cda_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-daf05cda"
/* hot reload */
if (false) {}

_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/ColorChanges/Show.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Feedback.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/ColorChanges/Show.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/ColorChanges/Show.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Show.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=template&id=7636ef1b&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=template&id=7636ef1b&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feedback_vue_vue_type_template_id_7636ef1b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feedback_vue_vue_type_template_id_7636ef1b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Feedback.vue?vue&type=template&id=7636ef1b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Feedback.vue?vue&type=template&id=7636ef1b&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/ColorChanges/Show.vue?vue&type=template&id=daf05cda&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/ColorChanges/Show.vue?vue&type=template&id=daf05cda&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_daf05cda_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_daf05cda_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=daf05cda&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/ColorChanges/Show.vue?vue&type=template&id=daf05cda&scoped=true");


/***/ })

}]);