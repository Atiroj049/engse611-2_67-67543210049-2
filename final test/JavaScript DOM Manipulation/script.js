document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const taskType = document.getElementById('taskType').value;

    if (taskText === '') return; 

    const li = document.createElement('li');

    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = '×';
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        if (confirm('คุณแน่ใจที่จะลบรายการนี้?')) {
            li.remove();
        }
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
});
