
const produtos = [
  { nome: 'Notebook', preco: 2500.00, fragil: true },
  { nome: 'PC', preco: 5000.00, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'copo plastico', preco: 5.00, fragil: false },

]

// console.log(produtos.filter(function (p) {
//   return p.nome.length < 3
// }));

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil));