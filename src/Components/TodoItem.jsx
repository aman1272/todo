const TodoItem = ({ index, task, completeTask, deleteTask }) => {

    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => completeTask(index)}
            />
            <span
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                }}
            >
                {task.description}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
    );
};
export default TodoItem