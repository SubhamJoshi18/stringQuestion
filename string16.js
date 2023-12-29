function string16(str) {
  if (str.substring(str.length - 2) === "ly") {
    return true;
  }
}

let input1 = "oddly";
console.log(string16(input1));
