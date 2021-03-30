function anagram(a, b) {
  if (a.length != b.length) {
    return false;
  }
  let frequency1 = {};

  for (let val of a) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }
  for (let val of b) {
    if (!frequency1[val]) {
      return false;
    } else {
      frequency1[val] -= 1;
    }
  }
  return true;
}
console.log(anagram("BABA", "AAB"));
console.log(anagram(" ", " "));
console.log(anagram("aaz", "zza"));
console.log(anagram("BABA", "aaBb"));
console.log(anagram("rat", "car"));
console.log(anagram("awesome", "awesom"));
console.log(anagram("qwerty", "qeywrt"));
console.log(anagram("texttwisttime", "timetwisttext"));
