const soma = function (x, y) {
  console.log('A soma é:', x + y)
}
// soma(5, 7)


const imprimirResultado = function (a, b, operacao = soma) {
  // console.log(operacao(a, b));
  operacao(a, b)
}
imprimirResultado(10, 2)
imprimirResultado(26, 2, soma)

//passando uma função anonima dentro da chamada de outra função
imprimirResultado(2, 2, function (x, y) {
  console.log("A subtração é:", x - y)
})

//passando arrow function
imprimirResultado(3, 4, (x, y) => console.log(x * y))

const pessoa = {
  falar: function () {
    console.log('Opa');
  }
}
pessoa.falar() 