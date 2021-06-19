webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/IndustryChallenges.tsx":
/*!*************************************************!*\
  !*** ./pages/components/IndustryChallenges.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IndustryChallenges; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/IndustryChallenges.module.scss */ \"./pages/components/styles/IndustryChallenges.module.scss\");\n/* harmony import */ var _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/components/IndustryChallenges.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction IndustryChallenges() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var marks = {\n    0: 'Data silos',\n    1: 'Kurangnya manajer yang mumpuni',\n    2: 'Ancaman keamanan siber'\n  };\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, activeIndex == 0 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/data-living-in-silos.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 29\n    }\n  }), activeIndex == 1 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/lack-of-skilled-managers.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 29\n    }\n  }), activeIndex == 2 && __jsx(\"object\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['svg'],\n    type: \"image/svg+xml\",\n    data: \"svg/cybersecurity-threats.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 29\n    }\n  }), __jsx(\"div\", {\n    className: \"space-div\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    xs: {\n      size: 10,\n      offset: 1\n    },\n    lg: {\n      size: 8,\n      offset: 2\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['slider'],\n    min: 0,\n    max: 2,\n    marks: marks,\n    included: false,\n    value: activeIndex,\n    onChange: setActiveIndex,\n    railStyle: {\n      backgroundColor: '#1CA7EC'\n    },\n    dotStyle: {\n      borderColor: '#1CA7EC',\n      backgroundColor: '#1CA7EC',\n      height: 30,\n      width: 30,\n      marginLeft: -15,\n      marginBottom: 0\n    },\n    handleStyle: {\n      borderColor: '#1E3998',\n      backgroundColor: '#1E3998',\n      height: 30,\n      width: 30,\n      marginLeft: 0,\n      marginTop: -14\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }))), activeIndex == 0 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"According to a IDC study, manufacturing data is rarely housed in a common data lake or system, but typically in siloed systems.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"Operators and engineers must manually piece together information from these siloed systems in a tedious and time-consuming process - which naturally hampers innovation and discourages collaboration in a company.\")), activeIndex == 1 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"A McKinsey study has revealed that ASEAN companies suffer from a lack of managers who understand new technologies and innovation to properly implement a transformational strategy, and an insufficient grasp of how all these new solutions can best optimise work processes.\")), activeIndex == 2 && __jsx(\"div\", {\n    className: _styles_IndustryChallenges_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['description'],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, \"Risks to manufacturers have existed as long as production has been mechanised. Industry 4.0 however, heralds the greatest leaps in cyber risk to date, as highlighted in a Deloitte paper.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, \"Advanced malware, armed with zero-day exploits, that automously targets vulnerable devices and spreads with little human intervention is likely to overpower an already challenged IT/OT security staff. This disturbing trend highlights the need for IoT devices manufacturers to product security-hardened devices.\")));\n}\n\n_s(IndustryChallenges, \"rd+5N/MkYjuYD0I+B+MlySxQysU=\");\n\n_c = IndustryChallenges;\n\nvar _c;\n\n$RefreshReg$(_c, \"IndustryChallenges\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9JbmR1c3RyeUNoYWxsZW5nZXMudHN4P2E2NGYiXSwibmFtZXMiOlsiSW5kdXN0cnlDaGFsbGVuZ2VzIiwidXNlU3RhdGUiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwibWFya3MiLCJzdHlsZXMiLCJzaXplIiwib2Zmc2V0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLGtCQUFULEdBQThCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBRCxDQURIO0FBQUEsTUFDcENDLFdBRG9DO0FBQUEsTUFDdkJDLGNBRHVCOztBQUUzQyxNQUFNQyxLQUFLLEdBQUc7QUFDWixPQUFHLFlBRFM7QUFFWixPQUFHLGdDQUZTO0FBR1osT0FBRztBQUhTLEdBQWQ7QUFLQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUYsV0FBVyxJQUFJLENBQWYsSUFBb0I7QUFBUSxhQUFTLEVBQUVHLDZFQUFNLENBQUMsS0FBRCxDQUF6QjtBQUFrQyxRQUFJLEVBQUMsZUFBdkM7QUFBdUQsUUFBSSxFQUFDLDhCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRnhCLEVBS0lILFdBQVcsSUFBSSxDQUFmLElBQW9CO0FBQVEsYUFBUyxFQUFFRyw2RUFBTSxDQUFDLEtBQUQsQ0FBekI7QUFBa0MsUUFBSSxFQUFDLGVBQXZDO0FBQXVELFFBQUksRUFBQyxrQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUx4QixFQVFJSCxXQUFXLElBQUksQ0FBZixJQUFvQjtBQUFRLGFBQVMsRUFBRUcsNkVBQU0sQ0FBQyxLQUFELENBQXpCO0FBQWtDLFFBQUksRUFBQyxlQUF2QztBQUF1RCxRQUFJLEVBQUMsK0JBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSeEIsRUFVRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBRUMsVUFBSSxFQUFFLEVBQVI7QUFBWUMsWUFBTSxFQUFFO0FBQXBCLEtBQVQ7QUFBa0MsTUFBRSxFQUFFO0FBQUNELFVBQUksRUFBRSxDQUFQO0FBQVVDLFlBQU0sRUFBRTtBQUFsQixLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLGFBQVMsRUFBRUYsNkVBQU0sQ0FBQyxRQUFELENBRG5CO0FBRUUsT0FBRyxFQUFFLENBRlA7QUFHRSxPQUFHLEVBQUUsQ0FIUDtBQUlFLFNBQUssRUFBRUQsS0FKVDtBQUtFLFlBQVEsRUFBRSxLQUxaO0FBTUUsU0FBSyxFQUFFRixXQU5UO0FBT0UsWUFBUSxFQUFFQyxjQVBaO0FBUUUsYUFBUyxFQUFFO0FBQUNLLHFCQUFlLEVBQUU7QUFBbEIsS0FSYjtBQVNFLFlBQVEsRUFBRTtBQUFDQyxpQkFBVyxFQUFFLFNBQWQ7QUFBeUJELHFCQUFlLEVBQUUsU0FBMUM7QUFBcURFLFlBQU0sRUFBRSxFQUE3RDtBQUFpRUMsV0FBSyxFQUFFLEVBQXhFO0FBQTRFQyxnQkFBVSxFQUFFLENBQUMsRUFBekY7QUFBNkZDLGtCQUFZLEVBQUU7QUFBM0csS0FUWjtBQVVFLGVBQVcsRUFBRTtBQUFDSixpQkFBVyxFQUFFLFNBQWQ7QUFBeUJELHFCQUFlLEVBQUUsU0FBMUM7QUFBcURFLFlBQU0sRUFBRSxFQUE3RDtBQUFpRUMsV0FBSyxFQUFFLEVBQXhFO0FBQTRFQyxnQkFBVSxFQUFFLENBQXhGO0FBQTJGRSxlQUFTLEVBQUUsQ0FBQztBQUF2RyxLQVZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBWEYsRUE0QklaLFdBQVcsSUFBSSxDQUFmLElBQ0U7QUFBSyxhQUFTLEVBQUVHLDZFQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1SUFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMk5BSkYsQ0E3Qk4sRUF3Q0lILFdBQVcsSUFBSSxDQUFmLElBQ0U7QUFBSyxhQUFTLEVBQUVHLDZFQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzUkFERixDQXpDTixFQWlESUgsV0FBVyxJQUFJLENBQWYsSUFDRTtBQUFLLGFBQVMsRUFBRUcsNkVBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtNQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4VEFKRixDQWxETixDQURGO0FBK0REOztHQXRFdUJMLGtCOztLQUFBQSxrQiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvSW5kdXN0cnlDaGFsbGVuZ2VzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JjLXNsaWRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9JbmR1c3RyeUNoYWxsZW5nZXMubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZHVzdHJ5Q2hhbGxlbmdlcygpIHtcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBtYXJrcyA9IHtcbiAgICAwOiAnRGF0YSBzaWxvcycsXG4gICAgMTogJ0t1cmFuZ255YSBtYW5hamVyIHlhbmcgbXVtcHVuaScsXG4gICAgMjogJ0FuY2FtYW4ga2VhbWFuYW4gc2liZXInLFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMCAmJiA8b2JqZWN0IGNsYXNzTmFtZT17c3R5bGVzWydzdmcnXX0gdHlwZT1cImltYWdlL3N2Zyt4bWxcIiBkYXRhPVwic3ZnL2RhdGEtbGl2aW5nLWluLXNpbG9zLnN2Z1wiLz5cbiAgICAgIH0gXG4gICAgICB7ICBcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMSAmJiA8b2JqZWN0IGNsYXNzTmFtZT17c3R5bGVzWydzdmcnXX0gdHlwZT1cImltYWdlL3N2Zyt4bWxcIiBkYXRhPVwic3ZnL2xhY2stb2Ytc2tpbGxlZC1tYW5hZ2Vycy5zdmdcIi8+XG4gICAgICB9IFxuICAgICAgeyBcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMiAmJiA8b2JqZWN0IGNsYXNzTmFtZT17c3R5bGVzWydzdmcnXX0gdHlwZT1cImltYWdlL3N2Zyt4bWxcIiBkYXRhPVwic3ZnL2N5YmVyc2VjdXJpdHktdGhyZWF0cy5zdmdcIi8+XG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLWRpdlwiIC8+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHhzPXt7IHNpemU6IDEwLCBvZmZzZXQ6IDEgfX0gbGc9e3tzaXplOiA4LCBvZmZzZXQ6IDIgfX0+XG4gICAgICAgICAgPFNsaWRlciBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydzbGlkZXInXX1cbiAgICAgICAgICAgIG1pbj17MH0gXG4gICAgICAgICAgICBtYXg9ezJ9IFxuICAgICAgICAgICAgbWFya3M9e21hcmtzfSBcbiAgICAgICAgICAgIGluY2x1ZGVkPXtmYWxzZX0gXG4gICAgICAgICAgICB2YWx1ZT17YWN0aXZlSW5kZXh9IFxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldEFjdGl2ZUluZGV4fVxuICAgICAgICAgICAgcmFpbFN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzFDQTdFQyd9fVxuICAgICAgICAgICAgZG90U3R5bGU9e3tib3JkZXJDb2xvcjogJyMxQ0E3RUMnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMUNBN0VDJywgaGVpZ2h0OiAzMCwgd2lkdGg6IDMwLCBtYXJnaW5MZWZ0OiAtMTUsIG1hcmdpbkJvdHRvbTogMH19XG4gICAgICAgICAgICBoYW5kbGVTdHlsZT17e2JvcmRlckNvbG9yOiAnIzFFMzk5OCcsIGJhY2tncm91bmRDb2xvcjogJyMxRTM5OTgnLCBoZWlnaHQ6IDMwLCB3aWR0aDogMzAsIG1hcmdpbkxlZnQ6IDAsIG1hcmdpblRvcDogLTE0fX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAge1xuICAgICAgICBhY3RpdmVJbmRleCA9PSAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkZXNjcmlwdGlvbiddfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBY2NvcmRpbmcgdG8gYSBJREMgc3R1ZHksIG1hbnVmYWN0dXJpbmcgZGF0YSBpcyByYXJlbHkgaG91c2VkIGluIGEgY29tbW9uIGRhdGEgbGFrZSBvciBzeXN0ZW0sIGJ1dCB0eXBpY2FsbHkgaW4gc2lsb2VkIHN5c3RlbXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3BlcmF0b3JzIGFuZCBlbmdpbmVlcnMgbXVzdCBtYW51YWxseSBwaWVjZSB0b2dldGhlciBpbmZvcm1hdGlvbiBmcm9tIHRoZXNlIHNpbG9lZCBzeXN0ZW1zIGluIGEgdGVkaW91cyBhbmQgdGltZS1jb25zdW1pbmcgcHJvY2VzcyAtIHdoaWNoIG5hdHVyYWxseSBoYW1wZXJzIGlubm92YXRpb24gYW5kIGRpc2NvdXJhZ2VzIGNvbGxhYm9yYXRpb24gaW4gYSBjb21wYW55LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIFxuICAgICAgfVxuICAgICAge1xuICAgICAgICBhY3RpdmVJbmRleCA9PSAxICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkZXNjcmlwdGlvbiddfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBIE1jS2luc2V5IHN0dWR5IGhhcyByZXZlYWxlZCB0aGF0IEFTRUFOIGNvbXBhbmllcyBzdWZmZXIgZnJvbSBhIGxhY2sgb2YgbWFuYWdlcnMgd2hvIHVuZGVyc3RhbmQgbmV3IHRlY2hub2xvZ2llcyBhbmQgaW5ub3ZhdGlvbiB0byBwcm9wZXJseSBpbXBsZW1lbnQgYSB0cmFuc2Zvcm1hdGlvbmFsIHN0cmF0ZWd5LCBhbmQgYW4gaW5zdWZmaWNpZW50IGdyYXNwIG9mIGhvdyBhbGwgdGhlc2UgbmV3IHNvbHV0aW9ucyBjYW4gYmVzdCBvcHRpbWlzZSB3b3JrIHByb2Nlc3Nlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgeyBcbiAgICAgICAgYWN0aXZlSW5kZXggPT0gMiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZGVzY3JpcHRpb24nXX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgUmlza3MgdG8gbWFudWZhY3R1cmVycyBoYXZlIGV4aXN0ZWQgYXMgbG9uZyBhcyBwcm9kdWN0aW9uIGhhcyBiZWVuIG1lY2hhbmlzZWQuIEluZHVzdHJ5IDQuMCBob3dldmVyLCBoZXJhbGRzIHRoZSBncmVhdGVzdCBsZWFwcyBpbiBjeWJlciByaXNrIHRvIGRhdGUsIGFzIGhpZ2hsaWdodGVkIGluIGEgRGVsb2l0dGUgcGFwZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQWR2YW5jZWQgbWFsd2FyZSwgYXJtZWQgd2l0aCB6ZXJvLWRheSBleHBsb2l0cywgdGhhdCBhdXRvbW91c2x5IHRhcmdldHMgdnVsbmVyYWJsZSBkZXZpY2VzIGFuZCBzcHJlYWRzIHdpdGggbGl0dGxlIGh1bWFuIGludGVydmVudGlvbiBpcyBsaWtlbHkgdG8gb3ZlcnBvd2VyIGFuIGFscmVhZHkgY2hhbGxlbmdlZCBJVC9PVCBzZWN1cml0eSBzdGFmZi4gVGhpcyBkaXN0dXJiaW5nIHRyZW5kIGhpZ2hsaWdodHMgdGhlIG5lZWQgZm9yIElvVCBkZXZpY2VzIG1hbnVmYWN0dXJlcnMgdG8gcHJvZHVjdCBzZWN1cml0eS1oYXJkZW5lZCBkZXZpY2VzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/IndustryChallenges.tsx\n");

/***/ })

})