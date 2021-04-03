function extraLongFactorials(n) {
  let answer = extraLongFactorials1(n);

  return answer;
}
function extraLongFactorials1(n) {
  if (n == 1) {
    return 1;
  }
  return (n * extraLongFactorials(n - 1)).toLocaleString("fullwide", {
    useGrouping: false,
  });
}

console.log(extraLongFactorials(30));
