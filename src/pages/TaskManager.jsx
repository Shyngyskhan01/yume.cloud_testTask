import React, {useEffect, useState} from "react";
import st from "./Taskmanager.module.scss";
import TaskForm from "../features/taskAdd/ui/TaskForm.jsx"
import TaskList from "../features/taskEdit/ui/TaskList.jsx"
import TaskFilter from "../features/taskFilter/ui/TaskFilter.jsx"
const TaskManager = () => {

    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleEditTask = (index, updatedTask) => {
        const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') {
            return task.completed;
        }
        if (filter === 'incomplete') {
            return !task.completed;
        }
        return true;
    });

    const searchedTasks = filteredTasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={st.container}>
            <div className={st.taskForm}>
                <h2>Add a new task</h2>
                <TaskForm onAddTask={handleAddTask} />
            </div>

            <div className={st.taskList}>
                <h2>Task List</h2>
                <TaskFilter
                    filter={filter}
                    setFilter={setFilter}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <TaskList tasks={searchedTasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
            </div>
        </div>
    );
};

export default TaskManager;