import {Controller, useFieldArray, useForm} from "react-hook-form";
import React, {useState} from "react";
import st from "./TaskForm.module.scss"
import SuperButton from "../../../shared/ui/Button/SuperButton.jsx";
const TaskForm = ({ onAddTask }) => {

    const [isOpen, setIsOpen] = useState(false);
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            completed: false,
            subtasks: [{ title: '', completed: false }],
        },
    });

    const {
        fields,
        append,
        remove
    } = useFieldArray({
        control,
        name: 'subtasks',
    });

    const onSubmit = (data) => {
        onAddTask(data);
        reset();
    };

    return (
        <form className={st.formField} onSubmit={handleSubmit(onSubmit)}>
            <div className={st.taskController}>
                <div className={st.taskController__title}>
                    <label htmlFor="title">Title</label>
                    <Controller
                        name="title"
                        control={control}
                        render={({field}) => (
                            <input {...field} placeholder="Task title" className={errors.title ? 'error' : ""}/>
                        )}
                        rules={{required: true}}
                    />
                    {errors.title && (
                        <span className={st.errorMessage}>This field is required</span>
                    )}
                </div>

                <div className={st.taskController__description}>
                    <label htmlFor="description">Description</label>
                    <Controller
                        name="description"
                        control={control}
                        render={({field}) => (
                            <textarea {...field} placeholder="Task description"/>
                        )}
                        rules={{
                            required: "Description is required",
                            minLength: {
                                value: 10,
                                message: "Description must be at least 10 characters",
                            },
                        }}
                    />
                    {errors.description && (
                        <span className={st.errorMessage}>{errors.description.message}</span>
                    )}
                </div>
            </div>

            <span className={st.subTasksTitle} onClick={() => setIsOpen(!isOpen)}>Subtasks</span>
            {isOpen &&
                <div className={st.subTasks}>

                {fields.map((item, index) => (
                    <div className={st.subTasks__box} key={item.id}>
                        <div className={st.fromSubTask} >
                            <Controller
                                name={`subtasks[${index}].title`}
                                control={control}
                                render={({field}) => (<input {...field} placeholder={`Subtask #${index + 1}`}/>)}

                            />
                            <SuperButton
                                type="button"
                                onClick={() => remove(index)}
                                icon="deleteIcon"
                            />
                        </div>
                        <div className={st.taskController__description} >
                            <Controller
                                name={`subtasks[${index}].description`}
                                control={control}
                                render={({field}) => (
                                    <textarea {...field} placeholder={`Subtask #${index + 1} description`}/>)}
                                rules={{
                                    required: "Description is required",
                                    minLength: {
                                        value: 10,
                                        message: "Description must be at least 10 characters",
                                    },
                                }}
                            />
                            {errors.description && (
                                <span className={st.errorMessage}>{errors.description.message}</span>
                            )}
                        </div>

                    </div>


                ))}
                    <SuperButton
                        type="button"
                        icon="plusIcon"
                        text="Add Subtask"
                        onClick={() => append({title: '', completed: false})}
                    />

                </div>}

            <SuperButton
                type="submit"
                text="Add Task"
                icon="plusIcon"
            />
        </form>);
};

export default TaskForm;