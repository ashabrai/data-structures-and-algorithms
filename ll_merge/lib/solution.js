'use strict';

const Node = require('../src/node');

const solution = module.exports = {};

solution.linkedListZip = (lla, llb) => {
  let currentNodeA = lla.head;
  let currentNodeB = llb.head;

  while (lla.next !== null && llb.next !== null) {
    if (lla.next === null && llb.next !== null) {
      const hA = currentNodeA.next;
      const hB = currentNodeB.next;
      currentNodeA.next = currentNodeB;
      currentNodeB.next = hA;
      hA.next = hB;
      return currentNodeA;
    }
    if (lla.next === null && llb.next !== null) {
      let hA = currentNodeA.next;
      const hB = currentNodeB.next;
      currentNodeA.next = currentNodeB;
      currentNodeB.next = hA;
      currentNodeA = hA;
      currentNodeB = hB;

      hA = currentNodeA.next;
      currentNodeA.next = currentNodeB;
      currentNodeB.next = hA;
      return currentNodeA;
    }

    if (lla.next === null && llb.next === null) {
      const hA = currentNodeA.next;
      const hB = currentNodeB.next;
      currentNodeA.next = currentNodeB;
      currentNodeB.next = hA;
      hA.next = hB;
      return null;
    }
  }
  return undefined;
};
