function menorNumero(array) {
  let menor = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
  }

  return menor;
}
