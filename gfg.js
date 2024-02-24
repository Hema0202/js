// ########################################  New que  ##########################################
// Given a string S, write a program to count the occurrence of Lowercase characters, Uppercase characters, Special characters and Numeric values in the string.
// Note: There are no white spaces in the string.

// Example 1:

// Input:
// S = "#GeeKs01fOr@gEEks07"
// Output:
// 5
// 8
// 4
// 2
// Explanation: There are 5 uppercase characters,
// 8 lowercase characters, 4 numeric characters
// and 2 special characters.

// let str= "*GeEkS4GeEkS*"
// function count(str) {
//   let uppercaseCount = 0;
//   let lowercaseCount = 0;
//   let numericCount = 0;
//   let specialCount = 0;

//   for (let i = 0; i < s.length; i++) {
//     let char = s.charAt(i);

//     if (char >= "A" && char <= "Z") {
//       uppercaseCount++;
//     } else if (char >= "a" && char <= "z") {
//       lowercaseCount++;
//     } else if (char >= "0" && char <= "9") {
//       numericCount++;
//     } else {
//       specialCount++;
//     }
//   }

//   console.log(uppercaseCount);
//   console.log(lowercaseCount);
//   console.log(numericCount);
//   console.log(specialCount);
// }
// count("*GeEkS4GeEkS*");

// ########################################  New que  ##########################################
// Given a string. Count the number of Camel Case characters in it.

// Example 1:

// Input:
// S = "ckjkUUYII"
// Output: 5
// Explanation: Camel Case characters present:
// U, U, Y, I and I.

// class Solution{
//     countCamelCase(s){
//         //code here
//         let upperCaseCount=0;
//         for(let i=0;i<s.length;i++){
//             let char = s.charAt(i);
//             if(char>='A' && char<='Z'){
//                 upperCaseCount++;
//             }
//         }
//         return upperCaseCount;

//     }
// }

// ########################################  New que  ##########################################

// Given the menu of the two restaurants. There may be a chance of fight between them if any one of them have any item in common and you surely don't want that to happen. Each of the menu has 5 items (strings) in them. So, your task is to find out if there is any need to change the menu or let them be happy with their respective menu.

// Example 1:

// Input:
// cake pastry fish candy meat
// burger ham fish cake sauce
// Output:
// CHANGE
// Explanation:
// "fish" is common in both the menu.

// function sameWord(arr, arr1){
// for(let i=0;i<arr.length;i++){

// }
// }

// ########################################  New que  ##########################################

// find prime number less then given number
// 2 is only even prime number
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// function lesserPrimeNo(n) {
//      for(let i=n-1;i>0;i--){
//           if(isPrime(i)){
//            return i;
//           }
//      }
// }
// console.log(lesserPrimeNo(13))
function primeInRange(number){
  let count=0;
   for(let i=2;i<=number;i++){
    if(isPrime(i)){
      console.log(i);
      count++
    }
   }
   console.log(count)
}
primeInRange(100);

// ########################################  New que  ##########################################

// given a string consisting of a or b only
// print the absolute differnce the count of frequencies of a and b
// math.abs

// let str = "abbabaabbaaaaaaa";
// let arr = str.toString();
// function frqDiff(arr) {
//   let container = new Map();
//   let i;
//   for (let i = 0; i < arr.length; i++) {
//     if (container.has(arr[i])) {
//       let oldFrq = container.get(arr[i]);
//       let newFrq = oldFrq + 1;
//       container.set(arr[i], newFrq);
//     } else {
//       container.set(arr[i], 1);
//     }
//   }

//   let countA = container.get("a");
//   let countB = container.get("b");
//   let diff = Math.abs(countA - countB);
//   return diff;
// }
// console.log(frqDiff(arr));




// ########################################  New que  ##########################################




