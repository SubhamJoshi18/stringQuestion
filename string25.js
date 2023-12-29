function string25(str) {
  if (str.substring(0, 3) === "red") {
    return "red";
  } else if (str.substring(0, 4) === "blue") {
    return "blue";
  } else {
    return "";
  }
}

let input1 = "redxxx";
let input2 = "blueaaaa";
console.log(string25(input1));
