import LinkedListNode from './LinkedListNode'
// const LinkedListNode = require('./LinkedListNode')
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(data) {
    let node = new LinkedListNode(data)
    if (!this.head) {
      this.head = node
      this.tail = node
      return this
    }
    this.tail.next = node
    this.tail = node
    return this
  }
  toArray() {
    const nodes = []
    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }
  toString() {
    return this.toArray().map(node => node.data).toString()
  }
}

export default LinkedList
// module.exports = LinkedList