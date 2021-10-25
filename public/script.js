let taskList = ['Task 1: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit repellendus nobis itaque commodi corrupti fugiat culpa. Incidunt, aut? Velit animi nostrum modi numquam neque consectetur, est vel accusantium magnam reiciendis?', 
'Task 2: Asperiores sint porro a voluptatibus iste recusandae labore, rem nam consequatur ducimus, eos maxime ad sit, officia enim illum? Recusandae, id assumenda commodi cumque quia necessitatibus fugiat aperiam sunt magni.',
'Task 3: Quis fugit dicta excepturi tenetur architecto sit nulla, tempora in facilis ipsum officiis nam eaque repellat inventore voluptates ipsa numquam rerum dolorum non illo aliquam. Facere quis animi minus facilis.',
'Task 4: Fuga minima quas ab doloribus veritatis reiciendis corrupti molestias voluptates eos voluptatem perferendis iusto amet neque vero accusamus aut quam rem aliquid possimus, cum repellat. Provident, commodi inventore. Deserunt, neque!']

let tasksElem = document.querySelector('.tasks')

// for (const task of taskList) {
//     console.log(task);
// }

let taskListHtml = ``

taskList.forEach(/*callback*/function(task) {
    const taskHtml = `
    <li class="task-card">
        <div class="task-name">${task}</div>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </li>`
    taskListHtml = taskListHtml + taskHtml
})

console.log(taskListHtml);
tasksElem.innerHTML = taskListHtml