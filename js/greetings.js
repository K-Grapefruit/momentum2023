const LoginForm = document.querySelector("#Login-form");
const LoginInput = LoginForm.querySelector("#Login-form input");
const Me = document.querySelector("#Introduce");
const todo_ssibal = document.querySelector("#todo-form");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "Username";
const SavedUsername = localStorage.getItem(USERNAME_KEY);

const handleSubmit = (event) =>{
    // 자동 Submit 방지
    event.preventDefault();
    const username = LoginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    LoginForm.classList.add(HIDDEN_CLASS);
    Hello(username);
}

const Hello = (username) =>{
    
    Me.classList.remove(HIDDEN_CLASS);
    todo_ssibal.classList.remove(HIDDEN_CLASS);
    Me.innerText = `Hello ${username}`;
}


if(SavedUsername === null){
    //localstorage에 값이 저장되어 있지 않을때  

    console.log(todo_ssibal);
    LoginForm.classList.remove(HIDDEN_CLASS);
    todo_ssibal.classList.add(HIDDEN_CLASS);
    LoginForm.addEventListener("submit" , handleSubmit);
}else{
    //localstorage에 값이 저장되어있을때
    Hello(SavedUsername);
}