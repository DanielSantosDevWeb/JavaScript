setTimeout( () => {
    console.log('setTimeOut iniciou');
}, 3000 )

var n1 = 0

setInterval( () => {
    
    n1 += 1
    console.log('setInterval Rodando ' + n1);
}, 1000 )