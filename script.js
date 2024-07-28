function addTask() {
    const taskInput = document.getElementById('inputTask');
    const taskText = taskInput.value.trim(); // Trim spaces
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = document.createElement('li');
    const taskList = document.getElementById('taskList');
    newTask.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        newTask.remove();
    };

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
    taskInput.value = "";
}
