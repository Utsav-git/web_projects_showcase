// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

// Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// filterOption.addEventListener("click", filterTodo);

// Functions

function addTodo(e) {
  //Prevent from submitting the form
  e.preventDefault();

  // Create todo DIV

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo);

  // Checked button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);

  // Trash button

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);

  // Append to list

  todoList.appendChild(todoDiv);

  // clear the input field value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  //Delete TODO

  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  //Checked TODO
  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
// TODO FILTER......
// function filterTodo(e){
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         switch (e.target.value) {
//             case "all":
//                 todo.style.display = "flex";
//             break;

//             case "complete":
//                 if(todo.classList.contains("completed")){
//                     todo.style.display = "flex";
//                 }else{
//                     todo.style.display = "none";
//                 }
//             break;
//         }
//     });

// }

function saveLocalTodos(todo) {
  // Check Do we already have a todo in there?

  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  }
}
