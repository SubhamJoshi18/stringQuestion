function string30(str) {
  if (str.substring(str.length - 3) === "llo") {
    return str.substring(str.length - 3);
  } else if (str.charAt(2) || str.charAt(3) === "a") {
    return str.substring(str.length - 2);
  } else if (str.charAt(0) || str.chatAt(2) || str.chatAt(3) === "a") {
    let first = str.substring(0);
    return first + str.substring(str.length - 2);
  } else {
    return "";
  }
}

let input1 = "hello";
let input2 = "java";
let input3 = "away";

console.log(string30(input1));
console.log(string30(input2));
console.log(string30(input3));
