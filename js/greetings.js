const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const SAVED_USER_NAME_KEY = "username";
const savedUserName = localStorage.getItem(SAVED_USER_NAME_KEY);

function onLoginSubmit(event) {
  const username = loginInput.value;

  localStorage.setItem(SAVED_USER_NAME_KEY, username);

  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);

  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null) {
  // Show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  // Show the greeting
  paintGreetings(savedUserName);
}

loginForm.addEventListener("submit", onLoginSubmit);
