import { useState } from 'react'

const Tasks = () => {
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

  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  )
}

export default Tasks
