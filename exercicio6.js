function contarLetraA(palavra) {
  let contador = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i].toLowerCase() === 'a') {
      contador++;
    }
  }

  return contador;
}
