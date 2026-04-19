import { useState } from 'react'


const initialTasks = [
  { id: '1', title: 'Learn React', status: 'todo' },
  { id: '2', title: 'Build Todo App', status: 'in-progress' },
  { id: '3', title: 'Review PR', status: 'done' },
];

function App() {
  
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const onSubmit = (event) => {
    event.preventDefault();
    if (title) {
      const newTask ={
        id: Date.now().toString(),
        title,
        status,
      }
      setTasks([...tasks, newTask]);
      
      setTitle("");
      setStatus("todo");
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div>
      <h1>Task Board</h1>


    <form onSubmit={onSubmit}>
      <input name="title"
        type="text"
        value={title}
        placeholder="Task Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select name="status" 
        value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>

    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.status}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default App
