// lexical scope

// let x = 5;

// let name = 'Hema';

// function sum(){
//     let x = 5;
//     let y = 6;
//     return x + y;
// }

// function greet(){
//     let msg = 'Good Morning';
//     function sayHello(){
//         let p = 'Hello';
//         console.log(p + ' ' + name + ', ' + msg);
//     }
//     sayHello();
//     // console.log(msg + ' ' + name);
//     // console.log(z);
// }
// greet();

// let z = 'Hello';

// let y = 'Hii'

// console.log(z);

// temporary dead zone

let fname = 'Hema';

function greet() {
    let lname = 'Lohana';
    function sayHello(formate) {
        let start = 'Hello, ';
        console.log(formate + lname);
    }
    return sayHello;
}

let fun = greet();

fun('Hii, Sohan ');