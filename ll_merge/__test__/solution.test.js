'use strict';

const LinkedList = require('../lib/solution');

const mergeOne = new LinkedList();
const mergeTwo = new LinkedList();
const mergeThree = new LinkedList();


describe('#solution.js', () =>{
    test('merge LLA until reaches null', ()=>{
      const mergeList = mergeOne.linkedListZip(mergeOne, mergeTwo);
      expect(mergeList.next.next.next.next).toEqual(null);
    })
})
})