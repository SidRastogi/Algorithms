function chareaterCount(str) {
  const result = {};
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      ++result[str[i]];
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
}

console.log(chareaterCount("Hello how are you!!"));

function chareaterCount2(str) {
  const result = {};
  for (let car of str.toLowerCase()) {
    if (/[a-z0-9]/.test(car)) {
      result[car] = ++result[car] || 1;
    }
  }
  return result;
}
console.log(chareaterCount2("Hello how are you!!"));

function chareaterCount3(str) {
  const result = {};
  for (let cra of str) {
    if (alphaNumaricCheck(cra)) {
      let char = cra.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function alphaNumaricCheck(val) {
  let code = val.charCodeAt();
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(chareaterCount3("Hello how are you!!"));
