// virtual DOM

const REMOVE = 'REMOVE';
const TEXT = 'TEXT';
const ATTRS = 'ATTRS';
const REPLACE = 'REPLACE';

function diff(oldTree, newTree) {
  let patches = {}; // 序号， 在这个结点
  let index = 0; // 第几个结点的改变
  // 递归遍历
  walk(oldTree, newTree, index, patches);
  return patches;
}

function walk(oldNode, newNode, index, patches) {
  // props, children
  let current = []; //当前结点的补丁
  if (!newNode) {
    current.push({ type: REMOVE, index });
  } else if (isString(oldNode) && isString(newNode)) {
    if (oldNode !== newNode) {
      current.push({ type: TEXT, text: newNode})
    }
  } else if (oldNode.type === newNode.type) {
    let attrs = diffAttr(oldNode.props, newNode.props);
    if(Object.keys(attrs).length>0) {
      current.push({ type: ATTRS, attrs});
    }
    diffChildren(oldNode.children, newNode.children, patches);
  } else {
    current.push({type: REPLACE, newNode});
  }
  if(!oldNode) {
    current.push({type: REPLACE, newNode});
  }
  if (current.length) {
    patches[index] = current;
  }
}

function isString(node) {
  return typeof (node) === "string";
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {};
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key];
    }
  }
  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key];
    }
  }
  return patch;
}

let num = 0;
function diffChildren(oldChildren, newChildren, patches) {
  oldChildren.forEach((child, index) => {
    walk(child, newChildren[index], ++num, patches)
  });
}


export default diff;