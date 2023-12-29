function twoChar(str, index) {
  // Check if the index is within the valid range
  if (index >= 0 && index + 1 < str.length) {
    // Use substring to get a string of length 2 starting at the given index
    return str.substring(index, index + 2);
  } else {
    // If the index is too big or too small, use the first 2 characters
    return str.substring(0, 2);
  }
}

// Example usage:
var result1 = twoChar("abcdef", 2);
var result2 = twoChar("abcdef", 7);
var result3 = twoChar("a", 0);

console.log(result1); // Output: "cd"
console.log(result2); // Output: "ab"
console.log(result3); // Output: "a"
