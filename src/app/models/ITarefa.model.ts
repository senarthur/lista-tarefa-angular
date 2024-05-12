interface ITask {
    title: string,
    type: string,
    priority: string,
    complete: boolean
}

function createNewTask(): ITask {
    return {
        title: '',
        type: '',
        priority: '',
        complete: false
    }
}

export { ITask, createNewTask }