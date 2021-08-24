import { useState, useEffect } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import axios from 'axios'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const data = await axios.get('http://localhost:5000/tasks')
                      .then(res => res.data)

    return data
  }

  const fetchTask = async (id) => {
    const data = await axios.get(`http://localhost:5000/tasks/${id}`)
                      .then(res => res.data)

    return data
  }

  // Add Task
  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])

    // axios
    const data = await axios.post('http://localhost:5000/tasks', {
      'id': id,
      ...task
    })

    setTasks([...tasks, data.data])

    // fetch
    // const res = await fetch('http://localhost:5000/tasks', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(task)
    // })
    // const data = await res.json()

    // setTasks([...tasks, data])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`)

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    // axios
    const data = await axios.put(`http://localhost:5000/tasks/${id}`, {
      ...updTask
    }).then(res => res.data)

    // fetch
    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(updTask)
    // })

    // const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
