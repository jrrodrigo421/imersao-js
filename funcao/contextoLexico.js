const valor = 'Global'

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = 'local'
  minhaFuncao()
  console.log('IMPRIMINDO valor de dentro de exec()', valor);
}

exec()  