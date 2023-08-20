const fabricantes = ["Mercedes", "Audi", "BMW", "FIAT", "FERRARI"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}.${nome}`);
}

// imprimir('teste', 1)

fabricantes.forEach(imprimir)

fabricantes.forEach(function (a) {
  console.log(a);
})

//fazendo como arrow function

// fabricantes.forEach(b = a => console.log(a))
fabricantes.forEach(a => console.log(a))