let stringOne = "FreeCodeCamp is the best place to learn";
let stringTwo = "Frontend and backend developent";
console.log(stringOne.charAt(0));
console.log(stringOne.charCodeAt(2));
console.log(stringOne.concat(" ", stringTwo));
console.log(stringOne.endsWith("to"));
console.log(String.fromCharCode(114));
console.log(stringOne.includes("is"));
console.log(stringOne.indexOf("o"));
console.log(stringOne.lastIndexOf("o"));
console.log(stringOne.match(/s/g));
console.log(stringOne.repeat(3));
console.log(stringTwo.replace(/end/g, "END"));
console.log(stringOne.search("Free"));
console.log(stringOne.slice(5, 9));
console.log(stringOne.split(""));
console.log(stringOne.startsWith("Free"));
console.log(stringOne.substr(2, 4));
console.log(stringOne.substring(2, 4));
console.log(stringOne.toLowerCase());
console.log(stringOne.toUpperCase());
console.log("            SID         ".trim());
console.log(stringOne.split("").reverse().join("")); //revers string
console.log(stringOne.split(" ").reverse().join(" ")); // revers word

let arr = ["a", "b", "c"];

arr.push("d");
console.log(arr);

console.log(arr.pop());
console.log(arr);

let arr2 = ["g", "q"];

console.log(arr.concat(arr2));

console.log(arr.join(""));

console.log(arr.reverse());
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift("p"));
console.log(arr);
console.log(arr.slice(3), "heelo");

arr.push("i");
arr.push("f");
arr.sort();
console.log(arr);

console.log(arr.splice(2, 3, "JS"));
console.log(arr);

var original = [true, true, undefined, false, null];

// slice
var copy1 = original.slice(0);

// spread operator
var copy2 = [...original];
console.log(copy1, copy2);

// DEEP copying
var deepArray = [["freeCodeCamp"]];
var shallowCopy = deepArray.slice(0);

shallowCopy[0].push("is great");
console.log(deepArray[0], shallowCopy[0]);

var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push("is great");
console.log(deepArray[0], deepCopy[0]);
