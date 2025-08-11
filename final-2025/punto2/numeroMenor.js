const lista_numeros = [1, 0, -2, 15, -5]

const numeroMenor = (arreglo) => {
  let min = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < min) {
      min = arreglo[i];
    }
  }
  return min;
}


console.log(numeroMenor(lista_numeros));