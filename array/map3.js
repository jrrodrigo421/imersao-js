//criando o metodo map

Array.prototype.map2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray

}

const carrinho = [
  '{"nome": "Teclado", "preco": 800.00}',
  '{"nome": "Monitor Curvo 32 polegadas", "preco": 2000.00}',
  '{"nome": "Notebook Lenovo", "preco": 4600.00}',
  '{"nome": "monitor 22 polegadas", "preco": 980.00}',

]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultadoMap = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultadoMap);
const resultadoMap2 = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultadoMap2);