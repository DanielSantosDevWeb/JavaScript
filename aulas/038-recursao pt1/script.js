const somarNumeros = (num)=> {
    
    if (num === 1) {
        return 1
    }

    return num + somarNumeros(num - 1)
}

console.log(somarNumeros(20));