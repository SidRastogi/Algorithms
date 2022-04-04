function maxSumArray(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

console.log(maxSumArray([1, 1, 1, 1, 1, 5, 0, 5, 1, 0, 9, 0], 5));

function maxSumArrayRe(arr, num) {
  if (num > arr.length) return false;
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log(maxSum, tempSum);
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSumArrayRe([1, 1, 1, 1, 1, 18, 5, 0, 5, 1, 0, 9, 0], 5));
