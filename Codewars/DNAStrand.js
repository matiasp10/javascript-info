function DNAStrand(dna) {
  dna = dna.split('');
  let arr = [];
  for (let i of dna) {
    switch (i) {
      case 'A':
        arr.push('T');
        break;
      case 'T':
        arr.push('A');
        break;
      case 'G':
        arr.push('C');
        break;
      case 'C':
        arr.push('G');
        break;
    }
  }
  return arr.join('');
}
