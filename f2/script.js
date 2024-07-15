"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;

// function logger() {
//   console.log("My name is Hema");
// }

//calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//function declaration
// function calcAge1(birthyear) {
//   const age = 2037 - birthyear;
//   return age;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

//function expression
// const calcAge2 = function (birthyear) {
//   return 2037 - birthyear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//Arrow function:-return actually happens implicitly automatically return without  write the return keyword and do not require curly braces
// const calcAge3 = (birthyear) => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

//for position up use shortcut alt + up arrow
// const calcAge = function (birthyear) {
//   return 2037 - birthyear;
// };

// const yearsUntilRetirement = function (birthyear, firstName) {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

//challenge
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`koalas win (${avgKoalas}) vs. (${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schedtmann", 2037 - 1991, friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthyear) {
//   return 2037 - birthyear;
// };

// const year = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[year.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(year[0]),
//   calcAge(year[1]),
//   calcAge(year[year.length - 1]),
// ];
// console.log(ages);

//Array methods
//Add elements
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

//Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// console.log(friends.includes("Steven"));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called steven");
// }

// function calcTip(bills) {
//   return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// }

// let bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "what do u want to know about jonas? choose between firstName, lastName, age, job and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     'Wrong request! choose between firstName, lastName, age, job and friends'
//   );
// }

// jonas.location = "Indian";
// jonas["twitter"] = "@jonasschemdtmann";
// console.log(jonas);

//challenge
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schedtmann",
//   birthyear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicence: true,

// calcAge: function (birthyear) {
//   return 2037 - birthyear;
// },

// calcAge: function () {
//   console.log(this);
//   return 2037 - this.birthyear;
// },

//   calcAge: function () {
//     this.age = 2037 - this.birthyear;
//     return this.age;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas["calcAge"](1991));

//challenge
// console.log(
//   `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${
//     jonas.hasDriversLicence ? "a" : "no"
//   } drivers's license`
// );

//challenge
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height:1.69,
//   calcBMI: function(){
//       let bmi = this.mass / (this.height * this.height);
//       return bmi;
//   }
// }

// const john = {
//   fullName : "John Smith",
//   mass: 52,
//   height: 1,
//   calcBMI: function(){
//       let bmi = this.mass / (this.height * this.height);
//       return bmi;
//   }
// }

// if(mark.calcBMI() > john.calcBMI()){
//   console.log(`Mark Miller BMI ${mark.calcBMI()} is higher than John Smith ${john.calcBMI()}`);
// } else{
//    console.log(`John Smith ${john.calcBMI()} is higher than Mark Miller BMI ${mark.calcBMI()}`);
// }

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");

//for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const jonas = [
//   "Jonas",
//   "Schemedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])

// for (let i = 0; i < jonas.length; i++) {
//   //Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);

//Filling types array
//   types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// types[0] = "String";
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

//continue and break
// console.log("---ONLY SRINGS---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//   "Jonas",
//   "Schemedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

//4,3,...,0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice == 6) console.log("Loop is about to end..");
// }

//challenge
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
