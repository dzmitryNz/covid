/*eslint no-useless-rename: ["error", { ignoreExport: true }]*/

/** *
 * @param {String} el
 * @param {String} classNames
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 * @param {...Array} dataAttr
 */
 
export default function create(el, classNames, child, parent, ...dataAttr) {
  let element = null;
  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error('Unable to create HTMLelement! Give a proper tag name');
  }

  if (classNames) { element.classList.add(...classNames.split(' ')); }
  if (child && Array.isArray(child)) {
    child.forEach((childElement) => childElement && element.appendChild(childElement));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerText = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  // <span id="" data-code=""></span> el.dataset.code = ""  disabled
  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '');
      }
      if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck|contenteditable/)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }

  return element;
}
