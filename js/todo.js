const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }  

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkboxIcon = document.createElement("i")
  checkboxIcon.setAttribute("class","far fa-square")
  checkboxIcon.addEventListener("click", toggleTodo);
  const todo = document.createElement("span");
  todo.setAttribute("class","todo-text")
  todo.innerText = newTodo.text;
  const deleteBtn = document.createElement("i");
  deleteBtn.setAttribute("class","far fa-trash-alt")
  deleteBtn.addEventListener("click", deleteToDo);
  li.appendChild(checkboxIcon);
  li.appendChild(todo);
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);
}

function toggleTodo(e) {
  if(e.target.classList.contains("fa-check-square")){
    e.target.setAttribute("class","far fa-square")
  }else{
    e.target.setAttribute("class","far fa-check-square")
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}