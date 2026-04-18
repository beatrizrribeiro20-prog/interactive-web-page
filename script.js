// Select elements from HTML
const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

// Array to store tasks (state)
let tasks = [];

// Function to render tasks on the screen
function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Toggle class on click (mark as completed)
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
    });
}

// Load tasks from localStorage when page loads
document.addEventListener('DOMContentLoaded', () => {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
});

// Add task when button is clicked
addBtn.addEventListener('click', function () {
    const taskText = input.value;

    // Condition (if/else)
    if (taskText === '') {
        alert('Please enter a task!');
    } else {
        tasks.push(taskText);

        // Save to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        renderTasks();
        input.value = '';
    }
});
