//Types of function:
// regular function
// Annonymous function 
// self-invoked function | immidiate invoked function

// const sum = function (x,y) {
//     console.log(x+y);
// }

// sum(4,6);

// let x = (function(){
//     return 6+7;
// }) ();

// console.log(x);

// console.log(x);

//arrow function 

// let sum = (x,y)=>{
//     return x+y;
// }

// let x = () =>{
//     return 6+7;
// }

// let x = () =>6+7;
// let x= p=>p+2;

// console.log(x(6));

let arr = [4,5,6];
//  console.log(arr.map(e=>e+2)); //[ 6, 7, 8 ]

// function callBack(e){
//     return e+2;
// }

// console.log(arr.map(callBack));

// console.log(arr.map(function(e){
//     return e+2;
// }))

// greet1();

// function greet1() {
//     console.log('Good evening');
// }

// greet1();

// greet2();

// let greet2 = () => console.log('Good evening');

// greet2();

//some advanced methods of function

const details = {
    name : "John",
    age: 30,
    country : "USA",
    getFullDetails : function (date,place){
        console.log(`Hii my name is  ${this.name}.I am ${this.age} years old and I am from ${this.country}`)
        console.log(`Time: ${date}`);
        console.log(`Place: ${place}`);
    }
}

// details.getFullDetails('03-12-2024','Bhavnagar');

const person1 = {
    name: "Rakesh",
    age:60,
    country:'India'
}

const person2 = {
    name: "Mukesh",
    age:65,
    country:'India'
}

const person3 = {
    name: "Falguni",
    age:55,
    country:'India'
}

// person1.getFullDetails('12-02-2023','Mumbai');

// console.log(details);

//call : used to call a function with another this object

// details.getFullDetails('12-02-2024','delhi');

// details.getFullDetails.call(person1,'12-02-2024','delhi');

//apply : used to call a function with another this object

// details.getFullDetails.apply(person2,['12-02-2024','delhi']);

//bind : used to bind another this object with a function

let showDetails = details.getFullDetails.bind(person3);

showDetails('12-02-20240','Mumbai');