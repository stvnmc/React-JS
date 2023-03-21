import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/level.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'


const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Deafult description', false, LEVELS.NORMAL)

    // Control del ciclo de vida del componete
    const [tasks, setTasks] = useState([defaultTask])
    const [loading, setLoading] = useState(true)

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])

    const changeCompleted = () => {
        console.log('Todo: Cambiar estado de una tarea ')
    }

    console.log(changeCompleted)
    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderzar una lista */}

            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}


export default TaskListComponent
