// let js = "amazing";
// if (js == "amazing") alert("javascript is fun");
// console.log(40 + 8 + 23 - 10);

// console.log("jonas");
// console.log(23);

// let firstName = "Jonas";
// let first = "matilda";
// console.log(firstName);
// console.log(first);

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// console.log(myFirstJob);

// let country = "India";
// let continent = "Asia";
// let population = "145cr";
// console.log(country);
// console.log(continent);
// console.log(population);

// true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// // console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);

// let age = 30;
// age = 31; //reassigning or mutate value

// const birthyear = 1991;
// birthyear = 1990;

// const job;

// var job = "proogrammer";
// job = "teacher";

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "schmedtmann";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x*4 =100
// x++; // x = x+1
// x--;
// x--;
// console.log(x);

// //comparison operator
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

//challenge

// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// let popula = 13500000;
// console.log(popula / 2);
// let country = "india";
// let continent = "asia";
// let language = "hindi";

// popula++;
// console.log(popula);
// console.log(popula > 6);
// console.log(popula < 33);

// const description1 = `${country} is in ${continent} , and its ${popula} people speak ${language}. `;

// console.log(description1);

// let massMark = 78,
//   heightMark = 1.69;
// let massJohn = 92,
//   heightJohn = 1.95;
// let BMIMark = massMark / heightMark ** 2;
// let BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHeigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHeigherBMI);

// const firstName = "jonas";
// const job = "teacher";
// const birthyear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthyear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName} , a ${year - birthyear} years old ${job} !`;
// console.log(jonasNew);

// console.log(`just a regular string...`);

// console.log(
//   "string with \n\
// multiple \n\
// lines "
// );

// console.log(`string
// multiple
// lines..`);

// const age = 15;
// // const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("Sarah can start driving licence");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`sarah is too young. wait another ${yearsLeft} years :)`);
// }

// const birthyear = 2012;
// let century;
// if (birthyear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//type conversion and coercion
// type conversion => we manually convert to one type to another
// type coercion => when javascript automatically convert for us.

//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log("i am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// //only + operator not working in string, if we do that so it will be concatenated

// let n = "1" + 1; //11
// n = n - 1; //10
// console.log(n);

// console.log(2 + 3 + 4 + "5"); //"95"
// console.log("10" - "4" - "3" - 2 + "5"); //6

//truthy and falsy
// 5 falsy values: 0, '', undefined, null, NaN
// everthing else is truthy value

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
//conversion to boolean always implicit not explicit, or another words type corceion that javascript does automatically behind the seen

// const money = 100;
// if (money) {
//   console.log("dont spend it all");
// } else {
//   console.log("you should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is undefined");
// }

// == vs. ===
// const age = 18;
// if (age === 18) console.log("You just became an adult(strict)");

// if (age === 18) console.log("You just became an adult(loose)");

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);

// if (favourite === 23) {
// '23' == 23(loose)
//   console.log("Cool! 23 is an amazing number");
// } else if (favourite == 7) {
//   console.log("7 is a cool number");
// } else {
//   console.log("number is not 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");

//boolean logic:- and, or, not operators
// const hasDriversLicence = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false;
// console.log(hasDriversLicence || hasGoodVision || isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

//challenge
// let dolphins = (96 + 108 + 89) / 3;
// let koalas = (88 + 91 + 110) / 3;

// if (dolphins > koalas) {
//   console.log("Dolphins win the trophy");
// } else if (koalas > dolphins) {
//   console.log("koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

// const day = "thursday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code example");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("not a valid day!");
// }

// let day = "sunday";

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekends :D");
// } else {
//   console.log("Not a valid day!");
// }

//ternary operator
// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
//we can write ternary operator in template literal but not if else

const bill = 400;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`
);
