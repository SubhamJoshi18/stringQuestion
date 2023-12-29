function string17(str, n) {
  if (str.length > n) {
    let first = str.substring(0, n);
    let last = str.substring(str.length - n);
    return first + last;
  } else {
    return str;
  }
}

let input1 = "hello";
let num = 2;
console.log(string17(input1, num));
