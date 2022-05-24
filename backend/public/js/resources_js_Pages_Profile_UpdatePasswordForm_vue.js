(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_UpdatePasswordForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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
        current_password: '',
        password: '',
        password_confirmation: ''
      })
    };
  },
  methods: {
    updatePassword: function updatePassword() {
      var _this = this;

      this.form.put(route('user-password.update'), {
        errorBag: 'updatePassword',
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return _this.form.reset();
        },
        onError: function onError() {
          if (_this.form.errors.password) {
            _this.form.reset('password', 'password_confirmation');

            _this.$refs.password.focus();
          }

          if (_this.form.errors.current_password) {
            _this.form.reset('current_password');

            _this.$refs.current_password.focus();
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Update Password ");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Ensure your account is using a long, random password to stay secure. ");

var _hoisted_3 = {
  "class": "col-span-6 sm:col-span-4"
};
var _hoisted_4 = {
  "class": "col-span-6 sm:col-span-4"
};
var _hoisted_5 = {
  "class": "col-span-6 sm:col-span-4"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Saved. ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Save ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_jet_action_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-action-message");

  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  var _component_jet_form_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-form-section");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_jet_form_section, {
    onSubmitted: $options.updatePassword
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    description: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    form: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "current_password",
        value: "Current Password"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        id: "current_password",
        type: "password",
        "class": "mt-1 block w-full",
        modelValue: $data.form.current_password,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.form.current_password = $event;
        }),
        ref: "current_password",
        autocomplete: "current-password"
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.current_password,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "password",
        value: "New Password"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        id: "password",
        type: "password",
        "class": "mt-1 block w-full",
        modelValue: $data.form.password,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.form.password = $event;
        }),
        ref: "password",
        autocomplete: "new-password"
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.password,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "password_confirmation",
        value: "Confirm Password"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        id: "password_confirmation",
        type: "password",
        "class": "mt-1 block w-full",
        modelValue: $data.form.password_confirmation,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.form.password_confirmation = $event;
        }),
        autocomplete: "new-password"
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.password_confirmation,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])])];
    }),
    actions: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_action_message, {
        on: $data.form.recentlySuccessful,
        "class": "mr-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_6];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["on"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
        "class": {
          'opacity-25': $data.form.processing
        },
        disabled: $data.form.processing
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_7];
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
}

/***/ }),

/***/ "./resources/js/Pages/Profile/UpdatePasswordForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Profile/UpdatePasswordForm.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdatePasswordForm_vue_vue_type_template_id_56f235d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdatePasswordForm.vue?vue&type=template&id=56f235d2 */ "./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2");
/* harmony import */ var _UpdatePasswordForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdatePasswordForm.vue?vue&type=script&lang=js */ "./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js");



_UpdatePasswordForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _UpdatePasswordForm_vue_vue_type_template_id_56f235d2__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_UpdatePasswordForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Profile/UpdatePasswordForm.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_UpdatePasswordForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdatePasswordForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdatePasswordForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdatePasswordForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdatePasswordForm_vue_vue_type_template_id_56f235d2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdatePasswordForm_vue_vue_type_template_id_56f235d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdatePasswordForm.vue?vue&type=template&id=56f235d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/UpdatePasswordForm.vue?vue&type=template&id=56f235d2");


/***/ })

}]);