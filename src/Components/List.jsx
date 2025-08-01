import ListItem from "./ListItem";

const List = ({ taskList }) => {

    return (
        <div>
            <ul>
                {
                    taskList.map((task, index) => (
                        <ListItem key={index} name={task.taskName} desc={task.taskDesc} />
                    ))
                }
            </ul>
        </div>
    )
}

export default List