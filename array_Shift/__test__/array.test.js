'user strict';

const array = require('../lib/array_shift');

describe('#array_shift.js', ()=>{
    test('To see if its not an array', () =>{
        const arrVerify = array.insert(4, 5);
        expect(Array.isArray(arrVerify)).toEqual(false);
    });
    test('Less than two values in arr', ()=>{
        const arrVerify = array.insert([1], 2);
        expect(arrVerify.length).toBeGreaterThan(1);
    });
    test('input is null', ()=>{
        const expected = [null];
        const inputCheck = array.insert([1,2,3,4], null);
        expect(inputCheck).toEqual(expect.arrayContaining(expected))
    });
});