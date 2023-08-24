function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
  nome: 'Notebook',
  preco: 4800.99,
  desc: 0.15,
  getPreco
}

globalThis.preco = 20
globalThis.preco = 21
console.log(globalThis.preco);
console.log(global.preco);
globalThis.desc = 0.1
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 32000, desc: 0.20 }
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, 'R$'));
console.log(getPreco.apply(global[0.22, 'R$']));
console.log(getPreco.apply(globalThis[0.22, 'R$']));