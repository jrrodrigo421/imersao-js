// Função em JS é FIRST-Class Object (Citizens)
// higher-order function, ou seja, podemos tratar função como dados


//criar de formar literal
function fun1() { }

//Armanezar em uma variavel
const fun2 = function () { }

//Armanezar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
// console.log(array[0](2, 3));

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar());

//Passar função como param
function run(fun) {
  fun()
}
run(function () {
  console.log('Executando')

})

//Função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)