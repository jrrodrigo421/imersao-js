const piloto = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
piloto.pop() // remove o ultimo elemento da lista
console.log(piloto);
piloto.push('Rodrigo') // adiciona no ultimo elemento da lista
console.log(piloto);
piloto.shift() // remove o primeiro elemento
console.log(piloto);

piloto.unshift('hamilton') // adiciona no primeiro elemento

console.log(piloto);

// splice para adicionar e remover novos elementos
piloto.splice(2, 0, 'Bottas', 'Massa')

console.log(piloto);

// console.log(piloto.slice(1, 3))
const algunsPilotos2 = piloto.slice(1, 3)
console.log(algunsPilotos2);
