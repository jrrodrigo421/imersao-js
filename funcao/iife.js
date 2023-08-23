//IIFE -> Immediately Invoked Function Expression

// var teste = 'teste'

(function () {
  console.log('Sera executado na hora!');
  console.log('Foge do Escopo mais abrangente');
  let teste = 'teste2'
  console.log(teste);
})()