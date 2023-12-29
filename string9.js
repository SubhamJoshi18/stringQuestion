function string9(a, b) {
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}

let input1 = "hello";
let input2 = "hi";
console.log(string9(input1, input2));
