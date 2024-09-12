/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Modern, responsive styling for Flavor Haven */

:root {
	--primary-color: #4a5568;
	--secondary-color: #ed8936;
	--background-color: #f7fafc;
	--text-color: #2d3748;
	--accent-color: #9f7aea;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: "Inter", sans-serif;
	line-height: 1.6;
	color: var(--text-color);
	background-color: var(--background-color);
}

#content {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.container {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 2rem;
}

header {
	background-color: white;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
}

nav {
	display: flex;
	justify-content: center;
	padding: 1rem 0;
}

nav button {
	background: none;
	border: none;
	color: var(--primary-color);
	font-size: 1rem;
	font-weight: 500;
	padding: 0.5rem 1rem;
	margin: 0 0.5rem;
	cursor: pointer;
	transition: color 0.3s ease;
}

nav button:hover {
	color: var(--secondary-color);
}

main {
	margin-top: 4rem;
	flex-grow: 1;
}

.about {
	padding: 4rem 2rem;
	text-align: center;
	background-color: var(--background-color);
}

.about-content {
	max-width: 800px;
	margin: 0 auto;
}

.about h1 {
	font-size: 3rem;
	color: var(--primary-color);
	margin-bottom: 1rem;
}

.about p {
	font-size: 1.25rem;
	color: var(--text-color);
	margin-bottom: 2rem;
}

.about h2 {
	font-size: 2.25rem;
	color: var(--secondary-color);
	margin-bottom: 1.5rem;
}

.cta-button {
	background-color: var(--secondary-color);
	color: white;
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	font-weight: 600;
	border: none;
	border-radius: 0.375rem;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.cta-button:hover {
	background-color: #dd6b20;
}

.features,
.menu,
.contact {
	padding: 4rem 2rem;
}

.menu,
.contact {
	max-width: 800px;
	margin: 0 auto;
}

h2 {
	font-size: 2.25rem;
	color: var(--primary-color);
	margin-bottom: 2rem;
	text-align: center;
}

.features {
	background-color: #edf2f7;
}

.feature-item {
	background-color: white;
	border-radius: 0.5rem;
	padding: 2rem;
	margin-bottom: 2rem;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.feature-item h3 {
	font-size: 1.5rem;
	color: var(--secondary-color);
	margin-bottom: 1rem;
}

.menu ul {
	list-style-type: none;
}

.menu li {
	border-bottom: 1px solid #e2e8f0;
	padding: 1rem 0;
}

.menu li:last-child {
	border-bottom: none;
}

.menu h3 {
	font-size: 1.25rem;
	color: var(--primary-color);
	margin-bottom: 0.5rem;
}

.menu p {
	color: #718096;
	margin-bottom: 0.5rem;
}

.menu span {
	font-weight: 600;
	color: var(--secondary-color);
}

.contact p {
	margin-bottom: 1rem;
}

footer {
	background-color: var(--primary-color);
	color: white;
	text-align: center;
	padding: 2rem;
}

@media (min-width: 768px) {
	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.feature-item {
		margin-bottom: 0;
	}
}

@media (max-width: 767px) {
	.about h1 {
		font-size: 2.5rem;
	}

	.about p {
		font-size: 1.125rem;
	}

	h2 {
		font-size: 2rem;
	}
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,gDAAgD;;AAEhD;CACC,wBAAwB;CACxB,0BAA0B;CAC1B,2BAA2B;CAC3B,qBAAqB;CACrB,uBAAuB;AACxB;;AAEA;CACC,sBAAsB;CACtB,SAAS;CACT,UAAU;AACX;;AAEA;CACC,gCAAgC;CAChC,gBAAgB;CAChB,wBAAwB;CACxB,yCAAyC;AAC1C;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,iBAAiB;CACjB,cAAc;CACd,eAAe;AAChB;;AAEA;CACC,uBAAuB;CACvB,2EAA2E;CAC3E,eAAe;CACf,MAAM;CACN,OAAO;CACP,QAAQ;CACR,aAAa;AACd;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,YAAY;CACZ,2BAA2B;CAC3B,eAAe;CACf,gBAAgB;CAChB,oBAAoB;CACpB,gBAAgB;CAChB,eAAe;CACf,2BAA2B;AAC5B;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,gBAAgB;CAChB,YAAY;AACb;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,yCAAyC;AAC1C;;AAEA;CACC,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,eAAe;CACf,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,wBAAwB;CACxB,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,6BAA6B;CAC7B,qBAAqB;AACtB;;AAEA;CACC,wCAAwC;CACxC,YAAY;CACZ,uBAAuB;CACvB,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,uBAAuB;CACvB,eAAe;CACf,sCAAsC;AACvC;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;;;CAGC,kBAAkB;AACnB;;AAEA;;CAEC,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,2BAA2B;CAC3B,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,uBAAuB;CACvB,qBAAqB;CACrB,aAAa;CACb,mBAAmB;CACnB,iFAAiF;AAClF;;AAEA;CACC,iBAAiB;CACjB,6BAA6B;CAC7B,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,gCAAgC;CAChC,eAAe;AAChB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,2BAA2B;CAC3B,qBAAqB;AACtB;;AAEA;CACC,cAAc;CACd,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;CAChB,6BAA6B;AAC9B;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,sCAAsC;CACtC,YAAY;CACZ,kBAAkB;CAClB,aAAa;AACd;;AAEA;CACC;EACC,aAAa;EACb,qCAAqC;EACrC,SAAS;CACV;;CAEA;EACC,gBAAgB;CACjB;AACD;;AAEA;CACC;EACC,iBAAiB;CAClB;;CAEA;EACC,mBAAmB;CACpB;;CAEA;EACC,eAAe;CAChB;AACD","sourcesContent":["/* Modern, responsive styling for Flavor Haven */\n\n:root {\n\t--primary-color: #4a5568;\n\t--secondary-color: #ed8936;\n\t--background-color: #f7fafc;\n\t--text-color: #2d3748;\n\t--accent-color: #9f7aea;\n}\n\n* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tfont-family: \"Inter\", sans-serif;\n\tline-height: 1.6;\n\tcolor: var(--text-color);\n\tbackground-color: var(--background-color);\n}\n\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 100vh;\n}\n\n.container {\n\twidth: 100%;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\tpadding: 0 2rem;\n}\n\nheader {\n\tbackground-color: white;\n\tbox-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 1000;\n}\n\nnav {\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding: 1rem 0;\n}\n\nnav button {\n\tbackground: none;\n\tborder: none;\n\tcolor: var(--primary-color);\n\tfont-size: 1rem;\n\tfont-weight: 500;\n\tpadding: 0.5rem 1rem;\n\tmargin: 0 0.5rem;\n\tcursor: pointer;\n\ttransition: color 0.3s ease;\n}\n\nnav button:hover {\n\tcolor: var(--secondary-color);\n}\n\nmain {\n\tmargin-top: 4rem;\n\tflex-grow: 1;\n}\n\n.about {\n\tpadding: 4rem 2rem;\n\ttext-align: center;\n\tbackground-color: var(--background-color);\n}\n\n.about-content {\n\tmax-width: 800px;\n\tmargin: 0 auto;\n}\n\n.about h1 {\n\tfont-size: 3rem;\n\tcolor: var(--primary-color);\n\tmargin-bottom: 1rem;\n}\n\n.about p {\n\tfont-size: 1.25rem;\n\tcolor: var(--text-color);\n\tmargin-bottom: 2rem;\n}\n\n.about h2 {\n\tfont-size: 2.25rem;\n\tcolor: var(--secondary-color);\n\tmargin-bottom: 1.5rem;\n}\n\n.cta-button {\n\tbackground-color: var(--secondary-color);\n\tcolor: white;\n\tpadding: 0.75rem 1.5rem;\n\tfont-size: 1rem;\n\tfont-weight: 600;\n\tborder: none;\n\tborder-radius: 0.375rem;\n\tcursor: pointer;\n\ttransition: background-color 0.3s ease;\n}\n\n.cta-button:hover {\n\tbackground-color: #dd6b20;\n}\n\n.features,\n.menu,\n.contact {\n\tpadding: 4rem 2rem;\n}\n\n.menu,\n.contact {\n\tmax-width: 800px;\n\tmargin: 0 auto;\n}\n\nh2 {\n\tfont-size: 2.25rem;\n\tcolor: var(--primary-color);\n\tmargin-bottom: 2rem;\n\ttext-align: center;\n}\n\n.features {\n\tbackground-color: #edf2f7;\n}\n\n.feature-item {\n\tbackground-color: white;\n\tborder-radius: 0.5rem;\n\tpadding: 2rem;\n\tmargin-bottom: 2rem;\n\tbox-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.feature-item h3 {\n\tfont-size: 1.5rem;\n\tcolor: var(--secondary-color);\n\tmargin-bottom: 1rem;\n}\n\n.menu ul {\n\tlist-style-type: none;\n}\n\n.menu li {\n\tborder-bottom: 1px solid #e2e8f0;\n\tpadding: 1rem 0;\n}\n\n.menu li:last-child {\n\tborder-bottom: none;\n}\n\n.menu h3 {\n\tfont-size: 1.25rem;\n\tcolor: var(--primary-color);\n\tmargin-bottom: 0.5rem;\n}\n\n.menu p {\n\tcolor: #718096;\n\tmargin-bottom: 0.5rem;\n}\n\n.menu span {\n\tfont-weight: 600;\n\tcolor: var(--secondary-color);\n}\n\n.contact p {\n\tmargin-bottom: 1rem;\n}\n\nfooter {\n\tbackground-color: var(--primary-color);\n\tcolor: white;\n\ttext-align: center;\n\tpadding: 2rem;\n}\n\n@media (min-width: 768px) {\n\t.features {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t\tgap: 2rem;\n\t}\n\n\t.feature-item {\n\t\tmargin-bottom: 0;\n\t}\n}\n\n@media (max-width: 767px) {\n\t.about h1 {\n\t\tfont-size: 2.5rem;\n\t}\n\n\t.about p {\n\t\tfont-size: 1.125rem;\n\t}\n\n\th2 {\n\t\tfont-size: 2rem;\n\t}\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAboutSection(onNavigate) {
    const about = document.createElement('section');
    about.className = 'about';
    
    const aboutContent = document.createElement('div');
    aboutContent.className = 'about-content';
    
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Welcome to Flavor Haven';
    
    const heroSubtitle = document.createElement('p');
    heroSubtitle.textContent = 'Where Every Bite Tells a Story';
    
    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'Our Story';
    
    const aboutText = document.createElement('p');
    aboutText.textContent = 'At Flavor Haven, we believe in the power of food to bring people together. Our chefs craft each dish with passion, using only the freshest local ingredients to create unforgettable culinary experiences.';
    
    const ctaButton = document.createElement('button');
    ctaButton.textContent = 'Explore Our Menu';
    ctaButton.className = 'cta-button';
    ctaButton.addEventListener('click', () => onNavigate('menu'));
    
    aboutContent.appendChild(heroTitle);
    aboutContent.appendChild(heroSubtitle);
    aboutContent.appendChild(aboutTitle);
    aboutContent.appendChild(aboutText);
    aboutContent.appendChild(ctaButton);
    about.appendChild(aboutContent);
    
    return about;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAboutSection);


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContactSection() {
    const contact = document.createElement('section');
    contact.className = 'contact';
    contact.style.display = 'none';

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contact.appendChild(contactTitle);

    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <p>Address: 123 Flavor Street, Foodville, FC 12345</p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@flavorhaven.com</p>
    `;
    contact.appendChild(contactInfo);

    return contact;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactSection);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader),
/* harmony export */   showSection: () => (/* binding */ showSection)
/* harmony export */ });
function createHeader() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    
    const pages = ['Home', 'Menu', 'Contact'];
    
    pages.forEach(page => {
        const button = document.createElement('button');
        button.textContent = page;
        button.addEventListener('click', () => showSection(page.toLowerCase()));
        nav.appendChild(button);
    });
    
    header.appendChild(nav);
    return header;
}

function showSection(sectionClass) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        if (section.classList.contains(sectionClass) || 
            (sectionClass === 'home' && (section.classList.contains('hero') || 
                                        section.classList.contains('about') || 
                                        section.classList.contains('features')))) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}




/***/ }),

/***/ "./src/initRestaurantLandingPage.js":
/*!******************************************!*\
  !*** ./src/initRestaurantLandingPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.js */ "./src/header.js");





function createMain() {
    const main = document.createElement('main');
    main.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_0__["default"])((section) => (0,_header_js__WEBPACK_IMPORTED_MODULE_3__.showSection)(section)));
    main.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    main.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2024 Flavor Haven. All rights reserved.</p>';
    return footer;
}

function createLandingPage() {
    const content = document.getElementById('content');
    
    const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_3__.createHeader)();
    const main = createMain();
    const footer = createFooter();
    
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}

function initRestaurantLandingPage() {
    createLandingPage();
    (0,_header_js__WEBPACK_IMPORTED_MODULE_3__.showSection)('home');  // Show home page by default
    console.log('Restaurant Landing Page initialized');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initRestaurantLandingPage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenuSection() {
    const menu = document.createElement('section');
    menu.className = 'menu';
    menu.style.display = 'none';

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Our Menu';
    menu.appendChild(menuTitle);

    const menuItems = [
        { name: 'Flavor Burst Burger', description: 'A juicy patty topped with our secret sauce', price: '$12.99' },
        { name: 'Zesty Lemon Pasta', description: 'Fresh pasta tossed in a tangy lemon sauce', price: '$14.99' },
        { name: 'Crispy Veggie Delight', description: 'A medley of seasonal vegetables, lightly fried', price: '$10.99' },
        { name: 'Decadent Chocolate Lava Cake', description: 'Rich chocolate cake with a gooey center', price: '$7.99' }
    ];

    const menuList = document.createElement('ul');
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>${item.price}</span>
        `;
        menuList.appendChild(listItem);
    });

    menu.appendChild(menuList);

    return menu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuSection);


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _initRestaurantLandingPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initRestaurantLandingPage.js */ "./src/initRestaurantLandingPage.js");



console.log('Welcome to the Restaurant Page!');

// Initialize the restaurant landing page
(0,_initRestaurantLandingPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlGQUF5RixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtB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R0FBc0c7QUFDaEgsVUFBVSwrR0FBK0c7QUFDekgsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUIsaUJBQWlCLGlCQUFpQjtBQUNsQyxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7O1VDaENqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7QUNBc0I7QUFDaUQ7O0FBRXZFOztBQUVBO0FBQ0EseUVBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRSZXN0YXVyYW50TGFuZGluZ1BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBNb2Rlcm4sIHJlc3BvbnNpdmUgc3R5bGluZyBmb3IgRmxhdm9yIEhhdmVuICovXG5cbjpyb290IHtcblx0LS1wcmltYXJ5LWNvbG9yOiAjNGE1NTY4O1xuXHQtLXNlY29uZGFyeS1jb2xvcjogI2VkODkzNjtcblx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmYWZjO1xuXHQtLXRleHQtY29sb3I6ICMyZDM3NDg7XG5cdC0tYWNjZW50LWNvbG9yOiAjOWY3YWVhO1xufVxuXG4qIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcblx0Zm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcblx0bGluZS1oZWlnaHQ6IDEuNjtcblx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuI2NvbnRlbnQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRhaW5lciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXgtd2lkdGg6IDEyMDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDAgMnJlbTtcbn1cblxuaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR6LWluZGV4OiAxMDAwO1xufVxuXG5uYXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMXJlbSAwO1xufVxuXG5uYXYgYnV0dG9uIHtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xuXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0cGFkZGluZzogMC41cmVtIDFyZW07XG5cdG1hcmdpbjogMCAwLjVyZW07XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuXG5uYXYgYnV0dG9uOmhvdmVyIHtcblx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbm1haW4ge1xuXHRtYXJnaW4tdG9wOiA0cmVtO1xuXHRmbGV4LWdyb3c6IDE7XG59XG5cbi5hYm91dCB7XG5cdHBhZGRpbmc6IDRyZW0gMnJlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLmFib3V0LWNvbnRlbnQge1xuXHRtYXgtd2lkdGg6IDgwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLmFib3V0IGgxIHtcblx0Zm9udC1zaXplOiAzcmVtO1xuXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5hYm91dCBwIHtcblx0Zm9udC1zaXplOiAxLjI1cmVtO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG5cdG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5hYm91dCBoMiB7XG5cdGZvbnQtc2l6ZTogMi4yNXJlbTtcblx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG5cdG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmN0YS1idXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuXHRjb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMC4zNzVyZW07XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi5jdGEtYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RkNmIyMDtcbn1cblxuLmZlYXR1cmVzLFxuLm1lbnUsXG4uY29udGFjdCB7XG5cdHBhZGRpbmc6IDRyZW0gMnJlbTtcbn1cblxuLm1lbnUsXG4uY29udGFjdCB7XG5cdG1heC13aWR0aDogODAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuXG5oMiB7XG5cdGZvbnQtc2l6ZTogMi4yNXJlbTtcblx0Y29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRtYXJnaW4tYm90dG9tOiAycmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mZWF0dXJlcyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZGYyZjc7XG59XG5cbi5mZWF0dXJlLWl0ZW0ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xuXHRwYWRkaW5nOiAycmVtO1xuXHRtYXJnaW4tYm90dG9tOiAycmVtO1xuXHRib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbi5mZWF0dXJlLWl0ZW0gaDMge1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5tZW51IHVsIHtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ubWVudSBsaSB7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xuXHRwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi5tZW51IGxpOmxhc3QtY2hpbGQge1xuXHRib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubWVudSBoMyB7XG5cdGZvbnQtc2l6ZTogMS4yNXJlbTtcblx0Y29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5tZW51IHAge1xuXHRjb2xvcjogIzcxODA5Njtcblx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ubWVudSBzcGFuIHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5jb250YWN0IHAge1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5mb290ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblx0Y29sb3I6IHdoaXRlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDJyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXHQuZmVhdHVyZXMge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcblx0XHRnYXA6IDJyZW07XG5cdH1cblxuXHQuZmVhdHVyZS1pdGVtIHtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuXHQuYWJvdXQgaDEge1xuXHRcdGZvbnQtc2l6ZTogMi41cmVtO1xuXHR9XG5cblx0LmFib3V0IHAge1xuXHRcdGZvbnQtc2l6ZTogMS4xMjVyZW07XG5cdH1cblxuXHRoMiB7XG5cdFx0Zm9udC1zaXplOiAycmVtO1xuXHR9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdEQUFnRDs7QUFFaEQ7Q0FDQyx3QkFBd0I7Q0FDeEIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQixxQkFBcUI7Q0FDckIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUN4Qix5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsMkVBQTJFO0NBQzNFLGVBQWU7Q0FDZixNQUFNO0NBQ04sT0FBTztDQUNQLFFBQVE7Q0FDUixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLDJCQUEyQjtDQUMzQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsMkJBQTJCO0NBQzNCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQix3QkFBd0I7Q0FDeEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDZCQUE2QjtDQUM3QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyx3Q0FBd0M7Q0FDeEMsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTs7O0NBR0Msa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsaUZBQWlGO0FBQ2xGOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQiwyQkFBMkI7Q0FDM0IscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsY0FBYztDQUNkLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQ0FBc0M7Q0FDdEMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQztFQUNDLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUztDQUNWOztDQUVBO0VBQ0MsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBNb2Rlcm4sIHJlc3BvbnNpdmUgc3R5bGluZyBmb3IgRmxhdm9yIEhhdmVuICovXFxuXFxuOnJvb3Qge1xcblxcdC0tcHJpbWFyeS1jb2xvcjogIzRhNTU2ODtcXG5cXHQtLXNlY29uZGFyeS1jb2xvcjogI2VkODkzNjtcXG5cXHQtLWJhY2tncm91bmQtY29sb3I6ICNmN2ZhZmM7XFxuXFx0LS10ZXh0LWNvbG9yOiAjMmQzNzQ4O1xcblxcdC0tYWNjZW50LWNvbG9yOiAjOWY3YWVhO1xcbn1cXG5cXG4qIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxMjAwcHg7XFxuXFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0cGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ei1pbmRleDogMTAwMDtcXG59XFxuXFxubmF2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxubmF2IGJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcblxcdG1hcmdpbjogMCAwLjVyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxubmF2IGJ1dHRvbjpob3ZlciB7XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbm1haW4ge1xcblxcdG1hcmdpbi10b3A6IDRyZW07XFxuXFx0ZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uYWJvdXQge1xcblxcdHBhZGRpbmc6IDRyZW0gMnJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5hYm91dC1jb250ZW50IHtcXG5cXHRtYXgtd2lkdGg6IDgwMHB4O1xcblxcdG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uYWJvdXQgaDEge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmFib3V0IHAge1xcblxcdGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmFib3V0IGgyIHtcXG5cXHRmb250LXNpemU6IDIuMjVyZW07XFxuXFx0Y29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uY3RhLWJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0cGFkZGluZzogMC43NXJlbSAxLjVyZW07XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLmN0YS1idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNkZDZiMjA7XFxufVxcblxcbi5mZWF0dXJlcyxcXG4ubWVudSxcXG4uY29udGFjdCB7XFxuXFx0cGFkZGluZzogNHJlbSAycmVtO1xcbn1cXG5cXG4ubWVudSxcXG4uY29udGFjdCB7XFxuXFx0bWF4LXdpZHRoOiA4MDBweDtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaDIge1xcblxcdGZvbnQtc2l6ZTogMi4yNXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mZWF0dXJlcyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2VkZjJmNztcXG59XFxuXFxuLmZlYXR1cmUtaXRlbSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdHBhZGRpbmc6IDJyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG5cXHRib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxufVxcblxcbi5mZWF0dXJlLWl0ZW0gaDMge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5tZW51IHVsIHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5tZW51IGxpIHtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5tZW51IGxpOmxhc3QtY2hpbGQge1xcblxcdGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5tZW51IGgzIHtcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0Y29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLm1lbnUgcCB7XFxuXFx0Y29sb3I6ICM3MTgwOTY7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ubWVudSBzcGFuIHtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uY29udGFjdCBwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMnJlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LmZlYXR1cmVzIHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuXFx0XFx0Z2FwOiAycmVtO1xcblxcdH1cXG5cXG5cXHQuZmVhdHVyZS1pdGVtIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LmFib3V0IGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LmFib3V0IHAge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuXFx0fVxcblxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IDJyZW07XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQWJvdXRTZWN0aW9uKG9uTmF2aWdhdGUpIHtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBhYm91dC5jbGFzc05hbWUgPSAnYWJvdXQnO1xuICAgIFxuICAgIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0Q29udGVudC5jbGFzc05hbWUgPSAnYWJvdXQtY29udGVudCc7XG4gICAgXG4gICAgY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZXJvVGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBGbGF2b3IgSGF2ZW4nO1xuICAgIFxuICAgIGNvbnN0IGhlcm9TdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoZXJvU3VidGl0bGUudGV4dENvbnRlbnQgPSAnV2hlcmUgRXZlcnkgQml0ZSBUZWxscyBhIFN0b3J5JztcbiAgICBcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ091ciBTdG9yeSc7XG4gICAgXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0VGV4dC50ZXh0Q29udGVudCA9ICdBdCBGbGF2b3IgSGF2ZW4sIHdlIGJlbGlldmUgaW4gdGhlIHBvd2VyIG9mIGZvb2QgdG8gYnJpbmcgcGVvcGxlIHRvZ2V0aGVyLiBPdXIgY2hlZnMgY3JhZnQgZWFjaCBkaXNoIHdpdGggcGFzc2lvbiwgdXNpbmcgb25seSB0aGUgZnJlc2hlc3QgbG9jYWwgaW5ncmVkaWVudHMgdG8gY3JlYXRlIHVuZm9yZ2V0dGFibGUgY3VsaW5hcnkgZXhwZXJpZW5jZXMuJztcbiAgICBcbiAgICBjb25zdCBjdGFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjdGFCdXR0b24udGV4dENvbnRlbnQgPSAnRXhwbG9yZSBPdXIgTWVudSc7XG4gICAgY3RhQnV0dG9uLmNsYXNzTmFtZSA9ICdjdGEtYnV0dG9uJztcbiAgICBjdGFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvbk5hdmlnYXRlKCdtZW51JykpO1xuICAgIFxuICAgIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChoZXJvVGl0bGUpO1xuICAgIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChoZXJvU3VidGl0bGUpO1xuICAgIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcbiAgICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoY3RhQnV0dG9uKTtcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQpO1xuICAgIFxuICAgIHJldHVybiBhYm91dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXRTZWN0aW9uO1xuIiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9ICdjb250YWN0JztcbiAgICBjb250YWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHA+QWRkcmVzczogMTIzIEZsYXZvciBTdHJlZXQsIEZvb2R2aWxsZSwgRkMgMTIzNDU8L3A+XG4gICAgICAgIDxwPlBob25lOiAoNTU1KSAxMjMtNDU2NzwvcD5cbiAgICAgICAgPHA+RW1haWw6IGluZm9AZmxhdm9yaGF2ZW4uY29tPC9wPlxuICAgIGA7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG5cbiAgICByZXR1cm4gY29udGFjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFNlY3Rpb247XG4iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgXG4gICAgY29uc3QgcGFnZXMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG4gICAgXG4gICAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHBhZ2U7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dTZWN0aW9uKHBhZ2UudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcbiAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBzaG93U2VjdGlvbihzZWN0aW9uQ2xhc3MpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ21haW4gPiBzZWN0aW9uJyk7XG4gICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKHNlY3Rpb25DbGFzcykgfHwgXG4gICAgICAgICAgICAoc2VjdGlvbkNsYXNzID09PSAnaG9tZScgJiYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdoZXJvJykgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Fib3V0JykgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZlYXR1cmVzJykpKSkge1xuICAgICAgICAgICAgc2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIsIHNob3dTZWN0aW9uIH07XG4iLCJpbXBvcnQgY3JlYXRlQWJvdXRTZWN0aW9uIGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0IGNyZWF0ZU1lbnVTZWN0aW9uIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFNlY3Rpb24gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciwgc2hvd1NlY3Rpb24gfSBmcm9tICcuL2hlYWRlci5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0U2VjdGlvbigoc2VjdGlvbikgPT4gc2hvd1NlY3Rpb24oc2VjdGlvbikpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVTZWN0aW9uKCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFNlY3Rpb24oKSk7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gJzxwPiZjb3B5OyAyMDI0IEZsYXZvciBIYXZlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+JztcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMYW5kaW5nUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZnVuY3Rpb24gaW5pdFJlc3RhdXJhbnRMYW5kaW5nUGFnZSgpIHtcbiAgICBjcmVhdGVMYW5kaW5nUGFnZSgpO1xuICAgIHNob3dTZWN0aW9uKCdob21lJyk7ICAvLyBTaG93IGhvbWUgcGFnZSBieSBkZWZhdWx0XG4gICAgY29uc29sZS5sb2coJ1Jlc3RhdXJhbnQgTGFuZGluZyBQYWdlIGluaXRpYWxpemVkJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRSZXN0YXVyYW50TGFuZGluZ1BhZ2U7XG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnO1xuICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ091ciBNZW51JztcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgICAgIHsgbmFtZTogJ0ZsYXZvciBCdXJzdCBCdXJnZXInLCBkZXNjcmlwdGlvbjogJ0EganVpY3kgcGF0dHkgdG9wcGVkIHdpdGggb3VyIHNlY3JldCBzYXVjZScsIHByaWNlOiAnJDEyLjk5JyB9LFxuICAgICAgICB7IG5hbWU6ICdaZXN0eSBMZW1vbiBQYXN0YScsIGRlc2NyaXB0aW9uOiAnRnJlc2ggcGFzdGEgdG9zc2VkIGluIGEgdGFuZ3kgbGVtb24gc2F1Y2UnLCBwcmljZTogJyQxNC45OScgfSxcbiAgICAgICAgeyBuYW1lOiAnQ3Jpc3B5IFZlZ2dpZSBEZWxpZ2h0JywgZGVzY3JpcHRpb246ICdBIG1lZGxleSBvZiBzZWFzb25hbCB2ZWdldGFibGVzLCBsaWdodGx5IGZyaWVkJywgcHJpY2U6ICckMTAuOTknIH0sXG4gICAgICAgIHsgbmFtZTogJ0RlY2FkZW50IENob2NvbGF0ZSBMYXZhIENha2UnLCBkZXNjcmlwdGlvbjogJ1JpY2ggY2hvY29sYXRlIGNha2Ugd2l0aCBhIGdvb2V5IGNlbnRlcicsIHByaWNlOiAnJDcuOTknIH1cbiAgICBdO1xuXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMz4ke2l0ZW0ubmFtZX08L2gzPlxuICAgICAgICAgICAgPHA+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxzcGFuPiR7aXRlbS5wcmljZX08L3NwYW4+XG4gICAgICAgIGA7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVTZWN0aW9uO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGluaXRSZXN0YXVyYW50TGFuZGluZ1BhZ2UgZnJvbSAnLi9pbml0UmVzdGF1cmFudExhbmRpbmdQYWdlLmpzJztcblxuY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIFJlc3RhdXJhbnQgUGFnZSEnKTtcblxuLy8gSW5pdGlhbGl6ZSB0aGUgcmVzdGF1cmFudCBsYW5kaW5nIHBhZ2VcbmluaXRSZXN0YXVyYW50TGFuZGluZ1BhZ2UoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=