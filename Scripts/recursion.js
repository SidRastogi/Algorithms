// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }

// console.log(factorial(19));

// function collectionOddValues(values) {
//   const restult = [];
//   function helper(helperInput) {
//     if (helperInput.length === 0) return;
//     if (helperInput[0] % 2 !== 0) restult.push(helperInput[0]);
//     helper(helperInput.slice(1));
//   }
//   helper(values);
//   return restult;
// }

// console.log(collectionOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function collectOddValuePure(arr) {
  let result = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 !== 0) result.push(arr[0]);
  result = result.concat(collectOddValuePure(arr.slice(1)));
  return result;
}
console.log(collectOddValuePure([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
