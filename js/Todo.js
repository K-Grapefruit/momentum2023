const todo_form = document.getElementById("todo-form");
const todo_input = todo_form.querySelector("input");
const todo_ul = document.querySelector("#todo-ul");
const TODO_KEY  = "todos"; 

let toDos = [];

const SavingTodo = () =>{

    localStorage.setItem(TODO_KEY , JSON.stringify(toDos));
    console.log(localStorage.getItem(TODO_KEY));

}



const DeleteTodo = (event) => {
//부모 노드 찾기
const removeli = event.target.parentElement;
removeli.remove();
console.log(removeli);
toDos = toDos.filter((todo) => todo.id !== parseInt(removeli.id));
SavingTodo();

}

const PaintTodo = (newTodo) =>{
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    li.id = newTodo.id;
    
    span.innerText = newTodo.text;
    button.innerText = "❌";
    
    button.addEventListener("click" , DeleteTodo);
    li.append(span);
    li.append(button);
    todo_ul.append(li);

}

const handleToSubmit = (event) =>{
    event.preventDefault();
    const newTodo = todo_input.value;
    todo_input.value = "";
    const newTodoObj = {
        text:newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    PaintTodo(newTodoObj);
    SavingTodo();
}
todo_form.addEventListener("submit",handleToSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if(savedTodos !==null){
    const paresdTodos = JSON.parse(savedTodos);

    paresdTodos.forEach(PaintTodo);
}