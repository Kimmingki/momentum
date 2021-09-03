const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// todo를 넣을 배열 만들기
let toDos = [];

function saveToDos() {
  // array를 string 형태로 변형하여 localstorage에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // 클릭한 deletebutton의 li가 뭔지 파악
  const li = event.target.parentElement;
  li.remove();
  // 화면상에서만 삭제하지 않고 localstorage의 내용을 실제로 삭제하고
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  // 그 변경 내용을 저장함
  saveToDos();
}

function paintToDo(newTodo) {
  // 엘레멘트들을 만들어주기
  const li = document.createElement("li");
  // 나중에 local storage에서 삭제를 할 수 있게 id 값을 넣어줌
  li.id = newTodo.id;
  const div = document.createElement("div");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(div);
  div.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  // 기본동작 막음
  event.preventDefault();
  // input 값을 받아오고
  const newTodo = toDoInput.value;
  // input 값을 초기화
  toDoInput.value = "";
  // todo 배열에 넣을 오브젝트 꼴 만들고
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  // todo 배열에 오브젝트 넣기
  toDos.push(newTodoObj);
  // 오브젝트 토대로 todo를 작성하고
  paintToDo(newTodoObj);
  // localstorage에 저장
  saveToDos();
}

// 최초 submit을 탐지
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
