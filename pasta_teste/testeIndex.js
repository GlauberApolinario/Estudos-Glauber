let arr = [1]
arr.map((a,b,c)=>{
    console.log(`
    Primeiro valor: ${a},
    Segundo valor: ${b},
    Terceiro valor: ${c}`)
})

const nomes=["glauber", "aline", "joao", "maria", "zezinho"]

const ordenaNomes = (array)=>{
    const arrayOrdenado= array.sort()
    return arrayOrdenado
}


console.log(ordenaNomes(nomes))