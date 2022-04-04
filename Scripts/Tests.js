// function sameFrequency(int, int2) {
//   let string1 = int.toString();
//   let string2 = int2.toString();
//   if (string1.length !== string2.length) {
//     return false;
//   }

//   const frequency = {};
//   for (let i = 0; i < string1.length; i++) {
//     frequency[string1[i]] = ++frequency[string1[i]] || 1;
//   }
//   for (let j = 0; j < string2.length; j++) {
//     if (!frequency[string2[j]]) {
//       return false;
//     } else {
//       frequency[string2[j]] -= 1;
//     }
//   }
//   return true;
// }
// console.log(sameFrequency(12355, 35216));

// function areThereDuplicates(...args) {
//   args.sort((a, b) => a > b);
//   console.log(args);
//   // if (!val.length > 0) return false;
//   // let min = 0;
//   // let max = val.length;
// }

// function areThereDuplicates(...arg) {
//   console.log(new Set(arg), new Set(arg).size, arg.length);
//   return new Set(arg).size !== arg.length;
// }
// console.log(areThereDuplicates("a", "b", "c", "a"));

// function averagePair(arr, target) {
//   const targetVal = Math.round(target);
//   if (!arr.length > 1) return false;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] + arr[i + 1] === targetVal) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(averagePair([1, 2, 3, 4, 5, 6, 7], 2.5));

// function isSubsequence(str1, str2) {
//   if (str1.length < 1 || str2.length < 1) return false;
//   let min = 0;
//   let max = str1.length;
//   let count = 0;
//   while (min < max) {
//     if (min === str1.length - 1) return true;
//     if (str1[min] === str2[count]) {
//       min++;
//     } else {
//       if (count === str2.length - 1) {
//         return false;
//       }
//     }
//     count++;
//   }
//   return true;
// }

// console.log(isSubsequence("abcd", "acbd"));

// function maxSubarraySum(arr, sumpoint) {
//   if (arr.length < sumpoint) return false;
//   let maxSum = 0;
//   for (let i = 0; i < sumpoint; i++) {
//     maxSum += arr[i];
//   }
//   let temp = maxSum;
//   for (let i = sumpoint; i < arr.length; i++) {
//     temp = temp - arr[i - sumpoint] + arr[i];
//     if (temp > maxSum) {
//       maxSum = temp;
//     }
//   }
//   return maxSum;
// }

// console.log(maxSubarraySum([100, 200, 300, 400], 2));
