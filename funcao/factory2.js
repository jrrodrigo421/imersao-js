function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}
console.log(criarProduto('Notebook', 3500.99));
console.log(criarProduto('Motorola', 1999.99));

console.log(criarProduto());