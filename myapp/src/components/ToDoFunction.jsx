import React, {useState} from "react";

function ToDoFunction() {
    const[tasks, setTasks] = useState([]);
    const[task, setTask] = useState("");

    const addTask = () => {
        if(task.trim() !=="") {
            setTasks([...tasks, {text: task, completed: false}]);
            setTask("");
        }
    };

    const toggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i!==index);
        setTasks(updatedTasks);
    };

    return(
        <div className="todo-container">
            <input
            type="text"
            value={task}
            placeholder="Type Something..."
            onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index} className={t.completed ? "completed": ""}>
                        <span onClick={()=> toggleTask(index)}>{t.text}</span>
                        <button className="delete-btn" onClick={()=> deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ToDoFunction;
