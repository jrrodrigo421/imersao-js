Array.prototype.filter2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

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

console.log(produtos.filter2(caro).filter2(fragil));