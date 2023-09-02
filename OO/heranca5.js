console.log(typeof String);
console.log(typeof Function);
console.log(typeof Array);
// console.log(typeof class());

String.prototype.reverse = function () {
  console.log(this);
  console.log(this.split(''))
  console.log(this.split('').reverse())
  return this.split('').reverse().join('')
}
console.log('Sou DEV JR na Scoder'.reverse());

Array.prototype.first = function () {
  return this[0]
}


console.log([0, 1, 020, 030, 4].first());
console.log(['a', 1, 020, 030, 4].first());
String.prototype.toString = function () {
  return 'metodo String Sobreescrevido'
}

console.log('TESTANDO '.reverse());