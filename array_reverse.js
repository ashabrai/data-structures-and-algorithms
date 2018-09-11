'use strict'

function reverseArray(arr) {
    var newArray = [];

    for(var i = arr.length - 1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}

// this was my original function, but notice it return the values that were set to arr in reverse like '4321' but the
// top function listed above return the array correctly like [4,3,2,1].

// function reverseArray(arr){
//     var newArray =[];
//     for(var i = arr.length-1 ; i>= 0; i --){
//         newArray = newArray + arr[i];
//     }
//     return newArray;
// };