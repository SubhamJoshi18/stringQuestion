function string29(str) {
  if (str.length > 2 && str.substring(0, 2) === str.substring(str.length - 2)) {
    let first = str.substring(str.length - 2);
    let firstChar = str.substring(2, 5);
    return firstChar + first;
  } else if (str.length === 2) {
    return "";
  } else {
    return str;
  }
}

let input1 = "hellohe";
let input2 = "hi";
console.log(string29(input1));
console.log(string29(input2));
