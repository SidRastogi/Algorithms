import { sortedNumbers } from "./damoData";
// function power(num, pow) {
//   if (pow === 0) return 1;
//   return num * power(num, pow - 1);
// }

// console.log(power(2, 4));

// function factorial(num) {
//   if (num < 2) return 1;
//   return num * factorial(num - 1);
// }

// // console.log(factorial(4));
// function productOfArray(arr) {
//   if (arr.length < 1) return 1;
//   return arr[0] * productOfArray(arr.slice(1));
// }
// console.log(productOfArray([1, 2, 3])); // 6
// productOfArray([1,2,3,10]) // 60

// function recursiveRange(range) {
//   if (range === 0) return 0;
//   return range + recursiveRange(range - 1);
// }

// console.log(recursiveRange(10));

// function reverse(str) {
//   // if (str.length === 0) return str;
//   // return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
//   if (str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse("string"), "abcd".slice(1));

// function isPalindrome(str) {
//   // add whatever parameters you deem necessary - good luck!
//   let strLenght = str.length;
//   if (strLenght <= 1) return true;
//   if (strLenght === 2) return str[0] === str[1];
//   if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
//   return false;
// }
// console.log(isPalindrome("abba"), "abcd".slice(1, -1));

// function someRecursive(arr, callback) {
//   if (arr.length < 1) return false;
//   return callback(arr[0]) || someRecursive(arr.slice(1), callback);
//   // add whatever parameters you deem necessary - good luck!
// }

// const isOdd = (val) => val % 2 !== 0;

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false

// function flatten(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArray = newArray.concat(flatten(arr[i]));
//     } else {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;

// }

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]

// function flatten(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArray = newArray.concat(flatten(arr[i]));
//     } else {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;

// }

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]

// function capitalizeFirst(arr) {
//   let newArray = [];
//   if (arr.length < 1) return arr;
//   newArray.push(arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1));
//   return newArray.concat(capitalizeFirst(arr.slice(1)));
//   // add whatever parameters you deem necessary - good luck!
// }

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

// console.log(["abcd", "bcd", "ahkakdd"].slice(0, 1));

// function nestedEvenSum(obj) {
//   // add whatever parameters you deem necessary - good luck!
//   let sumVal = 0;
//   if (Object.keys(obj).length < 1) return sumVal;
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       sumVal += nestedEvenSum(obj[key]);
//     } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
//       sumVal += obj[key];
//     }
//   }
//   return sumVal;
// }

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// };

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" }
// };

// console.log(nestedEvenSum(obj1)); // 6
// // console.log(obj1);
// console.log(nestedEvenSum(obj2)); // 10

// function capitalizeWords(arr) {
//   // add whatever parameters you deem necessary - good luck!
//   return arr.length < 1
//     ? arr
//     : [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
// }

// let words = ["i", "am", "learning", "recursion"];
// console.log(capitalizeWords(words));

// function stringifyNumbers(obj) {
//   let newObject = {};
//   for (var key in obj) {
//     if (typeof obj[key] === "number") {
//       newObject[key] = obj[key].toString();
//     } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//       newObject[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObject[key] = obj[key];
//     }
//   }
//   return newObject;
// }

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66
//     }
//   }
// };

// console.log(stringifyNumbers(obj));

// function collectStrings(obj) {
//   let newArry = [];
//   // console.log(Object.values(obj));
//   for (let val of Object.values(obj)) {
//     if (typeof val === "string") {
//       newArry.push(val);
//     } else if (typeof val === "object") {
//       newArry = newArry.concat(collectStrings(val));
//     }
//   }
//   return newArry;
// }

// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz"
//           }
//         }
//       }
//     }
//   }
// };

// console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
// const sortedNumbersData = sortedNumbers(10000);

// function binarySearch(data, searchValue) {
//   if (data.length < 1 || !searchValue || data.at(-1) < searchValue) return -1;
//   let point1 = 0;
//   let point2 = data.length - 1;

//   let runTime = 0;
//   while (point1 < point2) {
//     runTime++;
//     let middPoint = Math.floor((point1 + point2) / 2);
//     if (
//       data[point1] === searchValue ||
//       data[point2] === searchValue ||
//       data[middPoint] === searchValue
//     ) {
//       return `Value Founded and Run count ${runTime}`;
//     } else if (searchValue > data[middPoint]) {
//       point1 = middPoint + 1;
//     } else if (data[middPoint] > searchValue) {
//       point2 = middPoint - 1;
//     } else {
//       return `Value Does Not Founded and Run count ${runTime}`;
//     }
//   }
//   return `Value Does Not Founded and Run count ${runTime}`;
// }

// function binarySearchD(list, num) {
//   let start = 0;
//   let end = list.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   let runTime = 0;
//   while (list[middle] !== num && start <= end) {
//     runTime++;
//     if (num < list[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   console.log(runTime, "````");
//   return num === list[middle] ? middle : -1;
// }
// console.log(binarySearchD(sortedNumbersData, 920));
// console.log(binarySearch(sortedNumbersData, 920));

// function sumWordCar(string) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   return string
//     .replace(/[^a-zA-Z]*/g, "")
//     .split("")
//     .reduce((acc, char, array) => {
//       if (isVowel()) {
//         return acc - char.charCodeAt(0);
//       } else {
//         return acc + char.charCodeAt(0);
//       }
//       function isVowel() {
//         return vowels.includes(char);
//       }
//     }, 0);
// }

// console.log(
//   sumWordCar(`Dealing with failure is easy: Work hard to improve. Success is also easy to
//   handle: You’ve solved the wrong problem. Work hard to improve.`)
// );

// const arabic_to_roman = {
//   1000: "M",
//   900: "CM",
//   500: "D",
//   400: "CD",
//   100: "C",
//   90: "XC",
//   50: "L",
//   40: "XL",
//   10: "X",
//   9: "IX",
//   5: "V",
//   4: "IV",
//   1: "I"
// };

// function convertToRoman(num) {
//   var roman = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };
//   var str = "";

//   for (var i of Object.keys(roman)) {
//     var q = Math.floor(num / roman[i]);
//     num -= q * roman[i];
//     str += i.repeat(q);
//   }

//   return str;
// }

// function occurenceCount(range, romanNum) {
//   let count = 0;
//   for (let i = 1; i < range; i++) {
//     if (convertToRoman(i) == romanNum) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log("1010101010100".split("10"));

// console.log(occurenceCount(100, "X"));
// occurence_count = 0
// for i in range(1, 2660+1):
//   occurence_count += count_occurrences_in_roman_notation(i, 'X')

// print("Sum: %d\n" % occurence_count)
// const sumOfPalindromes = (n) => {
//   let x = 0;
//   for (let i = 0; i <= n; i++) {
//     x += i == ("" + i).split("").reverse().join("") ? i : 0;
//   }
//   return x;
// };

// console.log(sumOfPalindromes(10000));

function nativeShort(str, serStr) {
  if (str.length < 1 || str.length > serStr || serStr.length < 1) return null;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (serStr.length > 1) {
      if (str[i] === serStr[0]) {
        let match = "";
        for (let y = 0; y < serStr.length; y++) {
          if (str[i + y] === serStr[y]) {
            match += serStr[y];
            if (match === serStr) {
              count += 1;
              match = "";
            }
          }
        }
      }
    } else {
      if (str[i] === serStr) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(nativeShort("Hello! how are you! Im fine so how are you", "Hello"));
