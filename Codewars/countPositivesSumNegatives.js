function countPositivesSumNegatives(input) {
    let recuento = 0
    let sumaNegativos = 0
    let result = []

  	if (input == false || input == null){
      return result
    } else {
      for(let i = 0; i < input.length; i++){
        if (input[i] > 0){
       	recuento++
      } else if (input[i] < 0) {
        sumaNegativos += input[i]
      }
    }
    result.push(recuento)
    result.push(sumaNegativos)
    return result
  	}
}