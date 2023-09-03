Array.prototype.reduce2 = function (callback, valorIncial) {
  const indiceInicial = valorIncial ? 0 : 1
  let acumulador = this[0] || valorIncial
  for (let i = 1; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)
  }
  return acumulador
}
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma));
console.log(nums.reduce(soma));
console.log(nums.reduce(soma, 21));    