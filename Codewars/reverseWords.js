function reverseWords(str) {
  let palabra = str.split(' ');
  let palabraVuelta = [];
  for (let i of palabra) {
    let word = i.split('').reverse().join('');
    palabraVuelta.push(word);
  }
  return palabraVuelta.join(' ');
}
