import React from "react";
import SuperButton from "../../../shared/ui/Button/SuperButton.jsx";
import st from "./TaskFilter.module.scss"
const TaskFilter = ({ filter, setFilter, searchQuery, setSearchQuery }) => {
    return (
        <div className={st.taskFilter}>
            <div className={st.taskFilter__button}>
                <SuperButton
                    onClick={() => setFilter('all')}
                    style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
                    text="All"
                />

                <SuperButton
                    onClick={() => setFilter('completed')}
                    style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
                    text="Completed"
                />

                <SuperButton
                    onClick={() => setFilter('incomplete')}
                    style={{ fontWeight: filter === 'incomplete' ? 'bold' : 'normal' }}
                    text="Incomplete"
                />
            </div>

            <input
                type="text"
                placeholder="Search by title"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default TaskFilter