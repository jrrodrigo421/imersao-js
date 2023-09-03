const alunos = [
  { nome: 'Rodrigo', nota: 9.9, bolsista: false },
  { nome: 'Pereira', nota: 7.9, bolsista: true },
  { nome: 'Lopes', nota: 8.9, bolsista: false },
  { nome: 'Junior', nota: 6.9, bolsista: true },
]
//Desafio 1 : todos os alunos são bolsistas ?
const todosBolsitas = (resultado, bolsita) => resultado && bolsita
console.log(alunos.map(a => a.bolsista).reduce(todosBolsitas));

//Algum aluno é bolsista ?/

const algumBolsista = (resultado, bolsita) => resultado || bolsita
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));

