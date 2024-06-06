import './App.css'
import NavBar from './Components/NavBar'
import TaskAdd from './Components/TaskAdd'
import Todos from './Components/Todos'

function App() {

  document.title="Todo App With React + TypeScript"

  return (
    <main>
      <h1>To-Do List With TypeScript</h1>
      <NavBar/>
      <TaskAdd/>
      <Todos/>
    </main>
  )
}

export default App
