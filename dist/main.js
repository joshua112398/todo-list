/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0px;\n    padding: 0px;\n    border: 0px;\n    font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n}\n\nheader {\n    background-color: rgb(101, 200, 230);\n    grid-column: 1 / 3;\n    padding: 10px;\n    color: white;\n    z-index: 2;\n    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.315);\n}\n\nnav {\n    background-color: rgb(239, 241, 241);\n    padding: 25px 15px;\n    font-size: 1.4rem;\n    font-weight: bold;\n    width: 200px;\n    z-index: 1;\n    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.315);\n}\n\nnav li button{\n    font-size: 1rem;\n}\n\nnav button {\n    background-color: rgba(255, 255, 255, 0);\n    border-radius: 5px;\n}\n\n.nav-header, .project {\n    display: grid;\n    grid-template-columns: 170px 16px;\n    justify-items: left;\n    border-radius: 5px;\n    align-content: center;\n    overflow: hidden;\n}\n\n.nav-header {\n    margin-top: 10px;\n}\n\n.nav-header button {\n    font-size: 1.1rem;\n    font-family: 'Roboto', sans-serif;\n}\n\n#project-button, #delete-project-button {\n    width: 16px;\n    height: 100%;\n}\n\n#active-project {\n    background-color: rgb(182, 182, 182);\n}\n\n#project-button:hover, .project:hover, .project *:hover {\n    cursor: pointer;\n    background-color: rgb(214, 214, 214);\n}\n\n\n\nul {\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n}\n\nli {\n    padding: 5px 5px;\n}\n\n.modal {\n    background-color: rgba(0, 0, 0, 0.4);\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: none;\n    z-index: 10;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal-box {\n    box-sizing: border-box;\n    width: 300px;\n    height: min-content;\n    background-color: white;\n    border: 2px solid rgb(101, 200, 230);\n    padding: 20px;\n    display: flex;  \n    align-items: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\nform button {\n    box-sizing: border-box;\n    width: 100px;\n    background-color: rgb(101, 200, 230);\n    border: 2px solid rgb(101, 200, 230);\n    border-radius: 10px;\n    color: white;\n    padding: 4px;\n    align-self: end;\n}\n\ntextarea {\n    resize: none;\n}\n\ninput, textarea{\n    border: 1px solid black;\n    padding: 5px;\n}\n\nmain {\n    padding: 30px 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.main-title {\n    display: flex;\n    justify-content: space-between;\n}\n\n#add-task-button {\n    box-sizing: border-box;\n    font-size: 1.1rem;\n    background-color: rgb(101, 200, 230);\n    width: 90px;\n    height: 30px;\n    border: 2px solid rgb(101, 200, 230);\n    border-radius: 15px;\n    color: white;\n}\n\n#add-task-button:hover, form button:hover {\n    background-color: white;\n    color: rgb(101, 200, 230);\n    transition: 0.2s;\n    cursor: pointer;\n}\n\n.todo-list {\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    grid-auto-rows: min-content;\n    gap: 5px;\n}\n\n.todo {\n    padding: 10px 20px;\n    border: 2px solid rgb(101, 200, 230);\n    border-radius: 10px;\n    display: grid;\n    overflow: hidden;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto auto;\n    align-items: center;\n    column-gap: 15px;\n}\n\n.todo:hover {\n    cursor: pointer;\n}\n\n.todo p, .todo input {\n    margin-top: 10px;\n    grid-column: 1 / 3;\n    padding: 0px 5px;\n    border-radius: 5px;\n    height: 1.2rem;\n}\n\n.todo p:hover {\n    background-color: rgb(214, 214, 214);\n}\n\n.todo input {\n    border: 0px;\n    border-radius: 0px;\n    border-bottom: 1px solid rgb(194, 194, 194);\n}\n\n.todo input:focus {\n    border: none;\n    border-bottom: 1px solid rgb(0, 0, 0);\n    outline: none;\n}\n\n.checkbox {\n    width: 15px;\n    height: 15px;\n    border: 2px solid rgb(133, 133, 133);\n}\n\n.checkbox:hover {\n    background-color: rgb(101, 200, 230);\n    cursor: pointer;\n    transition: 0.3s;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,WAAW;IACX,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,+BAA+B;IAC/B,4BAA4B;AAChC;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,UAAU;IACV,4CAA4C;AAChD;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,UAAU;IACV,4CAA4C;AAChD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,wCAAwC;IACxC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,oCAAoC;AACxC;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,oCAAoC;IACpC,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,oCAAoC;IACpC,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,oCAAoC;IACpC,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uDAAuD;IACvD,2BAA2B;IAC3B,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,+BAA+B;IAC/B,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,2CAA2C;AAC/C;;AAEA;IACI,YAAY;IACZ,qCAAqC;IACrC,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["* {\n    margin: 0px;\n    padding: 0px;\n    border: 0px;\n    font-family: 'Roboto', sans-serif;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n}\n\nheader {\n    background-color: rgb(101, 200, 230);\n    grid-column: 1 / 3;\n    padding: 10px;\n    color: white;\n    z-index: 2;\n    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.315);\n}\n\nnav {\n    background-color: rgb(239, 241, 241);\n    padding: 25px 15px;\n    font-size: 1.4rem;\n    font-weight: bold;\n    width: 200px;\n    z-index: 1;\n    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.315);\n}\n\nnav li button{\n    font-size: 1rem;\n}\n\nnav button {\n    background-color: rgba(255, 255, 255, 0);\n    border-radius: 5px;\n}\n\n.nav-header, .project {\n    display: grid;\n    grid-template-columns: 170px 16px;\n    justify-items: left;\n    border-radius: 5px;\n    align-content: center;\n    overflow: hidden;\n}\n\n.nav-header {\n    margin-top: 10px;\n}\n\n.nav-header button {\n    font-size: 1.1rem;\n    font-family: 'Roboto', sans-serif;\n}\n\n#project-button, #delete-project-button {\n    width: 16px;\n    height: 100%;\n}\n\n#active-project {\n    background-color: rgb(182, 182, 182);\n}\n\n#project-button:hover, .project:hover, .project *:hover {\n    cursor: pointer;\n    background-color: rgb(214, 214, 214);\n}\n\n\n\nul {\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n}\n\nli {\n    padding: 5px 5px;\n}\n\n.modal {\n    background-color: rgba(0, 0, 0, 0.4);\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: none;\n    z-index: 10;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal-box {\n    box-sizing: border-box;\n    width: 300px;\n    height: min-content;\n    background-color: white;\n    border: 2px solid rgb(101, 200, 230);\n    padding: 20px;\n    display: flex;  \n    align-items: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\nform button {\n    box-sizing: border-box;\n    width: 100px;\n    background-color: rgb(101, 200, 230);\n    border: 2px solid rgb(101, 200, 230);\n    border-radius: 10px;\n    color: white;\n    padding: 4px;\n    align-self: end;\n}\n\ntextarea {\n    resize: none;\n}\n\ninput, textarea{\n    border: 1px solid black;\n    padding: 5px;\n}\n\nmain {\n    padding: 30px 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.main-title {\n    display: flex;\n    justify-content: space-between;\n}\n\n#add-task-button {\n    box-sizing: border-box;\n    font-size: 1.1rem;\n    background-color: rgb(101, 200, 230);\n    width: 90px;\n    height: 30px;\n    border: 2px solid rgb(101, 200, 230);\n    border-radius: 15px;\n    color: white;\n}\n\n#add-task-button:hover, form button:hover {\n    background-color: white;\n    color: rgb(101, 200, 230);\n    transition: 0.2s;\n    cursor: pointer;\n}\n\n.todo-list {\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    grid-auto-rows: min-content;\n    gap: 5px;\n}\n\n.todo {\n    padding: 10px 20px;\n    border: 2px solid rgb(101, 200, 230);\n    border-radius: 10px;\n    display: grid;\n    overflow: hidden;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto auto;\n    align-items: center;\n    column-gap: 15px;\n}\n\n.todo:hover {\n    cursor: pointer;\n}\n\n.todo p, .todo input {\n    margin-top: 10px;\n    grid-column: 1 / 3;\n    padding: 0px 5px;\n    border-radius: 5px;\n    height: 1.2rem;\n}\n\n.todo p:hover {\n    background-color: rgb(214, 214, 214);\n}\n\n.todo input {\n    border: 0px;\n    border-radius: 0px;\n    border-bottom: 1px solid rgb(194, 194, 194);\n}\n\n.todo input:focus {\n    border: none;\n    border-bottom: 1px solid rgb(0, 0, 0);\n    outline: none;\n}\n\n.checkbox {\n    width: 15px;\n    height: 15px;\n    border: 2px solid rgb(133, 133, 133);\n}\n\n.checkbox:hover {\n    background-color: rgb(101, 200, 230);\n    cursor: pointer;\n    transition: 0.3s;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectDOM": () => (/* binding */ addProjectDOM),
/* harmony export */   "addTodoDOM": () => (/* binding */ addTodoDOM),
/* harmony export */   "clearProjectDisplay": () => (/* binding */ clearProjectDisplay),
/* harmony export */   "clearTodoList": () => (/* binding */ clearTodoList),
/* harmony export */   "editDescriptionDOM": () => (/* binding */ editDescriptionDOM),
/* harmony export */   "loadTitle": () => (/* binding */ loadTitle)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
// MODULE FOR DOM MANIPULATION



const addProjectDOM = function (name, index) {
    const projectList = document.querySelector("#project-list ul");
    const project = document.createElement("li");
    const projectButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    project.classList.add("project");
    projectButton.textContent = name;
    project.appendChild(projectButton);
    deleteButton.textContent = "x";
    deleteButton.setAttribute("id", "delete-project-button");
    project.appendChild(deleteButton);
    projectList.appendChild(project);

    project.dataset.index = index;

    return project;
}

const clearProjectDisplay = function() {
    const projectList = document.querySelector("#project-list ul");
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    }
}

const loadTitle = function(title) {
    const mainTitle = document.querySelector(".main-title");
    while (mainTitle.firstChild) {
        mainTitle.removeChild(mainTitle.firstChild);
    }
    const header = document.createElement("h2");
    const button = document.createElement("button");

    button.setAttribute("id", "add-task-button");
    button.textContent = "Add";
    header.textContent = title;

    mainTitle.appendChild(header);
    mainTitle.appendChild(button);
}

const clearTodoList = function(project) {
    const todoList = document.querySelector(".todo-list");
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}

const addTodoDOM = function (todo, index, project) {
    const div = document.createElement("div");
    div.addEventListener("click", toggleDescription);
    div.classList.add("todo");
    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("click", () => {
        console.log(project);
        project.removeTodo(index);
    });
    const h3 = document.createElement("h3");
    h3.textContent = todo.title;
    const p = document.createElement("p");
    p.textContent = todo.getDescription();
    p.style.display = "none";

    div.appendChild(checkbox);
    div.appendChild(h3);
    div.appendChild(p);

    const todoList = document.querySelector(".todo-list");
    todoList.appendChild(div);

    return div;
}

const toggleDescription = function () {
    const description = this.querySelector("p");
    // If no description exists, abort function
    if (description === null) {
        return;
    }
    // Else, toggle description visibility
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

const editDescriptionDOM = function (descriptionDOM) {
    const oldDescription = descriptionDOM.textContent;
    const todoDOM = descriptionDOM.parentNode;
    todoDOM.removeChild(todoDOM.lastChild); // delete description
    const descInput = document.createElement("input");
    descInput.value = oldDescription;
    todoDOM.appendChild(descInput);
    return descInput;
    
}







/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
// PROJECT OBJECT //////////////////////////////////



const project = function(title) {

    const todos = []; // array composed of todo items
    let activeProject = false;

    const addTodo = function(todo) {
        // add todo item to logic
        todos.push(todo);

        // add todo item to DOM
        const todoDOM = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addTodoDOM)(todo, todos.length - 1, this);
        const todoDescription = todoDOM.querySelector("p");
        todoDescription.addEventListener("click", (e) => {
            e.stopPropagation();
            editDescription(todoDOM, todos.length - 1)
        });
    }

    const editDescription = function(todoDOM, index) {
        const todoDescription = todoDOM.querySelector("p");
        const inputDesc = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.editDescriptionDOM)(todoDescription);
        inputDesc.addEventListener("blur", () => {
            changeTodoDescription(index, inputDesc.value);
            const newDescription = document.createElement("p");
            newDescription.textContent = inputDesc.value;
            newDescription.addEventListener("click", (e) => {
                e.stopPropagation();
                editDescription(todoDOM, index);
            });
            todoDOM.appendChild(newDescription);
            todoDOM.removeChild(inputDesc);
        })
    }

    const removeTodo = function(index) {
        // remove todo item from logic
        todos.splice(index, 1);

        // refresh updated DOM todo liset
        this.reloadTodos();
    }

    const reloadTodos = function() {
        ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.clearTodoList)();
        let index = 0;
        todos.forEach((todo) => {
            const todoDOM = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addTodoDOM)(todo, index, this);
            const todoDescription = todoDOM.querySelector("p");
            todoDescription.addEventListener("click", (e) => {
                e.stopPropagation();
                editDescription(todoDOM, todos.length - 1)
            });
            index += 1;
        })
    }

    const changeTodoDescription = function(index, newDescription) {
        todos[index].changeDescription(newDescription);
    }

    const setCurrentProject = function(state) {
        if (state === true) {
            activeProject = true;
        } else {
            activeProject = false;
        }
    }

    const isActiveProject = function() {
        return activeProject;
    }

    return {addTodo, removeTodo, reloadTodos, changeTodoDescription, setCurrentProject, isActiveProject, todos, title}
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
// TODO OBJECT //////////////////////////////////

const todo = function(todoTitle, todoDescription) {

    let title = todoTitle;
    let description = todoDescription;

    const changeDescription = function(newDescription) {
        description = newDescription;
    };

    const getDescription = function() {
        return description;
    };

    return {changeDescription, getDescription, title}
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





let inbox = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.project)("INBOX");
let outbox = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.project)("OUTBOX");

const logicController = (() => {
    const projectList = [];

    let currentProject = "INBOX"; // default container for new todo items

    const projectButton = document.querySelector("#project-button");
    const addProjectButton = document.querySelector("#add-project-button");
    const addProjectModal = document.querySelector("#project-modal");
    const addTodoButton = document.querySelector("#add-todo-button");
    const addTodoModal = document.querySelector("#todo-modal");
    const inboxButton = document.querySelector("#inbox");

    projectButton.addEventListener("click", addProject);

    inboxButton.addEventListener("click", () => {
        loadProject(inbox);
    })


    addProjectButton.addEventListener("click", (e) => {
        e.preventDefault();
        const projectName = document.querySelector("#project-input").value;
        // add new project to logic
        const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.project(projectName);
        projectList.push(newProject);
        // display new project in DOM/website
        const projectDOM = (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.addProjectDOM)(projectName, projectList.length-1); 
        addProjectModal.style.display = "none";
        // add event Listener for removal of project
        const removeButton = projectDOM.querySelector("#delete-project-button");
        removeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            removeProject(projectDOM, newProject);
        });
        // add event Listener for selection of project
        projectDOM.addEventListener("click", () => {
            loadProject(newProject);
        });
    });

    function loadProject(project) {
        // show title and set project as the only active project
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.loadTitle)(project.title);
        projectList.forEach((proj) => {
            proj.setCurrentProject(false);
        })
        project.setCurrentProject(true);
        reloadProjectDisplay();
        // implement the "add task" button
        const addButton = document.querySelector("#add-task-button");
        addButton.addEventListener("click", () => {
            addTodoModal.style.display = "flex";
            const addTodoForm = addTodoModal.querySelector(".modal-box form");
            addTodoForm.removeChild(addTodoForm.lastElementChild);
            const confirmTodoButton = document.createElement("button");
            confirmTodoButton.setAttribute("id", "add-todo-button");
            confirmTodoButton.textContent = "Confirm";
            confirmTodoButton.addEventListener("click", (e) => {
                e.preventDefault();
                console.log("Hey");
                const todoName = document.querySelector("#todo-name").value;
                const todoDescription = document.querySelector("#todo-desc").value;

                const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_2__.todo(todoName, todoDescription);
                project.addTodo(newTodo);
                addTodoModal.style.display = "none";
            });
            addTodoForm.appendChild(confirmTodoButton);
            
        });
        project.reloadTodos();
    }
    
    function addProject() {
        // add code to display add project window here
        addProjectModal.style.display = "flex";
    };

    function removeProject(projectDOM, project) {
        // to remove a project, remove it from the array, then reload DOM's project display
        projectList.splice(projectDOM.dataset.index, 1);
        reloadProjectDisplay();
        // if removed project was the active project, load the default "Inbox" project
        if (project.isActiveProject() === true) {
            loadProject(inbox);
        }
    };

    function reloadProjectDisplay() {
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.clearProjectDisplay)();
        let index = 0;
        
        projectList.forEach( (project) => {
            const projectDOM = (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.addProjectDOM)(project.title, index);
            // if project is the active project, highlight it
            if (project.isActiveProject() === true) {
                projectDOM.setAttribute("id", "active-project");
            }
            // add the delete button to each project and its event listener
            const removeButton = projectDOM.querySelector("#delete-project-button");
            removeButton.addEventListener("click", (e) => {
                e.stopPropagation();
                removeProject(projectDOM, project);
            });
            projectDOM.addEventListener("click", () => {
                loadProject(project);
            });
            index += 1;
        });
    }

    return {loadProject};
})();

logicController.loadProject(inbox);
logicController.loadProject(outbox);
logicController.loadProject(inbox);
console.log(outbox);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAyMDAsIDIzMCk7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzE1KTtcXG59XFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjQxLCAyNDEpO1xcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzE1KTtcXG59XFxuXFxubmF2IGxpIGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5uYXYgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubmF2LWhlYWRlciwgLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3MHB4IDE2cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGxlZnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubmF2LWhlYWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5uYXYtaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNwcm9qZWN0LWJ1dHRvbiwgI2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNhY3RpdmUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDE4MiwgMTgyKTtcXG59XFxuXFxuI3Byb2plY3QtYnV0dG9uOmhvdmVyLCAucHJvamVjdDpob3ZlciwgLnByb2plY3QgKjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xcbn1cXG5cXG5cXG5cXG51bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtYm94IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwMSwgMjAwLCAyMzApO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAyMDAsIDIzMCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDEsIDIwMCwgMjMwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWFpbi10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAyMDAsIDIzMCk7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDEsIDIwMCwgMjMwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uOmhvdmVyLCBmb3JtIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmdiKDEwMSwgMjAwLCAyMzApO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwMSwgMjAwLCAyMzApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTVweDtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIHAsIC50b2RvIGlucHV0IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4udG9kbyBwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xcbn1cXG5cXG4udG9kbyBpbnB1dCB7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk0LCAxOTQsIDE5NCk7XFxufVxcblxcbi50b2RvIGlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTMzLCAxMzMsIDEzMyk7XFxufVxcblxcbi5jaGVja2JveDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDIwMCwgMjMwKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtJQUNWLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdURBQXVEO0lBQ3ZELDJCQUEyQjtJQUMzQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDIwMCwgMjMwKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zMTUpO1xcbn1cXG5cXG5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyNDEsIDI0MSk7XFxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zMTUpO1xcbn1cXG5cXG5uYXYgbGkgYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbm5hdiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uYXYtaGVhZGVyLCAucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTcwcHggMTZweDtcXG4gICAganVzdGlmeS1pdGVtczogbGVmdDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5uYXYtaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm5hdi1oZWFkZXIgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3Byb2plY3QtYnV0dG9uLCAjZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcbn1cXG5cXG4jcHJvamVjdC1idXR0b246aG92ZXIsIC5wcm9qZWN0OmhvdmVyLCAucHJvamVjdCAqOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XFxufVxcblxcblxcblxcbnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5saSB7XFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1ib3gge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTAxLCAyMDAsIDIzMCk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDIwMCwgMjMwKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwMSwgMjAwLCAyMzApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhe1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDIwMCwgMjMwKTtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwMSwgMjAwLCAyMzApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGQtdGFzay1idXR0b246aG92ZXIsIGZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZ2IoMTAxLCAyMDAsIDIzMCk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTAxLCAyMDAsIDIzMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8gcCwgLnRvZG8gaW5wdXQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxufVxcblxcbi50b2RvIHA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XFxufVxcblxcbi50b2RvIGlucHV0IHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTQsIDE5NCwgMTk0KTtcXG59XFxuXFxuLnRvZG8gaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMzMsIDEzMywgMTMzKTtcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMjAwLCAyMzApO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gTU9EVUxFIEZPUiBET00gTUFOSVBVTEFUSU9OXG5cbmltcG9ydCB7dG9kb30gZnJvbSBcIi4vdG9kby5qc1wiXG5cbmNvbnN0IGFkZFByb2plY3RET00gPSBmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0IHVsXCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgcHJvamVjdC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuY29uc3QgY2xlYXJQcm9qZWN0RGlzcGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3QgdWxcIik7XG4gICAgd2hpbGUgKHByb2plY3RMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQocHJvamVjdExpc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5jb25zdCBsb2FkVGl0bGUgPSBmdW5jdGlvbih0aXRsZSkge1xuICAgIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10aXRsZVwiKTtcbiAgICB3aGlsZSAobWFpblRpdGxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpblRpdGxlLnJlbW92ZUNoaWxkKG1haW5UaXRsZS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1idXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIG1haW5UaXRsZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG1haW5UaXRsZS5hcHBlbmRDaGlsZChidXR0b24pO1xufVxuXG5jb25zdCBjbGVhclRvZG9MaXN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gICAgd2hpbGUgKHRvZG9MaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdG9kb0xpc3QucmVtb3ZlQ2hpbGQodG9kb0xpc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5jb25zdCBhZGRUb2RvRE9NID0gZnVuY3Rpb24gKHRvZG8sIGluZGV4LCBwcm9qZWN0KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURlc2NyaXB0aW9uKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKGluZGV4KTtcbiAgICB9KTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAudGV4dENvbnRlbnQgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XG4gICAgcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuY29uc3QgdG9nZ2xlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICAgIC8vIElmIG5vIGRlc2NyaXB0aW9uIGV4aXN0cywgYWJvcnQgZnVuY3Rpb25cbiAgICBpZiAoZGVzY3JpcHRpb24gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBFbHNlLCB0b2dnbGUgZGVzY3JpcHRpb24gdmlzaWJpbGl0eVxuICAgIGlmIChkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59XG5cbmNvbnN0IGVkaXREZXNjcmlwdGlvbkRPTSA9IGZ1bmN0aW9uIChkZXNjcmlwdGlvbkRPTSkge1xuICAgIGNvbnN0IG9sZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25ET00udGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdG9kb0RPTSA9IGRlc2NyaXB0aW9uRE9NLnBhcmVudE5vZGU7XG4gICAgdG9kb0RPTS5yZW1vdmVDaGlsZCh0b2RvRE9NLmxhc3RDaGlsZCk7IC8vIGRlbGV0ZSBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjSW5wdXQudmFsdWUgPSBvbGREZXNjcmlwdGlvbjtcbiAgICB0b2RvRE9NLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG4gICAgcmV0dXJuIGRlc2NJbnB1dDtcbiAgICBcbn1cblxuXG5cbmV4cG9ydCB7YWRkUHJvamVjdERPTSwgY2xlYXJQcm9qZWN0RGlzcGxheSwgbG9hZFRpdGxlLCBjbGVhclRvZG9MaXN0LCBhZGRUb2RvRE9NLCBlZGl0RGVzY3JpcHRpb25ET019O1xuXG4iLCIvLyBQUk9KRUNUIE9CSkVDVCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmltcG9ydCB7YWRkVG9kb0RPTSwgY2xlYXJUb2RvTGlzdCwgZWRpdERlc2NyaXB0aW9uRE9NfSBmcm9tIFwiLi9kb20uanNcIlxuXG5jb25zdCBwcm9qZWN0ID0gZnVuY3Rpb24odGl0bGUpIHtcblxuICAgIGNvbnN0IHRvZG9zID0gW107IC8vIGFycmF5IGNvbXBvc2VkIG9mIHRvZG8gaXRlbXNcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9IGZ1bmN0aW9uKHRvZG8pIHtcbiAgICAgICAgLy8gYWRkIHRvZG8gaXRlbSB0byBsb2dpY1xuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuXG4gICAgICAgIC8vIGFkZCB0b2RvIGl0ZW0gdG8gRE9NXG4gICAgICAgIGNvbnN0IHRvZG9ET00gPSBhZGRUb2RvRE9NKHRvZG8sIHRvZG9zLmxlbmd0aCAtIDEsIHRoaXMpO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSB0b2RvRE9NLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZWRpdERlc2NyaXB0aW9uKHRvZG9ET00sIHRvZG9zLmxlbmd0aCAtIDEpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKHRvZG9ET00sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IHRvZG9ET00ucXVlcnlTZWxlY3RvcihcInBcIik7XG4gICAgICAgIGNvbnN0IGlucHV0RGVzYyA9IGVkaXREZXNjcmlwdGlvbkRPTSh0b2RvRGVzY3JpcHRpb24pO1xuICAgICAgICBpbnB1dERlc2MuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlVG9kb0Rlc2NyaXB0aW9uKGluZGV4LCBpbnB1dERlc2MudmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaW5wdXREZXNjLnZhbHVlO1xuICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBlZGl0RGVzY3JpcHRpb24odG9kb0RPTSwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2RvRE9NLmFwcGVuZENoaWxkKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHRvZG9ET00ucmVtb3ZlQ2hpbGQoaW5wdXREZXNjKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHRvZG8gaXRlbSBmcm9tIGxvZ2ljXG4gICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgLy8gcmVmcmVzaCB1cGRhdGVkIERPTSB0b2RvIGxpc2V0XG4gICAgICAgIHRoaXMucmVsb2FkVG9kb3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWxvYWRUb2RvcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGVhclRvZG9MaXN0KCk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9ET00gPSBhZGRUb2RvRE9NKHRvZG8sIGluZGV4LCB0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IHRvZG9ET00ucXVlcnlTZWxlY3RvcihcInBcIik7XG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBlZGl0RGVzY3JpcHRpb24odG9kb0RPTSwgdG9kb3MubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VUb2RvRGVzY3JpcHRpb24gPSBmdW5jdGlvbihpbmRleCwgbmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdG9kb3NbaW5kZXhdLmNoYW5nZURlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0FjdGl2ZVByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGRUb2RvLCByZW1vdmVUb2RvLCByZWxvYWRUb2RvcywgY2hhbmdlVG9kb0Rlc2NyaXB0aW9uLCBzZXRDdXJyZW50UHJvamVjdCwgaXNBY3RpdmVQcm9qZWN0LCB0b2RvcywgdGl0bGV9XG59XG5cbmV4cG9ydCB7cHJvamVjdH07IiwiLy8gVE9ETyBPQkpFQ1QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCB0b2RvID0gZnVuY3Rpb24odG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24pIHtcblxuICAgIGxldCB0aXRsZSA9IHRvZG9UaXRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSB0b2RvRGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtjaGFuZ2VEZXNjcmlwdGlvbiwgZ2V0RGVzY3JpcHRpb24sIHRpdGxlfVxufVxuXG5leHBvcnQge3RvZG99OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0LmpzXCJcbmltcG9ydCB7dG9kb30gZnJvbSBcIi4vdG9kby5qc1wiXG5pbXBvcnQge2FkZFByb2plY3RET00sIGNsZWFyUHJvamVjdERpc3BsYXksIGxvYWRUaXRsZSwgY2xlYXJUb2RvTGlzdH0gZnJvbSBcIi4vZG9tLmpzXCJcblxubGV0IGluYm94ID0gcHJvamVjdChcIklOQk9YXCIpO1xubGV0IG91dGJveCA9IHByb2plY3QoXCJPVVRCT1hcIik7XG5cbmNvbnN0IGxvZ2ljQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IFwiSU5CT1hcIjsgLy8gZGVmYXVsdCBjb250YWluZXIgZm9yIG5ldyB0b2RvIGl0ZW1zXG5cbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idXR0b25cIik7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW1vZGFsXCIpO1xuICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvLWJ1dHRvblwiKTtcbiAgICBjb25zdCBhZGRUb2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbW9kYWxcIik7XG4gICAgY29uc3QgaW5ib3hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpO1xuXG4gICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCk7XG5cbiAgICBpbmJveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsb2FkUHJvamVjdChpbmJveCk7XG4gICAgfSlcblxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1pbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgLy8gYWRkIG5ldyBwcm9qZWN0IHRvIGxvZ2ljXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgcHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIC8vIGRpc3BsYXkgbmV3IHByb2plY3QgaW4gRE9NL3dlYnNpdGVcbiAgICAgICAgY29uc3QgcHJvamVjdERPTSA9IGFkZFByb2plY3RET00ocHJvamVjdE5hbWUsIHByb2plY3RMaXN0Lmxlbmd0aC0xKTsgXG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIC8vIGFkZCBldmVudCBMaXN0ZW5lciBmb3IgcmVtb3ZhbCBvZiBwcm9qZWN0XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IHByb2plY3RET00ucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KHByb2plY3RET00sIG5ld1Byb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gYWRkIGV2ZW50IExpc3RlbmVyIGZvciBzZWxlY3Rpb24gb2YgcHJvamVjdFxuICAgICAgICBwcm9qZWN0RE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBsb2FkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIC8vIHNob3cgdGl0bGUgYW5kIHNldCBwcm9qZWN0IGFzIHRoZSBvbmx5IGFjdGl2ZSBwcm9qZWN0XG4gICAgICAgIGxvYWRUaXRsZShwcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICAgICAgcHJvai5zZXRDdXJyZW50UHJvamVjdChmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3Quc2V0Q3VycmVudFByb2plY3QodHJ1ZSk7XG4gICAgICAgIHJlbG9hZFByb2plY3REaXNwbGF5KCk7XG4gICAgICAgIC8vIGltcGxlbWVudCB0aGUgXCJhZGQgdGFza1wiIGJ1dHRvblxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ1dHRvblwiKTtcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgY29uc3QgYWRkVG9kb0Zvcm0gPSBhZGRUb2RvTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1ib3ggZm9ybVwiKTtcbiAgICAgICAgICAgIGFkZFRvZG9Gb3JtLnJlbW92ZUNoaWxkKGFkZFRvZG9Gb3JtLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICAgICAgY29uc3QgY29uZmlybVRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgY29uZmlybVRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdG9kby1idXR0b25cIik7XG4gICAgICAgICAgICBjb25maXJtVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICAgICAgICAgICAgY29uZmlybVRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGV5XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLW5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRlc2NcIikudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IHRvZG8odG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuICAgICAgICAgICAgICAgIGFkZFRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1Ub2RvQnV0dG9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdC5yZWxvYWRUb2RvcygpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgICAgICAvLyBhZGQgY29kZSB0byBkaXNwbGF5IGFkZCBwcm9qZWN0IHdpbmRvdyBoZXJlXG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdERPTSwgcHJvamVjdCkge1xuICAgICAgICAvLyB0byByZW1vdmUgYSBwcm9qZWN0LCByZW1vdmUgaXQgZnJvbSB0aGUgYXJyYXksIHRoZW4gcmVsb2FkIERPTSdzIHByb2plY3QgZGlzcGxheVxuICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvamVjdERPTS5kYXRhc2V0LmluZGV4LCAxKTtcbiAgICAgICAgcmVsb2FkUHJvamVjdERpc3BsYXkoKTtcbiAgICAgICAgLy8gaWYgcmVtb3ZlZCBwcm9qZWN0IHdhcyB0aGUgYWN0aXZlIHByb2plY3QsIGxvYWQgdGhlIGRlZmF1bHQgXCJJbmJveFwiIHByb2plY3RcbiAgICAgICAgaWYgKHByb2plY3QuaXNBY3RpdmVQcm9qZWN0KCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0KGluYm94KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZWxvYWRQcm9qZWN0RGlzcGxheSgpIHtcbiAgICAgICAgY2xlYXJQcm9qZWN0RGlzcGxheSgpO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdExpc3QuZm9yRWFjaCggKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RET00gPSBhZGRQcm9qZWN0RE9NKHByb2plY3QudGl0bGUsIGluZGV4KTtcbiAgICAgICAgICAgIC8vIGlmIHByb2plY3QgaXMgdGhlIGFjdGl2ZSBwcm9qZWN0LCBoaWdobGlnaHQgaXRcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlUHJvamVjdCgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdERPTS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWRkIHRoZSBkZWxldGUgYnV0dG9uIHRvIGVhY2ggcHJvamVjdCBhbmQgaXRzIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSBwcm9qZWN0RE9NLnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0RE9NLCBwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvamVjdERPTS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2xvYWRQcm9qZWN0fTtcbn0pKCk7XG5cbmxvZ2ljQ29udHJvbGxlci5sb2FkUHJvamVjdChpbmJveCk7XG5sb2dpY0NvbnRyb2xsZXIubG9hZFByb2plY3Qob3V0Ym94KTtcbmxvZ2ljQ29udHJvbGxlci5sb2FkUHJvamVjdChpbmJveCk7XG5jb25zb2xlLmxvZyhvdXRib3gpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==