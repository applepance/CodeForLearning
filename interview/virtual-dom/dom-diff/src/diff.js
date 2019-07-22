// virtual DOM
function diff(oldTree, newTree) {
  let patches = {};
  let index = 0; // 第几个结点的改变
  // 递归遍历
  walk(oldTree, newTree, index, patches);
  return patches;
}

function walk(oldNode, newNode, index, patches) {
  // props, children
  let current = []; // 补丁的数组
  if (!newNode) {
    current.push({ type: 'REMOVE', index });
  } else if (isString(oldNode) && isString(newNode)) {
    // 文本结点
    if (oldNode !== newNode) {
      current.push({ type: 'TEXT', text: newNode });
    }
  } else if (oldNode.type === newNode.type) {
    // 属性、子节点是否修改
    let attr = diffAttr(oldNode.props, newNode.props)
    if (Object.keys(attr).length > 0) {
      current.push({ type: 'ATTR', attr });
    }
    // walk
    diffChildren(oldNode.children, newNode.children, patches);
  } else {
    // 结点 type不一样
    current.push({ type: 'REPLACE', newNode });
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

function doPatch(node, patches) {
  
}

export default diff;