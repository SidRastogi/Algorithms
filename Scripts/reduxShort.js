function getDigit(number, i) {
  return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
}

function getDigitCount(number) {
  if (number == 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function maxDigit(numbers) {
  let maxCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    maxCount = Math.max(maxCount, getDigitCount(numbers[i]));
  }
  return maxCount;
}

function reduxShort(nums) {
  let maxDegitCount = maxDigit(nums);
  for (let k = 0; k < maxDegitCount; k++) {
    let digitBuket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let Digit = getDigit(nums[i], k);
      digitBuket[Digit].push(nums[i]);
    }
    nums = [].concat(...digitBuket);
  }
  return nums;
}

console.log(reduxShort([2, 55, 123, 7895, 54168, 3, 54, 89, 51]));
