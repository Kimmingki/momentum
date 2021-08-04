const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hiddenClock = document.querySelector("#clock");
const hiddenToDO = document.querySelector("#todo-form");
const hiddenQuote = document.querySelector("#quote");

const HIDDEN_CLASSNAME = "hidden";
const FELX_CLASSNAME = "flex";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // submit 기본 동작 막기
  event.preventDefault();
  const userName = loginInput.value;
  // loginForm 숨기기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // localStorage에 userName 넣기
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName);
  hiddenClock.classList.remove(HIDDEN_CLASSNAME);
  hiddenToDO.classList.remove(HIDDEN_CLASSNAME);
  hiddenQuote.classList.remove(HIDDEN_CLASSNAME);
  hiddenToDO.style.display = "flex";
  hiddenQuote.style.display = "flex";
}

// h1에 유저 이름 적어주기
function paintGreeting(userName) {
  const date = new Date();
  if (date.getHours() > 19 && date.getHours() < 24) {
    greeting.innerText = `Good evening, ${userName}.`;
  } else if (date.getHours() > 0 && date.getHours() < 5) {
    greeting.innerText = `Good night, ${userName}.`;
  } else if (date.getHours() > 5 && date.getHours() < 10) {
    greeting.innerText = `Good morning, ${userName}.`;
  } else if (date.getHours() > 10 && date.getHours() < 19) {
    greeting.innerText = `Good afternoon, ${userName}.`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // form 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  hiddenToDO.style.display = "none";
  hiddenQuote.style.display = "none";
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // greeting 보여주기
  paintGreeting(savedUserName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  hiddenClock.classList.remove(HIDDEN_CLASSNAME);
  hiddenToDO.classList.remove(HIDDEN_CLASSNAME);
  hiddenQuote.classList.remove(HIDDEN_CLASSNAME);
}
