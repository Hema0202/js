// let arr = new Array(10);

// for(let i=0;i<10;i++) arr[i] = 0;

// console.log(arr);

// fill :- Used to fill all the elements of array with a fixed value

// arr.fill(0);

// console.log(arr);

// let arr = new Array(10).fill(0);

// console.log(arr);

// let arr = [3, 6, 2, 3, 7, 4, 2, 4, 5, 2, 6, 8];

// let res1 = arr.indexOf(2);

// console.log(res1); // 2

// let res2 = arr.indexOf(2, 4);

// console.log(res2);

// let res3 = arr.lastIndexOf(2);

// console.log(res3);

// higher order array methods

// let arr = [1,2,3,4];

// map:- used to interate every element of array and returns an new modified array with same size;

// function increaseBy2(element, index, arr) {
//     return element+2;
// }

// let newArr = arr.map(increaseBy2);

// function map1(arr, fun) {
//     let newArray = [];
//     for (let i=0; i < arr.length ; i++) {
//         let newElement = fun(arr[i]);
//         newArray.push(newElement);
//     }
//     return newArray;
// }

// let newArr = map1(arr, increaseBy2);

// console.log(newArr);

// forEach:- Used to iterate every element of array

// function print(element, index, arr) {
//     console.log(`${index} : ${element}`);
// }

// arr.forEach(print);

// filter:- filter out elements that satisfies a specific condition

// function checkIsEven(element, index, arr) {
//     if(element%2 === 0) return true;
//     else return false;
// }

// function checkIsEvenIndex(element, index, arr) {
//     if(index%2 === 0) return true;
//     else return false;
// }

// let newArr = arr.filter(checkIsEvenIndex);

// console.log(newArr);

// reduce:- Used to iterate every element of array and performs an specific operation.
// The result is stored in accumulator 
// and we can perform the next operation on the bassis of previous accumulator value
// if initial value of accumulator is not passed it assumes 0th index of array as initial value
// and start iterating from 1st index

// function sum(accumulator, element, index, arr) {
//     return accumulator + element;
// }

// function addEvenSubOdd(accumulator, element, index, arr) {
//     if(index % 2 === 0) return accumulator + element;
//     else return accumulator - element;
// }

// let initialValue = 50;

// let result = arr.reduce(addEvenSubOdd, initialValue);

// console.log(result);

// sort:- Used to sort the array

// let arr = [5, 1, 3, 7, 23, 2];

// function sortFunc(a, b) {
//     return a-b; // increasing
//     // return b-a; // decreasing
// }

// arr.sort(sortFunc);

// console.log(arr);

// arr.sort((a,b)=>a-b);