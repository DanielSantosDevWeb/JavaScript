const promessa = new Promise( function(resolve, reject) {
    const n1 = Number(prompt('numero maior'))
    const n2 = Number(prompt('numero menor'))
    
    if (n1 > n2) {
        resolve(`o numero ${n1} é maior q o ${n2}`)
    } else {
        reject(`o numero ${n1} é menor q o ${n2}`)
    }
} )

promessa.then( function(resultado) {
    console.log(resultado);
} ).catch( function(erro) {
    console.error(erro)
}).finally( function() {
    console.log('A promisse foi executada');
})