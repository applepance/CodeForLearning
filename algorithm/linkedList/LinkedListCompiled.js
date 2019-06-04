'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import LinkedListNode from './LinkedListNode';
var LinkedListNode = require('./LinkedListNode');

// 线性表

var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
  }

  _createClass(LinkedList, [{
    key: 'append',
    value: function append(value) {
      var newNode = new LinkedListNode(value);
      // 最后一个?
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      }
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }, {
    key: 'travel',
    value: function travel() {
      var nodes = [];
      var currentNode = this.head;
      while (currentNode) {
        nodes.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return nodes;
    }
  }]);

  return LinkedList;
}();

var linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(2);
linkedList.append(9);
console.log(linkedList.travel());
