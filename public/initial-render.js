"use strict";
var taskList = [{ id: 0, text: 'Task 1: Lorem ipsum dolor', completed: false },
    { id: 1, text: 'Task 2: Asperiores sint porro a voluptatibus iste recusandae labore, rem nam consequatur ducimus, eos maxime ad sit, officia enim illum? Recusandae, id assumenda commodi cumque quia necessitatibus fugiat aperiam sunt magni.', completed: true },
    { id: 2, text: 'Task 3: Quis fugit dicta excepturi tenetur architecto sit nulla, tempora in facilis ipsum officiis nam eaque repellat inventore voluptates ipsa numquam rerum dolorum non illo aliquam. Facere quis animi minus facilis.', completed: false },
    { id: 3, text: 'Task 4: Fuga minima quas ab doloribus veritatis reiciendis corrupti molestias voluptates eos voluptatem perferendis iusto amet neque vero accusamus aut quam rem aliquid possimus, cum repellat. Provident, commodi inventore. Deserunt, neque!', completed: true }];
var tasksElem = document.querySelector('.tasks');
function createTaskElement(task) {
    var div = document.createElement('div');
    div.innerHTML = "\n    <li class=\"task-card\" data-id=\"" + task.id + "\" data-completed=\"" + task.completed + "\">\n        <div class=\"task-card__info\">\n            <div class=\"task-card__input-block\">\n                <input class=\"check-input\" type=\"checkbox\">\n                <div class=\"task-card__status\">" + (task.completed ? 'Done' : 'In work') + "</div>\n            </div>\n            <div class=\"task-name\" style=\"" + (task.completed ? 'text-decoration: line-through;' : '') + "\">" + task.text + "</div>\n        </div>\n        <button class=\"edit\">Edit</button>\n        <button class=\"delete\">Delete</button>\n    </li>";
    var checkboxEl = div.querySelector('.check-input');
    checkboxEl.checked = task.completed;
    return div.firstElementChild;
}
taskList.forEach(function (task) {
    tasksElem.appendChild(createTaskElement(task));
});
// tasksElem.append(...taskList.map(createTaskElement) as Node[])
// function createTaskElement(task: Task) {
//     const taskFragment = <DocumentFragment>taskTemplate.content.cloneNode(true);
//     const taskNameEl = taskFragment.querySelector<HTMLDivElement>('.task-name')!
//     taskNameEl.style.textDecoration = task.completed ? 'line-through' : ''
//     taskNameEl.textContent = task.text
//     const taskStatusEl = taskFragment.querySelector<HTMLDivElement>('.task-card__status')!
//     taskStatusEl.textContent = task.completed ? 'Done' : 'In work'
//     const taskLiEl = taskFragment.firstElementChild!;
//     taskLiEl.setAttribute('data-id', `${task.id}`)
//     const checkboxEl = taskFragment.querySelector<HTMLInputElement>('.check-input')!
//     checkboxEl.checked = task.completed
//     return taskFragment;
// }
// let taskListHtml = ``
// taskList.forEach(/*callback*/function (task) {
//     const taskHtml = `
//     <li class="task-card" name="task-card-${task.id}">
//         <div class="task-card__info">
//             <div class="task-card__input-block">
//                 <input class="check-input" type="checkbox">
//                 <div>In work</div>
//             </div>
//             <div class="task-name">${task.text}</div>
//         </div>
//         <button class="edit">Edit</button>
//         <button class="delete">Delete</button>
//     </li>`
//     taskListHtml = taskListHtml + taskHtml
// })
// tasksElem.innerHTML = taskListHtml
