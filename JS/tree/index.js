function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var a = new TreeNode(9);
var b = new TreeNode(3);
var c = new TreeNode(20);
var d = new TreeNode(15);
var e = new TreeNode(7);

b.left = a;
b.right = c;
c.left = d;
c.right = e;

// 102 层序遍历
// 从根开始，一层层遍历，7结束
// 每个结点 把子节点记录下来
// 队列
function levelOrderTravel(root) {
  if (!root) return [];
  var items = [];
  var queue = [root, null]; // 队列，等待被了解情况的结点 出对。
  // shift push
  var levelNodes = []; // 每一层的结点
  while (queue.length > 0) {
    var t = queue.shift();
    // root
    if(t) {
      levelNodes.push(t.val);
      if(t.left) {
        queue.push(t.left);
      }
      if(t.right) {
        queue.push(t.right);
      }
    } else {
      // null 层次分隔符
      items.push(levelNodes);
      levelNodes = [];
      if(queue.length > 0) {
        queue.push(null);
      }
    }
  }
  return items;
}
console.log(levelOrderTravel(b));