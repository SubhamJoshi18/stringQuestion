function string24(str) {
  if (str.length >= 2) {
    let first = str.substring(0, str.length - 2);
    let last2char = str.substring(str.length - 2);

    return first + last2char.charAt(1) + last2char.charAt(0);
  } else {
    return false;
  }
}

let input1 = "coding";
console.log(string24(input1));
