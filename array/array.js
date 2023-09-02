console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Rodrigo', 'Lopes', 'Adriana')

console.log(aprovados);

aprovados = ['Rodrigo', 'Lopes', 'Adriana']
aprovados.sort()


console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados[4] = 'teste'

console.log(aprovados[3]);
console.log(aprovados[4]);
console.log(aprovados);
aprovados.push('Pereira')
console.log(aprovados);
delete aprovados[1]
console.log(aprovados);
aprovados = ['RODRIGO', 'LOPES', 'JR']
aprovados.splice(1, 2,)
aprovados.splice(1, 2, 'elemento1', 'elemento2')
console.log(aprovados);
console.log(aprovados.length);
aprovados.sort()
console.log(aprovados);
