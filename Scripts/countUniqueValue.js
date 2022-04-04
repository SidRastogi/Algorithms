function countUnqueValue(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[count] !== arr[i]) {
      count++;
      arr[count] = arr[i];
    }
  }
  return count + 1;
}
console.log(countUnqueValue([1, 2, 7]));
