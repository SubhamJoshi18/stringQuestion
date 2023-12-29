function string15(str) {
  /* if (str.length > 2) {
    return str.substring(2, str.length - 2);
  }
*/
  for (let i = 0; i < str.length; i++) {
    return str.substring(i, str.length - i);
  }
}

let input1 = "code";
console.log(string15(input1));
