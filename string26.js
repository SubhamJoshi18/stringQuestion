function string26(str) {
  if (str.substring(0, 2) === str.substring(str.length - 2)) {
    return true;
  }
}

let input1 = "edited";
console.log(string26(input1));
