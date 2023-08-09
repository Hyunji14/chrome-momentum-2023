const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function checkedToDo(event) {
  const li = event.target.parentElement;
  const span = document.querySelector(`#${li.id} > span`);

  if (event.target.checked) {
    span.style.textDecorationLine = "line-through";
  } else {
    span.style.textDecorationLine = "";
  }
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== li.id);
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = `${newTodo.id}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", checkedToDo);

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  if (todoInput.value) {
    const newTodo = todoInput.value;

    todoInput.value = "";

    const newToDoObj = {
      text: newTodo,
      id: `d${Date.now()}`,
    };

    if (toDos.length < 3) {
      toDos.push(newToDoObj);
      paintToDo(newToDoObj);
      saveToDos();
    } else {
      alert("It can be Up to Three. :D");
    }
  } else {
    alert("Oops, please write your toDo");
  }
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
