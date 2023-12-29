function string8(str) {
  if (str.length >= 2) {
    //let firstChar = str[0];
    //  let LastChar = str[str.length -1];
    //let LastChar = str.slice(-1);
    return str.slice(1, str.length - 1);
  }
}

let input1 = "hello";
console.log(string8(input1));
