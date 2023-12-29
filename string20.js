function string20(str) {
  if (str.substring(0, 3) === "bad") {
    return true;
  } else {
    return false;
  }
}

let input1 = "badaxx";
console.log(string20(input1));
