function string31(str, word) {
  if (str.substring(0, 2) === word.charAt(0) && word.charAt(1)) {
    console.log(str.substring(0, 2));
  } else if (str.substring(1, 3) === word.charAt(1) && word.charAt(2)) {
    return "h" + word.charAt(1) && word.charAt(2);
  } else if (str.substring(0) !== str.substring(0)) {
    return str.substring(0);
  }
}

console.log(string31("hippo", "hi"));
console.log(string31("hippo", "xip"));
console.log(string31("hippo", "h"));
