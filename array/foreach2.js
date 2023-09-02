//recriando o foreach
Array.prototype.foreach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['Irene', 'Almerianda', 'Rodrigo', 'Adriana']

aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`);
})
aprovados.forEach2(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`);
})
