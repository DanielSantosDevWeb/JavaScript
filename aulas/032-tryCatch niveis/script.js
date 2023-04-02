const erro01 = ()=> {
    try {
        let n1 = 6
        
        if (5 <= n1) {
            
            throw new Error(' n1 tem q ser menor q 5 ') //cria um novo erro e força ele a ser passado
            
        } else {
            
            console.log('tudo certo');
        }
        
    } catch (e) {
        throw e // força o erro ser passado acima dos outros
    }
}

const erro02 = ()=> {
    
    carro02 // erro na forma de digitação
    
}

const depois = ()=> {
    console.log('isso eh depois do código');
}

const main = ()=> {
    
    try {
        erro01() // chama a função 
        erro02() // chama a função com erro de digitação, por padrão ela seria retornada ao catch como o erro
    } catch (e) {
        console.error(e);
    } finally {
        depois()
    }
        
}

main()

