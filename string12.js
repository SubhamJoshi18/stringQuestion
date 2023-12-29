function string2(str) {
  if (str.length > 2) {
    let last2char = str.substring(str.length - 2);
    let firstchar = str.substring(0, str.length - 1);
    return last2char + firstchar;
  }
}

let input1 = "hello";
console.log(string2(input1));
