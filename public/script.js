"use strict";
function $(selector) {
    return document.querySelector(selector);
}
let taskList = ['Task 1: Lorem ipsum dolor',
    'Task 2: Asperiores sint porro a voluptatibus iste recusandae labore, rem nam consequatur ducimus, eos maxime ad sit, officia enim illum? Recusandae, id assumenda commodi cumque quia necessitatibus fugiat aperiam sunt magni.',
    'Task 3: Quis fugit dicta excepturi tenetur architecto sit nulla, tempora in facilis ipsum officiis nam eaque repellat inventore voluptates ipsa numquam rerum dolorum non illo aliquam. Facere quis animi minus facilis.',
    'Task 4: Fuga minima quas ab doloribus veritatis reiciendis corrupti molestias voluptates eos voluptatem perferendis iusto amet neque vero accusamus aut quam rem aliquid possimus, cum repellat. Provident, commodi inventore. Deserunt, neque!'];
// let tasksElem = document.querySelector('.tasks')
let tasksElem = $('.tasks');
let i;
// tasksElem.
// for (const task of taskList) {
//     console.log(task);
// }
let taskListHtml = ``;
taskList.forEach(/*callback*/ function (task, index) {
    const taskHtml = `
    <li class="task-card" name="task-card-${index}">
        <div class="task-card__info">
            <div class="task-card__input-block">
                <input class="check-input" type="checkbox" data-index="${index}">
                <div class="task-card__status">In work</div>
            </div>
            <div class="task-name" data-index="${index}">${task}</div>
        </div>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </li>`;
    taskListHtml = taskListHtml + taskHtml;
});
if (tasksElem) {
    tasksElem.addEventListener('click', function (event) {
        if (!event.target)
            return;
        const target = event.target;
        const checkInputElem = target.closest('.check-input[type=checkbox]');
        if (checkInputElem) {
            // console.log(checkInputElem.dataset.index);
            toggleTextDecor(checkInputElem);
            return;
        }
        if (window.matchMedia("(max-width: 400px)").matches) {
            const taskNameElem = target.closest('.task-name');
            if (taskNameElem) {
                toggleCheckbox(taskNameElem);
            }
        }
    } /*, { once: true }*/);
}
function toggleTextDecor(checkbox) {
    if (!checkbox)
        return;
    const statusElem = checkbox.nextElementSibling;
    const taskNameElem = checkbox.parentElement.nextElementSibling;
    if (checkbox.checked) {
        statusElem.textContent = 'Done';
        taskNameElem.style.textDecoration = 'line-through';
    }
    else {
        statusElem.textContent = 'In work';
        taskNameElem.style.textDecoration = '';
    }
}
function toggleCheckbox(textElem) {
    const checkbox = textElem.previousElementSibling.firstElementChild;
    if (textElem.style.textDecoration) {
        textElem.style.textDecoration = null;
        checkbox.checked = false;
        checkbox.nextElementSibling.textContent = 'In work';
    }
    else {
        textElem.style.textDecoration = 'line-through';
        checkbox.checked = true;
        checkbox.nextElementSibling.textContent = 'Done';
    }
}
// tasksElem.onclick = function(event) {
//     console.log(event.target);
// }
// console.log(taskListHtml);
tasksElem.innerHTML = taskListHtml;
