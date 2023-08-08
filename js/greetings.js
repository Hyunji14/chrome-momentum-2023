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
  const date = new Date();
  const hours = date.getHours();
  let greetingLetter = "Hello";

  const clockDiv = document.querySelector("#clock");
  const todoForm = document.querySelector("#todo-form");
  const toDoList = document.querySelector("#todo-list");
  const quote = document.querySelector("#quote");
  const weather = document.querySelector("#weather");

  if (hours < 12) {
    greetingLetter = "Good Morning";
  } else if (12 <= hours && hours < 18) {
    greetingLetter = "Good Afternoon";
  } else {
    greetingLetter = "Good Evening";
  }

  greeting.innerText = `${greetingLetter}, ${username}.`;

  greeting.classList.remove(HIDDEN_CLASSNAME);
  clockDiv.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
  weather.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
