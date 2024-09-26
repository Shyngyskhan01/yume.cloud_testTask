import {Controller, useFieldArray, useForm} from "react-hook-form";
import st from "./TaskList.module.scss";
import SuperButton from "../../../shared/ui/Button/SuperButton.jsx";
import React from "react";

const EditTaskForm = ({ task, onSaveTask, onCancelEdit }) => {
    const {
        control,
        handleSubmit,
        reset ,
        formState: { errors },
    }
        = useForm({
        defaultValues: task,
    });

    const { fields,
        append,
        remove
    } = useFieldArray({
        control,
        name: "subtasks",
    });

    const onSubmit = (data) => {
        const updatedTask = {
            ...data,
            subtasks: data.subtasks.filter((subtask) => subtask.title.trim() !== '')
        };
        onSaveTask(updatedTask);
        reset();
    };

    return (
        <form className={st.subTasksField} onSubmit={handleSubmit(onSubmit)}>
            <div className={st.subTaskController}>
                <div className={st.subTaskController__title}>
                    <label htmlFor="title">Title</label>
                    <Controller
                        name="title"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => <input {...field} placeholder="Task title"  className={errors.title ? 'error' : ""}/>}
                    />
                    {errors.title && (
                        <span className={st.errorMessage}>This field is required</span>
                    )}
                </div>
                <div className={st.subTaskController__description}>
                    <label htmlFor="description">Description</label>
                    <Controller
                        name="description"
                        control={control}
                        render={({field}) => <textarea {...field} placeholder="Task description"/>}
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

            <span>Subtasks</span>
            <ul className={st.subTasks}>
                {fields.map((item, index) => (
                    <li className={st.subTasks__item} key={item.id}>
                        <div className={st.subTasks__title}>
                            <Controller
                                name={`subtasks[${index}].title`}
                                control={control}
                                render={({field}) => <input {...field} placeholder="Subtask title"/>}
                            />
                            <SuperButton
                                type="button"
                                onClick={() => remove(index)}
                                icon="deleteIcon"
                            />
                        </div>

                        <div className={st.subTasks__description}>
                            <Controller
                                name={`subtasks[${index}].description`}
                                control={control}
                                render={({field}) => (
                                    <textarea {...field} placeholder={`Subtask #${index + 1} description`}/>)}
                                rules={{
                                    required: "Subtask description is required",
                                    minLength: {
                                        value: 10,
                                        message: "Subtask description must be at least 10 characters",
                                    },
                                }}
                            />
                            {errors?.subtasks?.[index]?.description && (
                                <span className={st.errorMessage}>
                                        {errors.subtasks[index].description.message}
                                    </span>
                            )}
                        </div>
                    </li>))}
            </ul>
            <div className={st.actions}>
                <SuperButton
                    type="button"
                    onClick={() => append({title: '', completed: false})}
                    text="Add Subtask"
                    icon="plusIcon"
                />

                <SuperButton
                    type="submit"
                    text="Save"


                />
                <SuperButton
                    type="button"
                    text="Cancel"
                    onClick={onCancelEdit}
                />
            </div>
        </form>
    );
};

export default EditTaskForm;