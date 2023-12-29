function string10(a, b) {
  if (a.length >= 1 && b.length >= 1) {
    let missA = a.substring(1);
    let missB = b.substring(1);
    return missA + missB;
  }
}
let input1 = "hello";
let input2 = "There";
console.log(string10(input1, input2));
