import React, { useState } from "react";
import st from "./TaskList.module.scss"
import EditTaskForm from "./EditTaskForm.jsx";
import SuperButton from "../../../shared/ui/Button/SuperButton.jsx";
const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
    const [editIndex, setEditIndex] = useState(null);

    const handleSaveTask = (index, updatedTask) => {
        onEditTask(index, updatedTask);
        setEditIndex(null);
    };

    return (
        <div className={st.taskList}>
            {tasks.map((task, index) => (
                <div key={index} >
                    {editIndex === index ? (
                        <EditTaskForm
                            task={task}
                            onSaveTask={(updatedTask) => handleSaveTask(index, updatedTask)}
                            onCancelEdit={() => setEditIndex(null)}
                        />
                    ) : (<div className={st.taskList__items}>
                        <div className={st.taskList__header}>
                            <span style={{textDecoration: task.completed ? 'line-through' : 'none'}} className={st.taskList__title}>{task.title}</span>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onEditTask(index, {...task, completed: !task.completed})}
                            />
                        </div>
                        <p>{task.description}</p>

                        {task.subtasks.length > 0 ? <h4>Subtasks</h4> : ""}
                        <ul>
                            {task.subtasks && task.subtasks
                            .filter((subtask) => subtask.title.trim() !== '')
                            .map((subtask, subIndex) => (
                                <li className={st.taskList__item} key={subIndex}>
                                    <div className={st.taskList__subTaskDescription}>
                                        <div className={st.taskList__subTaskDescriptionText}>
                                            <span style={{textDecoration: subtask.completed ? 'line-through' : 'none'}}>{subtask.title}</span>
                                            <input
                                                type="checkbox"
                                                checked={subtask.completed}
                                                onChange={() => onEditTask(index, {
                                                    ...task, subtasks: task.subtasks.map((st, i) => i === subIndex ? {
                                                        ...st, completed: !st.completed
                                                    } : st),
                                                })}
                                            />
                                        </div>
                                        <span>{subtask.description}</span>
                                    </div>
                                </li>))}
                        </ul>

                        <div className={st.actions}>
                            <SuperButton
                                onClick={() => setEditIndex(index)}
                                icon={"editIcon"}
                            />
                            <SuperButton
                                onClick={() => onDeleteTask(index)}
                                icon={"deleteIcon"}
                            />
                        </div>
                    </div>)}
                </div>))}
        </div>);
};

export default TaskList;
