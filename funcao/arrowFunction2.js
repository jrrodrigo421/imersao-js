function Pessoa() {
  this.idade = 0
  setInterval(() => {
    this.idade++
    console.log(this.idade);
  }, 1000)
}
// new Pessoa

// Exemplo do msn mozila: 
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// console.log(materials.map((teste) => teste.length));
// Expected output: Array [8, 6, 7, 9]
console.log(materials.map((material) => material.replace('Hydrogen', 'Hidrogenio')))
console.log(materials);

const equipamentos = ['Furadeira', 'lanterna', 'capacete', 'bota', 'Facão']
const mapeando = equipamentos.map((equipar) => equipar.charAt(1))
console.log(mapeando);
