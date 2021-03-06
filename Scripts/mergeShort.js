function mergeShort(arr1, arr2) {
  let newArr = Array(0);
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      newArr.push(arr1[i]);
      newArr.push(arr2[j]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

const restult = mergeShort([5, 5, 5, 5], [5, 5]);
console.log(restult);
