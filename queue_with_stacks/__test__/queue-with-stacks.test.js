'use strict';

const Queue = require('../src/queue_with_stacks');

const sampleQueue = new Queue();


describe('#queue_with_stacks', () => {
  test('Testing enqueue', () => {
    sampleQueue.enqueue(1);
    sampleQueue.enqueue(2);
    sampleQueue.enqueue(3);
    sampleQueue.enqueue(4);
    expect(sampleQueue.stackA.storage).toEqual([1, 2, 3, 4]);
  });
  test('Testing dequeue', () => {
    sampleQueue.enqueue(1);
    sampleQueue.enqueue(2);
    sampleQueue.enqueue(3);
    sampleQueue.enqueue(4);
    expect(sampleQueue.dequeue()).toEqual(1);
  });
});
