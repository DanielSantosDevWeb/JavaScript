const promi = new Promise( (resolve, reject)=> {
    let n1 = 5
    if ( n1 > 2) {
        resolve( 'promise deu certo' )
    } else {
        reject( 'promise foi rejei' )
    }
} )

promi.then( console.log ).catch( console.log )
