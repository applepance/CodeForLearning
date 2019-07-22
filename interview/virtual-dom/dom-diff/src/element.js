// HTML DOM js 对象化
/* <div class="div">
  <p>sssss</p>
</div> */
class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

// 返回虚拟DOM
function createElement(type, props, children) {
  return new Element(type, props, children);
}

function render(domObj) {
  // 创建属性
  let el = document.createElement(domObj.type);
  // 设置属性
  for (let key in domObj.props) {
    // 各种属性
    setAttr(el, key, domObj.props[key]);
  }
  domObj.children.forEach(child => {
    child = (child instanceof Element) ? render(child) : document.createTextNode(child);
    el.appendChild(child);
  });
  return el;
}

function setAttr(node, key, value) {
  switch (key) {
    case 'value':
      if (node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea') {
        node.value = value;
      }
      break;
    case 'style':
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(key, value);
      break;
  }
}

function renderDOM(el, target) {
  target.appendChild(el);
}

export {
  Element,
  createElement,
  render,
  renderDOM,
  setAttr
}