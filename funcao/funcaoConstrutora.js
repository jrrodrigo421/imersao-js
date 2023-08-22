function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0

  //metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
    this.getVelocidadeAtual = function () {
      return velocidadeAtual
    }
  }
}
const punto = new Carro
punto.acelerar()
console.log(punto.getVelocidadeAtual());
punto.acelerar()
punto.acelerar()
punto.acelerar()
punto.acelerar()
punto.acelerar()
punto.acelerar()
punto.acelerar()
console.log(punto.getVelocidadeAtual());

const pulse = new Carro(300, 30);
pulse.acelerar()
console.log(pulse.getVelocidadeAtual());

pulse.acelerar()
pulse.acelerar()
pulse.acelerar()
pulse.acelerar()
pulse.acelerar()

console.log(pulse.getVelocidadeAtual())
