/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../public/fonts/Classi-console-Neue/clacon2.woff2 */ \"./public/fonts/Classi-console-Neue/clacon2.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Console\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n* {\n  font-family: \"Console\", Fallback, sans-serif;\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-rows: 8% 9fr;\n}\n\nheader {\n  grid-area: 1/1/2/2;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  background-color: #c0c0c0;\n}\n\nheader div {\n  grid-row: 1/2;\n  background-color: #000080;\n  display: flex;\n  align-items: center;\n  color: #fffbf0;\n  border: 5px ridge #c0c0c0;\n  border-bottom: none;\n}\n\nheader div p {\n  font-size: 1rem;\n  vertical-align: center;\n  margin-left: 10px;\n}\n\nheader div img {\n  height: 1.5rem;\n  width: auto;\n  margin-left: 10px;\n  border: 1px solid #c0c0c0;\n}\n\nheader nav {\n  grid-row: 2/3;\n  border-left: 5px ridge #c0c0c0;\n  border-right: 5px ridge #c0c0c0;\n  display: flex;\n  align-items: center;\n}\n\nnav button {\n  padding: 3px;\n  border: 3px solid rgba(0, 0, 0, 0);\n  background: none;\n  margin-left: 10px;\n}\n\nnav button,\nheader div p {\n  font-size: 1.2rem;\n}\n\nnav button:hover {\n  border: 3px outset #c0c0c0;\n}\n\n#console-menu,\n#console-about {\n  color: #00ff00;\n  grid-area: 2/1/3/2;\n  height: 100%;\n  background-color: #000000;\n  border: 5px ridge #c0c0c0;\n  padding: 10px;\n  font-size: 1rem;\n  line-height: 1.1;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://retaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://retaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://retaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://retaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://retaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://retaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://retaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://retaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://retaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://retaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://retaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./public/fonts/Classi-console-Neue/clacon2.woff2"
/*!********************************************************!*\
  !*** ./public/fonts/Classi-console-Neue/clacon2.woff2 ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"660c489003970451cd02.woff2\";\n\n//# sourceURL=webpack://retaurant-page/./public/fonts/Classi-console-Neue/clacon2.woff2?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAbout: () => (/* binding */ renderAbout)\n/* harmony export */ });\nconst renderAbout = () => {\n  const mainContent = document.querySelector(\"#content\");\n  const terminalWindow = document.createElement(\"div\");\n  terminalWindow.id = \"console-about\";\n  terminalWindow.innerHTML = String.raw`\n<pre>\nuser@devbites:~$ ./about_us.sh --verbose\n\n[INFO] Initializing system diagnostic...\n[INFO] Reading system profile and network interfaces...\n[SUCCESS] Information fetched (0 warnings).\n\n================================================================================\n                           ___ About The Dev Bites ___\n                      -- System Architecture & Mission --\n================================================================================\n\n1. SYSTEM OVERVIEW\n--------------------------------------------------------------------------------\n> Founded in 2024, The Dev Bites was built on a simple premise: high-performance \n  culinary engineering. We combine clean code principles with premium gastronomy \n  to deliver a zero-latency dining experience. \n\n  Our kitchen operates on an asynchronous architecture—ensuring every dish is \n  cooked to perfection without blocking the main event queue. From local memory \n  caching (fresh daily ingredients) to pixel-perfect plating, every meal is \n  thoroughly tested before deployment to your table.\n\n2. SYSTEM MAINTAINERS\n--------------------------------------------------------------------------------\n  [+] Lead Tech Chef   : Alex \"Kernel\" Mercer\n  [+] DevOps Barista   : Sarah \"Async\" Lin\n  [+] QA Food Tester   : David \"NullPointer\" Vance\n\n3. NETWORK ENDPOINTS & CONTACT\n--------------------------------------------------------------------------------\n> For pull requests, table reservations, or priority support:\n\n  [EMAIL]     : support@devbites.io\n  [PHONE #1]  : +1 (555) 019-2834  (Hotline / Immediate Call)\n  [PHONE #2]  : +1 (555) 014-9021  (Reservations / Async Queue)\n  [PHYSICAL]  : 404 Bug Street, Silicon Valley, CA 94016\n\n================================================================================\n[STATUS 200 OK] All communication channels open and listening on port 8080.\nuser@devbites:~$\n</pre>\n`;\n  terminalWindow.style.color = \"#00ff00\";\n  terminalWindow.style.display = \"grid\";\n  terminalWindow.style.height = \"100%\";\n  terminalWindow.style.backgroundColor = \"#000000\";\n  terminalWindow.style.border = \"5px ridge #c0c0c0\";\n  terminalWindow.style.padding = \"10px\";\n  terminalWindow.style.fontSize = \"1rem\";\n  terminalWindow.style.lineHeight = \"1.1\";\n  mainContent.appendChild(terminalWindow);\n};\n\n\n//# sourceURL=webpack://retaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/home_page.js"
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = () => {\n  const mainContent = document.querySelector(\"#content\");\n  const terminalWindow = document.createElement(\"div\");\n  terminalWindow.id = \"terminal-console\";\n  terminalWindow.innerHTML = String.raw`\n      <p id=\"home-console-title\">user@devbites:~$ > ./home.sh</p>\n      <pre id=\"welcome\">\n                      Welcome to...\n</pre>\n      <pre id=\"home-banner-ascii\">\n ________  __                        _______                      \n|        \\|  \\                      |       \\                     \n \\$$$$$$$$| $$____    ______        | $$$$$$$\\  ______  __     __ \n   | $$   | $$    \\  /      \\       | $$  | $$ /      \\|  \\   /  \\\n   | $$   | $$$$$$$\\|  $$$$$$\\      | $$  | $$|  $$$$$$\\\\$$\\ /  $$\n   | $$   | $$  | $$| $$    $$      | $$  | $$| $$    $$ \\$$\\  $$ \n   | $$   | $$  | $$| $$$$$$$$      | $$__/ $$| $$$$$$$$  \\$$ $$  \n   | $$   | $$  | $$ \\$$     \\      | $$    $$ \\$$     \\   \\$$$   \n    \\$$    \\$$   \\$$  \\$$$$$$$       \\$$$$$$$   \\$$$$$$$    \\$    \n                                                                  \n                                                                  \n         _______   __    __                          __           \n        |       \\ |  \\  |  \\                        |  \\          \n        | $$$$$$$\\ \\$$ _| $$_     ______    _______ | $$          \n        | $$__/ $$|  \\|   $$ \\   /      \\  /       \\| $$          \n        | $$    $$| $$ \\$$$$$$  |  $$$$$$\\|  $$$$$$$| $$          \n        | $$$$$$$\\| $$  | $$ __ | $$    $$ \\$$    \\  \\$$          \n        | $$__/ $$| $$  | $$|  \\| $$$$$$$$ _\\$$$$$$\\ __           \n        | $$    $$| $$   \\$$  $$ \\$$     \\|       $$|  \\          \n         \\$$$$$$$  \\$$    \\$$$$   \\$$$$$$$ \\$$$$$$$  \\$$          \n                                                                  \n\n</pre>\n      <p id=\"home-console-description\">\nuser@devbites:~$ > Initializing kitchen... We serve structured dishes made with\ntop-quality ingredients, prepared asynchronously so your experience\nnever gets blocked.\n      </p>\n<pre id=\"hours\">user@devbites:~$ > ./schedule.sh\n\n[UPTIME STATUS]\n  > Mon-Thu: 12:00-15:30 | 19:00-23:00 (Standard Deploy)\n  > Fri-Sat: 12:00-16:00 | 19:00-00:30 (High Traffic)\n  > Sun    : 13:00-21:00 (Maintenance & Reboot)\n\n[200 OK] Server online. Ready to accept connections.\n</pre>\n<pre id=\"location\">\nuser@devbites:~$ > tail -n 2 /var/log/address.log\n\n[LOG] ADDRESS: 404 Bug Street, Silicon Valley, CA 94016\n[LOG] STATUS : Physical server online & ready for walk-ins.\n</pre>`;\n  terminalWindow.style.color = \"#00ff00\";\n  terminalWindow.style.display = \"grid\";\n  terminalWindow.style.height = \"100%\";\n  terminalWindow.style.backgroundColor = \"#000000\";\n  terminalWindow.style.border = \"5px ridge #c0c0c0\";\n  terminalWindow.style.padding = \"10px\";\n  terminalWindow.style.fontSize = \"1rem\";\n  terminalWindow.style.lineHeight = \"1.1\";\n\n  mainContent.appendChild(terminalWindow);\n};\n\n\n//# sourceURL=webpack://retaurant-page/./src/home_page.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home_page.js */ \"./src/home_page.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nlet mainContent = document.querySelector(\"#content\");\n(0,_home_page_js__WEBPACK_IMPORTED_MODULE_1__.renderHomePage)();\n\nconst homeBtn = document.getElementById(\"home-btn\");\nconst menuBtn = document.getElementById(\"menu-btn\");\nconst aboutBtn = document.getElementById(\"about-btn\");\n\nhomeBtn.addEventListener(\"click\", () => {\n  mainContent.innerHTML = \"\";\n  (0,_home_page_js__WEBPACK_IMPORTED_MODULE_1__.renderHomePage)();\n});\nmenuBtn.addEventListener(\"click\", () => {\n  mainContent.innerHTML = \"\";\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.renderMenu)();\n});\naboutBtn.addEventListener(\"click\", () => {\n  mainContent.innerHTML = \"\";\n  (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.renderAbout)();\n});\n\n\n//# sourceURL=webpack://retaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\nconst renderMenu = () => {\n  const mainContent = document.querySelector(\"#content\");\n  const terminalWindow = document.createElement(\"div\");\n  const scrollWrapper = document.createElement(\"div\");\n  scrollWrapper.innerHTML = String.raw`\n<pre>\nuser@devbites:~$ ./fetch_menu.sh --all\n\n[INFO] Initializing kitchen pipeline...\n[INFO] Loading dependencies: ingredients, recipes, flavors...\n[SUCCESS] Menu compiled successfully (0 errors, 0 warnings).\n\n================================================================================\n                           ___ The Dev Bites ___\n                        -- Full-Stack Gastronomy --\n================================================================================\n\n1. STARTERS / APPETIZERS — The Front-End\n--------------------------------------------------------------------------------\n> Light, visually appealing dishes that create the first impression.\n\n  [+] Hero Banner Bruschetta\n      Artisanal toasted bread with tomato concassé, fresh basil, and a balsamic\n      reduction drizzled with pixel-perfect precision.\n\n  [+] Flexbox Dip Platters\n      A selection of hummus and dips served on an interactive board—perfectly\n      responsive to the size of your appetite.\n\n  [+] DOM Salad\n      Fresh green salad with hierarchically nested ingredients (avocado, \n      walnuts, goat cheese) topped with a Cascading dressing (CSS).\n\n2. MAIN COURSES — The Back-End & Infrastructure\n--------------------------------------------------------------------------------\n> The core of the kitchen: hearty, complex, and driven by logic.\n\n  [+] Full-Stack Burger\n      Double premium beef patty with melted cheddar, crispy bacon, and \n      caramelized onions, stacked on a solid brioche architecture.\n\n  [+] Node.js Express Ribs\n      Slow-cooked barbecue pork ribs (async/await) so tender they won't \n      block the main thread (non-blocking).\n\n  [+] PostgreSQL Pizza\n      Wood-fired sourdough pizza with a relational mozzarella and tomato base, \n      seamlessly linked to your favorite toppings via foreign keys.\n\n  [+] Python Django Pasta\n      House-made fettuccine with traditional bolognese sauce. Comes with \n      everything you need right on the plate (batteries included).\n\n3. DESSERTS — Syntactic Sugar & Sweet Treats\n--------------------------------------------------------------------------------\n> The sweet finish to the development cycle.\n\n  [+] Coffee Break Espresso Tiramisu\n      Layers of espresso-soaked ladyfingers, perfect for a system reboot \n      and avoiding late-night debugging.\n\n  [+] Bug-Free Brownie\n      Dark chocolate brownie served with vanilla ice cream. \n      Guaranteed 100% runtime-error free.\n\n  [+] Git Commit Donut\n      Classic glazed donut. Every single bite creates a permanent record \n      in your craving history.\n\n4. DRINKS — The Pipelines & Liquors\n--------------------------------------------------------------------------------\n  [+] Git Push Cocktail\n      A refreshing signature drink with gin, tonic, and berries to ship your \n      changes straight to production.\n\n  [+] Infinite Loop Refill\n      Artisanal mint and ginger lemonade with unlimited refills \n      (watch out for stack overflows).\n\n  [+] 404 Mocktail\n      A mysterious flavored water... the exact taste you are looking for \n      could not be found.\n\n================================================================================\n[STATUS 200 OK] Order pipeline ready.\nuser@devbites:~$\n</pre>\n`;\n  terminalWindow.style.border = \"5px ridge #c0c0c0\";\n  terminalWindow.style.height = \"100%\";\n  terminalWindow.style.display = \"flex\";\n  terminalWindow.style.flexDirection = \"column\";\n  scrollWrapper.style.color = \"#00ff00\";\n  scrollWrapper.style.display = \"grid\";\n  scrollWrapper.style.height = \"100%\";\n  scrollWrapper.style.backgroundColor = \"#000000\";\n  scrollWrapper.style.padding = \"10px\";\n  scrollWrapper.style.fontSize = \"1rem\";\n  scrollWrapper.style.lineHeight = \"1.1\";\n  scrollWrapper.style.overflow = \"scroll\";\n  terminalWindow.appendChild(scrollWrapper);\n  mainContent.appendChild(terminalWindow);\n};\n\n\n//# sourceURL=webpack://retaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;