function fib(n) {
  if (n <= 2) return 1;
  var fibsNuns = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibsNuns[i] = fibsNuns[i - 1] + fibsNuns[i - 2];
  }
  return fibsNuns;
}
