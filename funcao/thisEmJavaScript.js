//this pode variar sempre dependera do contexto de como foi chamado
// só não varia na arrow function


// no console do navegador fazemos this === window
// no node usamos this === globalthis
//ou
// apenas global

function f1() { console.log(this === global); }
f1()

const teste = f1
console.log(f1());


//Arrow Function
const f3 = () => console.log(this === teste);
f3()
