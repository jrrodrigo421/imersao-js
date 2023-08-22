const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
let notasBaixas = []
for (let nota in notas) {
  if (notas[nota] < 7) {
    notasBaixas.push(notas[nota])
  }
}

console.log(notasBaixas);

//com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas2);

//usando arrowfunction
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);

//deixando o codigo mais limpo
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4);