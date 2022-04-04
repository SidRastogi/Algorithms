function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    console.log(min, max);
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle + 1;
    }
  }
  return -1;
}
console.log(search([1, 2, 3, 6, 7, 8, 10, 12, 15, 17, 19, 20], 20));
