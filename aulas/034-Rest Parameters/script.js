const multiplicar = (multiplicador, ...restP )=> { // pega o primeiro parâmetro e a Rest pega o resto dos parâmetros

    let vezes = restP.map((num)=> { //percorre todo o array
    
        return num * multiplicador //retorna o valor do array vezes o multiplicador
    } )
    
    console.log(vezes);
    
    return vezes
    
}

console.log(multiplicar(2, 3, 6, 4));