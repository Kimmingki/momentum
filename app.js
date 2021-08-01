const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
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
}

// h1에 유저 이름 적어주기
function paintGreeting(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // form 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // greeting 보여주기
  paintGreeting(savedUserName);
}
