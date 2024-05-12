interface ITask {
    id: string,
    title: string,
    type: string,
    complete: boolean
}

function createNewTask(): ITask {
    return {
        id: '',
        title: '',
        type: '',
        complete: false
    }
}

export { ITask, createNewTask }