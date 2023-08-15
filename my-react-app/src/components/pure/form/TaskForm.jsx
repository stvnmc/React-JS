import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const Taskform = ({ add }) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    function addTask(e) {
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }

    return (
        <form onSubmit={addTask}>
            <div>
                <input ref={nameRef} type="text" required autoFocus placeholder="Task name" />
                <input ref={descriptionRef} type="text" required placeholder="Task descriptcion" />
                <label htmlFor="selectLevel" >Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL}>
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </select>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

Taskform.protoTypes = {
    add: PropTypes.func.isRequired
}

export default Taskform