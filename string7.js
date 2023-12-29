function string7(str) {
  if (typeof str === "string") {
    let first3Woo = str.substring(0, 3);
    return first3Woo;
  } else {
    return false;
  }
}

let input1 = "WooHoo";
console.log(string7(input1));
