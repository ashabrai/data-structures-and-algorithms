'use strict';

const InsertNumber = require('../lib/insertions');

const insertNumber = new InsertNumber();
const testInsertNum = new InsertNumber();

for (let i = 0; i < 5; i++) {
  insertNumber.newNode(`value ${i}`);
}
describe('#insertions.js', () => {
  describe('append method', () => {
    test('adding number at end', () => {
      insertNumber.appendAtEnd('value new');
      expect(insertNumber.head.next.next.next.next.next.value).toEqual('value new');
    });
    test('To see if there is nothing in the list to add too', () => {
      try {
        testInsertNum.appendAtEnd('new value');
      } catch (err) {
        expect(err.message).toEqual('__ERROR__ The list is empty');
      }
    });
  });
});
