function mergeShort(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.lenght && j < arr2.lenght) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}

console.log("heeeelo");
console.log(mergeShort([1, 5, 10], [2, 6, 11, 15]));
