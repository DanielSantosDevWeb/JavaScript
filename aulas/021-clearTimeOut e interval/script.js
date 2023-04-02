var n1 = 0

var clearOut = setTimeout( () => {
    console.log('setTimeOut executado');
}, 2000 )

n1 = 5

if ( n1 > 4) {
    clearTimeout(clearOut)
    console.log('passou de 4');
}

//clearInterval 

var n2 = 0

var clearInt = setInterval(() => {
    n2 += 1
    console.log(n2);
    
    if (n2 >= 5) {
        
        clearInterval(clearInt)
        console.log('chegou no 5');
    }
}, 1000 )

/*setTimeout(() => {
    clearInterval(clearInt)
    console.log('parou de contar 10s');
}, 10000 )*/

