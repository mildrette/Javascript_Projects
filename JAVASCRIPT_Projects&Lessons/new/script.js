// Select elements from the DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addNewTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }

    const newTask = document.createElement("li");
    newTask.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(newTask);
    taskInput.value = "";

    // Add an event listener to the delete button
    const deleteButton = newTask.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(newTask);
    });

    // Add an event listener to mark the task as complete
    newTask.addEventListener("click", function () {
        newTask.classList.toggle("completed");
    });
}

// Event listener for adding a new task
addTaskButton.addEventListener("click", addNewTask);

// Event listener for adding a new task when the Enter key is pressed
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addNewTask();
    }
});
