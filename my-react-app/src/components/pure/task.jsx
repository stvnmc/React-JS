import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { FaToggleOn, FaToggleOff, FaRegTrashAlt } from "react-icons/fa";
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <span>
                        {task.level}
                    </span>
                );
            case LEVELS.URGENT:
                return (
                    <span>
                        {task.level}
                    </span>
                );
            case LEVELS.BLOCKING:
                return (
                    <span>
                        {task.level}
                    </span>
                );
            default:
                break;
        }
    }

    function taskCompletedIcon() {
        if (task.completed) {
            return (<FaToggleOn className='icon' onClick={() => complete(task)} />)
        } else {
            return (<FaToggleOff className='icon' onClick={() => complete(task)} />)
        }
    }

    return (
        <tr>
            <th>
                <span>{task.name}</span>
            </th>
            <td>
                <span>{task.description}</span>
            </td>
            <td>
                {taskLevelBadge()}
            </td>
            <td>
                <span>
                    {taskCompletedIcon()}
                    <FaRegTrashAlt className='icon' onClick={() => remove(task)} />
                </span>
            </td>
        </tr>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent
