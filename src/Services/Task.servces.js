export class Task{
    taskName; taskDesc; isCompleted; Id;
    static count = 0;

    constructor(name, desc) {
        this.taskName = name;
        this.taskDesc = desc;
        this.isCompleted = false;
        this.Id = ++this.count;
    }

    toggleComplete = () => this.isCompleted = !this.isCompleted;
    updateTask({ name= "", desc= "" } = {} ) {
        if (name.length != 0) this.taskName = name;
        if (desc.length != 0) this.taskDesc = desc;
    }
}

export class TaskList{
    listName; listDesc; isCompleted; Id; taskList;
    static count = 0;

    constructor(name, desc) {
        this.listName = name;
        this.listDesc = desc;
        this.isCompleted = false;
        this.taskList = [];
        this.Id = ++this.count;
    }

    addTask(name , desc) {
        const newTask = new Task(name, desc);
        this.taskList.push(newTask);

        return newTask;
    }

    removeTask(index) {
        if (index >= this.taskList.length) {
            throw new Error("Index Out of Range Exception");
        }
        this.taskList.splice(index, 1);
    }

    updateList({ name= "", desc= "" } = {} ) {
        if (name.length != 0) this.listName = name;
        if (desc.length != 0) this.listDesc = desc;

        return this;
    }
}

export const taskListInstance = new TaskList();