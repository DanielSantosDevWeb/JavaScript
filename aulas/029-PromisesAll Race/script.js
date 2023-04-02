const promessa04 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('promessa01 rodada'), 2000)
})

const promessa05 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('promessa02 rodada'), 500)
})

const promessa06 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('promessa03 rodada'), 1000)
})

Promise.all([promessa04, promessa05, promessa06]).then( function(result) {
    console.log(result); //devolve um array com os resultados das minhas promises
    
}) //Promise.all resolve todas as promises e me manda o resultado



const promessa01 = new Promise( function(resolve, reject) {
    setTimeout( ()=> resolve('promessa01 rodada'), 200)
}) 

const promessa02 = new Promise(function(resolve, reject) {
    setTimeout( ()=> resolve('promessa02 rodada'), 50)
})

const promessa03 = new Promise(function(resolve, reject) {
    setTimeout( ()=> resolve('promessa03 rodada'), 100)
})

Promise.race([promessa01, promessa02, promessa03]).then( function(result) {
    console.log(result); // devolve a primeira promise a ser finalizada 
    
    }) //Promise.race devolve a promise que foi finalizada mais rapido
    
    