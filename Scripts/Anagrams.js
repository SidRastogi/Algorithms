function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let ferquencyCounter1 = {};
  let ferquencyCounter2 = {};
  for (let val of str1) {
    ferquencyCounter1[val] = ++ferquencyCounter1[val] || 1;
  }

  for (let val of str2) {
    ferquencyCounter2[val] = ++ferquencyCounter2[val] || 1;
  }
  for (let key in ferquencyCounter1) {
    if (!(key in ferquencyCounter2)) {
      return false;
    }
    if (ferquencyCounter1[key] !== ferquencyCounter2[key]) {
      return false;
    }
  }
  console.log(ferquencyCounter1);
  return true;
}
// console.log(validAnagrams("ba Acd", "bc Ada"));

function validAnagrams2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let ferquencyCounter1 = {};
  let ferquencyCounter2 = {};
  for (let val of str1) {
    ferquencyCounter1[val] = ++ferquencyCounter1[val] || 1;
  }

  for (let val of str2) {
    ferquencyCounter2[val] = ++ferquencyCounter2[val] || 1;
  }
  for (let key in ferquencyCounter1) {
    if (
      key in ferquencyCounter2 &&
      ferquencyCounter1[key] === ferquencyCounter2[key]
    ) {
      delete ferquencyCounter2[key];
    } else {
      return false;
    }
  }
  console.log(ferquencyCounter1);
  return true;
}
// console.log(validAnagrams2("ba Acd", "bc Ada"));

function validAnagrams3(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const ferquencyCounter1 = {};
  const ferquencyCounter2 = {};
  for (let i = 0; i < str1.length; i++) {
    let letter1 = str1[i];
    let letter2 = str2[i];
    ferquencyCounter1[letter1] = ++ferquencyCounter1[letter1] || 1;
    ferquencyCounter2[letter2] = ++ferquencyCounter2[letter2] || 1;
  }
  for (let key in ferquencyCounter1) {
    if (
      !(key in ferquencyCounter2) ||
      !(ferquencyCounter1[key] === ferquencyCounter2[key])
    ) {
      return false;
    }
  }
  return true;
}

console.log(validAnagrams3("abcad ", "aba cd"));
