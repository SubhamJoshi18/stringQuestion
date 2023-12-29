function string18(str) {
  if (str.length >= 3) {
    let middleIndex = Math.floor(str.length / 2);
    return str.substring(middleIndex - 1, middleIndex + 2);
  }
}

let name = "and";
console.log(string18(name));
