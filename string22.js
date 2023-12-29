function string22(a, b) {
  if (a && b) {
    return a.substring(0, 1) + b.substring(b.length - 1);
  } else if (a && !b) {
    return a.substring(0, 1) + "@";
  }
}

let input1 = "last";
let input2 = "chars";
console.log(string22(input1, input2));
