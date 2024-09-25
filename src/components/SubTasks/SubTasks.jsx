import {Controller, useFieldArray} from "react-hook-form";
import React, {useState} from "react";
import SuperButton from "../UI/SuperButton/SuperButton.jsx";
import st from "./SubTasks.module.scss"


const Subtasks = ({ taskIndex, control, register }) => {
    const {
        fields: subtaskFields,
        append: appendSubtask,
        remove: removeSubtask } = useFieldArray({
        control,
        name: `tasks[${taskIndex}].subtasks`
    });
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        if(subtaskFields && !subtaskFields.length) {
            setIsOpen(true);
        }
        setIsOpen(!isOpen);
    }

    return (<div className={st.subTasks}>
        <h3 onClick={handleClickOpen}>Subtasks</h3>
        {isOpen && <div className={st.subTasksContainer}>

            {subtaskFields.length > 0 ? subtaskFields.map((subtask, subtaskIndex) => (
                <div className={st.subtaskField} key={subtask.id}>
                    <div className={st.subtaskField__controller}>
                        <Controller
                            name={`tasks[${taskIndex}].subtasks[${subtaskIndex}].completed`}
                            control={control}
                            render={({field}) => (<input
                                type="checkbox"
                                {...field}
                                checked={field.value}
                            />)}
                        />
                        <input
                            {...register(`tasks[${taskIndex}].subtasks[${subtaskIndex}].title`, {
                                maxLength: 10
                            })}
                            placeholder="Subtask title"
                        />
                        <SuperButton type="button"
                                     onClick={() => removeSubtask(subtaskIndex)}
                                     icon={"deleteIcon"}

                        />
                    </div>

                    <textarea
                        {...register(`tasks[${taskIndex}].subtasks[${subtaskIndex}].description`)}
                        placeholder="Subtask description"
                        className={st.textarea}
                    />
                </div>)) : <div className={st.alternative}>You have no subtasks</div>}

            <SuperButton
                type="button"
                onClick={() => appendSubtask({title: '', completed: false})}
                text={"Add Subtask"}
                icon={"plusIcon"}
            />
        </div>}
    </div>);
};

export default Subtasks;