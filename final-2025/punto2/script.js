
function minimo(arreglo) {
  let min = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < min) {
      min = arreglo[i];
    }
  }
  return min;
}

console.log(minimo([10, -1, 8, 133, -20])); 