document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    let tasks = [];
    let editIndex = null;

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('task-title').value;
        const desc = document.getElementById('task-desc').value;
        const date = document.getElementById('task-date').value;

        const task = {
            title,
            desc,
            date,
            completed: false
        };

        if (editIndex !== null) {
            tasks[editIndex] = task;
            editIndex = null;
        } else {
            tasks.push(task);
        }

        displayTasks();
        taskForm.reset();
    });

    function displayTasks() {
        taskList.innerHTML = ''; // Clear existing tasks
        tasks.forEach((task, index) => displayTask(task, index));
    }

    function displayTask(task, index) {
        const li = document.createElement('li');

        const taskContent = document.createElement('div');
        taskContent.classList.add('task-content');

        const taskTitle = document.createElement('h3');
        taskTitle.textContent = task.title;

        const taskDesc = document.createElement('p');
        taskDesc.textContent = task.desc;

        const taskDate = document.createElement('small');
        taskDate.textContent = `Due: ${task.date}`;

        taskContent.appendChild(taskTitle);
        taskContent.appendChild(taskDesc);
        taskContent.appendChild(taskDate);

        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => editTask(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTask(index));

        taskButtons.appendChild(completeBtn);
        taskButtons.appendChild(editBtn);
        taskButtons.appendChild(deleteBtn);

        li.appendChild(taskContent);
        li.appendChild(taskButtons);

        taskList.appendChild(li);
    }

    function editTask(index) {
        const task = tasks[index];
        document.getElementById('task-title').value = task.title;
        document.getElementById('task-desc').value = task.desc;
        document.getElementById('task-date').value = task.date;
        editIndex = index;
    }

    function deleteTask(index) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            displayTasks();
        }
    }

    // Initial display of tasks
    displayTasks();
});
