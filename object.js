// const obj = new Object();

// let obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// access
// console.log(obj.name); // John
// console.log(obj['name']); // John

// change
// obj.age = 25;
// console.log(obj.age); // 25
// obj['age'] = 42;
// console.log(obj.age); // 42

// add
// obj.country = 'USA';
// console.log(obj.country); // USA

// delete
// delete obj.city;
// console.log(obj.city) // undefined

// console.log(obj);

// const person = {
//     firstName: 'Tom',
//     lastName: 'Cruise',
// }

// Object.freeze(person);

// person.firstName = 'Jerry';

// console.log(person);

let person = {
    firstName: 'Tom',
    lastName: 'Cruise',
}

Object.freeze(person);

// let temp = person;

// temp.firstName = 'Jerry';
// console.log(temp);

let temp = JSON.stringify(person);

// console.log(temp); // {"firstName":"Tom","lastName":"Cruise"} in string formate

let person2 = JSON.parse(temp);

console.log(person2); // { firstName: 'Tom', lastName: 'Cruise' } in object formate

person2.firstName = 'Jerry';

console.log(person2);