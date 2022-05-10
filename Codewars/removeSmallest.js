function removeSmallest(numbers) {
  let clone = [...numbers];
  let pos = clone.indexOf(Math.min(...clone));
  clone.splice(pos, 1);
  return clone;
}
