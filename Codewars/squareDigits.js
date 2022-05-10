function squareDigits(num) {
  num = String(num);
  num = num.split('');
  let arr = [];
  for (let i of num) {
    arr.push(i ** 2);
  }
  arr = arr.join('');
  return Number(arr);
}
