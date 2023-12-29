function string31(str) {
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    let first = str.substring(1, str.length - 1);
    console.log(first);
  }
}

let input1 = "xhix";
console.log(string31(input1));
