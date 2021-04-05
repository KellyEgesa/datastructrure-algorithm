function fibonnaci(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fibonnaci(n - 1, memo) + fibonnaci(n - 2, memo);
  memo[n] = res;
  return res;
}
console.log(fibonnaci(1000));
