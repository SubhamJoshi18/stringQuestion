function string28(str) {
  if (str.length > 3) {
    let firstChar = str.charAt(0) + str.charAt(1);
    return firstChar + firstChar + firstChar;
  } else if (str.length === 2) {
    let secondChar = str.charAt(0) + str.charAt(1);
    return secondChar + secondChar + secondChar;
  } else if (str.length < 2) {
    let thirdChar = str.substring(0);
    return thirdChar + thirdChar + thirdChar;
  } else {
    return "";
  }
}

let input1 = "hello";
let input2 = "ab";
let input3 = "H";

console.log(string28(input1));
console.log(string28(input2));
console.log(string28(input3));
