function string5(str) {
  if (str.length >= 2) {
    let last2char = str.substring(str.length - 2);
    return last2char + last2char + last2char;
  }
}

let input1 = "hello";
console.log(string5(input1));
