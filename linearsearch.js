function linearSearch(arr, val) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === val) return index;
  }
  return -1;
}
console.log(linearSearch([34, 56, 1, 2, 3], 1));
