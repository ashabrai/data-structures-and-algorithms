'use strict';

const Node = require('./node');

module.exports = class insertNumber {
  constructor() {
    this.head = null;
  }

  newNode(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  appendAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return currentNode.next;
  }
};
