function MeuObjeto() { }
console.log(MeuObjeto());

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__);
console.log(obj1.__proto__ == obj2.__proto__);
console.log(obj1.__proto__ = obj2.__proto__);
console.log(obj1.__proto__ === obj2.__proto__);
console.log(obj1.__proto__ === obj1);
console.log(obj1.__proto__);
console.log(obj1);
console.log(MeuObjeto.prototype === obj1.__proto__);
console.log(MeuObjeto.prototype);

MeuObjeto.prototype.name = 'Teste'
MeuObjeto.prototype.falar = function () {
  console.log(`Olá meu nome é ${this.name}`);
  // console.log(`Olá meu nome é ${name}`);
}

// console.log(obj1.falar());

obj2.falar()
obj1.name = 'Rodrigo'
obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.name = 'Rodrguinho'
obj3.falar()

console.log('RESUMINDO A LOCURA\n\n');

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
