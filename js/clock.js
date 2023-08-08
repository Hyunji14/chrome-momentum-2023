const mainDiv = document.querySelector(".main-div");
const clock = document.querySelector(".main-div h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getHours()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);

const userCheck = localStorage.getItem("username");
const HIDDEN_CLASS = "hidden";

if (userCheck !== null) {
  mainDiv.classList.remove(HIDDEN_CLASS);
}
