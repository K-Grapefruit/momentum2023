const todo_form = document.getElementById("todo-form");
const todo_input = todo_form.querySelector("input");
const todo_ul = document.querySelector("#todo-ul");
const TODO_KEY  = "todos"; 

let toDos = [];

const SavingTodo = () =>{
    console.log(toDos);
    localStorage.setItem(TODO_KEY , JSON.stringify(toDos));
    console.log(localStorage.getItem(TODO_KEY));

}



const DeleteTodo = (event) => {
//부모 노드 찾기
const removeli = event.target.parentElement;
removeli.remove();
console.log(removeli);
toDos = toDos.filter((todo) => todo.id !== parseInt(removeli.id));
console.log("아니 왜");
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
    
    if(toDos.length > 10){
        alert("최대 10개 까지 작성 가능합니다 ");
    }else{

        const newTodoObj = {
            text:newTodo,
            id : Date.now(),
        }

        toDos.push(newTodoObj);
        PaintTodo(newTodoObj);
        SavingTodo();
    }
    
}
todo_form.addEventListener("submit",handleToSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);


if(savedTodos !==null){
    const paresdTodos = JSON.parse(savedTodos);
    toDos = paresdTodos;
    paresdTodos.forEach(PaintTodo);
}