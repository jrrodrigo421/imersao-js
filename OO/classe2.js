class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'DEV') {
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super('Lopes')
  }
}

const filho = new Filho
const pai = new Pai
const avo = new Avo
console.log(filho);
console.log(pai);
console.log(avo);