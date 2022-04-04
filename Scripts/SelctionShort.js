function selectionShort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let noSwip = true;
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
}
console.log(selectionShort([1, 1, 1, 70, 5, 2]));
