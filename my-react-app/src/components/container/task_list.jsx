import React, { useState } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
import Taskform from '../pure/form/TaskForm'



const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])

    function completeTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed
        setTasks(tempTasks)
    }

    function deleteTask(task) {
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }

    function addTask(task) {
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }

    return (
        <div className='container'>
            <div className="hola">
                <h1>
                    Your Tasks:
                </h1>
            </div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((tasks, index) => {
                            return (
                                <TaskComponent
                                    key={index}
                                    task={tasks}
                                    complete={completeTask}
                                    remove={deleteTask}
                                ></TaskComponent>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <Taskform add={addTask}></Taskform>
        </div>
    )
}



export default TaskListComponent
