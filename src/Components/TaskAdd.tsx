import React, { FormEvent, useState } from 'react'
import { useTodos } from '../Context/Todos'

const TaskAdd = () => {

    const [task, setTask] = useState('')
    const {addTaskHandler}=useTodos()

    const add = (e:FormEvent<HTMLElement>) => {
        e.preventDefault()
        if (task === '') return alert("Please Type Task First")
        else {
            addTaskHandler(task)
            setTask('')
        }
    }
    return (
        <div>
            <form onSubmit={add} id="form">
                <input type="text" value={task} onChange={e => setTask(e.target.value)} />
                <button type="submit" className="button-34" role="button">Add</button>
            </form>
        </div>
    )
}

export default TaskAdd