function soma1() { //argments so pode ser usando em funções declaradas functions
    
    const arg = arguments // pega todos os argumentos passados na minha função
    
    const argArray = Array.from(arg)// Array.from tranforma o obj semelhante a um Array em um novo Array
    
    let result = 0
    
    for(let i = 0; i < argArray.length; i++) { //cria um loop para percorrer todo o caminho do meu Array 
        
        result += argArray[i] //soma o meu numero principal com o numero chamado do Array
        
    }
    
    console.log(`A soma total: ${result}`);
    
}

function soma2() { //argments so pode ser usando em funções declaradas functions

    const arg = arguments // pega todos os argumentos passados na minha função

    const argArray = Array.from(arg) // Array.from tranforma o obj semelhante a um Array em um novo Array

    return argArray.reduce((total, num )=> { //reduce recebe (Percorre numeros do array, valor atual)
        return total + num
     })
    
    
    //console.log(`A soma total: ${result}`);

}

soma1(1, 2, 5, 8, 3, 20)

console.log(soma2(1, 2, 5, 8, 3, 20));