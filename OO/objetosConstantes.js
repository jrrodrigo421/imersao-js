//pessoa -> 123 ->{...}

const pessoa = { nome: 'Rodrigo' }
pessoa.nome = 'junior'
// console.log(pessoa);

Object.freeze(pessoa)

pessoa.nome = 'Pereira'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'RodrigoJR' })
console.log(pessoaConstante);

pessoaConstante.nome = 'jr'

console.log(pessoaConstante);
