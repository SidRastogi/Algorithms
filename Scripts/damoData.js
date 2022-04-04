export function sortedNumbers(data) {
  let returnData = [];
  let j = 1;
  for (let i = 1; i < data; i++) {
    if (j !== 7) {
      returnData.push(i);
      j++;
    } else {
      j = 1;
    }
  }
  return returnData;
}
