document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inpt-criar');
    const createButton = document.getElementById('btn-criar');
    const tasksContainer = document.querySelector('.tasks');
    const aviso = document.getElementById('aviso');
    const criadasCounter = document.getElementById('spn-criadas');
    const concluidasCounter = document.getElementById('spn-concluidas');

    let concluidas = 0;

    createButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();
        if (taskText) {
            criadasCounter.innerText = 1 + Number(criadasCounter.innerText);
            concluidasCounter.innerText = `${concluidas} de ${criadasCounter.innerText}`;

            // Create the task element
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span class="task-text">${taskText}</span>
                <button class="delete-task-btn">
                    <i style="font-size:20px;" class="fa fa-trash"></i>
                </button>
            `;
            tasksContainer.style = "border-top: none;";

            // Add the task element to the tasks container
            tasksContainer.appendChild(taskItem);

            // Clear the input field
            inputField.value = '';

            // Hide the aviso element
            if (aviso) {
                aviso.style.display = 'none';
            }

            // Add event listener to the checkbox
            const checkbox = taskItem.querySelector('.task-checkbox');
            checkbox.addEventListener('change', (event) => {
                if (event.target.checked) {
                    concluidas += 1;
                } else {
                    concluidas -= 1;
                }
                concluidasCounter.innerText = `${concluidas} de ${criadasCounter.innerText}`;
            });

            // Add event listener to the delete button
            const deleteButton = taskItem.querySelector('.delete-task-btn');
            deleteButton.addEventListener('click', () => {
                if (checkbox.checked) {
                    concluidas -= 1;
                }
                tasksContainer.removeChild(taskItem);
                criadasCounter.innerText = Number(criadasCounter.innerText) - 1;
                concluidasCounter.innerText = `${concluidas} de ${criadasCounter.innerText}`;

                if (Number(criadasCounter.innerText) === 0) {
                    aviso.style.display = 'block';
                    tasksContainer.style.borderTop = '1px solid var(--gray-500)';
                }
            });
        }
    });
});
