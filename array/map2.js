const carrinho = [
  '{"nome": "Teclado", "preco": 800.00}',
  '{"nome": "Monitor Curvo 32 polegadas", "preco": 2000.00}',
  '{"nome": "Notebook Lenovo", "preco": 4600.00}',
  '{"nome": "monitor 22 polegadas", "preco": 980.00}',

]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado);