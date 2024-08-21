const button = document.querySelector('.button-add-task');
const input =  document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-tasks');

let minhaListaDeItens = [];

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
};

function mostrarTarefas(){

    let novaLi = ''

    minhaListaDeItens.forEach((item, poiscao) => {
        novaLi = novaLi + `
            <li class="task ${item.concluida && "done"}">
                <img src="./Imagens/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${poiscao})">
                <p>${item.tarefa}</p>
                <img src="./Imagens/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${poiscao})">
            </li>
        `
    });

    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
};

function concluirTarefa(poiscao){
    minhaListaDeItens[poiscao].concluida = !minhaListaDeItens[poiscao].concluida 
    mostrarTarefas()
};

function deletarItem(poiscao){
    minhaListaDeItens.splice(poiscao, 1)
    mostrarTarefas()
};

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()
};

button.addEventListener('click', adicionarNovaTarefa);
