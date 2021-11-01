function mainReducer(state = taskList, action) {
    switch (action.type) {
        case 'task/toggle':
            return state.map(task => {
                return task.id === action.payload ? ({ ...task, completed: !task.completed }) : task
            })
        case 'task/remove':
            return state.filter(task => {
                return task.id !== action.payload
            })
        default:
            return state
    }
}

function taskToggleAction(id) {
    return { type: 'task/toggle', payload: id }
}

function taskRemoveAction(id) {
    return { type: 'task/remove', payload: id }
}

const store = createStore(mainReducer)

store.subscribe(() => {
    const state = store.getState()
    compareDomToState(state);
})

tasksElem.addEventListener('click', (event) => {
    // event.preventDefault()
    const toggleId = +event.target.closest('.task-card').dataset.id
    console.log(toggleId);
    if (event.target.closest('.check-input[type=checkbox]')) {
        store.dispatch(taskToggleAction(toggleId))
    }
    if (window.matchMedia("(max-width: 400px)").matches && event.target.closest('.task-name')) {
        store.dispatch(taskToggleAction(toggleId))
    }
    if (event.target.closest('.delete')) {
        store.dispatch(taskRemoveAction(toggleId))
    }
})