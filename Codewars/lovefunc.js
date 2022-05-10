function lovefunc(flower1, flower2) {
  let cond1 = flower1 % 2 == 0 && flower2 % 2 !== 0;
  let cond2 = flower2 % 2 == 0 && flower1 % 2 !== 0;
  if (cond1 || cond2) {
    return true;
  } else {
    return false;
  }
}
