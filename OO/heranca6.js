function Aula(nome, videoID) {
  this.nome = nome,
    this.videoID = videoID
}
const aula1 = new Aula('Bem-vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2);

//fazendo o fluxo de new:
function novo(f, ...params) {
  console.log('IMPRIMINDO f', f);
  console.log('IMPRIMINDO ...params', ...params);
  const obj = {}
  console.log('IMPRIMINDO obj', obj)
  console.log('IMPRIMINDO, obj.__proto__', obj.__proto__)
  console.log('IMPRIMINDO f.prototye', f.prototye)
  obj.__proto__ = f.prototye
  console.log('IMPRIMINDO f.prototye obj.__proto__', obj.__proto__)
  console.log('IMPRIMINDO obj', obj);
  console.log('IMPRIMNDO params', params)
  f.apply(obj, params)
  console.log(f.apply(obj, params));
  return obj
}

const aula3 = novo(Aula, 'olaaar', 333)
const aula4 = novo(Aula, 'olaaar', 555)

console.log(aula3, aula4);
