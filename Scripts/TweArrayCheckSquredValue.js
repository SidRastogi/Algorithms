function twoArryCheckQquredVal(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    let currectIndex = array2.indexOf(array1[i] ** 2);
    if (currectIndex === -1) {
      return false;
    }
    array2.splice(currectIndex, 1);
  }
  return true;
}
console.log(twoArryCheckQquredVal([1, 2, 3], [4, 1, 9]));

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequenceCounter1 = {};
  let frequenceCounter2 = {};
  for (let val of arr1) {
    frequenceCounter1[val] = ++frequenceCounter1[val] || 1;
  }

  for (let val of arr2) {
    frequenceCounter2[val] = ++frequenceCounter2[val] || 1;
  }

  for (let key in frequenceCounter1) {
    if (!(key ** 2 in frequenceCounter2)) {
      return false;
    }
    if (frequenceCounter1[key] !== frequenceCounter2[key ** 2]) {
      return false;
    }
  }
  console.log(frequenceCounter1, frequenceCounter2);
  return true;
}

console.log(same([1, 2, 2, 3, 2, 2], [4, 1, 9, 4, 4, 4]));
