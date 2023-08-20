// provando que nem sempre o this é o this
//depende do cenário de como ele esta sendo chamado


let comparaComThis = function (param) {
  console.log(this === param);
}

comparaComThis(global)
comparaComThis(this)
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


console.log("\n\nFunção arrow entrando em ação\n\n");
let comparaComThisArrows = (param) => console.log(this === param);
comparaComThisArrows(global)
comparaComThisArrows(obj)

console.log("exportando modulo em que foi escrito o this");

comparaComThisArrows(module.exports)
comparaComThisArrows(this)

console.log("\n TESTANDO ENCAPSULAMENTO ARROW FUNCTION\n");
comparaComThisArrows = comparaComThisArrows.bind(obj)
comparaComThisArrows(obj)
comparaComThisArrows(module.exports)
