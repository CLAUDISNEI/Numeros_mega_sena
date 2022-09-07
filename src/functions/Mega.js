export default function Mega(quantidade, numeros = []) {
  const qtd = +quantidade;
  if (qtd < 6 || qtd > 20) {
    throw "Quantidade inválida!";
  }

  if (numeros.length === qtd) {
    return numeros.sort((a, b) => a - b);
  }

  const numRandon = parseInt(Math.random() * 60 + 1);
  if (!numeros.includes(numRandon)) {
    return Mega(qtd, [...numeros, numRandon]);
  } else {
    return Mega(qtd, numeros);
  }
}
