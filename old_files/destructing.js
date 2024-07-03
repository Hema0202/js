// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     city: 'New York'
// }

// let firstName = person.firstName;
// let lastName = person.lastName;

// let { firstName, lastName, age, city } = person;

// console.log(firstName); // John
// console.log(age); // 25

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     city: 'New York',
//     street: 'ABS street',
//     phoneNumber: '1234567890',
//     isMarried: false,
//     landMark: 'Near CG Road'
// }

// let {firstName, lastName, age, phoneNumber, isMarried, ...address} = person;

// // console.log(isMarried); // false
// console.log(address); // { city: 'New York', street: 'ABS street', landMark: 'Near CG Road' }

// let {firstName, lastName, age, isMarried} = person;

// let nums = [1, 4, 6, 7, 8, 9];

// let [a, b, ...arr] = nums;

// console.log(arr);

// let arr1 = [4, 7, 8, 5], arr2 = [4, 7, 23, 7];
// let a = 5, b = 7, c = 9;

// let arr = [a, ...arr1, b, ...arr2, c];

// console.log(arr);