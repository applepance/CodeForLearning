// 线性表
function LinkedNode(val){
  this.val = val;
  this.next = null;
}
function addTwoNumbers(l1, l2){

}


// 123
let a1 = new LinkedNode(1); // head结点
let a2 = new LinkedNode(2);
let a3 = new LinkedNode(3); // 尾结点
a1.next = a2;
a2.next = a3;

let b1 = new LinkedNode(9);
let b2 = new LinkedNode(6);
b1.next = b2;

console.log(addTwoNumbers(a1,b1))

let node = a1;//表头
let val = '';
while(node){
  val += +node.val;
  node = node.next;
}
console.log(val);