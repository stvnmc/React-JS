import React, { useEffect, useState, useEffect } from 'react'
import { LEVELS } from '../../models/level.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'


const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Deafult description', false, LEVELS.NORMAL)

    // Control del ciclo de vida del componete
    const [task, setTasks] = useState([defaultTask])
    const [loading, setLoading] = useState(true)

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [task])

    const changeCompleted = (id) => {
        console.log('Todo: Cambiar estado de una tarea ')
    }

    return (
        <div>
            <div>
                Your Tasks:
            </div>
            {/* TODO: Aplicar un For/Map para renderzar una lista */}

            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}


export default TaskListComponent
