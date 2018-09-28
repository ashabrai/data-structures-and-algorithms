'use strict';

const LinkedList = require('../linked-list');

const exampleList = new LinkedList();
const emptyList = new LinkedList();

for (let i = 0; i < 5; i++) {
  exampleList.insertAtHead(i);
}

describe('linked-list.js', () => {
  test('Success, its passed', () => {
    const testValue = exampleList.reverseSearchList(2);
    expect(testValue).toEqual(3);
  });
  test('If list is empty', () => {
    try {
      emptyList.reverseSearchList('value new');
    } catch (error) {
      expect(error.message).toEqual('_ERROR_ list empty');
    }
  });
});
