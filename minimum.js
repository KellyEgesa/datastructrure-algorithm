function timeConversion(s) {
  let hourFrt = s[s.length - 2];
  let reminderStr = s.substr(2, s.length - (2 + 2));

  if (hourFrt.toUpperCase() == "A") {
    let value = s[0] + s[1];
    if (parseInt(value) == 12) {
      value = "00";
    }
    return value + reminderStr;
  } else {
    let value = s[0] + s[1];
    if (parseInt(value) !== 12) {
      value = parseInt(value) + 12;
    }
    return value + reminderStr;
  }
}
console.log(timeConversion("12:05:39AM"));
