class Lancamento {
  constructor(nome = 'Generico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }
  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
  }
  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('Salario', 6200.00)
const contaDeLuz = new Lancamento('Luz', -220.58)
const freela = new Lancamento('Feela', 12500)

const contas = new CicloFinanceiro(10, 2023)
contas.addLancamentos(salario, contaDeLuz, freela)
console.log(contas.sumario());

console.log(new CicloFinanceiro());
console.log(contas);
