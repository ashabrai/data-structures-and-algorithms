'use strict';

const solution = require('../lib/solution');
const LinkedList = require('../src/linked-list');

describe('#solution.js', () => {
  test('merge LLA until reaches null', () => {
    const lla = new LinkedList();
    lla.append(4);
    const llb = new LinkedList();

    solution.linkedListZip(lla, llb);
    expect(mergeList.next.next.next.next).toEqual(null);
  });
});
