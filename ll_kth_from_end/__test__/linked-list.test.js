'use strict';

const LinkedList = require('../linked-list');

const exampleList = new LinkedList();

for (let i = 0; i < 5; i++) {
  exampleList.insertAtHead(i);
}

describe('linked-list.js', () => {
  test('value is not a number', () => {
    const testValue = exampleList.reverseSearchList('b');
    expect(testValue).toEqual();
  });
  test('Success, its passed', () => {
    const testValue = exampleList.reverseSearchList(2);
    expect(testValue).toEqual(2);
  });
  test('Throw error if value is bigger than list', () => {
    const testValue = exampleList.reverseSearchList(10);
    expect(testValue).toEqual('Exception');
  });
});
