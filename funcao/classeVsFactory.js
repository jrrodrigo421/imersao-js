class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa('Rodrigo')
p1.falar()

//aqui não precisa de this
const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}
const p2 = criarPessoa('RodrigoJR')
p2.falar()