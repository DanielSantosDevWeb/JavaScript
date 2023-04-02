// Destructuring array

const exemplo1 = function(){
    
    const arrayEx = ['um', 'dois', 'três']
    
    const [um, dois, tres] = arrayEx // cria variáveis desustruturada e atribui os valores do arrayEx
    
    console.log(dois);
    
}

const exemplo2 = function() {
    
    let eu, tu, ele

    [eu, , ele] = ['carlos', 'Daniel', 'pedro'] // destrutura minua variavel e atribui os valores a variavel
    
    console.log(eu);
    
}

const exemplo3 = function() {
    
    let um, dois, tres
    
    [ um = 'um 1', dois = 'dois 2', tres = 'tres'] = [5, undefined, 4] // undefined serve p n atribuir nenhum valor ao valor padrão
    
    console.log( dois );
    
}

// Destructuring objetos 

const exemplo4 = ()=> {
    
    let a, b;
    
    ({a , b} = {a : 3, b : 5}) //parênteses obrigatório para o js entender q se trata de um destructuring
    
    console.log(a , b );
    
}

const exemplo5 = ()=> {
    
    let numeros = { um : 1 , dois : 2 , tres : 3 }
    
    const { um : um1 , dois : dois2 , tres : tres3 } = numeros
    
    console.log(um1);
    
}

const exemplo6 = ()=> {
    
    let obj = { y : '2', x : '1' }
    
    let = { x = 'one', y = 'two' } = obj
    
    
    console.log(x, y);
    
}

const exemplo7 = ()=> {
    
    const metaDados = {
        name : 'Test Destructuring', 
        type : 'destructuring', 
        locate : [{
            arquivo : 'JavaScript/ aulas/ 036'
            }], 
        size : '150mb'
    }
    
    const {name : desName , size = 'ss', locate = 'loca'} = metaDados
    
    console.log(size);
    
}

exemplo7()

