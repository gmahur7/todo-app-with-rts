import { useSearchParams } from 'react-router-dom'
import { Todo, useTodos } from '../Context/Todos'

const Todos = () => {
    const { todos, toggleTodoCompleted, handleDelete } = useTodos()
    const [searchParams] = useSearchParams()
    const stateData = searchParams.get('todos')
    let filteredData = todos
    if (stateData === 'active') {
        filteredData = filteredData.filter(item => !item.completed)
    }
    if (stateData === 'completed') {
        filteredData = filteredData.filter(item => item.completed)
    }
    return (
        <ul className="todos" >
            {
                filteredData.length > 0 && filteredData.map((item: Todo) =>
                    <li className="todos-list" key={item.id}>
                        <label className='todos-checkbox' htmlFor={`Todo-${item.id}`}>
                            <input type="checkbox" id={`Todo-${item.id}`} checked={item.completed}
                                onChange={() => toggleTodoCompleted(item.id)} />
                            <span className='span-check'>{item.task}</span>
                        </label>
                        {item.completed && <button className="button-1" role="button" onClick={() => handleDelete(item.id)}>Delete</button>}
                    </li>
                )
            }
        </ul>
    )
}

export default Todos