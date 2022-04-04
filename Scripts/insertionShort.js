function insertionShort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let tempVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > tempVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = tempVal;
  }

  return arr;
}

console.log(insertionShort([5, 3, 1, 0, 7, 2]));
