import LinkedList from './Linked_list'
// const LinkedList = require('./Linked_list')

const partition = (head, x) => {
  let cur = head,
    next,
    preHead,
    preTail,
    afterHead,
    afterTail
  if (head === null) {
    return null
  }
  while (cur) {
    next = cur.next
    cur.next = null
    if (cur.data < x) {
      if (!preHead) {
        preHead = cur
        preTail = cur
      } else {
        preTail.next = cur
        preTail = cur
      }
    } else if (cur.data > x) {
      if (!afterHead) {
        afterHead = cur
        afterTail = cur
      } else {
        afterTail.next = cur
        afterTail = cur
      }
    }
    cur = next
  }
  if (preTail) {
    preTail.next = afterHead
    return preHead
  } else {
    return afterHead
  }
}

// 链表里有head属性
const linkedList = new LinkedList()
linkedList
  .append(1)
  .append(4)
  .append(3)
  .append(2)
  .append(5)
  .append(2)

console.log(linkedList.toString())

const newHead = partition(linkedList.head, 3)
let currentNode = newHead
while(currentNode){
  console.log(currentNode.data)
  currentNode = currentNode.next
}
