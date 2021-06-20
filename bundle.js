/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ThemeSwitcher_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ThemeSwitcher/index.js */ "./src/lib/ThemeSwitcher/index.js");
/* harmony import */ var _lib_EmojiBrush_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/EmojiBrush/index.js */ "./src/lib/EmojiBrush/index.js");
console.clear();



(function() {
  document.addEventListener('change-theme', () => {
    document.body.style.background = getBackgroundStr(event.detail.colors)
  });

  function getBackgroundStr(colorsList) {
    let bgStr = '';

    if(colorsList.length === 1) {
      bgStr = colorsList[0]
      return bgStr;
    }

    bgStr = `linear-gradient(to bottom, ${colorsList.join(',')})`;
    return bgStr;
  }

  window.customElements.define('emoji-brush', _lib_EmojiBrush_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  window.customElements.define('theme-switcher', _lib_ThemeSwitcher_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();


/***/ }),

/***/ "./src/lib/EmojiBrush/colors.js":
/*!**************************************!*\
  !*** ./src/lib/EmojiBrush/colors.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const colors = [
  'crimson',
  'gold',
  'yellowgreen',
  'teal'
];

/* harmony default export */ __webpack_exports__["default"] = (colors);


/***/ }),

/***/ "./src/lib/EmojiBrush/fontSizes.js":
/*!*****************************************!*\
  !*** ./src/lib/EmojiBrush/fontSizes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fontSizes = [
  16,
  24,
  32,
  40,
  48,
  56,
  64,
  72,
  80,
  88,
  96,
  104,
  112
];

/* harmony default export */ __webpack_exports__["default"] = (fontSizes);


/***/ }),

/***/ "./src/lib/EmojiBrush/helpers.js":
/*!***************************************!*\
  !*** ./src/lib/EmojiBrush/helpers.js ***!
  \***************************************/
/*! exports provided: getStep, pointsToStr, getScale, getSymbolsList, fillSelect, fillTemplate, getEmojiStrLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStep", function() { return getStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointsToStr", function() { return pointsToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScale", function() { return getScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolsList", function() { return getSymbolsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillSelect", function() { return fillSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillTemplate", function() { return fillTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmojiStrLength", function() { return getEmojiStrLength; });
const ignoredUnicodeModifiers = {
  65038: 1, // &#xFE0E, text modifier
  65039: 1, // &#xFE0F, emoji modifier
};

const getStep = ({from, to}) => {
  const moveX = Math.abs(to.x - from.x);
  const moveY = Math.abs(to.y - from.y);
  return Math.max(moveX,moveY);
};

const pointsToStr = (pointsList) => {
  return pointsList
    .map(({x, y}) => `${x},${y}`)
    .join(' ');
};

// Return scale value if svg was resized
const getScale = (measurePath) => {
  const width = measurePath.getAttribute('width');
  const rect = measurePath.getBoundingClientRect();

  return width / rect.width;
};

const getSymbolsList = (str) => {
  const list = [];

  for (let char of str) {
    let unicodeNum = char.codePointAt();
    // Ignore emoji modifiers
    // fix problem for emoji like this ⭐️
    // for..of can't handle it like one symbol
    if(!char || ignoredUnicodeModifiers[unicodeNum]) {
      continue;
    }

    // Add emoji modifier to every symbol
    list.push(`${char}&#xFE0F`);
  }

  return list;
};

const fillSelect = ({elem, currentValue, list}) => {
  list.forEach(item => {
    const value = item.name ? item.name : item;
    const selected = value === currentValue ? 'selected' : '';
    elem.insertAdjacentHTML('beforeEnd',`<option value="${value}" ${selected}>${value}</option>`);
  })
};

const fillTemplate = ({tmpl, data}) => {
  if(!tmpl || !data) {
    return;
  }

  return tmpl.replace(/{([^"]{1,})}/gm, (match, str) => {
    if (data[str] !== undefined) {
      return data[str];
    }
    return '';
  });
}

const getEmojiStrLength = (str) => {
  let counter = 0;

  for (let char of str) {
    let unicodeNum = char.codePointAt();

    if(!char || ignoredUnicodeModifiers[unicodeNum]) {
      continue;
    }

    counter++;
  }

  return counter;
};


/***/ }),

/***/ "./src/lib/EmojiBrush/index.js":
/*!*************************************!*\
  !*** ./src/lib/EmojiBrush/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmojiBrush; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/lib/EmojiBrush/helpers.js");
/* harmony import */ var _tmpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tmpl.js */ "./src/lib/EmojiBrush/tmpl.js");
/* harmony import */ var _symbolsList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbolsList.js */ "./src/lib/EmojiBrush/symbolsList.js");
/* harmony import */ var _lineStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lineStyles.js */ "./src/lib/EmojiBrush/lineStyles.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors.js */ "./src/lib/EmojiBrush/colors.js");
/* harmony import */ var _fontSizes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fontSizes.js */ "./src/lib/EmojiBrush/fontSizes.js");







class EmojiBrush extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.append(
      _tmpl_js__WEBPACK_IMPORTED_MODULE_1__["templateStyles"].content.cloneNode(true),
      _tmpl_js__WEBPACK_IMPORTED_MODULE_1__["templateMarkup"].content.cloneNode(true)
    );

    this.paintArea = this.elem.getElementById('paint-area');
    this.targetGroup = this.elem.getElementById('target-group');
    this.clearControl = this.elem.getElementById('clear');
    this.inputSymbolsChoice = this.elem.getElementById('input-symbols-choice');
    this.selectSymbols = this.elem.getElementById('select-symbols');
    this.addSymbols = this.elem.getElementById('add-symbols');
    this.selectStyle = this.elem.getElementById('select-style');
    this.selectFontSize = this.elem.getElementById('select-font-size');
    this.scale = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["getScale"])(this.paintArea.getElementById('measure-rect'));

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.controls = this.elem.querySelector('.controls');
    this.controlGet = this.elem.querySelector('.control--get');
    this.controlGet.disabled = true;
    this.links = {
      png: this.elem.querySelector('.control--download-png'),
      svg: this.elem.querySelector('.control--download-svg')
    };

    this.selected = {};
    this.points = {
      list: [],
      last: {}
    };
    this.rotation = {
      max: 6
    };

    this.current = {
      counter: 0
    };

    // Try to draw straight light, add later
    this.moveThreshold = {
       value: 20,
       default: 20
    };
    this.isStraightLine = false;

    this.waves = {
      counter: 0,
      max: 2,
      idDirectionUp: true
    };

    // Used to add more symbols for tiny font-size
    this.pathFills = {};

    this.symbols = {
      str: _symbolsList_js__WEBPACK_IMPORTED_MODULE_2__["default"][0],
      currentPos: 0,
    };
    this.symbols.list = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["getSymbolsList"])(this.symbols.str);

    this.lineStyle = this.getRandomLineStyle();
    this.fontSize = _fontSizes_js__WEBPACK_IMPORTED_MODULE_5__["default"][3];

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.changeSymbolsSet = this.changeSymbolsSet.bind(this);
    this.changeLineStyle = this.changeLineStyle.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
    this.bodyKeyUp = this.bodyKeyUp.bind(this);
    this.bodyKeyDown = this.bodyKeyDown.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.chooseSymbolsInput = this.chooseSymbolsInput.bind(this);
    this.bodyMouseOut = this.bodyMouseOut.bind(this);
    this.prepareImages = this.prepareImages.bind(this);
    this.clear = this.clear.bind(this);

    this.initSelect({
      elem: this.selectSymbols,
      list: _symbolsList_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      handler: this.changeSymbolsSet,
      currentValue: _symbolsList_js__WEBPACK_IMPORTED_MODULE_2__["default"][Math.floor(Math.random() * _symbolsList_js__WEBPACK_IMPORTED_MODULE_2__["default"].length)]
    });

    this.initSelect({
      elem: this.selectStyle,
      list: Object.values(_lineStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
      handler: this.changeLineStyle,
      currentValue: 'mirrored-offset',
      currentValue: this.lineStyle.name
    });

    this.initSelect({
      elem: this.selectFontSize,
      list: _fontSizes_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      handler: this.changeFontSize,
      currentValue: 32
    });
  }

  connectedCallback() {
    this.clearControl.addEventListener('click', this.clear);

    this.paintArea.addEventListener('pointerdown', this.onMouseDown);
    this.paintArea.addEventListener('pointerup', this.onMouseUp);

    this.inputSymbolsChoice.addEventListener('click', this.chooseSymbolsInput);
    this.addSymbols.addEventListener('input', this.changeSymbolsSet);
    this.controlGet.addEventListener('click', this.prepareImages);

    document.body.addEventListener('keyup', this.bodyKeyUp);
    // document.body.addEventListener('keydown', this.bodyKeyDown);

    document.addEventListener('change-theme', this.changeTheme);
  }

  disconnectedCallback() {
    //
  }

  initSelect({elem, list, currentValue, handler}) {
    Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["fillSelect"])({
      elem,
      list,
      currentValue
    });

    handler();

    elem.addEventListener('change', handler);
  }

  onMouseDown(event) {
    if(event.target.tagName === 'path') {
      this.clickedPath = event.target;
    }
    let start = this.getMouseOffset(event);
    this.points.last = start;
    this.points.list = [];
    this.symbols.currentPos = 0;

    let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.id = `group-${this.current.counter}`;

    const content = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["fillTemplate"])({
      tmpl: _tmpl_js__WEBPACK_IMPORTED_MODULE_1__["templateGroup"].innerHTML,
      data: {
        id: this.current.counter,
        fontSize: `${this.fontSize}px`
      }
    });
    group.insertAdjacentHTML('beforeEnd',content);
    this.targetGroup.append(group);

    let path = group.querySelector('path');
    path.classList.add('current-path');
    let textPath = group.querySelector('textPath');
    const text = group.querySelector('text');

    this.current = {
      ...this.current,
      group,
      path,
      text,
      textDouble: null,
      textPath,
      textPathDouble: null,
      start,
      counter: ++this.current.counter
    };

    this.modifyPaths();

    this.paintArea.addEventListener('pointermove', this.onMouseMove);
    document.body.addEventListener('pointerout', this.bodyMouseOut);
    this.mouseOutPoints = {};
  }

  modifyPaths(params = {}) {
    let hasCurrent = false;

    if(!params.text) {
      params = this.current;
      hasCurrent = true;
    }

    if(!params.textDouble) {
      let {textDouble, textPathDouble} = this.getTextDouble(params);

      params.textDouble = textDouble;
      params.textPathDouble = textPathDouble;
    }
    this.updateDoubleVisibility(params.textPathDouble);

    let {group, text, textDouble, textPathDouble} = params;
    text.setAttribute('dy', '.35em');

    if(this.lineStyle.props.mirrored) {
      text.setAttribute('dy', '-.12em');
      textDouble.setAttribute('dy', '-.12em')
      textDouble.setAttribute('rotate', 180);
      textPathDouble.setAttribute('startOffset', `${this.pathOffset}px`);
    }

    if(this.lineStyle.props.scattered) {
      text.setAttribute('dy', '-.13em');
      textDouble.setAttribute('dy', '-.13em');
      group.style.letterSpacing = '.1em';
    }

    if(this.lineStyle.props.startOffset) {
      textPathDouble.setAttribute('startOffset', `-${this.pathOffset}px`);
    }
    else if(this.lineStyle.props.startOffsetBetween) {
      textPathDouble.setAttribute('startOffset', `-${this.pathOffset}px`);
    }

    this.setRotation();
    this.setWaves();
  }

  updateDoubleVisibility(textPathDouble) {
    textPathDouble.setAttribute('opacity', this.lineStyle.props.double ? 1 : 0);
  }

  setRotation() {
    if(this.lineStyle.props.rotated) {
      this.rotation = {
        ...this.rotation,
        stepAngle: 360 / this.rotation.max,
        counter: 0
      };
    }
  }

  setWaves() {
    if(this.lineStyle.props.waves) {
      this.waves.counter = 0;
      this.waves.idDirectionUp = true;
    }
  }

  getTextDouble(params) {
    let {group, text} = params;

    const textDouble = text.cloneNode(true);
    textDouble.classList.add('text--double');
    const textPathDouble = textDouble.querySelector('textPath');
    textPathDouble.classList.add('text-path--double');
    group.append(textDouble);

    return {textDouble, textPathDouble};
  }

  onMouseMove(event) {
    if(!event.buttons) {
      this.mouseOutPoints.finishPath = true;
      this.onMouseUp(event);
      return;
    }

    let coords = this.getMouseOffset(event);
    let {start} = this.current;

    const moveSize = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["getStep"])({
      from: this.points.last,
      to: coords
    });

    if(moveSize > this.moveThreshold.value) {
      this.points.list.push(coords);
      this.updatePath(coords);
      this.updateText();
      this.points.last = coords;
    }

    this.clickedPath = null;
  }

  onMouseUp(event) {
    // Handle click on path
    if(this.clickedPath) {
      this.mouseClickPath();

      // Remove latest path
      this.current.group.remove();
      this.paintArea.removeEventListener('pointermove', this.onMouseMove);
      return;
    }

    // There was not mouse move
    if(this.points.list.length == 0 && this.current.group) {
      // Remove latest path
      this.current.group.remove();
      this.paintArea.removeEventListener('pointermove', this.onMouseMove);
      return;
    }

    this.unselect();

    // Try to fix random bug
    if(!this.current.path) {
      return;
    }

    // Or continue with latest path
    this.points.last = this.getMouseOffset(event);

    if(this.mouseOutPoints && this.mouseOutPoints.finishPath) {
      this.points.last = this.mouseOutPoints.coords;
    }

    let {start} = this.current;
    this.current.path.classList.remove('current-path');

    this.updatePath(this.points.last);
    this.updateText();

    this.paintArea.removeEventListener('pointermove', this.onMouseMove);
    document.body.removeEventListener('pointerout', this.bodyMouseOut);
    this.fillRestOfPath();
    this.controls.dataset.state = '';
    this.controlGet.disabled = !this.targetGroup.innerHTML;
  }

  bodyKeyUp(event) {
    const isBody = event.target.tagName === 'BODY';
    const isDelOrBackSpace = event.keyCode === 8 || event.keyCode === 46;

    // Prevent removing path while edit text in input
    if(isBody && isDelOrBackSpace) {
      this.removePaths();
    }
    // Unpress shift, not used now
    else if(event.keyCode === 16) {
      this.isStraightLine = false;
    }
  }

  bodyMouseOut(event) {
    this.mouseOutPoints = {
      coords: this.getMouseOffset(event)
    };
  }

  bodyKeyDown(event) {
    // Press shift, not used now
    if(event.keyCode === 16) {
      this.isStraightLine = true;
    }
  }

  mouseClickPath() {
    const pathId = this.clickedPath.id;
    const group = this.clickedPath.closest('g');
    group.classList.toggle('highlight');

    if(group.classList.contains('highlight')) {
        this.selected[pathId] = group;
      }
      else {
        delete this.selected[pathId];
    }

    this.clickedPath = null;
  }

  updatePath({x, y}) {
    let {start} = this.current;
    const points = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["pointsToStr"])(this.points.list);

    this.current.path.setAttribute(
      'd',
      `M${start.x},${start.y} ${points} ${x},${y}`);
  }

  updateText(params = {}) {
    if(!params.textPath) {
      params = this.current;
    }

    let {textPath, textPathDouble} = params;

    // this.pathFills.koeff need to add more symbols for tiny font-size
    for(let i = 0; i < this.pathFills.koeff; i++) {
      let growthAge = params.textPath.getNumberOfChars();
      let symbol = this.getSymbol(growthAge);
      textPath.insertAdjacentHTML('beforeEnd', symbol);

      if(textPathDouble) {
        if(this.lineStyle.props.scattered) {
          symbol = this.getSymbol(growthAge);
        }
        textPathDouble.insertAdjacentHTML('beforeEnd', symbol);
      }
    }
  }

  // Fill empty path if mouse moves too fast
  fillRestOfPath(params = {}) {
    if(!params.textPath) {
      params = this.current;
    }

    let {path, textPath, textPathDouble} = params;
    const pathFillsMax = path.getTotalLength() / this.fontSize + this.pathOffset;
    const tSpansLength = textPath.children.length;
    let missedSymbols = pathFillsMax - tSpansLength;

    if(!missedSymbols) {
      return;
    }

    missedSymbols = Math.min(missedSymbols, 5);

    for(let i = 0; i < missedSymbols; i++) {
      this.updateText(params);
    }
  }

  getSymbol(growthAge) {
    let symbol = this.symbols.list[this.symbols.currentPos];
    if (this.lineStyle.props.sparse > 0 && this.lineStyle.props.sparse > Math.random()) {
      symbol = ' ';
    } else {
      this.symbols.currentPos++;

      if(this.symbols.currentPos === this.symbols.list.length) {
        this.symbols.currentPos = 0;
      }
    }
    let rotateAttr = this.getRotateAttr();
    let dyAttr = this.getDYWavesAttr();
    let fontSizeAttr = this.getFontSizeAttr(growthAge);

    symbol = `<tspan ${rotateAttr}${dyAttr}${fontSizeAttr}>${symbol}</tspan>`

    return symbol;
  }

  getRotateAttr() {
    if(!this.lineStyle.props.rotated) {
      return '';
    }

    const angle = this.rotation.stepAngle * this.rotation.counter;
    let rotateAttr = ` rotate="${angle}"`;

    this.rotation.counter++;
    if(this.rotation.counter >= this.rotation.max) {
      this.rotation.counter = 0;
    }

    return rotateAttr;
  }

  getDYWavesAttr() {
    if(!this.lineStyle.props.waves) {
      return '';
    }

    let dyVal = .55;
    let directionSign = this.waves.idDirectionUp ? 1 : -1;
    let dy = dyVal * directionSign;
    let dyAttr = ` dy="${dy}em"`;

    // Handle waves counter
    if(this.waves.idDirectionUp) {
      this.waves.counter++;
    }
    else {
      this.waves.counter--;
    }

    // Handle waves direction
    if(this.waves.counter == this.waves.max) {
      this.waves.idDirectionUp = !this.waves.idDirectionUp;
    }
    else if(this.waves.counter === 0) {
      this.waves.idDirectionUp = !this.waves.idDirectionUp;
    }

    return dyAttr;
  }

  getFontSizeAttr(growthAge) {
    if(!this.lineStyle.props.scattered) {
      return '';
    }

    const growCoefficent = this.lineStyle.props.grow && growthAge ? growthAge / 20 : 1;
    const fontSize = (Math.random() * 1.25 * growCoefficent + .25).toFixed(2);

    return ` font-size="${fontSize}em"`;
  }

  unselect() {
    if(Object.values(this.selected).length > 0) {
      for(let key in this.selected) {
        this.selected[key].classList.remove('highlight');
        delete this.selected[key];
      }
    }
  }

  removePaths() {
    if(Object.values(this.selected).length > 0) {
      for(let key in this.selected) {
        this.selected[key].remove();
        delete this.selected[key];
      }
    }
  }

  clear() {
    this.points.list = [];
    this.targetGroup.innerHTML = '';
    this.controls.dataset.state = '';
    this.controlGet.disabled = true;
  }

  setPathOffset() {
    const halfPatternLength = Math.round(this.symbols.list.length / 2);
    this.pathOffset = 0;

    if(this.lineStyle.props.mirrored) {
      this.pathOffset = .5 * this.fontSize;
    }

    if(this.lineStyle.props.startOffset) {
      this.pathOffset = (halfPatternLength + .5) * this.fontSize;
    }
    else if(this.lineStyle.props.startOffsetBetween) {
      this.pathOffset = halfPatternLength * this.fontSize;
    }
  }

  chooseSymbolsInput(event) {
    const labelText = event.target.closest('.choice__label-text');
    const input = event.target.closest('.choice__input');

    if(labelText && labelText.dataset.value) {
      this.inputSymbolsChoice.dataset.mode = labelText.dataset.value;
    }

    if(input && input.value) {
      this.changeSymbolsSet(event);
    }
  }

  changeSymbolsSet(event) {
    let currentInput = this.selectSymbols;
    if(event) {
      currentInput = event.target;
    }

    if(!currentInput.value) {
      return;
    }

    if(this.symbols.str === currentInput.value) {
      return;
    }

    this.symbols.str = currentInput.value;
    this.symbols.list = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["getSymbolsList"])(this.symbols.str);
    this.symbols.currentPos = 0;

    this.changeSymbolsOnSelected();
  }

  changeSymbolsOnSelected() {
    if(Object.values(this.selected).length === 0) {
      return;
    }

    for(let key in this.selected) {
      const group = this.selected[key];
      const path = group.querySelector('path');
      const textPath = group.querySelector('.text-path');
      let textPathDouble = group.querySelector('.text-path--double');
      textPath.innerHTML = '';
      if(textPathDouble) {
        textPathDouble.innerHTML = '';
        this.updateDoubleVisibility(textPathDouble);
      }

      this.setWaves();

      this.fillRestOfPath({
        path,
        textPath,
        textPathDouble
      });
    }
  }

  changeLineStyle() {
    this.lineStyle = _lineStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"][this.selectStyle.value];
    this.symbols.currentPos = 0;

    if(this.lineStyle.props.scattered) {
      this.pathFills.koeff = 3;
    }

    this.setPathOffset();

    this.changeLineStyleOnSelected();
  }

  changeLineStyleOnSelected() {
    if(Object.values(this.selected).length === 0) {
      return;
    }

    for(let key in this.selected) {
      const group = this.selected[key];
      const path = group.querySelector('path');
      const text = group.querySelector('text');
      const textPath = group.querySelector('.text-path');
      let textDouble = group.querySelector('.text--double');
      let textPathDouble = group.querySelector('.text-path--double');
      textPath.innerHTML = '';

      if(textPathDouble) {
        textPathDouble.innerHTML = '';
        this.updateDoubleVisibility(textPathDouble);
      }

      const params = {
        group,
        path,
        text,
        textPath,
        textDouble,
        textPathDouble
      };

      this.modifyPaths(params);
      this.fillRestOfPath(params);
    }
  }

  changeFontSize() {
    this.fontSize = this.selectFontSize.value;
    this.style.setProperty('--font-size', `${this.fontSize}px`);
    this.pathFills.koeff = 3;

    if(this.fontSize >= 32) {
      this.pathFills.koeff = 2;
    }
    else if(this.fontSize >= 40) {
      this.pathFills.koeff = 1;
    }

    this.setPathOffset();

    this.changeFontSizeOnSelected();
  }

  changeFontSizeOnSelected() {
    if(Object.values(this.selected).length === 0) {
      return;
    }

    for(let key in this.selected) {
      const group = this.selected[key];
      const texts = group.querySelectorAll('text');
      const path = group.querySelector('path');
      const textPath = group.querySelector('textPath');
      path.setAttribute('stroke-width', this.fontSize);

      for(let text of texts) {
        text.setAttribute('font-size', `${this.fontSize}px`);
      }
      this.fillRestOfPath({
        path,
        textPath
      });
    }
  }

  changeTheme(event) {
    if(!event.detail.accents) {
      return;
    }

    for(let key in event.detail.accents) {
      this.style.setProperty(`--color-${key}`, event.detail.accents[key]);
    }

    this.controls.dataset.state = '';
    this.theme = event.detail.colors;
    this.accents = event.detail.accents;
    this.outputStyle = this.getStyleStr();
  }

  prepareImages() {
    this.finalSizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.controls.dataset.state = 'loading';
    this.finalSVG = this.paintArea.cloneNode(true);
    this.finalSVG.style = this.outputStyle;
    // Fix paint SVG on canvas in Firefox
    this.finalSVG.setAttribute('width', `${this.finalSizes.width}px`);
    this.finalSVG.setAttribute('height', `${this.finalSizes.height}px`);

    this.preparePng();
  }

  getBackgroundStr(colorsList) {
    let bgStr = '';

    if(colorsList.length === 1) {
      bgStr = colorsList[0]
      return bgStr;
    }

    bgStr = `linear-gradient(to bottom, ${colorsList.join(',')})`;
    return bgStr;
  }

  getStyleStr() {
    // Trebuchet MS, Verdana
    const styleslist = [
      `background: ${this.getBackgroundStr(this.theme)}`,
      `font-family: Trebuchet MS, Verdana, sans-erif`,
      `color: ${this.accents.base}`
    ]
    return styleslist.join('; ');
  }

  preparePng() {
    const xml = new XMLSerializer().serializeToString(this.finalSVG);
    const svg64 = btoa(unescape(encodeURIComponent(xml)));
    const b64Start = 'data:image/svg+xml;base64,';
    const image64 = b64Start + svg64;

    const blob = new Blob([xml], {type : 'image/svg+xml'});
    let URLObj = window.URL || window.webkitURL;
    this.links.svg.href = URLObj.createObjectURL(blob);
    this.links.svg.download = 'emoji-brush-drawing.svg';

    const imgObj = new Image();
    imgObj.src = image64;
    imgObj.width = this.finalSizes.width;
    imgObj.height = this.finalSizes.height;

    imgObj.addEventListener('load', () => {
      this.canvas.width = this.finalSizes.width;
      this.canvas.height = this.finalSizes.height;
      this.ctx.drawImage(imgObj, 0, 0, this.canvas.width, this.canvas.height);

      this.canvas.toBlob((blob) => {
        let URLObj = window.URL || window.webkitURL;
        this.links.png.href = URLObj.createObjectURL(blob);
        this.links.png.download = 'emoji-brush-drawing.png';

        this.controls.dataset.state = 'ready';
      });
    }, false);
  }

  getMouseOffset(event) {
    let {left, top} = this.paintArea.getBoundingClientRect();
    let scale = this.scale;

    return {
      x: scale * (event.clientX - left),
      y: scale * (event.clientY - top)
    };
  }

  getRandomLineStyle() {
    const keys = Object.keys(_lineStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return _lineStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"][randomKey];
  }
}


/***/ }),

/***/ "./src/lib/EmojiBrush/lineStyles.js":
/*!******************************************!*\
  !*** ./src/lib/EmojiBrush/lineStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const lineStyles = {
  'linear': {
    name: 'linear',
    props: {}
  },
  'linear-rotated': {
    name: 'linear-rotated',
    props: {
      rotated: true
    }
  },
  'mirrored': {
    name: 'mirrored',
    props: {
      double: true,
      mirrored: true
    }
  },
  'mirrored-offset': {
    name: 'mirrored-offset',
    props: {
      double: true,
      mirrored: true,
      startOffset: true
    }
  },
  'mirrored-offset-between': {
    name: 'mirrored-offset-between',
    props: {
      double: true,
      mirrored: true,
      startOffsetBetween: true
    }
  },
  'waves': {
    name: 'waves',
    props: {
      waves: true
    }
  },
  'mirrored-random': {
    name: 'mirrored-random',
    props: {
      double: true,
      mirrored: true,
      scattered: true,
      startOffsetBetween: true
    }
  },
  'grow-random': {
    name: 'grow-random',
    props: {
      grow: true,
      double: true,
      mirrored: false,
      scattered: true,
      startOffsetBetween: true
    }
  },
  'grow-random-sparse': {
    name: 'grow-random-sparse',
    props: {
      grow: true,
      sparse: 0.5,
      waves: true,
      double: false,
      mirrored: false,
      scattered: true,
      startOffsetBetween: true
    }
  },
};

/* harmony default export */ __webpack_exports__["default"] = (lineStyles);


/***/ }),

/***/ "./src/lib/EmojiBrush/symbolsList.js":
/*!*******************************************!*\
  !*** ./src/lib/EmojiBrush/symbolsList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const themes = [
  '😆🙂🤪🤨😌😋😂🙃😁',
  '😆    🙂    🤪    🤨    😌    😋    😂    🙃    😁    ',
  '🍁',
  '🦔',
  '🍂🍁🍄',
  '🐚',
  '🦐',
  '🐡🐠🐟',
  '🐶🐱🐭🐹🐰',
  '🐌',
  '✨',
  '⭐️',
  '❤️🧡💛💚💙💜🖤',
  '🔴🟠🟡🟢🔵🟣⚫️',
  '🟥🟧🟨🟩🟦🟪⬛️',
  '🌱🍀',
  '🌼🌺🌸',
  '🌼🌱🌺🌱🌸',
  '🚗🚲🚛🚂🚙⛵️🚃',
  '🥀🧚'
];

/* harmony default export */ __webpack_exports__["default"] = (themes);


/***/ }),

/***/ "./src/lib/EmojiBrush/tmpl.js":
/*!************************************!*\
  !*** ./src/lib/EmojiBrush/tmpl.js ***!
  \************************************/
/*! exports provided: templateStyles, templateMarkup, templateGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateStyles", function() { return templateStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateMarkup", function() { return templateMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateGroup", function() { return templateGroup; });
const templateStyles = document.createElement('template');
templateStyles.innerHTML = `<style>
  :host {
    display: block;
    min-width: 500px;
    min-height: 500px;

    --font-size: 32px;
    font: inherit;
    color: var(--color-base);
  }

  A {
    color: var(--color-base);
  }

  .visuallyhidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .paint-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: var(--font-size);
    user-select: none;
  }

  .paint-area path {
    stroke: transparent;
    stroke-opacity: .35;
    fill: none;
    transition: stroke .15s;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .paint-area path:hover {
    stroke: var(--color-hover);
    cursor: pointer;
  }

  .paint-area text,
  .paint-area textPath,
  .paint-area .current-path {
    pointer-events: none;
  }

  SELECT,
  INPUT {
    height: 2rem;
    max-width: 200px;
    margin-left: 1rem;
    padding: 0 .25rem;
    box-sizing: border-box;
    background: #EEE;
    border: 1px solid #DDD;
    border-radius: .25rem;
    font: inherit;
    line-height: 2rem;
    vertical-align: middle;
  }

  .highlight path {
    stroke: var(--color-focus);
    stroke-opacity: .65;
  }

  .highlight:hover path {
    stroke: var(--color-focushover);
  }

  .panel {
    position: absolute;
    z-index: 10;
    left: 1rem;
    right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .panel--top {
    top: 2rem;
    justify-content: flex-start;
  }
  .panel--bottom {
    bottom: 2rem;
  }

  .choice {
    display: flex;
  }

  .choice__label {
    display: flex;
    align-items: center;
  }

  .choice[data-mode="presets"] .choice__label--presets {
    margin-right: 1rem;
  }

  .choice__label-text {
    cursor: pointer;
  }

  .choice__input {
    margin-left: 0;
  }

  .choice[data-mode="presets"] .choice__input--custom,
  .choice[data-mode="custom"] .choice__input--presets {
    display: none;
  }
  .choice[data-mode="presets"] .choice__label-text--presets,
  .choice[data-mode="custom"] .choice__label-text--custom {
    box-shadow: none;
  }
  .choice[data-mode="presets"] .choice__label-text--presets:hover,
  .choice[data-mode="custom"] .choice__label-text--custom:hover {
    box-shadow: none;
    background: transparent;
    color: var(--color-base);
  }

  .control {
    padding: .25rem 1rem;
    background: transparent;
    border: 0;
    border-radius: .25rem;
    box-shadow:  0 0 0 2px var(--color-base) inset;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: all var(--transition);
    color: var(--color-base);
  }
  .control:not(:disabled):hover {
    box-shadow: 0 0 0 2px transparent inset;
    background: var(--color-base);
    color: var(--color-text);
  }
  .control:disabled {
    cursor: not-allowed;
    opacity: .5;
    color: var(--color-basetransp);
  }

  .controls__downloads {
    display: none;
    justify-content: center;
  }

  .controls[data-state="loading"] .control--get,
  .controls[data-state="ready"] .control--get {
    display: none;
  }
  .controls[data-state="loading"] .controls__downloads,
  .controls[data-state="ready"] .controls__downloads {
    display: flex;
  }

  .controls__downloads .control {
    opacity: .2;
    pointer-events: none;
  }
  .controls[data-state="ready"] .control {
    opacity: 1;
    pointer-events: auto;
    box-shadow:
      0 0 0 2px var(--color-base) inset,
      0 0 1rem .25rem var(--color-focushover);
  }

  .theme-switcher {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .disclaimer {
    font-size: .9em;
  }

  .linkslist {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0
  }

  .linkslist__item + .linkslist__item {
    margin-left: 1rem;
  }

  .linkslist__icon {
    display: block;
    width: 1.5em;
    height: 1.5em;
    fill: currentColor;
    transition: opacity var(--transition);
  }

  .linkslist__icon:hover {
    opacity: .75;
  }

  .linkslist__username {
    font-size: 0;
  }
</style>
`;

const templateMarkup = document.createElement('template');
templateMarkup.innerHTML = `
<svg id="paint-area" class="paint-area">
  <!-- Shape for measuring SVG scaling -->
  <rect id="measure-rect"
    fill="transparent"
    x="0" y="0"
    width="100" height="100"></rect>

  <g id="target-group"></g>
</svg>

<div class="panel panel--top">
  <div class="choice" id="input-symbols-choice" data-mode="presets">
    <label
      class="choice__label choice__label--presets">
      <span
        class="
          choice__label-text
          choice__label-text--presets
          control
        "
        data-value="presets"
        >Presets</span>
      <select
        class="choice__input choice__input--presets"
        id="select-symbols"></select>
    </label>

    <label
      class="choice__label choice__label--custom">
      <span
        class="
          choice__label-text
          choice__label-text--custom
          control
        "
        data-value="custom"
        >My symbols</span>
      <input
        class="choice__input choice__input--custom"
        type="text" id="add-symbols" placeholder="Add emoji or text"/>
    </label>
  </div>
  <select id="select-style"></select>
  <select id="select-font-size"></select>

  <theme-switcher class="theme-switcher"></theme-switcher>
</div>

<div class="panel panel--bottom">
  <button type="button" id="clear" class="control">Clear</button>

  <ul class="linkslist">
    <li class="linkslist__item">
      <a href="https://github.com/yoksel/emoji-brush/" class="linkslist__link"><svg class="linkslist__icon linkslist__icon--github" viewBox="0 0 16 16" width="16" height="16"><path d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"></path></svg>
      <span class="linkslist__username visuallyhidden">yoksel/emoji-brush/</span></a>
    </li>

    <li class="linkslist__item">
      <a href="https://twitter.com/yoksel_en" class="linkslist__link">
        <svg class="linkslist__icon linkslist__icon--twitter" viewBox="0 0 16 16" width="16" height="16"><path d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"></path></svg>
        <span class="linkslist__username visuallyhidden">yoksel_en</span></a>
    </li>
  </ul>

  <div class="disclaimer">
    🛠 Deeply experimental. May be slow or not work on your device or browser. Sorry 💚
  </div>

  <div class="controls">
    <button
      type="button"
      class="control control--get">Get image</button>

    <div class="controls__downloads">
      <a
        class="control control--download-png">Download PNG</a>
      <a
        class="control control--download-svg">Download SVG</a>
    </div>
  </div>
</div>
`;

const templateGroup = document.createElement('template');
templateGroup.innerHTML = `<path
  id="path-{id}"
  d=""
  stroke-width="{fontSize}"
  fill="none"></path>
<text
  font-size="{fontSize}" class="text">
  <textPath
    href="#path-{id}"
    class="text-path"
    fill="currentColor"></textPath>
</text>
`;


/***/ }),

/***/ "./src/lib/ThemeSwitcher/index.js":
/*!****************************************!*\
  !*** ./src/lib/ThemeSwitcher/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeSwitcher; });
/* harmony import */ var _themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes.js */ "./src/lib/ThemeSwitcher/themes.js");
/* harmony import */ var _tmpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tmpl.js */ "./src/lib/ThemeSwitcher/tmpl.js");



class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.appendChild(_tmpl_js__WEBPACK_IMPORTED_MODULE_1__["template"].content.cloneNode(true));
    this.controls = this.elem.querySelector('.controls');
    this.currentThemeNum = Math.floor(Math.random() * _themes_js__WEBPACK_IMPORTED_MODULE_0__["themes"].length);
    this.currentThemeElem = null;
    this.isCollapsed = true;

    this.cls = {
      collapsed: 'controls--collapsed',
      current: 'control--current'
    }

    this.addControls();

    this.onControlClick = this.onControlClick.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.closePanel = this.closePanel.bind(this);
  }

  addControls() {
    _themes_js__WEBPACK_IMPORTED_MODULE_0__["themes"].forEach((theme, index) => {
      let bgStr = this.getBackgroundStr(theme.colors);
      let className = 'control';
      let color = _themes_js__WEBPACK_IMPORTED_MODULE_0__["baseAccents"].base;
      if(theme.accents) {
        color = theme.accents.base;
      }

      if(index === this.currentThemeNum) {
        className += ' control--current';
      }

      const controlStr = `<button
        type="button"
        class="${className}"
        title="${theme.name}"
        data-index="${index}"
        style="background: ${bgStr}; color: ${color}">
          <span class="visuallyhidden">${theme.name}</span>
        </button>`;

      this.controls.insertAdjacentHTML('beforeEnd', controlStr);
      this.currentThemeElem = this.elem.querySelector(`.${this.cls.current}`);
    })
  }

  getBackgroundStr(colorsList) {
    let bgStr = '';

    if(colorsList.length === 1) {
      bgStr = colorsList[0]
      return bgStr;
    }

    bgStr = `linear-gradient(to bottom, ${colorsList.join(',')})`;
    return bgStr;
  }

  connectedCallback() {
    this.controls.addEventListener('click', this.onControlClick);
    document.addEventListener('change-theme', this.changeTheme);
    document.addEventListener('click', this.closePanel);

    // Set current theme to page & component
    this.dispatchChangeTheme();
  }

  onControlClick(event) {
    event.stopPropagation();

    if(this.isCollapsed) {
      this.isCollapsed = false;
      this.controls.classList.remove(this.cls.collapsed);
      return;
    }

    if(event.target.dataset.index) {
      this.currentThemeNum = event.target.dataset.index;
      this.dispatchChangeTheme();

      this.currentThemeElem.classList.remove(this.cls.current);
      event.target.classList.add(this.cls.current);
      this.currentThemeElem = event.target;

      this.closePanel(event);
    }
  }

  closePanel(event) {
    if(event.target === this || this.isCollapsed) {
      return;
    }

    this.isCollapsed = true;
    this.controls.classList.add(this.cls.collapsed);
  }

  dispatchChangeTheme() {
    const theme = _themes_js__WEBPACK_IMPORTED_MODULE_0__["themes"][this.currentThemeNum];
    if(!theme.accents) {
      theme.accents = _themes_js__WEBPACK_IMPORTED_MODULE_0__["baseAccents"];
    }
    this.controls.style.background = theme.colors[0];

    document.dispatchEvent(new CustomEvent('change-theme', {
      detail: theme,
      bubbles: true
    }));
  }

  changeTheme(event) {
    if(!event.detail.accents) {
      return;
    }
    for(let key in event.detail.accents) {
      this.style.setProperty(`--color-${key}`, event.detail.accents[key]);
    }
  }
}


/***/ }),

/***/ "./src/lib/ThemeSwitcher/themes.js":
/*!*****************************************!*\
  !*** ./src/lib/ThemeSwitcher/themes.js ***!
  \*****************************************/
/*! exports provided: baseAccents, themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseAccents", function() { return baseAccents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
const baseAccents = {
  base: 'white',
  basetransp: 'rgba(255,255,255,.5)',
  text: 'black',
  texttransp: 'rgba(0,0,0,.5)',
  hover: 'aqua',
  focus: 'orangered',
  focushover: 'gold'
};

const themes = [
  {
    name: 'Firebrick',
    colors: ['firebrick']
  },
  {
    name: 'Indianred',
    colors: ['indianred'],
    accents: {
      ...baseAccents,
      focus: 'purple',
    }
  },
  {
    name: 'Gold',
    colors: ['gold'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)',
      focushover: 'yellowgreen'
    }
  },
  {
    name: 'khaki',
    colors: ['khaki'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)',
      focushover: 'yellowgreen'
    }
  },
  {
    name: 'Yellowgreen',
    colors: ['yellowgreen'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      hover: 'dodgerblue',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)',
      focushover: 'teal'
    }
  },
  {
    name: 'Turquoise',
    colors: ['turquoise'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      hover: 'teal',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)'
    }
  },
  {
    name: 'Teal',
    colors: ['teal']
  },
  {
    name: 'Skyblue',
    colors: ['skyblue'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      hover: 'teal',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)'
    }
  },
  {
    name: 'Steelblue',
    colors: ['steelblue']
  },{
    name: 'Midnightblue',
    colors: ['midnightblue']
  },
  {
    name: 'Darkslateblue',
    colors: ['darkslateblue']
  },
  {
    name: 'Indigo',
    colors: ['indigo']
  },
  {
    name: 'Purple',
    colors: ['purple']
  },
  {
    name: 'White',
    colors: ['#FFF'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)'
    }
  },
  {
    name: 'Gray',
    colors: ['#333']
  },
  {
    name: 'Black',
    colors: ['#000'],
  },
];


/***/ }),

/***/ "./src/lib/ThemeSwitcher/tmpl.js":
/*!***************************************!*\
  !*** ./src/lib/ThemeSwitcher/tmpl.js ***!
  \***************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      position: relative
      min-width: 3rem;
      height: 4rem;

      --color-base: white;
      --color-basetransp: rgba(255,255,255,.5);
    }

    .visuallyhidden {
      position: absolute;

      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;

      clip: rect(0 0 0 0);
      overflow: hidden;
    }

    .controls {
      display: flex;
      padding: .5rem;
      background: var(--color-basetransp);
      border-radius: 4rem;
    }

    .control {
      position: relative;
      flex-shrink: 0;
      width: 3rem;
      height: 3rem;
      margin-right: .5rem;
      border-radius: 50%;
      border: none;
      box-shadow: 0 0 0 2px currentColor inset,
        0 0 4px 2px rgba(0,0,0,.25);
      cursor: pointer;
      transition: margin .45s;
      transition-property: box-shadow, margin;
    }

    .control:not(control--current) {

    }

    .control:last-child {
      margin-right: 0 !important;
    }

    .control:focus {
      outline: none;
      box-shadow: 0 0 0 4px currentColor inset,
        0 0 0 4px var(--color-basetransp);
    }

    .controls--collapsed .control {
      margin-right: -3rem;
      box-shadow: 0 0 0 2px currentColor inset;
    }

    .control--current {
      z-index: 2;
    }

    .control--current::after {
      content: '';
      position: absolute;
      top: -.25rem;
      right: -.25rem;
      bottom: -.25rem;
      left: -.25rem;
      border-radius: 50%;
      border: 1px dashed var(--color-base);
      animation: rotation 4s linear infinite;
      animation-play-state: paused;
    }

    .control--current:focus::after {
      content: none;
    }

    .controls--collapsed:hover .control--current {
      box-shadow: 0 0 0 2px var(--color-base) inset;
    }
    .controls--collapsed:hover .control--current::after {
      animation-play-state: running;
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg)
      }
      to {
        transform: rotate(360deg)
      }
    }
  </style>

  <div class="controls controls--collapsed"></div>
`;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvRW1vamlCcnVzaC9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL2ZvbnRTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0Vtb2ppQnJ1c2gvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0Vtb2ppQnJ1c2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL2xpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL3N5bWJvbHNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvRW1vamlCcnVzaC90bXBsLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVGhlbWVTd2l0Y2hlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVGhlbWVTd2l0Y2hlci90bXBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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YSxHQUFHLE9BQU87O0FBRXBFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsTUFBTTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsR0FBRzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQixTQUFTO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixrRUFBYztBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsc0RBQVU7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLElBQUk7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRSw0Q0FBNEMsdUJBQXVCOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQ0FBa0M7QUFDdkQ7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQSxrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxTQUFTLFVBQVU7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixzREFBVTtBQUN2QztBQUNBLFdBQVcsc0RBQVU7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7OztBQzF4QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWUseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3pFMUI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdkJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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RztBQUNIOzs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnNvbGUuY2xlYXIoKTtcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4vbGliL1RoZW1lU3dpdGNoZXIvaW5kZXguanMnO1xuaW1wb3J0IEVtb2ppQnJ1c2ggZnJvbSAnLi9saWIvRW1vamlCcnVzaC9pbmRleC5qcyc7XG5cbihmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhY2tncm91bmRTdHIoZXZlbnQuZGV0YWlsLmNvbG9ycylcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbW9qaS1icnVzaCcsIEVtb2ppQnJ1c2gpO1xuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0aGVtZS1zd2l0Y2hlcicsIFRoZW1lU3dpdGNoZXIpO1xufSkoKTtcbiIsImNvbnN0IGNvbG9ycyA9IFtcbiAgJ2NyaW1zb24nLFxuICAnZ29sZCcsXG4gICd5ZWxsb3dncmVlbicsXG4gICd0ZWFsJ1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgY29sb3JzO1xuIiwiY29uc3QgZm9udFNpemVzID0gW1xuICAxNixcbiAgMjQsXG4gIDMyLFxuICA0MCxcbiAgNDgsXG4gIDU2LFxuICA2NCxcbiAgNzIsXG4gIDgwLFxuICA4OCxcbiAgOTYsXG4gIDEwNCxcbiAgMTEyXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmb250U2l6ZXM7XG4iLCJjb25zdCBpZ25vcmVkVW5pY29kZU1vZGlmaWVycyA9IHtcbiAgNjUwMzg6IDEsIC8vICYjeEZFMEUsIHRleHQgbW9kaWZpZXJcbiAgNjUwMzk6IDEsIC8vICYjeEZFMEYsIGVtb2ppIG1vZGlmaWVyXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RlcCA9ICh7ZnJvbSwgdG99KSA9PiB7XG4gIGNvbnN0IG1vdmVYID0gTWF0aC5hYnModG8ueCAtIGZyb20ueCk7XG4gIGNvbnN0IG1vdmVZID0gTWF0aC5hYnModG8ueSAtIGZyb20ueSk7XG4gIHJldHVybiBNYXRoLm1heChtb3ZlWCxtb3ZlWSk7XG59O1xuXG5leHBvcnQgY29uc3QgcG9pbnRzVG9TdHIgPSAocG9pbnRzTGlzdCkgPT4ge1xuICByZXR1cm4gcG9pbnRzTGlzdFxuICAgIC5tYXAoKHt4LCB5fSkgPT4gYCR7eH0sJHt5fWApXG4gICAgLmpvaW4oJyAnKTtcbn07XG5cbi8vIFJldHVybiBzY2FsZSB2YWx1ZSBpZiBzdmcgd2FzIHJlc2l6ZWRcbmV4cG9ydCBjb25zdCBnZXRTY2FsZSA9IChtZWFzdXJlUGF0aCkgPT4ge1xuICBjb25zdCB3aWR0aCA9IG1lYXN1cmVQYXRoLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgY29uc3QgcmVjdCA9IG1lYXN1cmVQYXRoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIHJldHVybiB3aWR0aCAvIHJlY3Qud2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3ltYm9sc0xpc3QgPSAoc3RyKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcblxuICBmb3IgKGxldCBjaGFyIG9mIHN0cikge1xuICAgIGxldCB1bmljb2RlTnVtID0gY2hhci5jb2RlUG9pbnRBdCgpO1xuICAgIC8vIElnbm9yZSBlbW9qaSBtb2RpZmllcnNcbiAgICAvLyBmaXggcHJvYmxlbSBmb3IgZW1vamkgbGlrZSB0aGlzIOKtkO+4j1xuICAgIC8vIGZvci4ub2YgY2FuJ3QgaGFuZGxlIGl0IGxpa2Ugb25lIHN5bWJvbFxuICAgIGlmKCFjaGFyIHx8IGlnbm9yZWRVbmljb2RlTW9kaWZpZXJzW3VuaWNvZGVOdW1dKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgZW1vamkgbW9kaWZpZXIgdG8gZXZlcnkgc3ltYm9sXG4gICAgbGlzdC5wdXNoKGAke2NoYXJ9JiN4RkUwRmApO1xuICB9XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsbFNlbGVjdCA9ICh7ZWxlbSwgY3VycmVudFZhbHVlLCBsaXN0fSkgPT4ge1xuICBsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBpdGVtLm5hbWUgPyBpdGVtLm5hbWUgOiBpdGVtO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdmFsdWUgPT09IGN1cnJlbnRWYWx1ZSA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICBlbGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJyxgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCIgJHtzZWxlY3RlZH0+JHt2YWx1ZX08L29wdGlvbj5gKTtcbiAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBmaWxsVGVtcGxhdGUgPSAoe3RtcGwsIGRhdGF9KSA9PiB7XG4gIGlmKCF0bXBsIHx8ICFkYXRhKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHRtcGwucmVwbGFjZSgveyhbXlwiXXsxLH0pfS9nbSwgKG1hdGNoLCBzdHIpID0+IHtcbiAgICBpZiAoZGF0YVtzdHJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkYXRhW3N0cl07XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRFbW9qaVN0ckxlbmd0aCA9IChzdHIpID0+IHtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIGZvciAobGV0IGNoYXIgb2Ygc3RyKSB7XG4gICAgbGV0IHVuaWNvZGVOdW0gPSBjaGFyLmNvZGVQb2ludEF0KCk7XG5cbiAgICBpZighY2hhciB8fCBpZ25vcmVkVW5pY29kZU1vZGlmaWVyc1t1bmljb2RlTnVtXSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY291bnRlcisrO1xuICB9XG5cbiAgcmV0dXJuIGNvdW50ZXI7XG59O1xuIiwiaW1wb3J0IHtnZXRTdGVwLCBwb2ludHNUb1N0ciwgZ2V0U2NhbGUsIGdldFN5bWJvbHNMaXN0LCBmaWxsU2VsZWN0LCBmaWxsVGVtcGxhdGV9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQge3RlbXBsYXRlU3R5bGVzLCB0ZW1wbGF0ZU1hcmt1cCwgdGVtcGxhdGVHcm91cH0gZnJvbSAnLi90bXBsLmpzJztcbmltcG9ydCBzeW1ib2xzTGlzdCBmcm9tICcuL3N5bWJvbHNMaXN0LmpzJztcbmltcG9ydCBsaW5lU3R5bGVzIGZyb20gJy4vbGluZVN0eWxlcy5qcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzLmpzJztcbmltcG9ydCBmb250U2l6ZXMgZnJvbSAnLi9mb250U2l6ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbW9qaUJydXNoIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgdGhpcy5lbGVtLmFwcGVuZChcbiAgICAgIHRlbXBsYXRlU3R5bGVzLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLFxuICAgICAgdGVtcGxhdGVNYXJrdXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICApO1xuXG4gICAgdGhpcy5wYWludEFyZWEgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3BhaW50LWFyZWEnKTtcbiAgICB0aGlzLnRhcmdldEdyb3VwID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCd0YXJnZXQtZ3JvdXAnKTtcbiAgICB0aGlzLmNsZWFyQ29udHJvbCA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcbiAgICB0aGlzLmlucHV0U3ltYm9sc0Nob2ljZSA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnaW5wdXQtc3ltYm9scy1jaG9pY2UnKTtcbiAgICB0aGlzLnNlbGVjdFN5bWJvbHMgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1zeW1ib2xzJyk7XG4gICAgdGhpcy5hZGRTeW1ib2xzID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCdhZGQtc3ltYm9scycpO1xuICAgIHRoaXMuc2VsZWN0U3R5bGUgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1zdHlsZScpO1xuICAgIHRoaXMuc2VsZWN0Rm9udFNpemUgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1mb250LXNpemUnKTtcbiAgICB0aGlzLnNjYWxlID0gZ2V0U2NhbGUodGhpcy5wYWludEFyZWEuZ2V0RWxlbWVudEJ5SWQoJ21lYXN1cmUtcmVjdCcpKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICB0aGlzLmNvbnRyb2xHZXQgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWdldCcpO1xuICAgIHRoaXMuY29udHJvbEdldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5saW5rcyA9IHtcbiAgICAgIHBuZzogdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLS1kb3dubG9hZC1wbmcnKSxcbiAgICAgIHN2ZzogdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLS1kb3dubG9hZC1zdmcnKVxuICAgIH07XG5cbiAgICB0aGlzLnNlbGVjdGVkID0ge307XG4gICAgdGhpcy5wb2ludHMgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGxhc3Q6IHt9XG4gICAgfTtcbiAgICB0aGlzLnJvdGF0aW9uID0ge1xuICAgICAgbWF4OiA2XG4gICAgfTtcblxuICAgIHRoaXMuY3VycmVudCA9IHtcbiAgICAgIGNvdW50ZXI6IDBcbiAgICB9O1xuXG4gICAgLy8gVHJ5IHRvIGRyYXcgc3RyYWlnaHQgbGlnaHQsIGFkZCBsYXRlclxuICAgIHRoaXMubW92ZVRocmVzaG9sZCA9IHtcbiAgICAgICB2YWx1ZTogMjAsXG4gICAgICAgZGVmYXVsdDogMjBcbiAgICB9O1xuICAgIHRoaXMuaXNTdHJhaWdodExpbmUgPSBmYWxzZTtcblxuICAgIHRoaXMud2F2ZXMgPSB7XG4gICAgICBjb3VudGVyOiAwLFxuICAgICAgbWF4OiAyLFxuICAgICAgaWREaXJlY3Rpb25VcDogdHJ1ZVxuICAgIH07XG5cbiAgICAvLyBVc2VkIHRvIGFkZCBtb3JlIHN5bWJvbHMgZm9yIHRpbnkgZm9udC1zaXplXG4gICAgdGhpcy5wYXRoRmlsbHMgPSB7fTtcblxuICAgIHRoaXMuc3ltYm9scyA9IHtcbiAgICAgIHN0cjogc3ltYm9sc0xpc3RbMF0sXG4gICAgICBjdXJyZW50UG9zOiAwLFxuICAgIH07XG4gICAgdGhpcy5zeW1ib2xzLmxpc3QgPSBnZXRTeW1ib2xzTGlzdCh0aGlzLnN5bWJvbHMuc3RyKTtcblxuICAgIHRoaXMubGluZVN0eWxlID0gdGhpcy5nZXRSYW5kb21MaW5lU3R5bGUoKTtcbiAgICB0aGlzLmZvbnRTaXplID0gZm9udFNpemVzWzNdO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVN5bWJvbHNTZXQgPSB0aGlzLmNoYW5nZVN5bWJvbHNTZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUxpbmVTdHlsZSA9IHRoaXMuY2hhbmdlTGluZVN0eWxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VGb250U2l6ZSA9IHRoaXMuY2hhbmdlRm9udFNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvZHlLZXlVcCA9IHRoaXMuYm9keUtleVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib2R5S2V5RG93biA9IHRoaXMuYm9keUtleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVRoZW1lID0gdGhpcy5jaGFuZ2VUaGVtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hvb3NlU3ltYm9sc0lucHV0ID0gdGhpcy5jaG9vc2VTeW1ib2xzSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvZHlNb3VzZU91dCA9IHRoaXMuYm9keU1vdXNlT3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcmVwYXJlSW1hZ2VzID0gdGhpcy5wcmVwYXJlSW1hZ2VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGVhciA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaW5pdFNlbGVjdCh7XG4gICAgICBlbGVtOiB0aGlzLnNlbGVjdFN5bWJvbHMsXG4gICAgICBsaXN0OiBzeW1ib2xzTGlzdCxcbiAgICAgIGhhbmRsZXI6IHRoaXMuY2hhbmdlU3ltYm9sc1NldCxcbiAgICAgIGN1cnJlbnRWYWx1ZTogc3ltYm9sc0xpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3ltYm9sc0xpc3QubGVuZ3RoKV1cbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdFNlbGVjdCh7XG4gICAgICBlbGVtOiB0aGlzLnNlbGVjdFN0eWxlLFxuICAgICAgbGlzdDogT2JqZWN0LnZhbHVlcyhsaW5lU3R5bGVzKSxcbiAgICAgIGhhbmRsZXI6IHRoaXMuY2hhbmdlTGluZVN0eWxlLFxuICAgICAgY3VycmVudFZhbHVlOiAnbWlycm9yZWQtb2Zmc2V0JyxcbiAgICAgIGN1cnJlbnRWYWx1ZTogdGhpcy5saW5lU3R5bGUubmFtZVxuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0U2VsZWN0KHtcbiAgICAgIGVsZW06IHRoaXMuc2VsZWN0Rm9udFNpemUsXG4gICAgICBsaXN0OiBmb250U2l6ZXMsXG4gICAgICBoYW5kbGVyOiB0aGlzLmNoYW5nZUZvbnRTaXplLFxuICAgICAgY3VycmVudFZhbHVlOiAzMlxuICAgIH0pO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5jbGVhckNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyKTtcblxuICAgIHRoaXMucGFpbnRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XG4gICAgdGhpcy5wYWludEFyZWEuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5vbk1vdXNlVXApO1xuXG4gICAgdGhpcy5pbnB1dFN5bWJvbHNDaG9pY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNob29zZVN5bWJvbHNJbnB1dCk7XG4gICAgdGhpcy5hZGRTeW1ib2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5jaGFuZ2VTeW1ib2xzU2V0KTtcbiAgICB0aGlzLmNvbnRyb2xHZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXBhcmVJbWFnZXMpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuYm9keUtleVVwKTtcbiAgICAvLyBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvZHlLZXlEb3duKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS10aGVtZScsIHRoaXMuY2hhbmdlVGhlbWUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy9cbiAgfVxuXG4gIGluaXRTZWxlY3Qoe2VsZW0sIGxpc3QsIGN1cnJlbnRWYWx1ZSwgaGFuZGxlcn0pIHtcbiAgICBmaWxsU2VsZWN0KHtcbiAgICAgIGVsZW0sXG4gICAgICBsaXN0LFxuICAgICAgY3VycmVudFZhbHVlXG4gICAgfSk7XG5cbiAgICBoYW5kbGVyKCk7XG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZihldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICB0aGlzLmNsaWNrZWRQYXRoID0gZXZlbnQudGFyZ2V0O1xuICAgIH1cbiAgICBsZXQgc3RhcnQgPSB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KTtcbiAgICB0aGlzLnBvaW50cy5sYXN0ID0gc3RhcnQ7XG4gICAgdGhpcy5wb2ludHMubGlzdCA9IFtdO1xuICAgIHRoaXMuc3ltYm9scy5jdXJyZW50UG9zID0gMDtcblxuICAgIGxldCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xuICAgIGdyb3VwLmlkID0gYGdyb3VwLSR7dGhpcy5jdXJyZW50LmNvdW50ZXJ9YDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBmaWxsVGVtcGxhdGUoe1xuICAgICAgdG1wbDogdGVtcGxhdGVHcm91cC5pbm5lckhUTUwsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiB0aGlzLmN1cnJlbnQuY291bnRlcixcbiAgICAgICAgZm9udFNpemU6IGAke3RoaXMuZm9udFNpemV9cHhgXG4gICAgICB9XG4gICAgfSk7XG4gICAgZ3JvdXAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLGNvbnRlbnQpO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAuYXBwZW5kKGdyb3VwKTtcblxuICAgIGxldCBwYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcigncGF0aCcpO1xuICAgIHBhdGguY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wYXRoJyk7XG4gICAgbGV0IHRleHRQYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcigndGV4dFBhdGgnKTtcbiAgICBjb25zdCB0ZXh0ID0gZ3JvdXAucXVlcnlTZWxlY3RvcigndGV4dCcpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0ge1xuICAgICAgLi4udGhpcy5jdXJyZW50LFxuICAgICAgZ3JvdXAsXG4gICAgICBwYXRoLFxuICAgICAgdGV4dCxcbiAgICAgIHRleHREb3VibGU6IG51bGwsXG4gICAgICB0ZXh0UGF0aCxcbiAgICAgIHRleHRQYXRoRG91YmxlOiBudWxsLFxuICAgICAgc3RhcnQsXG4gICAgICBjb3VudGVyOiArK3RoaXMuY3VycmVudC5jb3VudGVyXG4gICAgfTtcblxuICAgIHRoaXMubW9kaWZ5UGF0aHMoKTtcblxuICAgIHRoaXMucGFpbnRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyb3V0JywgdGhpcy5ib2R5TW91c2VPdXQpO1xuICAgIHRoaXMubW91c2VPdXRQb2ludHMgPSB7fTtcbiAgfVxuXG4gIG1vZGlmeVBhdGhzKHBhcmFtcyA9IHt9KSB7XG4gICAgbGV0IGhhc0N1cnJlbnQgPSBmYWxzZTtcblxuICAgIGlmKCFwYXJhbXMudGV4dCkge1xuICAgICAgcGFyYW1zID0gdGhpcy5jdXJyZW50O1xuICAgICAgaGFzQ3VycmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYoIXBhcmFtcy50ZXh0RG91YmxlKSB7XG4gICAgICBsZXQge3RleHREb3VibGUsIHRleHRQYXRoRG91YmxlfSA9IHRoaXMuZ2V0VGV4dERvdWJsZShwYXJhbXMpO1xuXG4gICAgICBwYXJhbXMudGV4dERvdWJsZSA9IHRleHREb3VibGU7XG4gICAgICBwYXJhbXMudGV4dFBhdGhEb3VibGUgPSB0ZXh0UGF0aERvdWJsZTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVEb3VibGVWaXNpYmlsaXR5KHBhcmFtcy50ZXh0UGF0aERvdWJsZSk7XG5cbiAgICBsZXQge2dyb3VwLCB0ZXh0LCB0ZXh0RG91YmxlLCB0ZXh0UGF0aERvdWJsZX0gPSBwYXJhbXM7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2R5JywgJy4zNWVtJyk7XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5taXJyb3JlZCkge1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2R5JywgJy0uMTJlbScpO1xuICAgICAgdGV4dERvdWJsZS5zZXRBdHRyaWJ1dGUoJ2R5JywgJy0uMTJlbScpXG4gICAgICB0ZXh0RG91YmxlLnNldEF0dHJpYnV0ZSgncm90YXRlJywgMTgwKTtcbiAgICAgIHRleHRQYXRoRG91YmxlLnNldEF0dHJpYnV0ZSgnc3RhcnRPZmZzZXQnLCBgJHt0aGlzLnBhdGhPZmZzZXR9cHhgKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5zY2F0dGVyZWQpIHtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdkeScsICctLjEzZW0nKTtcbiAgICAgIHRleHREb3VibGUuc2V0QXR0cmlidXRlKCdkeScsICctLjEzZW0nKTtcbiAgICAgIGdyb3VwLnN0eWxlLmxldHRlclNwYWNpbmcgPSAnLjFlbSc7XG4gICAgfVxuXG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc3RhcnRPZmZzZXQpIHtcbiAgICAgIHRleHRQYXRoRG91YmxlLnNldEF0dHJpYnV0ZSgnc3RhcnRPZmZzZXQnLCBgLSR7dGhpcy5wYXRoT2Zmc2V0fXB4YCk7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc3RhcnRPZmZzZXRCZXR3ZWVuKSB7XG4gICAgICB0ZXh0UGF0aERvdWJsZS5zZXRBdHRyaWJ1dGUoJ3N0YXJ0T2Zmc2V0JywgYC0ke3RoaXMucGF0aE9mZnNldH1weGApO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Um90YXRpb24oKTtcbiAgICB0aGlzLnNldFdhdmVzKCk7XG4gIH1cblxuICB1cGRhdGVEb3VibGVWaXNpYmlsaXR5KHRleHRQYXRoRG91YmxlKSB7XG4gICAgdGV4dFBhdGhEb3VibGUuc2V0QXR0cmlidXRlKCdvcGFjaXR5JywgdGhpcy5saW5lU3R5bGUucHJvcHMuZG91YmxlID8gMSA6IDApO1xuICB9XG5cbiAgc2V0Um90YXRpb24oKSB7XG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMucm90YXRlZCkge1xuICAgICAgdGhpcy5yb3RhdGlvbiA9IHtcbiAgICAgICAgLi4udGhpcy5yb3RhdGlvbixcbiAgICAgICAgc3RlcEFuZ2xlOiAzNjAgLyB0aGlzLnJvdGF0aW9uLm1heCxcbiAgICAgICAgY291bnRlcjogMFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBzZXRXYXZlcygpIHtcbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy53YXZlcykge1xuICAgICAgdGhpcy53YXZlcy5jb3VudGVyID0gMDtcbiAgICAgIHRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGV4dERvdWJsZShwYXJhbXMpIHtcbiAgICBsZXQge2dyb3VwLCB0ZXh0fSA9IHBhcmFtcztcblxuICAgIGNvbnN0IHRleHREb3VibGUgPSB0ZXh0LmNsb25lTm9kZSh0cnVlKTtcbiAgICB0ZXh0RG91YmxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtLWRvdWJsZScpO1xuICAgIGNvbnN0IHRleHRQYXRoRG91YmxlID0gdGV4dERvdWJsZS5xdWVyeVNlbGVjdG9yKCd0ZXh0UGF0aCcpO1xuICAgIHRleHRQYXRoRG91YmxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtcGF0aC0tZG91YmxlJyk7XG4gICAgZ3JvdXAuYXBwZW5kKHRleHREb3VibGUpO1xuXG4gICAgcmV0dXJuIHt0ZXh0RG91YmxlLCB0ZXh0UGF0aERvdWJsZX07XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGlmKCFldmVudC5idXR0b25zKSB7XG4gICAgICB0aGlzLm1vdXNlT3V0UG9pbnRzLmZpbmlzaFBhdGggPSB0cnVlO1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb29yZHMgPSB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KTtcbiAgICBsZXQge3N0YXJ0fSA9IHRoaXMuY3VycmVudDtcblxuICAgIGNvbnN0IG1vdmVTaXplID0gZ2V0U3RlcCh7XG4gICAgICBmcm9tOiB0aGlzLnBvaW50cy5sYXN0LFxuICAgICAgdG86IGNvb3Jkc1xuICAgIH0pO1xuXG4gICAgaWYobW92ZVNpemUgPiB0aGlzLm1vdmVUaHJlc2hvbGQudmFsdWUpIHtcbiAgICAgIHRoaXMucG9pbnRzLmxpc3QucHVzaChjb29yZHMpO1xuICAgICAgdGhpcy51cGRhdGVQYXRoKGNvb3Jkcyk7XG4gICAgICB0aGlzLnVwZGF0ZVRleHQoKTtcbiAgICAgIHRoaXMucG9pbnRzLmxhc3QgPSBjb29yZHM7XG4gICAgfVxuXG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IG51bGw7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAvLyBIYW5kbGUgY2xpY2sgb24gcGF0aFxuICAgIGlmKHRoaXMuY2xpY2tlZFBhdGgpIHtcbiAgICAgIHRoaXMubW91c2VDbGlja1BhdGgoKTtcblxuICAgICAgLy8gUmVtb3ZlIGxhdGVzdCBwYXRoXG4gICAgICB0aGlzLmN1cnJlbnQuZ3JvdXAucmVtb3ZlKCk7XG4gICAgICB0aGlzLnBhaW50QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZXJlIHdhcyBub3QgbW91c2UgbW92ZVxuICAgIGlmKHRoaXMucG9pbnRzLmxpc3QubGVuZ3RoID09IDAgJiYgdGhpcy5jdXJyZW50Lmdyb3VwKSB7XG4gICAgICAvLyBSZW1vdmUgbGF0ZXN0IHBhdGhcbiAgICAgIHRoaXMuY3VycmVudC5ncm91cC5yZW1vdmUoKTtcbiAgICAgIHRoaXMucGFpbnRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51bnNlbGVjdCgpO1xuXG4gICAgLy8gVHJ5IHRvIGZpeCByYW5kb20gYnVnXG4gICAgaWYoIXRoaXMuY3VycmVudC5wYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3IgY29udGludWUgd2l0aCBsYXRlc3QgcGF0aFxuICAgIHRoaXMucG9pbnRzLmxhc3QgPSB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KTtcblxuICAgIGlmKHRoaXMubW91c2VPdXRQb2ludHMgJiYgdGhpcy5tb3VzZU91dFBvaW50cy5maW5pc2hQYXRoKSB7XG4gICAgICB0aGlzLnBvaW50cy5sYXN0ID0gdGhpcy5tb3VzZU91dFBvaW50cy5jb29yZHM7XG4gICAgfVxuXG4gICAgbGV0IHtzdGFydH0gPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5jdXJyZW50LnBhdGguY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1wYXRoJyk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhdGgodGhpcy5wb2ludHMubGFzdCk7XG4gICAgdGhpcy51cGRhdGVUZXh0KCk7XG5cbiAgICB0aGlzLnBhaW50QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm91dCcsIHRoaXMuYm9keU1vdXNlT3V0KTtcbiAgICB0aGlzLmZpbGxSZXN0T2ZQYXRoKCk7XG4gICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJyc7XG4gICAgdGhpcy5jb250cm9sR2V0LmRpc2FibGVkID0gIXRoaXMudGFyZ2V0R3JvdXAuaW5uZXJIVE1MO1xuICB9XG5cbiAgYm9keUtleVVwKGV2ZW50KSB7XG4gICAgY29uc3QgaXNCb2R5ID0gZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdCT0RZJztcbiAgICBjb25zdCBpc0RlbE9yQmFja1NwYWNlID0gZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0NjtcblxuICAgIC8vIFByZXZlbnQgcmVtb3ZpbmcgcGF0aCB3aGlsZSBlZGl0IHRleHQgaW4gaW5wdXRcbiAgICBpZihpc0JvZHkgJiYgaXNEZWxPckJhY2tTcGFjZSkge1xuICAgICAgdGhpcy5yZW1vdmVQYXRocygpO1xuICAgIH1cbiAgICAvLyBVbnByZXNzIHNoaWZ0LCBub3QgdXNlZCBub3dcbiAgICBlbHNlIGlmKGV2ZW50LmtleUNvZGUgPT09IDE2KSB7XG4gICAgICB0aGlzLmlzU3RyYWlnaHRMaW5lID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYm9keU1vdXNlT3V0KGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZU91dFBvaW50cyA9IHtcbiAgICAgIGNvb3JkczogdGhpcy5nZXRNb3VzZU9mZnNldChldmVudClcbiAgICB9O1xuICB9XG5cbiAgYm9keUtleURvd24oZXZlbnQpIHtcbiAgICAvLyBQcmVzcyBzaGlmdCwgbm90IHVzZWQgbm93XG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTYpIHtcbiAgICAgIHRoaXMuaXNTdHJhaWdodExpbmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlQ2xpY2tQYXRoKCkge1xuICAgIGNvbnN0IHBhdGhJZCA9IHRoaXMuY2xpY2tlZFBhdGguaWQ7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmNsaWNrZWRQYXRoLmNsb3Nlc3QoJ2cnKTtcbiAgICBncm91cC5jbGFzc0xpc3QudG9nZ2xlKCdoaWdobGlnaHQnKTtcblxuICAgIGlmKGdyb3VwLmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0JykpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtwYXRoSWRdID0gZ3JvdXA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRbcGF0aElkXTtcbiAgICB9XG5cbiAgICB0aGlzLmNsaWNrZWRQYXRoID0gbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZVBhdGgoe3gsIHl9KSB7XG4gICAgbGV0IHtzdGFydH0gPSB0aGlzLmN1cnJlbnQ7XG4gICAgY29uc3QgcG9pbnRzID0gcG9pbnRzVG9TdHIodGhpcy5wb2ludHMubGlzdCk7XG5cbiAgICB0aGlzLmN1cnJlbnQucGF0aC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICBgTSR7c3RhcnQueH0sJHtzdGFydC55fSAke3BvaW50c30gJHt4fSwke3l9YCk7XG4gIH1cblxuICB1cGRhdGVUZXh0KHBhcmFtcyA9IHt9KSB7XG4gICAgaWYoIXBhcmFtcy50ZXh0UGF0aCkge1xuICAgICAgcGFyYW1zID0gdGhpcy5jdXJyZW50O1xuICAgIH1cblxuICAgIGxldCB7dGV4dFBhdGgsIHRleHRQYXRoRG91YmxlfSA9IHBhcmFtcztcblxuICAgIC8vIHRoaXMucGF0aEZpbGxzLmtvZWZmIG5lZWQgdG8gYWRkIG1vcmUgc3ltYm9scyBmb3IgdGlueSBmb250LXNpemVcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXRoRmlsbHMua29lZmY7IGkrKykge1xuICAgICAgbGV0IGdyb3d0aEFnZSA9IHBhcmFtcy50ZXh0UGF0aC5nZXROdW1iZXJPZkNoYXJzKCk7XG4gICAgICBsZXQgc3ltYm9sID0gdGhpcy5nZXRTeW1ib2woZ3Jvd3RoQWdlKTtcbiAgICAgIHRleHRQYXRoLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgc3ltYm9sKTtcblxuICAgICAgaWYodGV4dFBhdGhEb3VibGUpIHtcbiAgICAgICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc2NhdHRlcmVkKSB7XG4gICAgICAgICAgc3ltYm9sID0gdGhpcy5nZXRTeW1ib2woZ3Jvd3RoQWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0UGF0aERvdWJsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIHN5bWJvbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsbCBlbXB0eSBwYXRoIGlmIG1vdXNlIG1vdmVzIHRvbyBmYXN0XG4gIGZpbGxSZXN0T2ZQYXRoKHBhcmFtcyA9IHt9KSB7XG4gICAgaWYoIXBhcmFtcy50ZXh0UGF0aCkge1xuICAgICAgcGFyYW1zID0gdGhpcy5jdXJyZW50O1xuICAgIH1cblxuICAgIGxldCB7cGF0aCwgdGV4dFBhdGgsIHRleHRQYXRoRG91YmxlfSA9IHBhcmFtcztcbiAgICBjb25zdCBwYXRoRmlsbHNNYXggPSBwYXRoLmdldFRvdGFsTGVuZ3RoKCkgLyB0aGlzLmZvbnRTaXplICsgdGhpcy5wYXRoT2Zmc2V0O1xuICAgIGNvbnN0IHRTcGFuc0xlbmd0aCA9IHRleHRQYXRoLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBsZXQgbWlzc2VkU3ltYm9scyA9IHBhdGhGaWxsc01heCAtIHRTcGFuc0xlbmd0aDtcblxuICAgIGlmKCFtaXNzZWRTeW1ib2xzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWlzc2VkU3ltYm9scyA9IE1hdGgubWluKG1pc3NlZFN5bWJvbHMsIDUpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1pc3NlZFN5bWJvbHM7IGkrKykge1xuICAgICAgdGhpcy51cGRhdGVUZXh0KHBhcmFtcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3ltYm9sKGdyb3d0aEFnZSkge1xuICAgIGxldCBzeW1ib2wgPSB0aGlzLnN5bWJvbHMubGlzdFt0aGlzLnN5bWJvbHMuY3VycmVudFBvc107XG4gICAgaWYgKHRoaXMubGluZVN0eWxlLnByb3BzLnNwYXJzZSA+IDAgJiYgdGhpcy5saW5lU3R5bGUucHJvcHMuc3BhcnNlID4gTWF0aC5yYW5kb20oKSkge1xuICAgICAgc3ltYm9sID0gJyAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN5bWJvbHMuY3VycmVudFBvcysrO1xuXG4gICAgICBpZih0aGlzLnN5bWJvbHMuY3VycmVudFBvcyA9PT0gdGhpcy5zeW1ib2xzLmxpc3QubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc3ltYm9scy5jdXJyZW50UG9zID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHJvdGF0ZUF0dHIgPSB0aGlzLmdldFJvdGF0ZUF0dHIoKTtcbiAgICBsZXQgZHlBdHRyID0gdGhpcy5nZXREWVdhdmVzQXR0cigpO1xuICAgIGxldCBmb250U2l6ZUF0dHIgPSB0aGlzLmdldEZvbnRTaXplQXR0cihncm93dGhBZ2UpO1xuXG4gICAgc3ltYm9sID0gYDx0c3BhbiAke3JvdGF0ZUF0dHJ9JHtkeUF0dHJ9JHtmb250U2l6ZUF0dHJ9PiR7c3ltYm9sfTwvdHNwYW4+YFxuXG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfVxuXG4gIGdldFJvdGF0ZUF0dHIoKSB7XG4gICAgaWYoIXRoaXMubGluZVN0eWxlLnByb3BzLnJvdGF0ZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZSA9IHRoaXMucm90YXRpb24uc3RlcEFuZ2xlICogdGhpcy5yb3RhdGlvbi5jb3VudGVyO1xuICAgIGxldCByb3RhdGVBdHRyID0gYCByb3RhdGU9XCIke2FuZ2xlfVwiYDtcblxuICAgIHRoaXMucm90YXRpb24uY291bnRlcisrO1xuICAgIGlmKHRoaXMucm90YXRpb24uY291bnRlciA+PSB0aGlzLnJvdGF0aW9uLm1heCkge1xuICAgICAgdGhpcy5yb3RhdGlvbi5jb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gcm90YXRlQXR0cjtcbiAgfVxuXG4gIGdldERZV2F2ZXNBdHRyKCkge1xuICAgIGlmKCF0aGlzLmxpbmVTdHlsZS5wcm9wcy53YXZlcykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGxldCBkeVZhbCA9IC41NTtcbiAgICBsZXQgZGlyZWN0aW9uU2lnbiA9IHRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcCA/IDEgOiAtMTtcbiAgICBsZXQgZHkgPSBkeVZhbCAqIGRpcmVjdGlvblNpZ247XG4gICAgbGV0IGR5QXR0ciA9IGAgZHk9XCIke2R5fWVtXCJgO1xuXG4gICAgLy8gSGFuZGxlIHdhdmVzIGNvdW50ZXJcbiAgICBpZih0aGlzLndhdmVzLmlkRGlyZWN0aW9uVXApIHtcbiAgICAgIHRoaXMud2F2ZXMuY291bnRlcisrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMud2F2ZXMuY291bnRlci0tO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSB3YXZlcyBkaXJlY3Rpb25cbiAgICBpZih0aGlzLndhdmVzLmNvdW50ZXIgPT0gdGhpcy53YXZlcy5tYXgpIHtcbiAgICAgIHRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcCA9ICF0aGlzLndhdmVzLmlkRGlyZWN0aW9uVXA7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy53YXZlcy5jb3VudGVyID09PSAwKSB7XG4gICAgICB0aGlzLndhdmVzLmlkRGlyZWN0aW9uVXAgPSAhdGhpcy53YXZlcy5pZERpcmVjdGlvblVwO1xuICAgIH1cblxuICAgIHJldHVybiBkeUF0dHI7XG4gIH1cblxuICBnZXRGb250U2l6ZUF0dHIoZ3Jvd3RoQWdlKSB7XG4gICAgaWYoIXRoaXMubGluZVN0eWxlLnByb3BzLnNjYXR0ZXJlZCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGdyb3dDb2VmZmljZW50ID0gdGhpcy5saW5lU3R5bGUucHJvcHMuZ3JvdyAmJiBncm93dGhBZ2UgPyBncm93dGhBZ2UgLyAyMCA6IDE7XG4gICAgY29uc3QgZm9udFNpemUgPSAoTWF0aC5yYW5kb20oKSAqIDEuMjUgKiBncm93Q29lZmZpY2VudCArIC4yNSkudG9GaXhlZCgyKTtcblxuICAgIHJldHVybiBgIGZvbnQtc2l6ZT1cIiR7Zm9udFNpemV9ZW1cImA7XG4gIH1cblxuICB1bnNlbGVjdCgpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtrZXldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVBhdGhzKCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW2tleV0ucmVtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wb2ludHMubGlzdCA9IFtdO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJyc7XG4gICAgdGhpcy5jb250cm9sR2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHNldFBhdGhPZmZzZXQoKSB7XG4gICAgY29uc3QgaGFsZlBhdHRlcm5MZW5ndGggPSBNYXRoLnJvdW5kKHRoaXMuc3ltYm9scy5saXN0Lmxlbmd0aCAvIDIpO1xuICAgIHRoaXMucGF0aE9mZnNldCA9IDA7XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5taXJyb3JlZCkge1xuICAgICAgdGhpcy5wYXRoT2Zmc2V0ID0gLjUgKiB0aGlzLmZvbnRTaXplO1xuICAgIH1cblxuICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLnN0YXJ0T2Zmc2V0KSB7XG4gICAgICB0aGlzLnBhdGhPZmZzZXQgPSAoaGFsZlBhdHRlcm5MZW5ndGggKyAuNSkgKiB0aGlzLmZvbnRTaXplO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLnN0YXJ0T2Zmc2V0QmV0d2Vlbikge1xuICAgICAgdGhpcy5wYXRoT2Zmc2V0ID0gaGFsZlBhdHRlcm5MZW5ndGggKiB0aGlzLmZvbnRTaXplO1xuICAgIH1cbiAgfVxuXG4gIGNob29zZVN5bWJvbHNJbnB1dChldmVudCkge1xuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY2hvaWNlX19sYWJlbC10ZXh0Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmNob2ljZV9faW5wdXQnKTtcblxuICAgIGlmKGxhYmVsVGV4dCAmJiBsYWJlbFRleHQuZGF0YXNldC52YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dFN5bWJvbHNDaG9pY2UuZGF0YXNldC5tb2RlID0gbGFiZWxUZXh0LmRhdGFzZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaWYoaW5wdXQgJiYgaW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMuY2hhbmdlU3ltYm9sc1NldChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3ltYm9sc1NldChldmVudCkge1xuICAgIGxldCBjdXJyZW50SW5wdXQgPSB0aGlzLnNlbGVjdFN5bWJvbHM7XG4gICAgaWYoZXZlbnQpIHtcbiAgICAgIGN1cnJlbnRJbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICB9XG5cbiAgICBpZighY3VycmVudElucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYodGhpcy5zeW1ib2xzLnN0ciA9PT0gY3VycmVudElucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zeW1ib2xzLnN0ciA9IGN1cnJlbnRJbnB1dC52YWx1ZTtcbiAgICB0aGlzLnN5bWJvbHMubGlzdCA9IGdldFN5bWJvbHNMaXN0KHRoaXMuc3ltYm9scy5zdHIpO1xuICAgIHRoaXMuc3ltYm9scy5jdXJyZW50UG9zID0gMDtcblxuICAgIHRoaXMuY2hhbmdlU3ltYm9sc09uU2VsZWN0ZWQoKTtcbiAgfVxuXG4gIGNoYW5nZVN5bWJvbHNPblNlbGVjdGVkKCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICBjb25zdCBwYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcigncGF0aCcpO1xuICAgICAgY29uc3QgdGV4dFBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCcudGV4dC1wYXRoJyk7XG4gICAgICBsZXQgdGV4dFBhdGhEb3VibGUgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcudGV4dC1wYXRoLS1kb3VibGUnKTtcbiAgICAgIHRleHRQYXRoLmlubmVySFRNTCA9ICcnO1xuICAgICAgaWYodGV4dFBhdGhEb3VibGUpIHtcbiAgICAgICAgdGV4dFBhdGhEb3VibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMudXBkYXRlRG91YmxlVmlzaWJpbGl0eSh0ZXh0UGF0aERvdWJsZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0V2F2ZXMoKTtcblxuICAgICAgdGhpcy5maWxsUmVzdE9mUGF0aCh7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHRleHRQYXRoLFxuICAgICAgICB0ZXh0UGF0aERvdWJsZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTGluZVN0eWxlKCkge1xuICAgIHRoaXMubGluZVN0eWxlID0gbGluZVN0eWxlc1t0aGlzLnNlbGVjdFN0eWxlLnZhbHVlXTtcbiAgICB0aGlzLnN5bWJvbHMuY3VycmVudFBvcyA9IDA7XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5zY2F0dGVyZWQpIHtcbiAgICAgIHRoaXMucGF0aEZpbGxzLmtvZWZmID0gMztcbiAgICB9XG5cbiAgICB0aGlzLnNldFBhdGhPZmZzZXQoKTtcblxuICAgIHRoaXMuY2hhbmdlTGluZVN0eWxlT25TZWxlY3RlZCgpO1xuICB9XG5cbiAgY2hhbmdlTGluZVN0eWxlT25TZWxlY3RlZCgpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgY29uc3QgcGF0aCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3BhdGgnKTtcbiAgICAgIGNvbnN0IHRleHQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCd0ZXh0Jyk7XG4gICAgICBjb25zdCB0ZXh0UGF0aCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXBhdGgnKTtcbiAgICAgIGxldCB0ZXh0RG91YmxlID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLnRleHQtLWRvdWJsZScpO1xuICAgICAgbGV0IHRleHRQYXRoRG91YmxlID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLnRleHQtcGF0aC0tZG91YmxlJyk7XG4gICAgICB0ZXh0UGF0aC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgaWYodGV4dFBhdGhEb3VibGUpIHtcbiAgICAgICAgdGV4dFBhdGhEb3VibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMudXBkYXRlRG91YmxlVmlzaWJpbGl0eSh0ZXh0UGF0aERvdWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgZ3JvdXAsXG4gICAgICAgIHBhdGgsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHRleHRQYXRoLFxuICAgICAgICB0ZXh0RG91YmxlLFxuICAgICAgICB0ZXh0UGF0aERvdWJsZVxuICAgICAgfTtcblxuICAgICAgdGhpcy5tb2RpZnlQYXRocyhwYXJhbXMpO1xuICAgICAgdGhpcy5maWxsUmVzdE9mUGF0aChwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUZvbnRTaXplKCkge1xuICAgIHRoaXMuZm9udFNpemUgPSB0aGlzLnNlbGVjdEZvbnRTaXplLnZhbHVlO1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC1zaXplJywgYCR7dGhpcy5mb250U2l6ZX1weGApO1xuICAgIHRoaXMucGF0aEZpbGxzLmtvZWZmID0gMztcblxuICAgIGlmKHRoaXMuZm9udFNpemUgPj0gMzIpIHtcbiAgICAgIHRoaXMucGF0aEZpbGxzLmtvZWZmID0gMjtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLmZvbnRTaXplID49IDQwKSB7XG4gICAgICB0aGlzLnBhdGhGaWxscy5rb2VmZiA9IDE7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQYXRoT2Zmc2V0KCk7XG5cbiAgICB0aGlzLmNoYW5nZUZvbnRTaXplT25TZWxlY3RlZCgpO1xuICB9XG5cbiAgY2hhbmdlRm9udFNpemVPblNlbGVjdGVkKCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICBjb25zdCB0ZXh0cyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHQnKTtcbiAgICAgIGNvbnN0IHBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCdwYXRoJyk7XG4gICAgICBjb25zdCB0ZXh0UGF0aCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3RleHRQYXRoJyk7XG4gICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5mb250U2l6ZSk7XG5cbiAgICAgIGZvcihsZXQgdGV4dCBvZiB0ZXh0cykge1xuICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywgYCR7dGhpcy5mb250U2l6ZX1weGApO1xuICAgICAgfVxuICAgICAgdGhpcy5maWxsUmVzdE9mUGF0aCh7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHRleHRQYXRoXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VUaGVtZShldmVudCkge1xuICAgIGlmKCFldmVudC5kZXRhaWwuYWNjZW50cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQga2V5IGluIGV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KGAtLWNvbG9yLSR7a2V5fWAsIGV2ZW50LmRldGFpbC5hY2NlbnRzW2tleV0pO1xuICAgIH1cblxuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICcnO1xuICAgIHRoaXMudGhlbWUgPSBldmVudC5kZXRhaWwuY29sb3JzO1xuICAgIHRoaXMuYWNjZW50cyA9IGV2ZW50LmRldGFpbC5hY2NlbnRzO1xuICAgIHRoaXMub3V0cHV0U3R5bGUgPSB0aGlzLmdldFN0eWxlU3RyKCk7XG4gIH1cblxuICBwcmVwYXJlSW1hZ2VzKCkge1xuICAgIHRoaXMuZmluYWxTaXplcyA9IHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfTtcblxuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICdsb2FkaW5nJztcbiAgICB0aGlzLmZpbmFsU1ZHID0gdGhpcy5wYWludEFyZWEuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRoaXMuZmluYWxTVkcuc3R5bGUgPSB0aGlzLm91dHB1dFN0eWxlO1xuICAgIC8vIEZpeCBwYWludCBTVkcgb24gY2FudmFzIGluIEZpcmVmb3hcbiAgICB0aGlzLmZpbmFsU1ZHLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt0aGlzLmZpbmFsU2l6ZXMud2lkdGh9cHhgKTtcbiAgICB0aGlzLmZpbmFsU1ZHLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7dGhpcy5maW5hbFNpemVzLmhlaWdodH1weGApO1xuXG4gICAgdGhpcy5wcmVwYXJlUG5nKCk7XG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIGdldFN0eWxlU3RyKCkge1xuICAgIC8vIFRyZWJ1Y2hldCBNUywgVmVyZGFuYVxuICAgIGNvbnN0IHN0eWxlc2xpc3QgPSBbXG4gICAgICBgYmFja2dyb3VuZDogJHt0aGlzLmdldEJhY2tncm91bmRTdHIodGhpcy50aGVtZSl9YCxcbiAgICAgIGBmb250LWZhbWlseTogVHJlYnVjaGV0IE1TLCBWZXJkYW5hLCBzYW5zLWVyaWZgLFxuICAgICAgYGNvbG9yOiAke3RoaXMuYWNjZW50cy5iYXNlfWBcbiAgICBdXG4gICAgcmV0dXJuIHN0eWxlc2xpc3Quam9pbignOyAnKTtcbiAgfVxuXG4gIHByZXBhcmVQbmcoKSB7XG4gICAgY29uc3QgeG1sID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyh0aGlzLmZpbmFsU1ZHKTtcbiAgICBjb25zdCBzdmc2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHhtbCkpKTtcbiAgICBjb25zdCBiNjRTdGFydCA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCc7XG4gICAgY29uc3QgaW1hZ2U2NCA9IGI2NFN0YXJ0ICsgc3ZnNjQ7XG5cbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3htbF0sIHt0eXBlIDogJ2ltYWdlL3N2Zyt4bWwnfSk7XG4gICAgbGV0IFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgICB0aGlzLmxpbmtzLnN2Zy5ocmVmID0gVVJMT2JqLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICB0aGlzLmxpbmtzLnN2Zy5kb3dubG9hZCA9ICdlbW9qaS1icnVzaC1kcmF3aW5nLnN2Zyc7XG5cbiAgICBjb25zdCBpbWdPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWdPYmouc3JjID0gaW1hZ2U2NDtcbiAgICBpbWdPYmoud2lkdGggPSB0aGlzLmZpbmFsU2l6ZXMud2lkdGg7XG4gICAgaW1nT2JqLmhlaWdodCA9IHRoaXMuZmluYWxTaXplcy5oZWlnaHQ7XG5cbiAgICBpbWdPYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5maW5hbFNpemVzLndpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5maW5hbFNpemVzLmhlaWdodDtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWdPYmosIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgbGV0IFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgICAgICAgdGhpcy5saW5rcy5wbmcuaHJlZiA9IFVSTE9iai5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIHRoaXMubGlua3MucG5nLmRvd25sb2FkID0gJ2Vtb2ppLWJydXNoLWRyYXdpbmcucG5nJztcblxuICAgICAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAncmVhZHknO1xuICAgICAgfSk7XG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0TW91c2VPZmZzZXQoZXZlbnQpIHtcbiAgICBsZXQge2xlZnQsIHRvcH0gPSB0aGlzLnBhaW50QXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgc2NhbGUgPSB0aGlzLnNjYWxlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHNjYWxlICogKGV2ZW50LmNsaWVudFggLSBsZWZ0KSxcbiAgICAgIHk6IHNjYWxlICogKGV2ZW50LmNsaWVudFkgLSB0b3ApXG4gICAgfTtcbiAgfVxuXG4gIGdldFJhbmRvbUxpbmVTdHlsZSgpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobGluZVN0eWxlcyk7XG4gICAgY29uc3QgcmFuZG9tS2V5ID0ga2V5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBrZXlzLmxlbmd0aCldXG4gICAgcmV0dXJuIGxpbmVTdHlsZXNbcmFuZG9tS2V5XTtcbiAgfVxufVxuIiwiY29uc3QgbGluZVN0eWxlcyA9IHtcbiAgJ2xpbmVhcic6IHtcbiAgICBuYW1lOiAnbGluZWFyJyxcbiAgICBwcm9wczoge31cbiAgfSxcbiAgJ2xpbmVhci1yb3RhdGVkJzoge1xuICAgIG5hbWU6ICdsaW5lYXItcm90YXRlZCcsXG4gICAgcHJvcHM6IHtcbiAgICAgIHJvdGF0ZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gICdtaXJyb3JlZCc6IHtcbiAgICBuYW1lOiAnbWlycm9yZWQnLFxuICAgIHByb3BzOiB7XG4gICAgICBkb3VibGU6IHRydWUsXG4gICAgICBtaXJyb3JlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgJ21pcnJvcmVkLW9mZnNldCc6IHtcbiAgICBuYW1lOiAnbWlycm9yZWQtb2Zmc2V0JyxcbiAgICBwcm9wczoge1xuICAgICAgZG91YmxlOiB0cnVlLFxuICAgICAgbWlycm9yZWQ6IHRydWUsXG4gICAgICBzdGFydE9mZnNldDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgJ21pcnJvcmVkLW9mZnNldC1iZXR3ZWVuJzoge1xuICAgIG5hbWU6ICdtaXJyb3JlZC1vZmZzZXQtYmV0d2VlbicsXG4gICAgcHJvcHM6IHtcbiAgICAgIGRvdWJsZTogdHJ1ZSxcbiAgICAgIG1pcnJvcmVkOiB0cnVlLFxuICAgICAgc3RhcnRPZmZzZXRCZXR3ZWVuOiB0cnVlXG4gICAgfVxuICB9LFxuICAnd2F2ZXMnOiB7XG4gICAgbmFtZTogJ3dhdmVzJyxcbiAgICBwcm9wczoge1xuICAgICAgd2F2ZXM6IHRydWVcbiAgICB9XG4gIH0sXG4gICdtaXJyb3JlZC1yYW5kb20nOiB7XG4gICAgbmFtZTogJ21pcnJvcmVkLXJhbmRvbScsXG4gICAgcHJvcHM6IHtcbiAgICAgIGRvdWJsZTogdHJ1ZSxcbiAgICAgIG1pcnJvcmVkOiB0cnVlLFxuICAgICAgc2NhdHRlcmVkOiB0cnVlLFxuICAgICAgc3RhcnRPZmZzZXRCZXR3ZWVuOiB0cnVlXG4gICAgfVxuICB9LFxuICAnZ3Jvdy1yYW5kb20nOiB7XG4gICAgbmFtZTogJ2dyb3ctcmFuZG9tJyxcbiAgICBwcm9wczoge1xuICAgICAgZ3JvdzogdHJ1ZSxcbiAgICAgIGRvdWJsZTogdHJ1ZSxcbiAgICAgIG1pcnJvcmVkOiBmYWxzZSxcbiAgICAgIHNjYXR0ZXJlZDogdHJ1ZSxcbiAgICAgIHN0YXJ0T2Zmc2V0QmV0d2VlbjogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgJ2dyb3ctcmFuZG9tLXNwYXJzZSc6IHtcbiAgICBuYW1lOiAnZ3Jvdy1yYW5kb20tc3BhcnNlJyxcbiAgICBwcm9wczoge1xuICAgICAgZ3JvdzogdHJ1ZSxcbiAgICAgIHNwYXJzZTogMC41LFxuICAgICAgd2F2ZXM6IHRydWUsXG4gICAgICBkb3VibGU6IGZhbHNlLFxuICAgICAgbWlycm9yZWQ6IGZhbHNlLFxuICAgICAgc2NhdHRlcmVkOiB0cnVlLFxuICAgICAgc3RhcnRPZmZzZXRCZXR3ZWVuOiB0cnVlXG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGluZVN0eWxlcztcbiIsImNvbnN0IHRoZW1lcyA9IFtcbiAgJ/CfmIbwn5mC8J+kqvCfpKjwn5iM8J+Yi/CfmILwn5mD8J+YgScsXG4gICfwn5iGICAgIPCfmYIgICAg8J+kqiAgICDwn6SoICAgIPCfmIwgICAg8J+YiyAgICDwn5iCICAgIPCfmYMgICAg8J+YgSAgICAnLFxuICAn8J+NgScsXG4gICfwn6aUJyxcbiAgJ/CfjYLwn42B8J+NhCcsXG4gICfwn5CaJyxcbiAgJ/CfppAnLFxuICAn8J+QofCfkKDwn5CfJyxcbiAgJ/CfkLbwn5Cx8J+QrfCfkLnwn5CwJyxcbiAgJ/CfkIwnLFxuICAn4pyoJyxcbiAgJ+KtkO+4jycsXG4gICfinaTvuI/wn6eh8J+Sm/Cfkprwn5KZ8J+SnPCflqQnLFxuICAn8J+UtPCfn6Dwn5+h8J+fovCflLXwn5+j4pqr77iPJyxcbiAgJ/Cfn6Xwn5+n8J+fqPCfn6nwn5+m8J+fquKsm++4jycsXG4gICfwn4yx8J+NgCcsXG4gICfwn4y88J+MuvCfjLgnLFxuICAn8J+MvPCfjLHwn4y68J+MsfCfjLgnLFxuICAn8J+al/CfmrLwn5qb8J+agvCfmpnim7XvuI/wn5qDJyxcbiAgJ/CfpYDwn6eaJ1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVzO1xuIiwiZXhwb3J0IGNvbnN0IHRlbXBsYXRlU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlU3R5bGVzLmlubmVySFRNTCA9IGA8c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuXG4gICAgLS1mb250LXNpemU6IDMycHg7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSk7XG4gIH1cblxuICBBIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSk7XG4gIH1cblxuICAudmlzdWFsbHloaWRkZW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnBhaW50LWFyZWEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgLnBhaW50LWFyZWEgcGF0aCB7XG4gICAgc3Ryb2tlOiB0cmFuc3BhcmVudDtcbiAgICBzdHJva2Utb3BhY2l0eTogLjM1O1xuICAgIGZpbGw6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogc3Ryb2tlIC4xNXM7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gIH1cblxuICAucGFpbnQtYXJlYSBwYXRoOmhvdmVyIHtcbiAgICBzdHJva2U6IHZhcigtLWNvbG9yLWhvdmVyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAucGFpbnQtYXJlYSB0ZXh0LFxuICAucGFpbnQtYXJlYSB0ZXh0UGF0aCxcbiAgLnBhaW50LWFyZWEgLmN1cnJlbnQtcGF0aCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICBTRUxFQ1QsXG4gIElOUFVUIHtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nOiAwIC4yNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNFRUU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgLmhpZ2hsaWdodCBwYXRoIHtcbiAgICBzdHJva2U6IHZhcigtLWNvbG9yLWZvY3VzKTtcbiAgICBzdHJva2Utb3BhY2l0eTogLjY1O1xuICB9XG5cbiAgLmhpZ2hsaWdodDpob3ZlciBwYXRoIHtcbiAgICBzdHJva2U6IHZhcigtLWNvbG9yLWZvY3VzaG92ZXIpO1xuICB9XG5cbiAgLnBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgbGVmdDogMXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wYW5lbC0tdG9wIHtcbiAgICB0b3A6IDJyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5wYW5lbC0tYm90dG9tIHtcbiAgICBib3R0b206IDJyZW07XG4gIH1cblxuICAuY2hvaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNob2ljZV9fbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwicHJlc2V0c1wiXSAuY2hvaWNlX19sYWJlbC0tcHJlc2V0cyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5cbiAgLmNob2ljZV9fbGFiZWwtdGV4dCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNob2ljZV9faW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLmNob2ljZVtkYXRhLW1vZGU9XCJwcmVzZXRzXCJdIC5jaG9pY2VfX2lucHV0LS1jdXN0b20sXG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwiY3VzdG9tXCJdIC5jaG9pY2VfX2lucHV0LS1wcmVzZXRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwicHJlc2V0c1wiXSAuY2hvaWNlX19sYWJlbC10ZXh0LS1wcmVzZXRzLFxuICAuY2hvaWNlW2RhdGEtbW9kZT1cImN1c3RvbVwiXSAuY2hvaWNlX19sYWJlbC10ZXh0LS1jdXN0b20ge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLmNob2ljZVtkYXRhLW1vZGU9XCJwcmVzZXRzXCJdIC5jaG9pY2VfX2xhYmVsLXRleHQtLXByZXNldHM6aG92ZXIsXG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwiY3VzdG9tXCJdIC5jaG9pY2VfX2xhYmVsLXRleHQtLWN1c3RvbTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSk7XG4gIH1cblxuICAuY29udHJvbCB7XG4gICAgcGFkZGluZzogLjI1cmVtIDFyZW07XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3gtc2hhZG93OiAgMCAwIDAgMnB4IHZhcigtLWNvbG9yLWJhc2UpIGluc2V0O1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UpO1xuICB9XG4gIC5jb250cm9sOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdHJhbnNwYXJlbnQgaW5zZXQ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFzZSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICB9XG4gIC5jb250cm9sOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNldHJhbnNwKTtcbiAgfVxuXG4gIC5jb250cm9sc19fZG93bmxvYWRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJsb2FkaW5nXCJdIC5jb250cm9sLS1nZXQsXG4gIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2wtLWdldCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cImxvYWRpbmdcIl0gLmNvbnRyb2xzX19kb3dubG9hZHMsXG4gIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2xzX19kb3dubG9hZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuY29udHJvbHNfX2Rvd25sb2FkcyAuY29udHJvbCB7XG4gICAgb3BhY2l0eTogLjI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2hhZG93OlxuICAgICAgMCAwIDAgMnB4IHZhcigtLWNvbG9yLWJhc2UpIGluc2V0LFxuICAgICAgMCAwIDFyZW0gLjI1cmVtIHZhcigtLWNvbG9yLWZvY3VzaG92ZXIpO1xuICB9XG5cbiAgLnRoZW1lLXN3aXRjaGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAuZGlzY2xhaW1lciB7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICB9XG5cbiAgLmxpbmtzbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDBcbiAgfVxuXG4gIC5saW5rc2xpc3RfX2l0ZW0gKyAubGlua3NsaXN0X19pdGVtIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxuXG4gIC5saW5rc2xpc3RfX2ljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLXRyYW5zaXRpb24pO1xuICB9XG5cbiAgLmxpbmtzbGlzdF9faWNvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogLjc1O1xuICB9XG5cbiAgLmxpbmtzbGlzdF9fdXNlcm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgfVxuPC9zdHlsZT5cbmA7XG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZU1hcmt1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZU1hcmt1cC5pbm5lckhUTUwgPSBgXG48c3ZnIGlkPVwicGFpbnQtYXJlYVwiIGNsYXNzPVwicGFpbnQtYXJlYVwiPlxuICA8IS0tIFNoYXBlIGZvciBtZWFzdXJpbmcgU1ZHIHNjYWxpbmcgLS0+XG4gIDxyZWN0IGlkPVwibWVhc3VyZS1yZWN0XCJcbiAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgIHg9XCIwXCIgeT1cIjBcIlxuICAgIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+PC9yZWN0PlxuXG4gIDxnIGlkPVwidGFyZ2V0LWdyb3VwXCI+PC9nPlxuPC9zdmc+XG5cbjxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC0tdG9wXCI+XG4gIDxkaXYgY2xhc3M9XCJjaG9pY2VcIiBpZD1cImlucHV0LXN5bWJvbHMtY2hvaWNlXCIgZGF0YS1tb2RlPVwicHJlc2V0c1wiPlxuICAgIDxsYWJlbFxuICAgICAgY2xhc3M9XCJjaG9pY2VfX2xhYmVsIGNob2ljZV9fbGFiZWwtLXByZXNldHNcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgY2hvaWNlX19sYWJlbC10ZXh0XG4gICAgICAgICAgY2hvaWNlX19sYWJlbC10ZXh0LS1wcmVzZXRzXG4gICAgICAgICAgY29udHJvbFxuICAgICAgICBcIlxuICAgICAgICBkYXRhLXZhbHVlPVwicHJlc2V0c1wiXG4gICAgICAgID5QcmVzZXRzPC9zcGFuPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzcz1cImNob2ljZV9faW5wdXQgY2hvaWNlX19pbnB1dC0tcHJlc2V0c1wiXG4gICAgICAgIGlkPVwic2VsZWN0LXN5bWJvbHNcIj48L3NlbGVjdD5cbiAgICA8L2xhYmVsPlxuXG4gICAgPGxhYmVsXG4gICAgICBjbGFzcz1cImNob2ljZV9fbGFiZWwgY2hvaWNlX19sYWJlbC0tY3VzdG9tXCI+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgIGNob2ljZV9fbGFiZWwtdGV4dFxuICAgICAgICAgIGNob2ljZV9fbGFiZWwtdGV4dC0tY3VzdG9tXG4gICAgICAgICAgY29udHJvbFxuICAgICAgICBcIlxuICAgICAgICBkYXRhLXZhbHVlPVwiY3VzdG9tXCJcbiAgICAgICAgPk15IHN5bWJvbHM8L3NwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3M9XCJjaG9pY2VfX2lucHV0IGNob2ljZV9faW5wdXQtLWN1c3RvbVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGQtc3ltYm9sc1wiIHBsYWNlaG9sZGVyPVwiQWRkIGVtb2ppIG9yIHRleHRcIi8+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG4gIDxzZWxlY3QgaWQ9XCJzZWxlY3Qtc3R5bGVcIj48L3NlbGVjdD5cbiAgPHNlbGVjdCBpZD1cInNlbGVjdC1mb250LXNpemVcIj48L3NlbGVjdD5cblxuICA8dGhlbWUtc3dpdGNoZXIgY2xhc3M9XCJ0aGVtZS1zd2l0Y2hlclwiPjwvdGhlbWUtc3dpdGNoZXI+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLS1ib3R0b21cIj5cbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbGVhclwiIGNsYXNzPVwiY29udHJvbFwiPkNsZWFyPC9idXR0b24+XG5cbiAgPHVsIGNsYXNzPVwibGlua3NsaXN0XCI+XG4gICAgPGxpIGNsYXNzPVwibGlua3NsaXN0X19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3lva3NlbC9lbW9qaS1icnVzaC9cIiBjbGFzcz1cImxpbmtzbGlzdF9fbGlua1wiPjxzdmcgY2xhc3M9XCJsaW5rc2xpc3RfX2ljb24gbGlua3NsaXN0X19pY29uLS1naXRodWJcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+PHBhdGggZD1cIk03Ljk5OSwwLjQzMWMtNC4yODUsMC03Ljc2LDMuNDc0LTcuNzYsNy43NjEgYzAsMy40MjgsMi4yMjMsNi4zMzcsNS4zMDcsNy4zNjNjMC4zODgsMC4wNzEsMC41My0wLjE2OCwwLjUzLTAuMzc0YzAtMC4xODQtMC4wMDctMC42NzItMC4wMS0xLjMyIGMtMi4xNTksMC40NjktMi42MTQtMS4wNC0yLjYxNC0xLjA0Yy0wLjM1My0wLjg5Ni0wLjg2Mi0xLjEzNS0wLjg2Mi0xLjEzNWMtMC43MDUtMC40ODEsMC4wNTMtMC40NzIsMC4wNTMtMC40NzIgYzAuNzc5LDAuMDU1LDEuMTg5LDAuOCwxLjE4OSwwLjhjMC42OTIsMS4xODYsMS44MTYsMC44NDMsMi4yNTgsMC42NDVjMC4wNzEtMC41MDIsMC4yNzEtMC44NDMsMC40OTMtMS4wMzcgQzQuODYsMTEuNDI1LDMuMDQ5LDEwLjc2LDMuMDQ5LDcuNzg2YzAtMC44NDcsMC4zMDItMS41NCwwLjc5OS0yLjA4MkMzLjc2OCw1LjUwNywzLjUwMSw0LjcxOCwzLjkyNCwzLjY1IGMwLDAsMC42NTItMC4yMDksMi4xMzQsMC43OTZDNi42NzcsNC4yNzMsNy4zNCw0LjE4Nyw4LDQuMTg0YzAuNjU5LDAuMDAzLDEuMzIzLDAuMDg5LDEuOTQzLDAuMjYxIGMxLjQ4Mi0xLjAwNCwyLjEzMi0wLjc5NiwyLjEzMi0wLjc5NmMwLjQyMywxLjA2OCwwLjE1NywxLjg1NywwLjA3NywyLjA1NGMwLjQ5NywwLjU0MiwwLjc5OCwxLjIzNSwwLjc5OCwyLjA4MiBjMCwyLjk4MS0xLjgxNCwzLjYzNy0zLjU0MywzLjgyOWMwLjI3OSwwLjI0LDAuNTI3LDAuNzEzLDAuNTI3LDEuNDM3YzAsMS4wMzctMC4wMSwxLjg3NC0wLjAxLDIuMTI5IGMwLDAuMjA4LDAuMTQsMC40NDksMC41MzQsMC4zNzNjMy4wODEtMS4wMjgsNS4zMDItMy45MzUsNS4zMDItNy4zNjJDMTUuNzYsMy45MDYsMTIuMjg1LDAuNDMxLDcuOTk5LDAuNDMxelwiPjwvcGF0aD48L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGlua3NsaXN0X191c2VybmFtZSB2aXN1YWxseWhpZGRlblwiPnlva3NlbC9lbW9qaS1icnVzaC88L3NwYW4+PC9hPlxuICAgIDwvbGk+XG5cbiAgICA8bGkgY2xhc3M9XCJsaW5rc2xpc3RfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3lva3NlbF9lblwiIGNsYXNzPVwibGlua3NsaXN0X19saW5rXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJsaW5rc2xpc3RfX2ljb24gbGlua3NsaXN0X19pY29uLS10d2l0dGVyXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPjxwYXRoIGQ9XCJNMTUuOTY5LDMuMDU4Yy0wLjU4NiwwLjI2LTEuMjE3LDAuNDM2LTEuODc4LDAuNTE1YzAuNjc1LTAuNDA1LDEuMTk0LTEuMDQ1LDEuNDM4LTEuODA5Yy0wLjYzMiwwLjM3NS0xLjMzMiwwLjY0Ny0yLjA3NiwwLjc5M2MtMC41OTYtMC42MzYtMS40NDYtMS4wMzMtMi4zODctMS4wMzNjLTEuODA2LDAtMy4yNywxLjQ2NC0zLjI3LDMuMjcgYzAsMC4yNTYsMC4wMjksMC41MDYsMC4wODUsMC43NDVDNS4xNjMsNS40MDQsMi43NTMsNC4xMDIsMS4xNCwyLjEyNEMwLjg1OSwyLjYwNywwLjY5OCwzLjE2OCwwLjY5OCwzLjc2NyBjMCwxLjEzNCwwLjU3NywyLjEzNSwxLjQ1NSwyLjcyMkMxLjYxNiw2LjQ3MiwxLjExMiw2LjMyNSwwLjY3MSw2LjA4YzAsMC4wMTQsMCwwLjAyNywwLDAuMDQxYzAsMS41ODQsMS4xMjcsMi45MDYsMi42MjMsMy4yMDYgQzMuMDIsOS40MDIsMi43MzEsOS40NDIsMi40MzMsOS40NDJjLTAuMjExLDAtMC40MTYtMC4wMjEtMC42MTUtMC4wNTljMC40MTYsMS4yOTksMS42MjQsMi4yNDUsMy4wNTUsMi4yNzEgYy0xLjExOSwwLjg3Ny0yLjUyOSwxLjQtNC4wNjEsMS40Yy0wLjI2NCwwLTAuNTI0LTAuMDE1LTAuNzgtMC4wNDZjMS40NDcsMC45MjgsMy4xNjYsMS40NjksNS4wMTMsMS40NjkgYzYuMDE1LDAsOS4zMDQtNC45ODMsOS4zMDQtOS4zMDRjMC0wLjE0Mi0wLjAwMy0wLjI4My0wLjAwOS0wLjQyM0MxNC45NzYsNC4yOSwxNS41MzEsMy43MTQsMTUuOTY5LDMuMDU4elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5rc2xpc3RfX3VzZXJuYW1lIHZpc3VhbGx5aGlkZGVuXCI+eW9rc2VsX2VuPC9zcGFuPjwvYT5cbiAgICA8L2xpPlxuICA8L3VsPlxuXG4gIDxkaXYgY2xhc3M9XCJkaXNjbGFpbWVyXCI+XG4gICAg8J+boCBEZWVwbHkgZXhwZXJpbWVudGFsLiBNYXkgYmUgc2xvdyBvciBub3Qgd29yayBvbiB5b3VyIGRldmljZSBvciBicm93c2VyLiBTb3JyeSDwn5KaXG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCJjb250cm9sIGNvbnRyb2wtLWdldFwiPkdldCBpbWFnZTwvYnV0dG9uPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzX19kb3dubG9hZHNcIj5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1kb3dubG9hZC1wbmdcIj5Eb3dubG9hZCBQTkc8L2E+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImNvbnRyb2wgY29udHJvbC0tZG93bmxvYWQtc3ZnXCI+RG93bmxvYWQgU1ZHPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGVHcm91cC5pbm5lckhUTUwgPSBgPHBhdGhcbiAgaWQ9XCJwYXRoLXtpZH1cIlxuICBkPVwiXCJcbiAgc3Ryb2tlLXdpZHRoPVwie2ZvbnRTaXplfVwiXG4gIGZpbGw9XCJub25lXCI+PC9wYXRoPlxuPHRleHRcbiAgZm9udC1zaXplPVwie2ZvbnRTaXplfVwiIGNsYXNzPVwidGV4dFwiPlxuICA8dGV4dFBhdGhcbiAgICBocmVmPVwiI3BhdGgte2lkfVwiXG4gICAgY2xhc3M9XCJ0ZXh0LXBhdGhcIlxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48L3RleHRQYXRoPlxuPC90ZXh0PlxuYDtcbiIsImltcG9ydCB7dGhlbWVzLCBiYXNlQWNjZW50c30gZnJvbSAnLi90aGVtZXMuanMnO1xuaW1wb3J0IHt0ZW1wbGF0ZX0gZnJvbSAnLi90bXBsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVTd2l0Y2hlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgdGhpcy5lbGVtID0gdGhpcy5zaGFkb3dSb290O1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoZW1lcy5sZW5ndGgpO1xuICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IG51bGw7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGNvbGxhcHNlZDogJ2NvbnRyb2xzLS1jb2xsYXBzZWQnLFxuICAgICAgY3VycmVudDogJ2NvbnRyb2wtLWN1cnJlbnQnXG4gICAgfVxuXG4gICAgdGhpcy5hZGRDb250cm9scygpO1xuXG4gICAgdGhpcy5vbkNvbnRyb2xDbGljayA9IHRoaXMub25Db250cm9sQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVRoZW1lID0gdGhpcy5jaGFuZ2VUaGVtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VQYW5lbCA9IHRoaXMuY2xvc2VQYW5lbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkQ29udHJvbHMoKSB7XG4gICAgdGhlbWVzLmZvckVhY2goKHRoZW1lLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGJnU3RyID0gdGhpcy5nZXRCYWNrZ3JvdW5kU3RyKHRoZW1lLmNvbG9ycyk7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gJ2NvbnRyb2wnO1xuICAgICAgbGV0IGNvbG9yID0gYmFzZUFjY2VudHMuYmFzZTtcbiAgICAgIGlmKHRoZW1lLmFjY2VudHMpIHtcbiAgICAgICAgY29sb3IgPSB0aGVtZS5hY2NlbnRzLmJhc2U7XG4gICAgICB9XG5cbiAgICAgIGlmKGluZGV4ID09PSB0aGlzLmN1cnJlbnRUaGVtZU51bSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyBjb250cm9sLS1jdXJyZW50JztcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udHJvbFN0ciA9IGA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiXG4gICAgICAgIHRpdGxlPVwiJHt0aGVtZS5uYW1lfVwiXG4gICAgICAgIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiXG4gICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZDogJHtiZ1N0cn07IGNvbG9yOiAke2NvbG9yfVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHloaWRkZW5cIj4ke3RoZW1lLm5hbWV9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5gO1xuXG4gICAgICB0aGlzLmNvbnRyb2xzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgY29udHJvbFN0cik7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbHMuY3VycmVudH1gKTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbnRyb2xDbGljayk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgdGhpcy5jaGFuZ2VUaGVtZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUGFuZWwpO1xuXG4gICAgLy8gU2V0IGN1cnJlbnQgdGhlbWUgdG8gcGFnZSAmIGNvbXBvbmVudFxuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2VUaGVtZSgpO1xuICB9XG5cbiAgb25Db250cm9sQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNscy5jb2xsYXBzZWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZU51bSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZVRoZW1lKCk7XG5cbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmN1cnJlbnQpO1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY3VycmVudCk7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSBldmVudC50YXJnZXQ7XG5cbiAgICAgIHRoaXMuY2xvc2VQYW5lbChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VQYW5lbChldmVudCkge1xuICAgIGlmKGV2ZW50LnRhcmdldCA9PT0gdGhpcyB8fCB0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG4gICAgdGhpcy5jb250cm9scy5jbGFzc0xpc3QuYWRkKHRoaXMuY2xzLmNvbGxhcHNlZCk7XG4gIH1cblxuICBkaXNwYXRjaENoYW5nZVRoZW1lKCkge1xuICAgIGNvbnN0IHRoZW1lID0gdGhlbWVzW3RoaXMuY3VycmVudFRoZW1lTnVtXTtcbiAgICBpZighdGhlbWUuYWNjZW50cykge1xuICAgICAgdGhlbWUuYWNjZW50cyA9IGJhc2VBY2NlbnRzO1xuICAgIH1cbiAgICB0aGlzLmNvbnRyb2xzLnN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5jb2xvcnNbMF07XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlLXRoZW1lJywge1xuICAgICAgZGV0YWlsOiB0aGVtZSxcbiAgICAgIGJ1YmJsZXM6IHRydWVcbiAgICB9KSk7XG4gIH1cblxuICBjaGFuZ2VUaGVtZShldmVudCkge1xuICAgIGlmKCFldmVudC5kZXRhaWwuYWNjZW50cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IobGV0IGtleSBpbiBldmVudC5kZXRhaWwuYWNjZW50cykge1xuICAgICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShgLS1jb2xvci0ke2tleX1gLCBldmVudC5kZXRhaWwuYWNjZW50c1trZXldKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBiYXNlQWNjZW50cyA9IHtcbiAgYmFzZTogJ3doaXRlJyxcbiAgYmFzZXRyYW5zcDogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcbiAgdGV4dDogJ2JsYWNrJyxcbiAgdGV4dHRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgaG92ZXI6ICdhcXVhJyxcbiAgZm9jdXM6ICdvcmFuZ2VyZWQnLFxuICBmb2N1c2hvdmVyOiAnZ29sZCdcbn07XG5cbmV4cG9ydCBjb25zdCB0aGVtZXMgPSBbXG4gIHtcbiAgICBuYW1lOiAnRmlyZWJyaWNrJyxcbiAgICBjb2xvcnM6IFsnZmlyZWJyaWNrJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbmRpYW5yZWQnLFxuICAgIGNvbG9yczogWydpbmRpYW5yZWQnXSxcbiAgICBhY2NlbnRzOiB7XG4gICAgICAuLi5iYXNlQWNjZW50cyxcbiAgICAgIGZvY3VzOiAncHVycGxlJyxcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR29sZCcsXG4gICAgY29sb3JzOiBbJ2dvbGQnXSxcbiAgICBhY2NlbnRzOiB7XG4gICAgICAuLi5iYXNlQWNjZW50cyxcbiAgICAgIGJhc2U6ICcjMDAwJyxcbiAgICAgIGJhc2V0cmFuc3A6ICdyZ2JhKDAsMCwwLC41KScsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxuICAgICAgZm9jdXNob3ZlcjogJ3llbGxvd2dyZWVuJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdraGFraScsXG4gICAgY29sb3JzOiBbJ2toYWtpJ10sXG4gICAgYWNjZW50czoge1xuICAgICAgLi4uYmFzZUFjY2VudHMsXG4gICAgICBiYXNlOiAnIzAwMCcsXG4gICAgICBiYXNldHJhbnNwOiAncmdiYSgwLDAsMCwuNSknLFxuICAgICAgdGV4dDogJyNGRkYnLFxuICAgICAgdGV4dHRyYW5zcDogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcbiAgICAgIGZvY3VzaG92ZXI6ICd5ZWxsb3dncmVlbidcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnWWVsbG93Z3JlZW4nLFxuICAgIGNvbG9yczogWyd5ZWxsb3dncmVlbiddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIGhvdmVyOiAnZG9kZ2VyYmx1ZScsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxuICAgICAgZm9jdXNob3ZlcjogJ3RlYWwnXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1R1cnF1b2lzZScsXG4gICAgY29sb3JzOiBbJ3R1cnF1b2lzZSddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIGhvdmVyOiAndGVhbCcsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1RlYWwnLFxuICAgIGNvbG9yczogWyd0ZWFsJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTa3libHVlJyxcbiAgICBjb2xvcnM6IFsnc2t5Ymx1ZSddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIGhvdmVyOiAndGVhbCcsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1N0ZWVsYmx1ZScsXG4gICAgY29sb3JzOiBbJ3N0ZWVsYmx1ZSddXG4gIH0se1xuICAgIG5hbWU6ICdNaWRuaWdodGJsdWUnLFxuICAgIGNvbG9yczogWydtaWRuaWdodGJsdWUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RhcmtzbGF0ZWJsdWUnLFxuICAgIGNvbG9yczogWydkYXJrc2xhdGVibHVlJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbmRpZ28nLFxuICAgIGNvbG9yczogWydpbmRpZ28nXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1B1cnBsZScsXG4gICAgY29sb3JzOiBbJ3B1cnBsZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnV2hpdGUnLFxuICAgIGNvbG9yczogWycjRkZGJ10sXG4gICAgYWNjZW50czoge1xuICAgICAgLi4uYmFzZUFjY2VudHMsXG4gICAgICBiYXNlOiAnIzAwMCcsXG4gICAgICBiYXNldHJhbnNwOiAncmdiYSgwLDAsMCwuNSknLFxuICAgICAgdGV4dDogJyNGRkYnLFxuICAgICAgdGV4dHRyYW5zcDogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHcmF5JyxcbiAgICBjb2xvcnM6IFsnIzMzMyddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQmxhY2snLFxuICAgIGNvbG9yczogWycjMDAwJ10sXG4gIH0sXG5dO1xuIiwiZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDRyZW07XG5cbiAgICAgIC0tY29sb3ItYmFzZTogd2hpdGU7XG4gICAgICAtLWNvbG9yLWJhc2V0cmFuc3A6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgIH1cblxuICAgIC52aXN1YWxseWhpZGRlbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYXNldHJhbnNwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2wge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB3aWR0aDogM3JlbTtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggY3VycmVudENvbG9yIGluc2V0LFxuICAgICAgICAwIDAgNHB4IDJweCByZ2JhKDAsMCwwLC4yNSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjQ1cztcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIG1hcmdpbjtcbiAgICB9XG5cbiAgICAuY29udHJvbDpub3QoY29udHJvbC0tY3VycmVudCkge1xuXG4gICAgfVxuXG4gICAgLmNvbnRyb2w6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY29udHJvbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IGN1cnJlbnRDb2xvciBpbnNldCxcbiAgICAgICAgMCAwIDAgNHB4IHZhcigtLWNvbG9yLWJhc2V0cmFuc3ApO1xuICAgIH1cblxuICAgIC5jb250cm9scy0tY29sbGFwc2VkIC5jb250cm9sIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTNyZW07XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggY3VycmVudENvbG9yIGluc2V0O1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50IHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtLWN1cnJlbnQ6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtLjI1cmVtO1xuICAgICAgcmlnaHQ6IC0uMjVyZW07XG4gICAgICBib3R0b206IC0uMjVyZW07XG4gICAgICBsZWZ0OiAtLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWNvbG9yLWJhc2UpO1xuICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiA0cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50OmZvY3VzOjphZnRlciB7XG4gICAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuICAgIC5jb250cm9scy0tY29sbGFwc2VkOmhvdmVyIC5jb250cm9sLS1jdXJyZW50IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1jb2xvci1iYXNlKSBpbnNldDtcbiAgICB9XG4gICAgLmNvbnRyb2xzLS1jb2xsYXBzZWQ6aG92ZXIgLmNvbnRyb2wtLWN1cnJlbnQ6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcbiAgICAgIH1cbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRyb2xzIGNvbnRyb2xzLS1jb2xsYXBzZWRcIj48L2Rpdj5cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9