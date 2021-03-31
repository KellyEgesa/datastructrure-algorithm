function substrCount(n, s) {
  let obj = {};
  for (let values of s) {
    obj[values] = (obj[values] || 0) + 1;
  }
  let uniqueValuesNo = Object.keys(obj).length;

  let i = 1;
  for (let j = 0; j < n; j++) {
    if (s[j] === s[i]) {
      uniqueValuesNo += 1;
    }
  }
}
function substrCount(s) {
  let obj = {};
  for (let values of s) {
    obj[values] = (obj[values] || 0) + 1;
  }
  let uniqueValuesNo = 0;
  for (let key in obj) {
    uniqueValuesNo += obj[key];
  }

  let i = 1;
  let k = 2;
  for (let j = 0; j < s.length; j++) {
    let k = j + 1;
    if (s[j] === s[i]) {
      uniqueValuesNo += 1;
      i += 1;
    }
  }

  console.log(uniqueValuesNo);
}

substrCount("AAAA");
