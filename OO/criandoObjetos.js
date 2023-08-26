//Usando a notação literal
const obj1 = {}
// console.log(obj1);

//Object em JS 
// console.log(typeof Object, typeof new Object);
const obj2 = new Object
// console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
// console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto());


function saudacao() {
  console.log(`Testando metodo call ${this.nome}`);
}
const pessoa = {
  nome: 'RodrigoDEV'
}

saudacao.call(pessoa)

// console.log(Produto);

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('Rodrigo JR', 8500, 6)
const f2 = criarFuncionario('Adriana', 4000, 0)
const f3 = criarFuncionario('Rodrigo', 4000, 2)

// console.log('FUNCIONARIO 1: R$', f1.getSalario().toFixed(2), '\n')
// console.log('FUNCIONARIO 2: R$', f2.getSalario().toFixed(2), '\n')
// console.log('FUNCIONARIO 3: R$', f3.getSalario().toFixed(2), '\n') 

//object.create
const filha = Object.create(null)
filha.nome = 'Adriana'
console.log(filha);


// função que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info);
