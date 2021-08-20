import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Play Piano',
      day: 'Sep 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meet Friends',
      day: 'Sep 11st at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Take a  nap',
      day: 'Sep 15th at 12:30pm',
      reminder: false,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
