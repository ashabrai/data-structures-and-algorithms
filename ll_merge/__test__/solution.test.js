'use strict';

const LinkedList = require('../src/linkedList');
const Node = require('../src/node');
const linkedListZip = require('../lib/solution');




describe('#solution.js', () =>{
    test('merge LLA until reaches null', ()=>{
      const mergeOne = new LinkedList();
      const mergeTwo = new LinkedList();

      const one = new Node(1);
      const three = new Node(3);
      const five = new Node(5);

      const two = new Node(2);
      const four = new Node(4);
      const six = new Node(6);

      mergeOne.head = one;
      mergeOne.head.next = three;
      mergeOne.head.next.next = five;

      mergeTwo.head = two;
      mergeTwo.head.next = four;
      mergeTwo.head.next.next = six;

      const mergeList = linkedListZip(mergeOne, mergeTwo);
      expect(mergeList).toEqual(one,two,three,four,five,six);
    })
});
