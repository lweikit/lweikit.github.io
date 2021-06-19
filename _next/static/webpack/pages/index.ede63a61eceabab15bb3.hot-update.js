webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/IndustryChallenges.tsx":
/*!*************************************************!*\
  !*** ./pages/components/IndustryChallenges.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndustryChallenges; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/IndustryChallenges.module.scss */ \"./pages/components/styles/IndustryChallenges.module.scss\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/components/IndustryChallenges.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction IndustryChallenges() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var marks = {\n    0: 'Data silos',\n    1: 'Kurangnya manajer yang mumpuni',\n    2: 'Ancaman keamanan siber'\n  };\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, activeIndex == 0 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/data-living-in-silos.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 29\n    }\n  }), activeIndex == 1 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/lack-of-skilled-managers.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 29\n    }\n  }), activeIndex == 2 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/cybersecurity-threats.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 29\n    }\n  }), __jsx(\"div\", {\n    className: \"space-div\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    xs: {\n      size: 10,\n      offset: 1\n    },\n    lg: {\n      size: 8,\n      offset: 2\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['slider'],\n    min: 0,\n    max: 2,\n    marks: marks,\n    included: false,\n    value: activeIndex,\n    onChange: setActiveIndex,\n    railStyle: {\n      backgroundColor: '#1CA7EC'\n    },\n    dotStyle: {\n      borderColor: '#1CA7EC',\n      backgroundColor: '#1CA7EC',\n      height: 30,\n      width: 30,\n      marginLeft: -15,\n      marginBottom: -10\n    },\n    handleStyle: {\n      borderColor: '#1E3998',\n      backgroundColor: '#1E3998',\n      height: 30,\n      width: 30,\n      marginLeft: 0,\n      marginTop: -14\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }))), activeIndex == 0 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"Menurut penelitian IDC, data manufaktur sangat jarang tersimpan dalam satu penyimpanan data atau sistem, tetapi tersebar di beberapa tempat.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"Operators and engineers must manually piece together information from these siloed systems in a tedious and time-consuming process - which naturally hampers innovation and discourages collaboration in a company.\")), activeIndex == 1 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"A McKinsey study has revealed that ASEAN companies suffer from a lack of managers who understand new technologies and innovation to properly implement a transformational strategy, and an insufficient grasp of how all these new solutions can best optimise work processes.\")), activeIndex == 2 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, \"Risks to manufacturers have existed as long as production has been mechanised. Industry 4.0 however, heralds the greatest leaps in cyber risk to date, as highlighted in a Deloitte paper.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, \"Advanced malware, armed with zero-day exploits, that automously targets vulnerable devices and spreads with little human intervention is likely to overpower an already challenged IT/OT security staff. This disturbing trend highlights the need for IoT devices manufacturers to product security-hardened devices.\")));\n}\n\n_s(IndustryChallenges, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n\n_c = IndustryChallenges;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndustryChallenges\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4P2E2NGYiXSwibmFtZXMiOlsiSW5kdXN0cnlDaGFsbGVuZ2VzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwibWFya3MiLCJzdHlsZXMiLCJzaXplIiwib2Zmc2V0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLGtCQUFULEdBQThCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBRCxDQURIO0FBQUEsTUFDcENDLFdBRG9DO0FBQUEsTUFDdkJDLGNBRHVCOztBQUUzQyxNQUFNQyxLQUFLLEdBQUc7QUFDWixPQUFHLFlBRFM7QUFFWixPQUFHLGdDQUZTO0FBR1osT0FBRztBQUhTLEdBQWQ7QUFLQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUYsV0FBVyxJQUFJLENBQWYsSUFBb0I7QUFBUSxhQUFTLEVBQUVHLDZFQUFNLENBQUMsS0FBRCxDQUF6QjtBQUFrQyxRQUFJLEVBQUMsZUFBdkM7QUFBdUQsUUFBSSxFQUFDLDhCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRnhCLEVBS0lILFdBQVcsSUFBSSxDQUFmLElBQW9CO0FBQVEsYUFBUyxFQUFFRyw2RUFBTSxDQUFDLEtBQUQsQ0FBekI7QUFBa0MsUUFBSSxFQUFDLGVBQXZDO0FBQXVELFFBQUksRUFBQyxrQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUx4QixFQVFJSCxXQUFXLElBQUksQ0FBZixJQUFvQjtBQUFRLGFBQVMsRUFBRUcsNkVBQU0sQ0FBQyxLQUFELENBQXpCO0FBQWtDLFFBQUksRUFBQyxlQUF2QztBQUF1RCxRQUFJLEVBQUMsK0JBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSeEIsRUFVRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBRUMsVUFBSSxFQUFFLEVBQVI7QUFBWUMsWUFBTSxFQUFFO0FBQXBCLEtBQVQ7QUFBa0MsTUFBRSxFQUFFO0FBQUNELFVBQUksRUFBRSxDQUFQO0FBQVVDLFlBQU0sRUFBRTtBQUFsQixLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGFBQVMsRUFBRUYsNkVBQU0sQ0FBQyxRQUFELENBRG5CO0FBRUUsT0FBRyxFQUFFLENBRlA7QUFHRSxPQUFHLEVBQUUsQ0FIUDtBQUlFLFNBQUssRUFBRUQsS0FKVDtBQUtFLFlBQVEsRUFBRSxLQUxaO0FBTUUsU0FBSyxFQUFFRixXQU5UO0FBT0UsWUFBUSxFQUFFQyxjQVBaO0FBUUUsYUFBUyxFQUFFO0FBQUNLLHFCQUFlLEVBQUU7QUFBbEIsS0FSYjtBQVNFLFlBQVEsRUFBRTtBQUFDQyxpQkFBVyxFQUFFLFNBQWQ7QUFBeUJELHFCQUFlLEVBQUUsU0FBMUM7QUFBcURFLFlBQU0sRUFBRSxFQUE3RDtBQUFpRUMsV0FBSyxFQUFFLEVBQXhFO0FBQTRFQyxnQkFBVSxFQUFFLENBQUMsRUFBekY7QUFBNkZDLGtCQUFZLEVBQUUsQ0FBQztBQUE1RyxLQVRaO0FBVUUsZUFBVyxFQUFFO0FBQUNKLGlCQUFXLEVBQUUsU0FBZDtBQUF5QkQscUJBQWUsRUFBRSxTQUExQztBQUFxREUsWUFBTSxFQUFFLEVBQTdEO0FBQWlFQyxXQUFLLEVBQUUsRUFBeEU7QUFBNEVDLGdCQUFVLEVBQUUsQ0FBeEY7QUFBMkZFLGVBQVMsRUFBRSxDQUFDO0FBQXZHLEtBVmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FYRixFQTRCSVosV0FBVyxJQUFJLENBQWYsSUFDRTtBQUFLLGFBQVMsRUFBRUcsNkVBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9KQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyTkFKRixDQTdCTixFQXdDSUgsV0FBVyxJQUFJLENBQWYsSUFDRTtBQUFLLGFBQVMsRUFBRUcsNkVBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNSQURGLENBekNOLEVBaURJSCxXQUFXLElBQUksQ0FBZixJQUNFO0FBQUssYUFBUyxFQUFFRyw2RUFBTSxDQUFDLGFBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa01BREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhUQUpGLENBbEROLENBREY7QUErREQ7O0dBdEV1Qkwsa0I7O0tBQUFBLGtCIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL0luZHVzdHJ5Q2hhbGxlbmdlcy5tb2R1bGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kdXN0cnlDaGFsbGVuZ2VzKCkge1xuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IG1hcmtzID0ge1xuICAgIDA6ICdEYXRhIHNpbG9zJyxcbiAgICAxOiAnS3VyYW5nbnlhIG1hbmFqZXIgeWFuZyBtdW1wdW5pJyxcbiAgICAyOiAnQW5jYW1hbiBrZWFtYW5hbiBzaWJlcicsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge1xuICAgICAgICBhY3RpdmVJbmRleCA9PSAwICYmIDxvYmplY3QgY2xhc3NOYW1lPXtzdHlsZXNbJ3N2ZyddfSB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGRhdGE9XCJzdmcvZGF0YS1saXZpbmctaW4tc2lsb3Muc3ZnXCIvPlxuICAgICAgfSBcbiAgICAgIHsgIFxuICAgICAgICBhY3RpdmVJbmRleCA9PSAxICYmIDxvYmplY3QgY2xhc3NOYW1lPXtzdHlsZXNbJ3N2ZyddfSB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGRhdGE9XCJzdmcvbGFjay1vZi1za2lsbGVkLW1hbmFnZXJzLnN2Z1wiLz5cbiAgICAgIH0gXG4gICAgICB7IFxuICAgICAgICBhY3RpdmVJbmRleCA9PSAyICYmIDxvYmplY3QgY2xhc3NOYW1lPXtzdHlsZXNbJ3N2ZyddfSB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGRhdGE9XCJzdmcvY3liZXJzZWN1cml0eS10aHJlYXRzLnN2Z1wiLz5cbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UtZGl2XCIgLz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgeHM9e3sgc2l6ZTogMTAsIG9mZnNldDogMSB9fSBsZz17e3NpemU6IDgsIG9mZnNldDogMiB9fT5cbiAgICAgICAgICA8U2xpZGVyIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ3NsaWRlciddfVxuICAgICAgICAgICAgbWluPXswfSBcbiAgICAgICAgICAgIG1heD17Mn0gXG4gICAgICAgICAgICBtYXJrcz17bWFya3N9IFxuICAgICAgICAgICAgaW5jbHVkZWQ9e2ZhbHNlfSBcbiAgICAgICAgICAgIHZhbHVlPXthY3RpdmVJbmRleH0gXG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0QWN0aXZlSW5kZXh9XG4gICAgICAgICAgICByYWlsU3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMUNBN0VDJ319XG4gICAgICAgICAgICBkb3RTdHlsZT17e2JvcmRlckNvbG9yOiAnIzFDQTdFQycsIGJhY2tncm91bmRDb2xvcjogJyMxQ0E3RUMnLCBoZWlnaHQ6IDMwLCB3aWR0aDogMzAsIG1hcmdpbkxlZnQ6IC0xNSwgbWFyZ2luQm90dG9tOiAtMTB9fVxuICAgICAgICAgICAgaGFuZGxlU3R5bGU9e3tib3JkZXJDb2xvcjogJyMxRTM5OTgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMUUzOTk4JywgaGVpZ2h0OiAzMCwgd2lkdGg6IDMwLCBtYXJnaW5MZWZ0OiAwLCBtYXJnaW5Ub3A6IC0xNH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgTWVudXJ1dCBwZW5lbGl0aWFuIElEQywgZGF0YSBtYW51ZmFrdHVyIHNhbmdhdCBqYXJhbmcgdGVyc2ltcGFuIGRhbGFtIHNhdHUgcGVueWltcGFuYW4gZGF0YSBhdGF1IHNpc3RlbSwgdGV0YXBpIHRlcnNlYmFyIGRpIGJlYmVyYXBhIHRlbXBhdC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPcGVyYXRvcnMgYW5kIGVuZ2luZWVycyBtdXN0IG1hbnVhbGx5IHBpZWNlIHRvZ2V0aGVyIGluZm9ybWF0aW9uIGZyb20gdGhlc2Ugc2lsb2VkIHN5c3RlbXMgaW4gYSB0ZWRpb3VzIGFuZCB0aW1lLWNvbnN1bWluZyBwcm9jZXNzIC0gd2hpY2ggbmF0dXJhbGx5IGhhbXBlcnMgaW5ub3ZhdGlvbiBhbmQgZGlzY291cmFnZXMgY29sbGFib3JhdGlvbiBpbiBhIGNvbXBhbnkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID09IDEgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Rlc2NyaXB0aW9uJ119PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEEgTWNLaW5zZXkgc3R1ZHkgaGFzIHJldmVhbGVkIHRoYXQgQVNFQU4gY29tcGFuaWVzIHN1ZmZlciBmcm9tIGEgbGFjayBvZiBtYW5hZ2VycyB3aG8gdW5kZXJzdGFuZCBuZXcgdGVjaG5vbG9naWVzIGFuZCBpbm5vdmF0aW9uIHRvIHByb3Blcmx5IGltcGxlbWVudCBhIHRyYW5zZm9ybWF0aW9uYWwgc3RyYXRlZ3ksIGFuZCBhbiBpbnN1ZmZpY2llbnQgZ3Jhc3Agb2YgaG93IGFsbCB0aGVzZSBuZXcgc29sdXRpb25zIGNhbiBiZXN0IG9wdGltaXNlIHdvcmsgcHJvY2Vzc2VzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICB7IFxuICAgICAgICBhY3RpdmVJbmRleCA9PSAyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkZXNjcmlwdGlvbiddfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBSaXNrcyB0byBtYW51ZmFjdHVyZXJzIGhhdmUgZXhpc3RlZCBhcyBsb25nIGFzIHByb2R1Y3Rpb24gaGFzIGJlZW4gbWVjaGFuaXNlZC4gSW5kdXN0cnkgNC4wIGhvd2V2ZXIsIGhlcmFsZHMgdGhlIGdyZWF0ZXN0IGxlYXBzIGluIGN5YmVyIHJpc2sgdG8gZGF0ZSwgYXMgaGlnaGxpZ2h0ZWQgaW4gYSBEZWxvaXR0ZSBwYXBlci5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBZHZhbmNlZCBtYWx3YXJlLCBhcm1lZCB3aXRoIHplcm8tZGF5IGV4cGxvaXRzLCB0aGF0IGF1dG9tb3VzbHkgdGFyZ2V0cyB2dWxuZXJhYmxlIGRldmljZXMgYW5kIHNwcmVhZHMgd2l0aCBsaXR0bGUgaHVtYW4gaW50ZXJ2ZW50aW9uIGlzIGxpa2VseSB0byBvdmVycG93ZXIgYW4gYWxyZWFkeSBjaGFsbGVuZ2VkIElUL09UIHNlY3VyaXR5IHN0YWZmLiBUaGlzIGRpc3R1cmJpbmcgdHJlbmQgaGlnaGxpZ2h0cyB0aGUgbmVlZCBmb3IgSW9UIGRldmljZXMgbWFudWZhY3R1cmVycyB0byBwcm9kdWN0IHNlY3VyaXR5LWhhcmRlbmVkIGRldmljZXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/IndustryChallenges.tsx\n");

/***/ })

})