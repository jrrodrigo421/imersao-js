const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  }
}
pessoa.falar()


const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO 
console.log(falar);
console.log(falar());

//podemos usar o bind para amarrar o objeto na função
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()