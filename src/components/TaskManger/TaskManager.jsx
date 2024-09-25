import {Controller, useFieldArray, useForm} from "react-hook-form";
import React from "react";
import SubtaskManager from "../SubTasks/SubTasks.jsx";
import st from "./TaskManager.module.scss"
import SuperButton from "../UI/SuperButton/SuperButton.jsx";
const TaskManager = () => {
    const {
        control,
        handleSubmit,
        register,
        formState: {errors},
        reset} = useForm({
    });

    const {
        fields,
        append,
        remove } = useFieldArray({
        control,
        name: 'tasks'
    });

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        reset();
    };

    return (
        <form className={st.taskForm} onSubmit={handleSubmit(onSubmit)}>
            <h1>Task Manager</h1>
            <div className={st.taskContainer}>
                {fields.map((task, taskIndex) => (
                    <div className={st.taskField} key={task.id}>
                        <div className={st.taskController}>
                            <div>
                                <div className={st.taskController__title}>
                                    <Controller
                                        name={`tasks[${taskIndex}].completed`}
                                        control={control}
                                        render={({field}) => (
                                        <input
                                            className={st.controller}
                                            type="checkbox"
                                            {...field}
                                            checked={field.value}
                                        />)}
                                    />
                                    <input
                                        {...register(`tasks[${taskIndex}].title`, {
                                            required: "Обязательное поле",
                                            maxLength: 10,
                                        })}
                                        placeholder="Task title"
                                    />
                                    <SuperButton type="button"
                                                 onClick={() => remove(taskIndex)}
                                                 icon={"deleteIcon"}

                                    />
                                </div>

                                {errors?.tasks?.[taskIndex]?.title && (
                                    <p className={st.error}>
                                        {errors.tasks[taskIndex]?.title?.message}
                                    </p>
                                )}
                            </div>

                            <textarea
                                {...register(`tasks[${taskIndex}].description`)}
                                placeholder="Task description"
                                className={st.textarea}
                            />
                        </div>


                        <div className={st.taskField__subtask}>
                            <SubtaskManager taskIndex={taskIndex} control={control} register={register}/>
                        </div>
                    </div>))}
            </div>

            <div className={st.taskSend}>
                <SuperButton
                    type={"button"}
                    icon={"plusIcon"}
                    text="Add Task"
                    onClick={() => append(
                        { title: '', completed: false, subtasks: [{ title: '', completed: false }] })}
                />
                {fields.length > 0 &&
                    <SuperButton
                        type={"submit"}
                        icon={"sendIcon"}
                        text="Send"
                    />

                }
            </div>

        </form>
    );
};

export default TaskManager