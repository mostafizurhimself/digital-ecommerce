(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Orders_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Icons/PdfIcon.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Icons/PdfIcon.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Jetstream_Button_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Jetstream/Button.vue */ "./resources/js/Jetstream/Button.vue");
/* harmony import */ var _Icons_PdfIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Icons/PdfIcon.vue */ "./resources/js/Icons/PdfIcon.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Button: _Jetstream_Button_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    PdfIcon: _Icons_PdfIcon_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  name: "orders",
  props: {
    orders: Object,
    query: Object
  },
  data: function data() {
    return {
      filters: {
        search: this.query.search,
        from: this.query.from,
        to: this.query.to
      }
    };
  },
  watch: {
    filters: {
      handler: lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        this.getResults("orders.index");
      }, 150),
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Icons/PdfIcon.vue?vue&type=template&id=9cfc7470&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Icons/PdfIcon.vue?vue&type=template&id=9cfc7470&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-9cfc7470");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-9cfc7470");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xmlns:svgjs": "http://svgjs.com/svgjs",
  version: "1.1",
  width: "512",
  height: "512",
  x: "0",
  y: "0",
  viewBox: "0 0 512 512",
  style: {
    "enable-background": "new 0 0 512 512"
  },
  "xml:space": "preserve",
  "class": "h-3 w-3"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M444.875,109.792L338.208,3.125c-2-2-4.708-3.125-7.542-3.125h-224C83.135,0,64,19.135,64,42.667v426.667     C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333v-352     C448,114.5,446.875,111.792,444.875,109.792z M341.333,36.417l70.25,70.25h-48.917c-11.76,0-21.333-9.573-21.333-21.333V36.417z      M426.667,469.333c0,11.76-9.573,21.333-21.333,21.333H106.667c-11.76,0-21.333-9.573-21.333-21.333V42.667     c0-11.76,9.573-21.333,21.333-21.333H320v64C320,108.865,339.135,128,362.667,128h64V469.333z",
  fill: "#ffffff",
  "data-original": "#000000",
  style: {},
  "class": ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M310.385,313.135c-9.875-7.771-19.26-15.76-25.51-22.01c-8.125-8.125-15.365-16-21.656-23.5     c9.813-30.323,14.115-45.958,14.115-54.292c0-35.406-12.792-42.667-32-42.667c-14.594,0-32,7.583-32,43.688     c0,15.917,8.719,35.24,26,57.698c-4.229,12.906-9.198,27.792-14.781,44.573c-2.688,8.052-5.604,15.51-8.688,22.406     c-2.51,1.115-4.948,2.25-7.302,3.427c-8.479,4.24-16.531,8.052-24,11.594C150.5,370.177,128,380.844,128,401.906     c0,15.292,16.615,24.76,32,24.76c19.833,0,49.781-26.49,71.656-71.115c22.708-8.958,50.938-15.594,73.219-19.75     c17.854,13.729,37.573,26.865,47.125,26.865c26.448,0,32-15.292,32-28.115c0-25.219-28.813-25.219-42.667-25.219     C337.031,309.333,325.49,310.604,310.385,313.135z M160,405.333c-6.094,0-10.219-2.875-10.667-3.427     c0-7.563,22.552-18.25,44.365-28.583c1.385-0.656,2.792-1.313,4.219-1.99C181.896,394.563,166.052,405.333,160,405.333z      M234.667,214.354c0-22.354,6.938-22.354,10.667-22.354c7.542,0,10.667,0,10.667,21.333c0,4.5-3,15.75-8.49,33.313     C239.135,233.75,234.667,222.698,234.667,214.354z M242.844,329c0.667-1.854,1.313-3.729,1.938-5.625     c3.958-11.875,7.521-22.542,10.698-32.146c4.427,4.875,9.198,9.865,14.313,14.979c2,2,6.958,6.5,13.563,12.135     C270.208,321.208,256.219,324.76,242.844,329z M362.667,334.552c0,4.792,0,6.781-9.896,6.844     c-2.906-0.625-9.625-4.583-17.917-10.229c3.01-0.333,5.229-0.5,6.479-0.5C357.094,330.667,361.563,332.208,362.667,334.552z",
  fill: "#ffffff",
  "data-original": "#000000",
  style: {},
  "class": ""
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  xmlns: "http://www.w3.org/2000/svg"
})], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1, [_hoisted_2]);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Index.vue?vue&type=template&id=c1eb199e&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Index.vue?vue&type=template&id=c1eb199e&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-c1eb199e");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-c1eb199e");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "mb-5 font-bold text-2xl"
}, "Orders", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "mb-4 flex justify-between items-center"
};
var _hoisted_3 = {
  "class": "mb-4"
};
var _hoisted_4 = {
  "class": "mb-4"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ti-download mr-2"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Download ");

var _hoisted_7 = {
  "class": "bg-white rounded-md shadow overflow-x-auto"
};
var _hoisted_8 = {
  key: 0,
  "class": "w-full divide-y divide-gray-200"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", {
  "class": "bg-gray-50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "ID"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "customer name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "Grand Total"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col",
  "class": "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
}, "Customer Grand Total"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th")])], -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "bg-white divide-y divide-gray-200"
};
var _hoisted_11 = {
  "class": "px-6 py-4 whitespace-nowrap"
};
var _hoisted_12 = {
  "class": "px-6 py-4 whitespace-nowrap"
};
var _hoisted_13 = {
  "class": "px-6 py-4 whitespace-nowrap"
};
var _hoisted_14 = {
  "class": "px-6 py-4 whitespace-nowrap"
};
var _hoisted_15 = {
  "class": "px-6 py-4 whitespace-nowrap"
};
var _hoisted_16 = {
  "class": "px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "ti-eye"
}, null, -1
/* HOISTED */
);

var _hoisted_18 = {
  key: 1,
  "class": "flex justify-center items-center text-gray-600 h-32"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "No Order Added", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_jet_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-label");

  var _component_jet_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-input");

  var _component_jet_search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-search");

  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_pdf_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pdf-icon");

  var _component_jet_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("jet-pagination");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_search, {
    modelValue: $data.filters.search,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.filters.search = $event;
    }),
    onReset: _ctx.reset
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        value: "From",
        "class": "mb-2"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        type: "date",
        modelValue: $data.filters.from,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.filters.from = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_label, {
        value: "To",
        "class": "mb-2"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_input, {
        type: "date",
        modelValue: $data.filters.to,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.filters.to = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "onReset"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
    href: _ctx.route('download-excel.orders', _ctx.searchQuery),
    target: "_blank",
    "class": "btn btn-purple"
  }, [_hoisted_5, _hoisted_6], 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [$props.orders.data.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("table", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.orders.data, function (row, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.id), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.dateFormatted), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.customer.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.grandTotalFormatted), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.customerGrandTotalFormatted), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
      "class": "btn btn-primary mr-2",
      href: _ctx.route('orders.show', row.id)
    }, {
      "default": _withId(function () {
        return [_hoisted_17];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
      "class": "btn btn-success mr-2",
      href: _ctx.route('orders.invoice', row.id)
    }, {
      "default": _withId(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pdf_icon)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_18, [_hoisted_19]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_jet_pagination, {
    "class": "mt-6",
    links: $props.orders.links
  }, null, 8
  /* PROPS */
  , ["links"])]);
});

/***/ }),

/***/ "./resources/js/Icons/PdfIcon.vue":
/*!****************************************!*\
  !*** ./resources/js/Icons/PdfIcon.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PdfIcon_vue_vue_type_template_id_9cfc7470_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PdfIcon.vue?vue&type=template&id=9cfc7470&scoped=true */ "./resources/js/Icons/PdfIcon.vue?vue&type=template&id=9cfc7470&scoped=true");
/* harmony import */ var _PdfIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PdfIcon.vue?vue&type=script&lang=js */ "./resources/js/Icons/PdfIcon.vue?vue&type=script&lang=js");



_PdfIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PdfIcon_vue_vue_type_template_id_9cfc7470_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_PdfIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-9cfc7470"
/* hot reload */
if (false) {}

_PdfIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Icons/PdfIcon.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PdfIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Orders/Index.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Orders/Index.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_c1eb199e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c1eb199e&scoped=true */ "./resources/js/Pages/Orders/Index.vue?vue&type=template&id=c1eb199e&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Orders/Index.vue?vue&type=script&lang=js");



_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Index_vue_vue_type_template_id_c1eb199e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-c1eb199e"
/* hot reload */
if (false) {}

_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Orders/Index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Icons/PdfIcon.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Icons/PdfIcon.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PdfIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PdfIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PdfIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Icons/PdfIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Orders/Index.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Orders/Index.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Icons/PdfIcon.vue?vue&type=template&id=9cfc7470&scoped=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/Icons/PdfIcon.vue?vue&type=template&id=9cfc7470&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PdfIcon_vue_vue_type_template_id_9cfc7470_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PdfIcon_vue_vue_type_template_id_9cfc7470_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PdfIcon.vue?vue&type=template&id=9cfc7470&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Icons/PdfIcon.vue?vue&type=template&id=9cfc7470&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/Orders/Index.vue?vue&type=template&id=c1eb199e&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Orders/Index.vue?vue&type=template&id=c1eb199e&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_c1eb199e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_c1eb199e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=c1eb199e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Orders/Index.vue?vue&type=template&id=c1eb199e&scoped=true");


/***/ })

}]);