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

console.log(maxDigit([1, 2, 22, 55, 555, 55, 888888]));
