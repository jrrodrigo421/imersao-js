const pessoa = {
  nome: 'Rodrigo',
  idade: 30,
  peso: 98
}

console.log(Object.keys(pessoa));
console.log('\n\n');
console.log(Object.values(pessoa));
console.log('\n\n');
console.log(Object.entries(pessoa));
console.log('\n\n');

// console.log(Object.assign(pessoa));


// Object.entries(pessoa).forEach(e => {
//   console.log(`${e[0]}: ${e[1]}`);
// })

//mesma coisa usando o destruct
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
})

console.log('\n\n');
console.log('\n\n');
console.log('\n\n');

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/02/2023'
})

console.log(pessoa);
pessoa.dataNascimento = '01/01/2021'
console.log(pessoa.dataNascimento);


// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)


console.log(dest);

// Object.freeze(obj)
obj.c = 213213
console.log(obj);