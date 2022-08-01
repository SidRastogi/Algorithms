function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeShort(arr) {
  if (arr.length === 1) return arr;
  let midPoint = arr.length / 2;
  let left = mergeShort(arr.slice(0, midPoint));
  let right = mergeShort(arr.slice(midPoint));
  return merge(left, right);
}

function remdonArrGen(len) {
  return Array.apply([], {
    length: len,
  }).map(() => Math.floor(Math.random() * 33));
}
let remdomNumbers = remdonArrGen(15);

console.log(remdomNumbers, mergeShort(remdomNumbers));
