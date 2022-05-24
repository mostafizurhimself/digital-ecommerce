(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Appearance_Others_Faq_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=script&lang=js ***!
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
        id: null,
        type: null,
        question: null,
        answer: null
      }),
      showDialog: false,
      edit: false
    };
  },
  methods: {
    addFaq: function addFaq() {
      this.edit = false;
      this.form.reset();
      this.showDialog = true;
    },
    beautify: function beautify(value) {
      return value.replaceAll("_", " ");
    },
    save: function save() {
      var _this = this;

      if (this.edit) {
        this.form.put(route("faqs.update", this.form.id), {
          onSuccess: function onSuccess() {
            _this.edit = false;

            _this.closeModal();

            _this.form.reset();
          }
        });
      } else {
        this.form.post(route("faqs.store"), {
          onSuccess: function onSuccess() {
            _this.closeModal();

            _this.form.reset();
          }
        });
      }
    },
    closeModal: function closeModal() {
      this.showDialog = false;
    },
    editFaq: function editFaq(index) {
      this.showDialog = true;
      this.edit = true;
      this.form.id = this.$page.props.faqs[index].id;
      this.form.type = this.$page.props.faqs[index].type;
      this.form.question = this.$page.props.faqs[index].question;
      this.form.answer = this.$page.props.faqs[index].answer;
    },
    deleteFaq: function deleteFaq(id) {
      this.deleteResource(route("faqs.destroy", id));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=template&id=ed9316c8&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=template&id=ed9316c8&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-ed9316c8");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-ed9316c8");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Faq Section");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Change FAQ page content.");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Faq");

var _hoisted_4 = {
  key: 0,
  "class": "w-full divide-y divide-gray-200"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", {
  "class": "bg-gray-50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "Question"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "Answer"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
}, "Action")])], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "bg-white divide-y divide-gray-200"
};
var _hoisted_7 = {
  "class": "px-6 py-4 whitespace-nowrap capitalize"
};
var _hoisted_8 = {
  "class": "px-6 py-4 whitespace-nowrap truncate",
  style: {
    "max-width": "50px"
  }
};
var _hoisted_9 = {
  "class": "px-6 py-4 whitespace-nowrap truncate",
  style: {
    "max-width": "150px"
  }
};
var _hoisted_10 = {
  "class": "px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ti-pencil-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ti-trash"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = {
  key: 1,
  "class": "flex justify-center items-center text-gray-600 h-32"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "No Faq Added", -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Faq");

var _hoisted_16 = {
  "class": "col-span-6 sm:col-span-4"
};
var _hoisted_17 = {
  "class": "mt-4"
};
var _hoisted_18 = {
  "class": "col-span-6 sm:col-span-4 mt-4"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancel");

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-button");

  var _component_jet_danger_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-danger-button");

  var _component_jet_card_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-card-section");

  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-select");

  var _component_jet_input_error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input-error");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_text_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-text-input");

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
        onClick: $options.addFaq
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
      return [_ctx.$page.props.faqs.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("table", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$page.props.faqs, function (faq, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.beautify(faq.type)), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(faq.question), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(faq.answer), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_button, {
          type: "button",
          "class": "mr-2",
          onClick: function onClick($event) {
            return $options.editFaq(index);
          }
        }, {
          "default": _withId(function () {
            return [_hoisted_11];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_danger_button, {
          onClick: function onClick($event) {
            return $options.deleteFaq(faq.id);
          }
        }, {
          "default": _withId(function () {
            return [_hoisted_12];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["onClick"])])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_13, [_hoisted_14]))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onSubmitted"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add FAQ modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_dialog_modal, {
    show: $data.showDialog,
    onClose: $options.closeModal
  }, {
    title: _withId(function () {
      return [_hoisted_15];
    }),
    content: _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Type "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "type",
        value: "Faq Type"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_select, {
        track: "value",
        options: _ctx.$page.props.faqTypes,
        modelValue: $data.form.type,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.form.type = $event;
        }),
        autocomplete: "off"
      }, null, 8
      /* PROPS */
      , ["options", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.type,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Question "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "title",
        value: "Faq Question"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        type: "text",
        "class": "mt-1 block w-full",
        ref: "title",
        modelValue: $data.form.question,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.form.question = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.question,
        "class": "mt-2"
      }, null, 8
      /* PROPS */
      , ["message"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Answer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        "for": "description",
        value: "Answer"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_text_input, {
        id: "description",
        type: "text",
        "class": "mt-1 block w-full",
        modelValue: $data.form.answer,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.form.answer = $event;
        }),
        ref: "description",
        autocomplete: "description"
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input_error, {
        message: $data.form.errors.answer,
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
          return [_hoisted_19];
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
          return [_hoisted_20];
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

/***/ "./resources/js/Pages/Appearance/Others/Faq.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Appearance/Others/Faq.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Faq_vue_vue_type_template_id_ed9316c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faq.vue?vue&type=template&id=ed9316c8&scoped=true */ "./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=template&id=ed9316c8&scoped=true");
/* harmony import */ var _Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faq.vue?vue&type=script&lang=js */ "./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=script&lang=js");



_Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Faq_vue_vue_type_template_id_ed9316c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-ed9316c8"
/* hot reload */
if (false) {}

_Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Appearance/Others/Faq.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Faq_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Faq.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=template&id=ed9316c8&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=template&id=ed9316c8&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Faq_vue_vue_type_template_id_ed9316c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Faq_vue_vue_type_template_id_ed9316c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Faq.vue?vue&type=template&id=ed9316c8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Appearance/Others/Faq.vue?vue&type=template&id=ed9316c8&scoped=true");


/***/ })

}]);