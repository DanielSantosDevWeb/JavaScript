const promise1 = ()=> new Promise( (resolve, reject)=> {
    
    setTimeout( ()=> resolve('promise 1 feita'), 6000 )// função a ser executada depois de 6s
    
}  )


const promise2 = ()=> new Promise( (resolve, reject)=> {
    
    setTimeout( ()=> resolve('promise 2 feita'), 3000 )// função a ser executado depois de 3s
    
    } )


const promise3 = ()=> new Promise( (resolve, reject)=> {
    setTimeout( ()=> resolve('promise 3 feita'), 1000 )// função a ser executada depois de 1s
})

async function funcAsync() { //cria uma função assincrona

    const result1 = await promise3() //pede q a função seja retornada para q o codigo siga
    
    console.log('Promise 1');
    
    const result2 = await promise2()
    console.log('promise 2');
    
    const result3 = await promise1()
    console.log('promise 3');
    
    console.log(result1 + '\n' + result2, '\n', result3); // loga os retornos das minhas funções
}

//funcAsync() //chama a função assíncrona


