document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    let tasks = [];

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText === '') return;
        
        const task = {
            id: Date.now(),
            text: taskText
        };

        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    });

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${task.text}
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }

    window.deleteTask = function(id) {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    };
});
