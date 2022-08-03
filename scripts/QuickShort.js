function pivot(arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let pivotIndex = 0;
  let pivotPoint = 0;
  let values = arr;
  while (startIndex <= endIndex) {
    if (values[startIndex] < values[pivotPoint]) {
      pivotIndex++;
      [values[startIndex], values[pivotIndex]] = [
        values[pivotIndex],
        values[startIndex],
      ];
    }
    if (startIndex === endIndex) {
      [values[pivotPoint], values[pivotIndex]] = [
        values[pivotIndex],
        values[pivotPoint],
      ];
    }
    startIndex++;
  }
  return [values, pivotIndex];
}

function pivot2(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickShort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotPoint = pivot2(arr, left, right);
    //left
    quickShort(arr, left, pivotPoint - 1);
    //right
    quickShort(arr, pivotPoint + 1, right);
  }
  return arr;
}

console.log(quickShort([15, 10, 22, 88, 2, 9, 8, 55, 22]));
