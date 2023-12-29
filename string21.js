function string21(str) {
  if (str.length >= 2) {
    return str.substring(0, 2);
  } else {
    return str + "@";
  }
}

let input1 = "hello";
let input2 = "h";
console.log(string21(input1));
console.log(string21(input2));
