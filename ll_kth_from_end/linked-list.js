'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  reverseSearchList(value) {
    if (!this.head) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      counter += 1;
    }
    if (value > counter) {
      return 'Exception';
    }
    currentNode = this.head;
    const finalCounter = counter - value;
    for (let i = 0; i < finalCounter; i++) {
      if (i === (finalCounter)) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
};
