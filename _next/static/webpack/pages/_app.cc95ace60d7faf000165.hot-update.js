webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/sm.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./styles/sm.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* COLORS */\\n@media screen and (max-width: 768px) {\\n  .main h1 {\\n    font-size: 3rem;\\n    font-weight: 300;\\n    letter-spacing: 0.1rem;\\n  }\\n  .main h2 {\\n    font-size: 2.25rem;\\n    font-weight: 500;\\n    letter-spacing: 0.1rem;\\n  }\\n  .main h4 {\\n    font-size: 0.75rem;\\n    font-weight: 500;\\n    letter-spacing: 0.1rem;\\n  }\\n  .main p {\\n    font-size: 0.75rem;\\n    margin: 5rem 1rem;\\n  }\\n  .main .emphasis {\\n    font-size: 1.5rem;\\n    font-weight: 700;\\n  }\\n  .main .point {\\n    font-size: 1.5rem;\\n    font-weight: 500;\\n  }\\n\\n  .part-one-gradient {\\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#1e3998), color-stop(20%, #d7d8d6), color-stop(rgba(121, 126, 246, 0.5)), color-stop(60%, #d7d8d6), to(#1e3998));\\n    background-image: linear-gradient(#1e3998, #d7d8d6 20%, rgba(121, 126, 246, 0.5), #d7d8d6 60%, #1e3998);\\n  }\\n\\n  .section {\\n    padding: 3rem 0rem;\\n  }\\n\\n  .align-left {\\n    text-align: center;\\n  }\\n\\n  .bg {\\n    position: absolute;\\n    left: -10%;\\n    bottom: 0%;\\n    width: 100vw;\\n    opacity: 0.1;\\n  }\\n\\n  .part-three .s1-p3-bg {\\n    position: absolute;\\n    width: 100vw;\\n    left: -40%;\\n    z-index: -1;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://sm.scss\"],\"names\":[],\"mappings\":\"AAAA,WAAA;AAUA;EAEI;IACE,eAAA;IACA,gBAAA;IACA,sBAAA;EATJ;EAYE;IACE,kBAAA;IACA,gBAAA;IACA,sBAAA;EAVJ;EAaE;IACE,kBAAA;IACA,gBAAA;IACA,sBAAA;EAXJ;EAcE;IACE,kBAAA;IACA,iBAAA;EAZJ;EAeE;IACE,iBAAA;IACA,gBAAA;EAbJ;EAgBE;IACE,iBAAA;IACA,gBAAA;EAdJ;;EAkBA;IACE,uLAAA;IAAA,uGAAA;EAfF;;EAwBA;IACE,kBAAA;EArBF;;EAwBA;IACE,kBAAA;EArBF;;EAwBA;IACE,kBAAA;IACA,UAAA;IACA,UAAA;IACA,YAAA;IACA,YAAA;EArBF;;EAyBE;IACE,kBAAA;IACA,YAAA;IACA,UAAA;IACA,WAAA;EAtBJ;AACF\",\"sourcesContent\":[\"/* COLORS */\\n$scroll_bar: 15px;\\n$c_000_blue: rgb(125,214,246);\\n$c_050_blue: rgb(27, 167, 236);\\n$c_100_blue: rgb(30, 57, 152);\\n$c_teal: rgb(75, 222, 222);\\n$c_grey: rgb(215, 216, 214);\\n$c_purple: rgb(121, 126, 246);\\n$c_white: rgb(255, 255, 255);\\n$c_black: rgb(0, 0, 0);\\n@media screen and (max-width: 768px) {\\n  .main {\\n    h1 {\\n      font-size: 3rem;\\n      font-weight: 300;\\n      letter-spacing: 0.1rem;\\n    }\\n    \\n    h2 {\\n      font-size: 2.25rem;\\n      font-weight: 500;\\n      letter-spacing: 0.1rem;\\n    }\\n    \\n    h4 {\\n      font-size: 0.75rem;\\n      font-weight: 500;\\n      letter-spacing: 0.1rem;\\n    }\\n  \\n    p {\\n      font-size: 0.75rem;\\n      margin: 5rem 1rem;\\n    }\\n  \\n    .emphasis {\\n      font-size: 1.5rem;\\n      font-weight: 700;\\n    }\\n  \\n    .point {\\n      font-size: 1.5rem;\\n      font-weight: 500;\\n    }\\n  }\\n\\n  .part-one-gradient {\\n    background-image: linear-gradient(\\n      $c_100_blue,\\n      $c_grey 20%,\\n      rgba(121, 126, 246, 0.5),\\n      $c_grey 60%,\\n      $c_100_blue\\n    );\\n  }\\n\\n  .section {\\n    padding: 3rem 0rem;\\n  }\\n\\n  .align-left {\\n    text-align: center;\\n  }\\n\\n  .bg {\\n    position: absolute;\\n    left: -10%;\\n    bottom: 0%;\\n    width: 100vw;\\n    opacity: 0.1;\\n  }\\n\\n  .part-three {\\n    .s1-p3-bg {\\n      position: absolute;\\n      width: 100vw;\\n      left: -40%;\\n      z-index: -1;\\n    }\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3NtLnNjc3M/ZTM3NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUN6Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsdURBQXVELGNBQWMsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsS0FBSyxjQUFjLHlCQUF5Qix1QkFBdUIsNkJBQTZCLEtBQUssY0FBYyx5QkFBeUIsdUJBQXVCLDZCQUE2QixLQUFLLGFBQWEseUJBQXlCLHdCQUF3QixLQUFLLHFCQUFxQix3QkFBd0IsdUJBQXVCLEtBQUssa0JBQWtCLHdCQUF3Qix1QkFBdUIsS0FBSywwQkFBMEIsOExBQThMLDhHQUE4RyxLQUFLLGdCQUFnQix5QkFBeUIsS0FBSyxtQkFBbUIseUJBQXlCLEtBQUssV0FBVyx5QkFBeUIsaUJBQWlCLGlCQUFpQixtQkFBbUIsbUJBQW1CLEtBQUssNkJBQTZCLHlCQUF5QixtQkFBbUIsaUJBQWlCLGtCQUFrQixLQUFLLEdBQUcsT0FBTyw2RUFBNkUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0seURBQXlELGdDQUFnQyxpQ0FBaUMsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIsZ0NBQWdDLCtCQUErQix5QkFBeUIsd0NBQXdDLFdBQVcsVUFBVSx3QkFBd0IseUJBQXlCLCtCQUErQixPQUFPLGdCQUFnQiwyQkFBMkIseUJBQXlCLCtCQUErQixPQUFPLGdCQUFnQiwyQkFBMkIseUJBQXlCLCtCQUErQixPQUFPLGFBQWEsMkJBQTJCLDBCQUEwQixPQUFPLHFCQUFxQiwwQkFBMEIseUJBQXlCLE9BQU8sa0JBQWtCLDBCQUEwQix5QkFBeUIsT0FBTyxLQUFLLDBCQUEwQixnS0FBZ0ssS0FBSyxnQkFBZ0IseUJBQXlCLEtBQUssbUJBQW1CLHlCQUF5QixLQUFLLFdBQVcseUJBQXlCLGlCQUFpQixpQkFBaUIsbUJBQW1CLG1CQUFtQixLQUFLLG1CQUFtQixpQkFBaUIsMkJBQTJCLHFCQUFxQixtQkFBbUIsb0JBQW9CLE9BQU8sS0FBSyxHQUFHLG1CQUFtQjtBQUN4b0c7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9zbS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ09MT1JTICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5tYWluIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgfVxcbiAgLm1haW4gaDIge1xcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB9XFxuICAubWFpbiBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIH1cXG4gIC5tYWluIHAge1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIG1hcmdpbjogNXJlbSAxcmVtO1xcbiAgfVxcbiAgLm1haW4gLmVtcGhhc2lzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxuICAubWFpbiAucG9pbnQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIH1cXG5cXG4gIC5wYXJ0LW9uZS1ncmFkaWVudCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzFlMzk5OCksIGNvbG9yLXN0b3AoMjAlLCAjZDdkOGQ2KSwgY29sb3Itc3RvcChyZ2JhKDEyMSwgMTI2LCAyNDYsIDAuNSkpLCBjb2xvci1zdG9wKDYwJSwgI2Q3ZDhkNiksIHRvKCMxZTM5OTgpKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxZTM5OTgsICNkN2Q4ZDYgMjAlLCByZ2JhKDEyMSwgMTI2LCAyNDYsIDAuNSksICNkN2Q4ZDYgNjAlLCAjMWUzOTk4KTtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogM3JlbSAwcmVtO1xcbiAgfVxcblxcbiAgLmFsaWduLWxlZnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0xMCU7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3BhY2l0eTogMC4xO1xcbiAgfVxcblxcbiAgLnBhcnQtdGhyZWUgLnMxLXAzLWJnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGxlZnQ6IC00MCU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc20uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFBO0FBVUE7RUFFSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0VBVEo7RUFZRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtFQVZKO0VBYUU7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7RUFYSjtFQWNFO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQVpKO0VBZUU7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VBYko7RUFnQkU7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VBZEo7O0VBa0JBO0lBQ0UsdUxBQUE7SUFBQSx1R0FBQTtFQWZGOztFQXdCQTtJQUNFLGtCQUFBO0VBckJGOztFQXdCQTtJQUNFLGtCQUFBO0VBckJGOztFQXdCQTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQXJCRjs7RUF5QkU7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQXRCSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENPTE9SUyAqL1xcbiRzY3JvbGxfYmFyOiAxNXB4O1xcbiRjXzAwMF9ibHVlOiByZ2IoMTI1LDIxNCwyNDYpO1xcbiRjXzA1MF9ibHVlOiByZ2IoMjcsIDE2NywgMjM2KTtcXG4kY18xMDBfYmx1ZTogcmdiKDMwLCA1NywgMTUyKTtcXG4kY190ZWFsOiByZ2IoNzUsIDIyMiwgMjIyKTtcXG4kY19ncmV5OiByZ2IoMjE1LCAyMTYsIDIxNCk7XFxuJGNfcHVycGxlOiByZ2IoMTIxLCAxMjYsIDI0Nik7XFxuJGNfd2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4kY19ibGFjazogcmdiKDAsIDAsIDApO1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbiB7XFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICBoMiB7XFxuICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgaDQge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICAgIH1cXG4gIFxcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgICAgbWFyZ2luOiA1cmVtIDFyZW07XFxuICAgIH1cXG4gIFxcbiAgICAuZW1waGFzaXMge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIH1cXG4gIFxcbiAgICAucG9pbnQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5wYXJ0LW9uZS1ncmFkaWVudCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAkY18xMDBfYmx1ZSxcXG4gICAgICAkY19ncmV5IDIwJSxcXG4gICAgICByZ2JhKDEyMSwgMTI2LCAyNDYsIDAuNSksXFxuICAgICAgJGNfZ3JleSA2MCUsXFxuICAgICAgJGNfMTAwX2JsdWVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogM3JlbSAwcmVtO1xcbiAgfVxcblxcbiAgLmFsaWduLWxlZnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0xMCU7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3BhY2l0eTogMC4xO1xcbiAgfVxcblxcbiAgLnBhcnQtdGhyZWUge1xcbiAgICAuczEtcDMtYmcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgbGVmdDogLTQwJTtcXG4gICAgICB6LWluZGV4OiAtMTtcXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/sm.scss\n");

/***/ })

})