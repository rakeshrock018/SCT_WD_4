const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <span>${taskInput.value} ${taskDate.value ? " - " + taskDate.value : ""}</span>
    <button onclick="markDone(this)">✔</button>
    <button onclick="editTask(this)">✎</button>
    <button onclick="deleteTask(this)">✖</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
  taskDate.value = "";
}

function markDone(button) {
  let task = button.parentElement.querySelector("span");
  task.classList.toggle("completed");
}

function editTask(button) {
  let task = button.parentElement.querySelector("span");
  let newTask = prompt("Edit task:", task.textContent);
  if (newTask) task.textContent = newTask;
}

function deleteTask(button) {
  button.parentElement.remove();
}