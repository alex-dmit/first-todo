function compareDomToState(state) {
    const list = [...tasksElem.querySelectorAll('.task-card')].map(elem => {
        return { 
            elem, 
            id: +elem.dataset.id, 
            text: elem.querySelector('.task-name').textContent,
            completed: elem.dataset.completed === 'true' ? true : false 
        }
    })
    const stateIds = state.map(task => task.id)
    const listIds = list.map(el => el.id)
    const intersectIds = _.intersection(stateIds, listIds)
    updateList(intersectIds, state, list)
    if (stateIds.length !== listIds.length) {
        if (stateIds.length > listIds.length) {
            const taskId = _.difference(stateIds, listIds)[0]
            addElemToList(taskId, state)
        } else {
            const taskId = _.difference(listIds, stateIds)[0]
            removeElemFromList(taskId)
        }
    }
}

function addElemToList(id, state) {
    const task = state.find(task => task.id === id)
    tasksElem.appendChild(createTaskElement(task))
}

function removeElemFromList(id) {
    tasksElem.querySelector(`.task-card[data-id="${id}"]`).remove()
}

function updateList(ids, state, list) {
    ids.forEach(id => {
        const task = state.find(task => task.id === id)
        const elem = list.find(elem => elem.id === id)
        if (task.text !== elem.text) elem.elem.querySelector('.task-name').textContent = task.text
        if (task.completed !== elem.completed) toggleElem(elem.elem, task.completed)
    })
}

function toggleElem(elem, completed) {
    const checkbox = elem.querySelector('.check-input')
    checkbox.checked = completed ? true : false
    const status = elem.querySelector('.task-card__status')
    status.textContent = completed ? 'Done' : 'In work'
    const taskName = elem.querySelector('.task-name')
    taskName.style.textDecoration = completed ? 'line-through' : null
    elem.dataset.completed = completed
}