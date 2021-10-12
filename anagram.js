function anagram(a, b) {
  if (a.length != b.length) {
    return false;
  }
  let frequency1 = {};

  let obj = {
    a: 0,
  };

  for (let val of a) {
    frequency1[val] = (frequency1[val] || 0) + 1;
    console.log(frequency1);
  }
  for (let val of b) {
    if (!frequency1[val]) {
      console.log(!0);
      console.log(frequency1);

      return false;
    } else {
      console.log(frequency1);
      frequency1[val] -= 1;
    }
  }
  return true;
}
console.log(anagram("BABA", "AAAA"));
// console.log(anagram(" ", " "));
// console.log(anagram("aaz", "zza"));
// console.log(anagram("BABA", "aaBb"));
// console.log(anagram("rat", "car"));
// console.log(anagram("awesome", "awesom"));
// console.log(anagram("qwerty", "qeywrt"));
// console.log(anagram("texttwisttime", "timetwisttext"));
