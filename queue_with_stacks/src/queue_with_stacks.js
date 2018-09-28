'use strict';

const Stack = require('./stack');

module.exports = class QueueWithStacks {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    this.stackA.push(value);
  }

  dequeue() {
    let poppedValue = this.stackB.pop();
    if (poppedValue) {
      return poppedValue;
    }
    while (true) {
      poppedValue = this.stackA.pop();
      if (poppedValue) {
        this.stackB.push(poppedValue);
      } else {
        break;
      }
    }
    return this.stackB.pop();
  }
};