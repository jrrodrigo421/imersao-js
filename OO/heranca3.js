const pai = { nome: 'Rodrigo', corDoCabelo: 'Preto' }

const filho1 = Object.create(pai)
filho1.nome = 'RodrigoJr'

quemEOProto = Object.getPrototypeOf(filho1)
console.log('############################');
console.log(`\n\nO proto de filho1 é ${quemEOProto}\n\n`);
console.log('O proto de filho1 é ', quemEOProto);
console.log('############################');

console.log(filho1.corDoCabelo);

console.log(filho1);

const filho2 = Object.create(pai, {
  nome: { value: 'Ana', writable: false, enumerable: true }
})
console.log(filho2.nome);
filho2.nome = 'Carla'
console.log(`${filho2.nome} tem o cabelo ${filho2.corDoCabelo}`);
console.log(Object.keys(filho1));
console.log(Object.keys(filho2));
console.log(Object.keys(pai));


// pra saber se o atributo do objeto é dele mesmo ou veio por herança
for (let key in filho2) {
  filho2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança de: ${key}`);
}