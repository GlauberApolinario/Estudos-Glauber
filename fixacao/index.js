function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

const nomeAnimais = criarArrayNomesAnimais.map((animais)=>{
    const arrayNome = animais.nome
    return arrayNome
    console.log(arrayNome)

})

return nomeAnimais
console.log(nomeAnimais)
}
const nomeAnimais()