//factory simples
function criarPessoa() {
  return {
    nome: 'Rodrigo',
    sobrenome: 'Lopes',
    idade: 30,
    profissao: 'programador',
    skills: {
      backEnd: ['TypeScript', 'java'],
      frontEnd: ['HTML5, CSS3, JavaScript']
    }
  }
}
criarPessoa('Teste', 'teste')
console.log(criarPessoa());
console.log(typeof criarPessoa());
// criarPessoa.apply('Rodriguinho', ['teste', 'teste2'])
// console.log(criarPessoa.arguments)

// console.log(criarPessoa());



function criaPessoaSimples(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
}

function listarPessoa() {
  console.log(criaPessoaSimples('Rodriguinho', 'Lopes JR', 30));
  console.log(criaPessoaSimples('Rodrigo', 'Lopes', 50));
  console.log(criaPessoaSimples('Adriana', 'Lopes', 50));
  console.log(criaPessoaSimples('Gleice', 'Lopes', 25));
}

listarPessoa()
console.log(criaPessoaSimples('teste', 'teste', 300).idade);
console.log(criarPessoa().skills)
