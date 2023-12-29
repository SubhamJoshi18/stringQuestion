function string23(a, b) {
  //last element ra hamro chai first element chek garna atya xam a ra b ko
  if (a.length > 0 && b.length > 0 && a.charAt(a.length - 1) === b.charAt(0)) {
    return a + b.substring(1);
  } else {
    return a.concat(b);
  }
}
let input1 = "abc";
let input2 = "cat";
console.log(string23(input1, input2));
