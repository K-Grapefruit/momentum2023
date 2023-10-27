const todo_form = document.getElementById("todo-form");
const todo_input = todo_form.querySelector("input");
const todo_ul = document.querySelector("#todo-ul");
const TODO_KEY  = "todos"; 

const toDos = [];

const SavingTodo = () =>{

    localStorage.setItem(TODO_KEY , JSON.stringify(toDos));
    console.log(localStorage.getItem(TODO_KEY));

}
const DeleteTodo = (event) => {
//부모 노드 찾기
const removeli = event.target.parentElement;
removeli.remove();

}

const PaintTodo = (newTodo) =>{
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener("click" , DeleteTodo);
    
    span.innerText = newTodo;
    button.innerText = "❌";
    
    li.append(span);
    li.append(button);
    todo_ul.append(li);

}

const handleToSubmit = (event) =>{
    event.preventDefault();
    const newTodo = todo_input.value;
    todo_input.value = "";
    toDos.push(newTodo);
    PaintTodo(newTodo);
    SavingTodo();
}
todo_form.addEventListener("submit",handleToSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if(savedTodos !==null){
    const paresdTodos = JSON.parse(savedTodos);

    paresdTodos.forEach(element => {
        console.log(element);
    });
}