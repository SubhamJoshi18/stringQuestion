function string27(a, b) {
  if (a.length > b.length) {
    let last = a.substring(a.length - 2);
    return last + b;
    //last.concat(b);
  }
}

let input1 = "hello";
let input2 = "hi";
console.log(string27(input1, input2));
