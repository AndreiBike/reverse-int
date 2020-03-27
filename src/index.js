module.exports = function reverse (n) {
  let strNum = n.toString();
  let result = '';

  for (let i = strNum.length-1; i>=0; i--) {
      if (strNum[i] === '-') continue;
      result += strNum[i];
  }

  result = + result;

  return result;
}
