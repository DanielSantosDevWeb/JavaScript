
const soma = function(num1) {

    return (num2)=> {
        if (!num2) {
            return num1
        }
        return soma(num1 + num2)
    }
} 

console.log(soma(3)(5)(2)());