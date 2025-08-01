import { taskListInstance } from "../Services/Task.servces.js";

const AddTask = ({ setTaskList }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        taskListInstance.addTask(e.target.taskName.value, e.target.taskDesc.value);
        setTaskList([...taskListInstance.taskList]);

        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} >
            <label>
                Task Name:
                <input type="text" name="taskName" />
            </label>

            <label>
                Task Desc:
                <input type="text" name="taskDesc" />
            </label>

            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddTask