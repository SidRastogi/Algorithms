function swip(arr, i1, i2) {
  // let tempVal = arr[i1];
  // arr[i1] = arr[i2];
  // arr[i2] = tempVal;
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function bubbleShort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSowpe = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swip(arr, j, j + 1);
        noSowpe = false;
      }
    }
    if (noSowpe) break;
  }
  return arr;
}

console.log(bubbleShort([5, 9, 1, 50, 3]));
