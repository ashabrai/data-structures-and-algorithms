'user strict';

const insertShift = module.exports = {};

insertShift.insert= function (arr, input){
    if (!Array.isArray(arr)) {
        return 'error';
    }
    let middleIndex = arr.length/2;
    arr.splice(middleIndex,0,input);
    return arr;
};