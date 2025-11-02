
// console.log("todo")
// const taskInput = document.getElementById("task");
// const addBtn = document.getElementById("addBtn");
// const ul = document.querySelector("#todo-list");
// localStorage.setItem("todo",JSON.stringify([]))
// const addTask = (e) => {
//     e.preventDefault();
//     const taskValue = taskInput.value.trim();
//     if (!taskValue) {
//         alert("Enter task")
//         taskInput.focus()
//         return
//     }
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     span.setAttribute("class", "list-item")
//     span.textContent = taskValue;
//     const delBtn = document.createElement("button");
//     delBtn.setAttribute("class", "del-btn")
//     delBtn.textContent = "x";
//     li.append(span, delBtn)
//     ul.appendChild(li)
//     taskInput.value = "";
//     li.addEventListener("click", () => {
//         span.classList.toggle("done")
//     })
//     delBtn.addEventListener("click", () => {
//         li.remove();
//     })
// }
// addBtn.addEventListener("click", addTask);

const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const ul = document.querySelector("#todo-list");
// ✅ Get todos from localStorage (or initialize)
const getTodos = () => JSON.parse(localStorage.getItem("todos")) || []
// ✅ Save todos to localStorage
const saveTodos = (todos) => localStorage.setItem("todos", JSON.stringify(todos));
// ✅ Render all tasks
const renderTodos = () => {
    ul.innerHTML = "" //clear list first
    const todos = getTodos();
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.setAttribute("class", "list-item")
        span.textContent = todo;
        const delBtn = document.createElement("button");
        delBtn.setAttribute("class", "del-btn");
        delBtn.textContent = "x";
        li.append(span, delBtn)
        ul.appendChild(li);
        // ✅ Mark as done
        li.addEventListener("click", () => {
            span.classList.toggle("done")
        })
        // ✅ Delete logic
        delBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const updatedTodos = todos.filter((_, i) => i !== index);
            saveTodos(updatedTodos);
            renderTodos();
            li.remove();
        })
    })
}
// ✅ Add a new task
const addTask = (e) => {
    e.preventDefault();
    const taskValue = taskInput.value.trim();
    if (!taskValue) {
        alert("Enter task")
        taskInput.focus()
        return
    }
    const todos = getTodos();
    saveTodos([...todos, taskValue])
    taskInput.value = "";
    renderTodos()
}
// ✅ Event listener for add button
addBtn.addEventListener("click", addTask)
// ✅ Show tasks when page loads
document.addEventListener("DOMContentLoaded", renderTodos)