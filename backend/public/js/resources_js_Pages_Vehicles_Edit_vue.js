(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Vehicles_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Edit.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Edit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/esm/index.js");

var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_0__.useToast)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    vehicle: Object
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        name: this.vehicle.name,
        description: this.vehicle.description
      })
    };
  },
  methods: {
    save: function save() {
      this.form.put(route("vehicles.update", this.vehicle.id), {
        onSuccess: function onSuccess() {
          return toast.success("Updated successfully");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Edit.vue?vue&type=template&id=3b740ece&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Edit.vue?vue&type=template&id=3b740ece&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-3b740ece");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3b740ece");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit Vehicles");

var _hoisted_2 = {
  "class": "mb-4"
};
var _hoisted_3 = {
  "class": "mb-4"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancel");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Update");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_jet_text_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-text-input");

  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  var _component_form_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("form-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_form_view, {
    onSubmitted: $options.save
  }, {
    title: _withId(function () {
      return [_hoisted_1];
    }),
    form: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
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
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Description "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
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
        rows: "8"
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.description,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])])];
    }),
    actions: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <jet-action-message :on=\"form.recentlySuccessful\" class=\"mr-3\">Saved.</jet-action-message> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
        href: _ctx.route('vehicles.index'),
        "class": "btn btn-secondary mr-4"
      }, {
        "default": _withId(function () {
          return [_hoisted_4];
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
        "default": _withId(function () {
          return [_hoisted_5];
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
  , ["onSubmitted"]);
});

/***/ }),

/***/ "./resources/js/Pages/Vehicles/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Vehicles/Edit.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_3b740ece_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=3b740ece&scoped=true */ "./resources/js/Pages/Vehicles/Edit.vue?vue&type=template&id=3b740ece&scoped=true");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/Pages/Vehicles/Edit.vue?vue&type=script&lang=js");



_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Edit_vue_vue_type_template_id_3b740ece_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-3b740ece"
/* hot reload */
if (false) {}

_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Vehicles/Edit.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Vehicles/Edit.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Vehicles/Edit.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Edit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Vehicles/Edit.vue?vue&type=template&id=3b740ece&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Vehicles/Edit.vue?vue&type=template&id=3b740ece&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_3b740ece_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_3b740ece_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=3b740ece&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Vehicles/Edit.vue?vue&type=template&id=3b740ece&scoped=true");


/***/ })

}]);