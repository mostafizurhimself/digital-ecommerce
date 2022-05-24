(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Products_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "product-create",
  props: {
    categories: Object,
    tags: Object,
    colors: Object
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        name: null,
        sku: null,
        price: null,
        description: null,
        note: null,
        printDataFormat: null,
        recommendedMaterial: null,
        categoryId: null,
        colorId: null,
        tags: [],
        images: null,
        downloadable: null,
        thumbnail: null
      })
    };
  },
  methods: {
    save: function save() {
      this.form.post(route("products.store"));
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Create Product");

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
var _hoisted_8 = {
  "class": "mb-4"
};
var _hoisted_9 = {
  "class": "mb-4"
};
var _hoisted_10 = {
  "class": "mb-4"
};
var _hoisted_11 = {
  "class": "mb-4"
};
var _hoisted_12 = {
  "class": "bg-primary-500 text-white rounded-md px-2 py-1"
};
var _hoisted_13 = {
  "class": "mb-4"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("small", {
  "class": "mt-1 font-thin text-gray-400"
}, "* Image should be minimum 1920x1080 px. Maximum file size: 10MB/10240KB.", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "mb-4"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("small", {
  "class": "mt-1 font-thin text-gray-400"
}, "*Thumbnail should be minimum 425x240 px. Maximum file size: 5MB/5120KB.", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "mb-4"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancel");

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_jet_text_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-text-input");

  var _component_tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("tab");

  var _component_jet_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-select");

  var _component_vue_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-select");

  var _component_jet_multiple_image_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-multiple-image-input");

  var _component_jet_image_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-image-input");

  var _component_jet_file_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-file-input");

  var _component_tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("tabs");

  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  var _component_form_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("form-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_form_view, {
    onSubmitted: $options.save
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    form: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tabs, {
        options: {
          useUrlFragment: false
        },
        "nav-item-class": "tab-item"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" First Tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
            name: "General Info"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                "for": "name",
                value: "Name"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
                id: "name",
                type: "text",
                "class": "mt-1 block w-full",
                modelValue: $data.form.name,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                  return $data.form.name = $event;
                }),
                ref: "name",
                autocomplete: "name"
              }, null, 8
              /* PROPS */
              , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.name,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Price "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                "for": "name",
                value: "Price"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
                id: "name",
                type: "text",
                "class": "mt-1 block w-full",
                modelValue: $data.form.price,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                  return $data.form.price = $event;
                }),
                ref: "name",
                autocomplete: "name"
              }, null, 8
              /* PROPS */
              , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.price,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SKU "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                "for": "name",
                value: "SKU"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
                id: "name",
                type: "text",
                "class": "mt-1 block w-full",
                modelValue: $data.form.sku,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                  return $data.form.sku = $event;
                }),
                ref: "name",
                autocomplete: "name"
              }, null, 8
              /* PROPS */
              , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.sku,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Description "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                "for": "description",
                value: "Description"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_text_input, {
                id: "description",
                type: "text",
                "class": "mt-1 block w-full",
                modelValue: $data.form.description,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                  return $data.form.description = $event;
                }),
                ref: "description",
                autocomplete: "description",
                rows: "8"
              }, null, 8
              /* PROPS */
              , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.description,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Note "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                "for": "note",
                value: "Note"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
                id: "note",
                type: "text",
                "class": "mt-1 block w-full",
                modelValue: $data.form.note,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                  return $data.form.note = $event;
                }),
                ref: "note",
                autocomplete: "note"
              }, null, 8
              /* PROPS */
              , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.note,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Print Data Format"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                "for": "name",
                value: "Print data format"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
                id: "name",
                type: "text",
                "class": "mt-1 block w-full",
                modelValue: $data.form.printDataFormat,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                  return $data.form.printDataFormat = $event;
                }),
                ref: "name",
                autocomplete: "name"
              }, null, 8
              /* PROPS */
              , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.printDataFormat,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Recommended Material"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                "for": "name",
                value: "Recommended Material"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
                id: "name",
                type: "text",
                "class": "mt-1 block w-full",
                modelValue: $data.form.recommendedMaterial,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                  return $data.form.recommendedMaterial = $event;
                }),
                ref: "name",
                autocomplete: "name"
              }, null, 8
              /* PROPS */
              , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.recommendedMaterial,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Second tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_tab, {
            name: "Others",
            "class": "mt-5"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Category"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                "for": "name",
                value: "Category"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_select, {
                modelValue: $data.form.categoryId,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                  return $data.form.categoryId = $event;
                }),
                options: $props.categories
              }, null, 8
              /* PROPS */
              , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.categoryId,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" color"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                "for": "name",
                value: "Color"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_select, {
                modelValue: $data.form.colorId,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                  return $data.form.colorId = $event;
                }),
                options: $props.colors
              }, null, 8
              /* PROPS */
              , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.colorId,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" tags"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                "for": "name",
                value: "Tags",
                "class": "mb-2"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_select, {
                modelValue: $data.form.tags,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
                  return $data.form.tags = $event;
                }),
                "label-by": "name",
                "value-by": "id",
                options: $props.tags,
                multiple: "",
                taggable: ""
              }, {
                tag: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                  var option = _ref.option;
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.name), 1
                  /* TEXT */
                  )];
                }),
                _: 1
                /* STABLE */

              }, 8
              /* PROPS */
              , ["modelValue", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.tags,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Images "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                value: "Images",
                "class": "mb-2"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_multiple_image_input, {
                onChange: $options.handleImagesChange
              }, null, 8
              /* PROPS */
              , ["onChange"]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
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
              ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Thumbnail "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                value: "Thumbnail",
                "class": "mb-2"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_image_input, {
                onChange: $options.handleThumbnailChange
              }, null, 8
              /* PROPS */
              , ["onChange"]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.thumbnail,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Downloadable "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
                value: "Downloadable",
                "class": "mb-2"
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_file_input, {
                onChange: $options.handleFileChange
              }, null, 8
              /* PROPS */
              , ["onChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
                message: $data.form.errors.downloadable,
                "class": "mt-2"
              }, null, 8
              /* PROPS */
              , ["message"])])];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    actions: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
        href: _ctx.route('products.index'),
        "class": "btn btn-secondary mr-4"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_18];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
        "class": {
          'opacity-25': $data.form.processing
        },
        disabled: $data.form.processing
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_19];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["class", "disabled"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onSubmitted"])]);
}

/***/ }),

/***/ "./resources/js/Pages/Products/Create.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Products/Create.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_53ba9be4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=53ba9be4 */ "./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/Products/Create.vue?vue&type=script&lang=js");



_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Create_vue_vue_type_template_id_53ba9be4__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Products/Create.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Products/Create.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Products/Create.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_53ba9be4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_53ba9be4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=53ba9be4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Products/Create.vue?vue&type=template&id=53ba9be4");


/***/ })

}]);