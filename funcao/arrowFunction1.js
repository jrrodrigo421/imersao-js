let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a  //return implicito

console.log(dobro(2))
console.log(dobro(Math.PI));

ola = () => 'Olá'
ola2 = _ => 'teste'
console.log(ola())
console.log(ola2())

