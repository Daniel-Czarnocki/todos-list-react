import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__item${task.done && hideDone
                    ? " tasks__item--hidden"
                    : ""}`
                }
            >
                <button 
                    className="tasks__button tasks__button--toggleDone"
                    onClick={() => toggleTaskDone(task.id)}
                    >
                    {task.done ? "✓" : ""}
                </button>
                <span className={
                    `tasks_wording${task.done ? " tasks_wording--done" : ""}`
                }>
                    {task.content}
                </span>
                <button 
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    &#x1F5D1;
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;