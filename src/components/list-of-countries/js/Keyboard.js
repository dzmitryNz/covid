import create from '../../create';
import en from './en';
import Properties from "../../properties";

const rowsOrder = [
    ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'Backspace'],
    ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'ArrowLeft', 'ArrowRight'],
    ['Hide', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Space']
];

const main = document.querySelector(".grid-wrapper");
const search = document.querySelector(".search");

class Key {
    constructor({ small, shift, code }) {
        this.code = code;
        this.small = small;
        this.shift = shift;
        this.icon = null;
        this.isFnKey = Boolean(code.match(/Hide|Speach|Arrow|Backspace|Space/));

        if (shift && shift.match(/[^a-zA-Z]/)) {
            this.sub = create('div', 'sub', this.shift);
        } else {
            this.sub = create('div', 'sub', '')
        }
        this.letter = create('div', 'letter', this.small);
        if (code.match(/Hide/)) this.icon = create('i', 'material-icons', 'keyboard_hide');
        if (code.match(/Speach/)) this.icon = create('i', 'material-icons', 'keyboard_voice');
        if (code.match(/Backspace/)) this.icon = create('i', 'material-icons', 'backspace');
        if (code.match(/Space/)) this.icon = create('i', 'material-icons', 'space_bar');
        if (code.match(/ArrowLeft/)) this.icon = create('i', 'material-icons', 'keyboard_arrow_left');
        if (code.match(/ArrowRight/)) this.icon = create('i', 'material-icons', 'keyboard_arrow_right');
        this.div = create('div', `keyboard__key`, [this.sub, this.letter, this.icon], null, ['code', this.code],
            this.isFnKey ? ['fn', 'true'] : ['fn', 'false']);
    }
}

class Keyboard {
    constructor(rowsOrder) {
        this.rowsOrder = rowsOrder;
        this.keysPressed = {};
    }

    init() {
        this.output = create('textarea', 'search-input', null, search, ['placeholder', 'Search for a Country'], ['spellcheck', false], ['autocorrect', 'off']);
        this.wrapper = create('div', 'keyboard-wrapper', null, main);
        this.container = create('div', 'keyboard', null, this.wrapper, ['language', "en"]);
        document.body.prepend(main);
        return this;
    }

    generateLayout() {
        this.keyButtons = [];
        this.rowsOrder.forEach((row, i) => {
            const rowElement = create('div', 'keyboard__row', null, this.container, ['row', i + 1]);
            rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
            row.forEach((code) => {
                const keyObj = en.find((key) => key.code === code);
                if (keyObj) {
                    const keyButton = new Key(keyObj);
                    this.keyButtons.push(keyButton);
                    rowElement.appendChild(keyButton.div);
                }
            });
        });

        document.addEventListener('keydown', this.handleEvent);
        document.addEventListener('keyup', this.handleEvent);
        this.container.onmousedown = this.preHandleEvent;
        this.container.onmouseup = this.preHandleEvent;
    }

    hideKeyboardEvent = (e) => {
        let hideKeyboard = this.wrapper.classList.length === 1 ? true : false;
        if (hideKeyboard) {
            this.wrapper.classList.add("keyboard--hidden");
        } else {
            this.wrapper.classList.remove("keyboard--hidden");
        }

    }

    preHandleEvent = (e) => {
        e.stopPropagation();
        const keyDiv = e.target.closest('.keyboard__key');
        if (!keyDiv) return;
        const { dataset: { code } } = keyDiv;
        keyDiv.addEventListener('mouseleave', this.resetButtonState);
        this.handleEvent({ code, type: e.type });
    };

    resetButtonState = ({ target: { dataset: { code } } }) => {
        const keyObj = this.keyButtons.find((key) => key.code === code);
        keyObj.div.classList.remove('active');
        keyObj.div.removeEventListener('mouseleave', this.resetButtonState);
    }

    handleEvent = (e) => {
        if (e.stopPropagation) e.stopPropagation();
        const { code, type } = e;
        const keyObj = this.keyButtons.find((key) => key.code === code);
        if (!keyObj) return;
        this.output.focus();
        // On key pressed
        if (type.match(/keydown|mousedown/)) {
            if (type.match(/key/)) e.preventDefault();
            if (code.match(/Hide/)) this.hideKeyboardEvent();
            this.printToOutput(keyObj, keyObj.small);
        }
        keyObj.div.classList.add('active');
        // remove 'active' classes
        if (!code.match(/Speach/)) {
            keyObj.div.classList.remove('active');
        }
    }


    printToOutput(keyObj, symbol) {
        let cursorPos = this.output.selectionStart;
        const left = this.output.value.slice(0, cursorPos);
        const right = this.output.value.slice(cursorPos);

        const fnButtonsHandler = {
            Tab: () => {
                this.output.value = `${left}\t${right}`;
                cursorPos += 1;
            },
            ArrowLeft: () => {
                cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
            },
            ArrowRight: () => {
                cursorPos += 1;
            },
            Backspace: () => {
                this.output.value = `${left.slice(0, -1)}${right}`;
                cursorPos -= 1;
            },
            Hide: () => {
                this.output.value = `${left}${right}`;
            },
            Speach: () => {
                this.output.value = `${left}${right}`;
            },
            Space: () => {
                this.output.value = `${left} ${right}`;
                cursorPos += 1;
            }
        };

        if (fnButtonsHandler[keyObj.code]) { fnButtonsHandler[keyObj.code](); } else if (!keyObj.isFnKey) {
            cursorPos += 1;
            this.output.value = `${left}${symbol || ''}${right}`;
        }
        this.output.setSelectionRange(cursorPos, cursorPos);

    }
}

new Keyboard(rowsOrder).init().generateLayout();