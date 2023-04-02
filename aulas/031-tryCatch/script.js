const erro01 = ()=> { // função com erro
    carro1
}

const erro02 = ()=> { // função com erro
    carro2
}

const depois = ()=> { // função a ser executada depois do codigo tryCatch

    console.log('isso eh depois do código');
}

const main = ()=> {
    
    try { //testa de há algum erro no codigo a baixo
    
        erro01()
        erro02()
        
    } catch (e) { // recebe o erro como um obj para tratalo
    
        console.log(`Deu erro no codigo:  ${e.message}`);
        console.log(e);
    } finally { // tudo q vai acontecer depois do tryCatch
    
        depois()
    }
    
}

main()

