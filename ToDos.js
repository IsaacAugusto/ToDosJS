listElement = document.querySelector('#app ul');
inputElement = document.querySelector('#app input');
buttonElement = document.querySelector('#app button');

var todos =JSON.parse(localStorage.getItem('todo_list')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var pos = todos.indexOf(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.href = '#';
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        
    }
}

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    saveStorage();
    renderTodos();
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    saveStorage();
    renderTodos();
}

function saveStorage(){
    localStorage.setItem('todo_list', JSON.stringify(todos));
}

buttonElement.setAttribute('onclick', 'addTodo()');

renderTodos();

