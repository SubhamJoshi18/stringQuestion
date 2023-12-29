function string2(a, b) {
  return a.concat(b).concat(b).concat(a);
}

let input1 = "hi";
let input2 = "Bye";
console.log(string2(input1, input2));
