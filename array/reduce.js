const alunos = [
  { nome: 'Rodrigo', nota: 9.9, bolsista: false },
  { nome: 'Pereira', nota: 7.9, bolsista: true },
  { nome: 'Lopes', nota: 8.9, bolsista: false },
  { nome: 'Junior', nota: 6.9, bolsista: true },
]
// console.log('IMPRIMINDO alunos.map(a=>a.nota):   ', alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
  // console.log('IMPRIMINDO acumulador, atual', acumulador, atual);
  return acumulador + atual
}, 10)

console.log(resultado);