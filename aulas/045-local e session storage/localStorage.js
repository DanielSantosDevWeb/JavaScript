const nome = document.querySelector('#nome')
const btnLogin = document.querySelector('#login')
const btnLogout = document.querySelector('#logout')
const form = document.querySelector('#form')
const welcome = document.querySelector('#welcome')


const editarMensagem = ()=> {

    const text = document.querySelector('#textUser')

    const userName = localStorage.getItem('usuario')

    text.textContent = 'Seja bem vindo ' + userName
}

const sumirMensagem = ()=> {

    welcome.style.display = 'none'

}

const mostrarMensagem = ()=> {

    welcome.style.display = 'block'
}

const sumirForm = ()=> {
    form.style.display = 'none'
}

const mostraForm = ()=> {
    form.style.display = 'block'
}

const addUserName = ()=> {
    localStorage.setItem('usuario', nome.value)

    mostrarMensagem()
    editarMensagem()
}


btnLogout.addEventListener('click', (e)=> {

    sumirMensagem()

    mostraForm()

    nome.value = ''

    localStorage.removeItem('usuario')
})


btnLogin.addEventListener('click' , (e)=> {
    e.preventDefault()

    addUserName()

    sumirForm()
})

sumirMensagem()


