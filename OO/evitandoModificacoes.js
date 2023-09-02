//Object.preventExtensions

const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Esse objeto é extensivel: ', Object.isExtensible(produto));

produto.validade = '10/10/2023'
produto.nome = 'teclado'
console.log(produto);
delete produto.tag
console.log(produto);

//Object.seal

const pessoa = { nome: 'Rodrigo', profissao: 'DEV JR' }
Object.seal(pessoa)
console.log('selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Lopes'
delete pessoa.nome
pessoa.profissao = 'DEV FULLSTACK JR'
console.log(pessoa);

// Object.freeze = selado + valores constantes

const carro = { marca: 'fiat', modelo: 'punto', ano: 2014 }
Object.freeze(carro)
carro.marca = 'FIAT'
carro.valor = 34000.00
console.log(carro);