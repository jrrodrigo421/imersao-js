//coleção dinamica de pares: chave e valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

// console.log(produto);

delete produto.preco
delete produto['marca do produto']
// console.log(produto);

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{
    nome: 'Rodrigo',
    idade: 30
  }, {
    nome: 'Ana',
    idade: '18'
  }],
  calcularValorSeguro: function () {

  }
}
carro.proprietario.endereco.numero = 1500
console.log(carro.proprietario.endereco.numero);
console.log(carro['proprietario']['endereco']['logradouro']);
// console.log(carro);
console.log(carro.condutores.length)