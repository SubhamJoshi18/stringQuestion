function string11(str) {
  if (str.length >= 2) {
    let first2chr = str.substring(0, 2);

    let last = str.substring(2);
    return last + first2chr;
  }
}

let input1 = "Hello";
console.log(string11(input1));
