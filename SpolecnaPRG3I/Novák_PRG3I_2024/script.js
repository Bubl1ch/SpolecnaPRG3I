document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const timeDisplay = document.getElementById('time');

    fetch('http://worldtimeapi.org/api/timezone/Europe/Prague')
        .then(response => response.json())
        .then(data => {
            const dateTime = new Date(data.datetime);
            timeDisplay.textContent = `Aktuální čas: ${dateTime.toLocaleTimeString()}`;
        })
        .catch(error => {
            console.error('Error fetching time:', error);
            timeDisplay.textContent = 'Nepodařilo se načíst čas';
        });

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
