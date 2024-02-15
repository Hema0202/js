// function valueEqualToIndex(arr,n){
//     //code here
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==i){
//             console.log(arr[i]+" ");
//         }
//     }
// }
// let arr=[1,2,3,4,5]
// let res=valueEqualToIndex(arr,5)
// console.log(res);

// function valueEqualToIndex(arr) {
//     return arr.filter((value, index) => value === index);
// }

// let arr = [1, 2, 3, 4, 5];
// let res = valueEqualToIndex(arr);
// console.log(res);

// let arr=[1,2,3,4,5,6];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }

// for(let i=0;i<arr.length;i++){
//    if(i%2==0) console.log(arr[i]);
// }

// for(let i=0;i<arr.length;i+=2){
//     console.log(arr[i]);
// }

// let n=arr.length-1;
// if(n%2!=0) n--;
// for(let i=n;i>=0;i-=2){
//     console.log(arr[i]);
// }

// for(let i=1;i<arr.length;i+=2){
//     console.log(arr[i]);
// }

// let n=5;
//i==3 "hema" i==5 "lohana" 3&5="hema lohana"
// if(n%3==0 || n%5==0){
//   if(n%3!=0) console.log("Lohana");
//    else console.log("Hema");
// }
// if(n%3==0 && n%5==0) console.log("Hema Lohana");

// if(n%3==0){
//     if(n%5==0){
//         console.log("Hema Lohana");
//     }
//     else{
//         console.log("Hema");
//     }
// }
// else{
//     if(n%5==0){
//         console.log("Lohana");
//     }
// }

// console.log(2.38%1==0)
// console.log(2%1==0)

// let n=1900;
// if(n%4==0){
//     let res;
//     if(n%400==0)  {
//         res=n/400;
//         console.log(res);
//         if(res%1==0)
//         console.log("leap year");
//     }
// }
// else{
//     console.log("not leap year");
// }

// let n= 2016;
// if(n%100==0){
//     if(n%400==0) console.log("leap year");
//     else console.log("not leap year");
// }
// else{
//     if(n%4==0) console.log("leap year");
//     else console.log("not leap year");
// }

// console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

let arr = [1, 3, 4, 5, 6, 6, 7, 4, 5, 3, 2, 2, 1, 2, 4, 5, 6, 8, 7, 8];
// return boolean isDivisible by 11
function isDivisibleBy11(arr) {
  let oddSum = 0;
  let evenSum = 0;
  let diff = 0;
  let n = arr.length - 1;
  if (n % 2 != 0) n--;
  for (let i = n; i >= 0; i -= 2) {
    console.log(arr[i]);
  }
  for (i = 0; i <= arr.length; i += 2) {
    oddSum += arr[i];
  }
  for (i = arr.length - 1; i >= 0; i - 1) {
    evenSum += arr[i];
  }
  diff = evenSum - oddSum;

  return diff;
}
console.log(isDivisibleBy11(arr));
