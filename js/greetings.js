const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const mainDiv = document.querySelector(".main-div");
  const headerDiv = document.querySelector(".header-div");
  const clockDiv = document.querySelector("#clock");
  const todoForm = document.querySelector("#todo-form");
  const toDoList = document.querySelector("#todo-list");
  const quote = document.querySelector("#quote");

  const date = new Date();
  const hours = date.getHours();
  let greetingLetter = "Hello";

  if (hours < 12) {
    greetingLetter = "Good Morning";
  } else if (12 <= hours && hours < 18) {
    greetingLetter = "Good Afternoon";
  } else {
    greetingLetter = "Good Evening";
  }

  greeting.innerText = `${greetingLetter}, ${username}.`;

  mainDiv.classList.remove(HIDDEN_CLASSNAME);
  headerDiv.classList.remove(HIDDEN_CLASSNAME);
  clockDiv.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
}

function logOutSubmit() {
  localStorage.clear();
}

const logoutBtn = document.querySelector("#logout form > button");
logoutBtn.addEventListener("submit", logOutSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
