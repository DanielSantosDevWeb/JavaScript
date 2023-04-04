
const timeOut = function(seg) {

    return new Promise( (resolve)=> {
        return setTimeout( ()=> resolve(seg), 1000 )
    } )

} 

const constagemRegresiva = async (seg)=> {
    
    console.log( await timeOut(seg) );

    if (seg === 0) {
        console.log('A contagem acabou');

        return 0
    }
    
    return constagemRegresiva(seg - 1)
}

constagemRegresiva(10)