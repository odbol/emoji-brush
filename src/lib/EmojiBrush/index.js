import {getStep, pointsToStr, getScale, getSymbolsList, fillSelect, fillTemplate} from './helpers.js';
import {templateMarkup, templateGroup} from './tmpl.js';
import themes from './themes.js';
import lineStyles from './lineStyles.js';
import colors from './colors.js';
import fontSizes from './fontSizes.js';

export default class EmojiBrush extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.appendChild(templateMarkup.content.cloneNode(true));

    this.paintArea = this.elem.getElementById('paint-area');
    this.targetGroup = this.elem.getElementById('target-group');
    this.clear = this.elem.getElementById('clear');
    this.selectSymbols = this.elem.getElementById('select-symbols');
    this.selectStyle = this.elem.getElementById('select-style');
    this.selectFontSize = this.elem.getElementById('select-font-size');
    this.scale = getScale(this.paintArea.getElementById('measure-rect'));
    this.selected = {};
    this.points = [];
    this.lastPoint = {};
    this.rotation = {
      max: 6
    };
    this.path = {
      counter: 0
    };

    // Fix filling path is mouse moves too fast
    this.pathFills = {};

    this.symbols = {
      str: themes[0],
      currentPos: 0,
    };
    this.symbols.list = getSymbolsList(this.symbols.str);

    this.lineStyle = Object.values(lineStyles)[0];
    this.fontSize = fontSizes[3];

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.changeSymbolsSet = this.changeSymbolsSet.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
    this.bodyKeyUp = this.bodyKeyUp.bind(this);
    this.changeTheme = this.changeTheme.bind(this);

    this.initSelect({
      elem: this.selectSymbols,
      list: themes,
      handler: this.changeSymbolsSet,
      currentValue: themes[Math.floor(Math.random() * themes.length)]
    });

    this.initSelect({
      elem: this.selectStyle,
      list: Object.values(lineStyles),
      handler: this.changeStyle,
      currentValue: 'mirrored-offset'
    });

    this.initSelect({
      elem: this.selectFontSize,
      list: fontSizes,
      handler: this.changeFontSize,
      currentValue: 32
    });
  }

  connectedCallback() {
    this.clear.addEventListener('click', () => {
      this.points = [];
      this.targetGroup.innerHTML = '';
    });

    this.paintArea.addEventListener('mousedown', this.onMouseDown);
    this.paintArea.addEventListener('mouseup', this.onMouseUp);

    document.body.addEventListener('keyup', this.bodyKeyUp);

    document.addEventListener('change-theme', this.changeTheme);
  }

  disconnectedCallback() {
    //
  }

  initSelect({elem, list, currentValue, handler}) {
    fillSelect({
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
    this.lastPoint = start;
    this.points = [];

    let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.id = `group-${this.path.counter}`;

    const content = fillTemplate({
      tmpl: templateGroup.innerHTML,
      data: {
        id: this.path.counter,
        fontSize: `${this.fontSize}px`
      }});
    group.insertAdjacentHTML('beforeEnd',content);
    this.targetGroup.append(group);

    let path = group.querySelector('path');
    path.classList.add('current-path');

    this.path = {
      ...this.path,
      group,
      elem: path,
      start,
      counter: ++this.path.counter
    };


    this.text = group.querySelector('text');
    this.textPath = group.querySelector('textPath');

    if(this.lineStyle.props.mirrored) {
      this.text.setAttribute('dy', '-.12em');

      this.textMirrored = this.text.cloneNode(true);
      this.textMirrored.setAttribute('rotate', 180);

      if(this.lineStyle.props.scattered) {
       this.textMirrored.setAttribute('transform', `translate(0,${this.fontSize})`);
      }

      this.textPathMirrored = this.textMirrored.querySelector('textPath');

      if(this.lineStyle.props.startOffset) {
        const halfPatternLength = Math.round(this.symbols.list.length / 2);
        const offset = halfPatternLength * this.fontSize;
        this.textPathMirrored.setAttribute('startOffset', `-${offset}px`);
      }
      if(this.lineStyle.props.startOffsetBetween) {
        this.text.setAttribute('dy', '0');
        const halfPatternLength = Math.round(this.symbols.list.length / 2);
        const offset = (halfPatternLength + .5) * this.fontSize;
        this.textPathMirrored.setAttribute('startOffset', `-${offset}px`);
      }

      // if(this.lineStyle.props.waves) {
      //   this.text.setAttribute('dy', `-${this.fontSize}`);
      //   this.textMirrored.setAttribute('dy', `${this.fontSize}`);
      // }

      group.append(this.textMirrored);
    }

    if(this.lineStyle.props.rotated) {
      this.rotation = {
        ...this.rotation,
        stepAngle: 360 / this.rotation.max,
        counter: 0
      };
    }

    this.paintArea.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(event) {
    let coords = this.getMouseOffset(event);
    let {start} = this.path;

    const moveSize = getStep({
      from: this.lastPoint,
      to: coords
    });

    if(moveSize > 25) {
      this.points.push(coords);
      this.updatePath(coords);
      this.updateText();
    }

    this.clickedPath = null;
  }

  onMouseUp(event) {
    if(this.clickedPath) {
      this.mouseClickPath();

      // Remove latest path
      this.path.group.remove();
      this.paintArea.removeEventListener('mousemove', this.onMouseMove);
      return;
    }

    // Or continue with latest path
    let {x, y} = this.getMouseOffset(event);
    let {start} = this.path;
    this.path.elem.classList.remove('current-path');

    this.updatePath({x, y});
    this.updateText();

    this.paintArea.removeEventListener('mousemove', this.onMouseMove);
  }

  bodyKeyUp(event) {
    if(event.keyCode === 8 || event.keyCode === 46) {
      this.removePaths();
    }
  }

  mouseClickPath() {
    const pathId = this.clickedPath.id;
      this.clickedPath.classList.toggle('highlight');

      if(this.clickedPath.classList.contains('highlight')) {
        this.selected[pathId] = this.clickedPath.closest('g');
      }
      else {
        delete this.selected[pathId];
    }

    this.clickedPath = null;
  }

  updatePath({x, y}) {
    let {start} = this.path;
    const points = pointsToStr(this.points);

    this.path.elem.setAttribute(
      'd',
      `M${start.x},${start.y} ${points} ${x},${y}`);
  }

  updateText() {
    const symbol = this.getSymbol();
    this.textPath.insertAdjacentHTML('beforeEnd', symbol);

    if(this.textPathMirrored) {
      this.textPathMirrored.insertAdjacentHTML('beforeEnd', symbol);
    }
  }

  fillRestOfPath(params = {}) {
    const {path, textPath, textPathDouble} = params;
    const pathToAdjust = path || this.path.elem;
    const textPathToAdjust = textPath || this.textPath;
    const textPathDoubleToAdjust = textPath || this.textPath;

    const pathFillsMax = pathToAdjust.getTotalLength() / this.fontSize + this.path.offset;
    const tSpansLength = textPathToAdjust.children.length;
    let missedSymbols = pathFillsMax - tSpansLength;

    if(!missedSymbols) {
      return;
    }
    for(let i = 0; i < missedSymbols; i++) {
      this.updateText(params);
    }
  }


  getSymbol() {
    let symbol = this.symbols.list[this.symbols.currentPos];
    this.symbols.currentPos++;

    if(this.symbols.currentPos === this.symbols.list.length) {
      this.symbols.currentPos = 0;
    }

    if(this.lineStyle.props.rotated) {
      const angle = this.rotation.stepAngle * this.rotation.counter;

      this.rotation.counter++;

      if(this.lineStyle.props.scattered) {
        this.rotation.counter = Math.floor(Math.random() * this.rotation.max);
      }

      if(this.rotation.counter >= this.rotation.max) {
        this.rotation.counter = 0;
      }
      symbol = `<tspan rotate="${angle}">${symbol}</tspan>`
    }

    return symbol;//&#xFE0F;
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

  changeSymbolsSet() {
    this.symbols.str = this.selectSymbols.value;
    this.symbols.list = getSymbolsList(this.symbols.str);
    this.symbols.currentPos = 0;
  }

  changeStyle() {
    this.lineStyle = lineStyles[this.selectStyle.value];
  }

  changeFontSize() {
    this.fontSize = this.selectFontSize.value;
    this.style.setProperty('--font-size', `${this.fontSize}px`);

    // Add later; Need fill tail of path if font too small
    // this.changeFontSizeOnSelected();
  }

  changeFontSizeOnSelected() {
    if(Object.values(this.selected).length > 0) {
      for(let key in this.selected) {
        const texts = this.selected[key].querySelectorAll('text');
        const path = this.selected[key].querySelector('path');
        path.style.strokeWidth = this.fontSize;

        for(let text of texts) {
          text.style.fontSize = `${this.fontSize}px`;
        }
      }
    }
  }

  changeTheme(event) {
    if(!event.detail.accents) {
      return;
    }

    for(let key in event.detail.accents) {
      this.style.setProperty(`--color-${key}`, event.detail.accents[key]);
    }
  }

  getMouseOffset(event) {
    let {left, top} = this.paintArea.getBoundingClientRect();
    let scale = this.scale;

    return {
      x: scale * (event.clientX - left),
      y: scale * (event.clientY - top)
    };
  }
}