/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   let arr = [];

//   for (let i = 0; i < s.length; i++) {
//     const bracket = s[i];

//     if (bracket == "(" || bracket == "[" || bracket == "{") {
//       arr.push(bracket);
//     } else if (bracket == ")" && arr.length > 0 && arr[arr.length - 1] == "(") {
//       arr.pop();
//     } else if (bracket == "}" && arr.length > 0 && arr[arr.length - 1] == "{") {
//       arr.pop();
//     } else if (bracket == "]" && arr.length > 0 && arr[arr.length - 1] == "[") {
//       arr.pop();
//     } else {
//       return false;
//     }
//   }
//   if (arr.length == 0) return true;

//   return false;
// };

// var isPalindrome = function (x) {
//   let s = x.toString();
//   let obj = {};
//   if (x < 0) {
//     return false;
//   }

//   let str = 0;
//   for (let i = s.length - 1; i >= Math.floor(s.length % 2); i--) {
//     // console.log(str);
//     // console.log(i);
//     // console.log(str);
//     // console.log(str);
//     if (s[str] != s[i]) return false;
//     str += 1;
//   }

//   return true;
// };

// console.log(isPalindrome(1001));

// var romanToInt = function (s) {
//   let obj = {};
//   obj["I"] = 1;
//   obj["V"] = 5;
//   obj["X"] = 10;
//   obj["L"] = 50;
//   obj["C"] = 100;
//   obj["D"] = 500;
//   obj["M"] = 1000;

//   let previousValue = 0;
//   let currentCount = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     let value = obj[s[i]];
//     if (currentCount === 0 || value >= obj[s[i + 1]]) {
//       currentCount += value;
//     } else {
//       let minus = previousValue - value;
//       currentCount -= value;
//       console.log(previousValue + "=====previousValue");
//       console.log(value + "=====value");
//       console.log(currentCount + "=====currentCount");
//     }
//     previousValue = value;
//   }

//   return currentCount;
// };

// console.log(romanToInt("LVIII"));

// var removeDuplicates = function (nums) {
//   let indexShift = nums[0];
//   let lastIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     nums[nums[i] - indexShift] = nums[i];
//     lastIndex = i;
//   }

//   while(lastIndex)
//   return nums;
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
