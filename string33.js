function removeX(str) {
  if (str.length >= 2) {
    let firstCharX = str.charAt(0) === "x";

    let secondCharX = str.charAt(1) === "x";

    if (firstCharX || secondCharX) {
      return str.substring(firstCharX ? 1 : 0, secondCharX ? 2 : 1);
    }
  }

  return str;
}

var result1 = removeX("xxHello");
var result2 = removeX("xHi");
var result3 = removeX("Hi");

console.log(result1);
console.log(result2);
console.log(result3);
