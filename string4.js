function string4(str, word) {
  let first2char = str.substring(0, 2);
  let last2char = str.substring(2);
  return first2char + word + last2char;
}

let input1 = "<<>>";
let input2 = "word";

console.log(strings4(input1, input2));
