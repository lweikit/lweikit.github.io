webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/sections/NavBar.tsx":
/*!***********************************!*\
  !*** ./pages/sections/NavBar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/weikit/Desktop/code/hitachi/pages/sections/NavBar.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction NavBar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var toggle = function toggle() {\n    return setIsOpen(!isOpen);\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isScrolling = _useState2[0],\n      setIsScrolling = _useState2[1];\n\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(); // navRef.current = isScrolling\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var handleScroll = function handleScroll() {\n      var show = window.scrollY > 670;\n\n      if (navRef.current !== show) {\n        setIsScrolling(show);\n      }\n    };\n\n    document.addEventListener('scroll', handleScroll);\n    return function () {\n      document.removeEventListener('scroll', handleScroll);\n    };\n  }, []);\n  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n    dark: true,\n    fixed: \"top\",\n    expand: \"lg\",\n    style: {\n      backgroundColor: isScrolling ? '#1E3998' : 'transparent',\n      transition: '.5s ease-out'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n    isOpen: isOpen,\n    navbar: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n    navbar: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n    to: \"section-one\",\n    spy: true,\n    smooth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, \"ASEAN Manufacturing\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n    to: \"section-two\",\n    spy: true,\n    smooth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, \"Urgent Transformation\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n    to: \"section-three\",\n    spy: true,\n    smooth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Industry 4.0 Challenges\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n    to: \"section-four\",\n    spy: true,\n    smooth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"Hitachi's Lumada\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    tag: react_scroll__WEBPACK_IMPORTED_MODULE_2__[\"Link\"],\n    to: \"section-five\",\n    spy: true,\n    smooth: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, \"Smart Manufacturing\")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavbarToggler\"], {\n    onClick: toggle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavbarBrand\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"img/logo.svg\",\n    height: \"30px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 29\n    }\n  })));\n}\n\n_s(NavBar, \"otHtyYSrKW2evHp+jYroRgXlhWQ=\");\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VjdGlvbnMvTmF2QmFyLnRzeD84NTU5Il0sIm5hbWVzIjpbIk5hdkJhciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiaXNTY3JvbGxpbmciLCJzZXRJc1Njcm9sbGluZyIsIm5hdlJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInNob3ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY3VycmVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQ3hCQyxNQUR3QjtBQUFBLE1BQ2hCQyxTQURnQjs7QUFFL0IsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBZjs7QUFGK0IsbUJBSU9ELHNEQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJeEJJLFdBSndCO0FBQUEsTUFJWEMsY0FKVzs7QUFLL0IsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxFQUFyQixDQUwrQixDQU0vQjs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixVQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUE5Qjs7QUFDQSxVQUFJTixNQUFNLENBQUNPLE9BQVAsS0FBbUJILElBQXZCLEVBQTZCO0FBQzNCTCxzQkFBYyxDQUFDSyxJQUFELENBQWQ7QUFDRDtBQUNGLEtBTEQ7O0FBTUFJLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FB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bnMvTmF2QmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29sbGFwc2UsIE5hdiwgTmF2YmFyLCBOYXZiYXJCcmFuZCwgTmF2YmFyVG9nZ2xlciwgTmF2SXRlbSwgTmF2TGluayB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pXG4gIFxuICBjb25zdCBbaXNTY3JvbGxpbmcsIHNldElzU2Nyb2xsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBuYXZSZWYgPSB1c2VSZWYoKVxuICAvLyBuYXZSZWYuY3VycmVudCA9IGlzU2Nyb2xsaW5nXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9IHdpbmRvdy5zY3JvbGxZID4gNjcwXG4gICAgICBpZiAobmF2UmVmLmN1cnJlbnQgIT09IHNob3cpIHtcbiAgICAgICAgc2V0SXNTY3JvbGxpbmcoc2hvdylcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gICAgfVxuICB9LCBbXSlcblxuXG4gIHJldHVybiAoXG4gICAgPE5hdmJhciBkYXJrIGZpeGVkPVwidG9wXCIgZXhwYW5kPVwibGdcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogaXNTY3JvbGxpbmcgPyAnIzFFMzk5OCcgOiAndHJhbnNwYXJlbnQnLCB0cmFuc2l0aW9uOiAnLjVzIGVhc2Utb3V0J319PlxuICAgIHsvKiA8TmF2YmFyIGRhcmsgZml4ZWQ9XCJ0b3BcIiBleHBhbmQ9XCJsZ1wiPiAqL31cbiAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxuICAgICAgICA8TmF2IG5hdmJhcj5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRhZz17TGlua30gdG89XCJzZWN0aW9uLW9uZVwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfT5BU0VBTiBNYW51ZmFjdHVyaW5nPC9OYXZMaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRhZz17TGlua30gdG89XCJzZWN0aW9uLXR3b1wiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfT5VcmdlbnQgVHJhbnNmb3JtYXRpb248L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmsgdGFnPXtMaW5rfSB0bz1cInNlY3Rpb24tdGhyZWVcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0+SW5kdXN0cnkgNC4wIENoYWxsZW5nZXM8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmsgdGFnPXtMaW5rfSB0bz1cInNlY3Rpb24tZm91clwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfT5IaXRhY2hpJ3MgTHVtYWRhPC9OYXZMaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRhZz17TGlua30gdG89XCJzZWN0aW9uLWZpdmVcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0+U21hcnQgTWFudWZhY3R1cmluZzwvTmF2TGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPjxpbWcgc3JjPVwiaW1nL2xvZ28uc3ZnXCIgaGVpZ2h0PVwiMzBweFwiIC8+PC9OYXZiYXJCcmFuZD5cbiAgICA8L05hdmJhcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sections/NavBar.tsx\n");

/***/ })

})