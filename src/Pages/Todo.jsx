import { useState } from "react"
import AddTask from "../Components/AddTask"
import List from "../Components/List"
import { taskListInstance } from "../Services/Task.servces.js";


const Todo = () => {

    const [ taskList , setTaskList ] = useState(taskListInstance.taskList);

    return (
        <div>
            <h1> ToDo App with React + Capacitor </h1>

            <AddTask setTaskList={setTaskList} />
            <List taskList={taskList} setTaskList={setTaskList} />
        </div>
    )
}

export default Todo