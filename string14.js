function string14(str) {
  if (str) {
    return str.substring(1, str.length - 1);
  } else {
    return "";
  }
}

let input1 = "Hello";

console.log(string14(input1));
