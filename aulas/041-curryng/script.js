
const ehMaior = function(n1) {
    return (n2)=> {
        return n1 > n2 
    }
}


const ehMaiorCurryng = function(n1) {
    let valor = false 

    return function curryng2(n2) {
        if( !n2 ) {
            return valor 
        }
        valor = n1 > n2 

        n1 = n2 

        return curryng2
    } 
    
}

console.log(ehMaiorCurryng(5)(2)(4)());
