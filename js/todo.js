const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn off", item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
  const parsedToDos = JSON.parse(savedTodos);

  parsedToDos.forEach(sayHello);
}
