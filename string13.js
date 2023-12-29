function string13(str, front) {
  return front ? str.substring(0, 1) : str.substring(str.length - 1);
}

let input = "Hello";
let boolean = false;

console.log(string13(input, boolean));
