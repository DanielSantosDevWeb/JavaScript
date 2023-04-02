

var btnAdd = document.getElementById('add')

function addTarefa() {
    const tarefa = document.querySelector('.itens')
    const text = document.querySelector('#textTarefas')
    const list = document.querySelector('.lista')
    
    if (text.value == '') {
        alert('digite alguma tarefa')
        
    } else {
        const copyTarefa = tarefa.cloneNode(true)
        copyTarefa.classList.remove('hide')
        
        copyTarefa.querySelector('output').textContent = text.value
        copyTarefa.style.animation = 'abrir .5s'
        
        list.appendChild(copyTarefa)
        
        copyTarefa.querySelector('.check').addEventListener('click', ()=> {
            
            copyTarefa.style.background = 'green'
            
            console.log(copyTarefa.style);
        })
        
        const btnRem = copyTarefa.querySelector('.remove')
        
        btnRem.addEventListener('click', ()=> {
            btnRem.parentNode.remove(true)
        })
        
        text.value = ''
        console.log();
    }
    
}

btnAdd.addEventListener('click', addTarefa)
