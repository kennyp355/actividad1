import { useState } from 'react';
import { Task } from './components/Task.jsx';

function App() {
  const [tasks, setTasks] = useState([
    "This is a task",
    "This is a task",
    "This is a task"
  ]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container text-center text-light pt-5">
      <h1 className="fw-bold fst-italic mb-3">TO-DO NOW</h1>
      <hr style={{ width: '400px', margin: 'auto' }} className="mb-4" />

      <div className="input-group mb-4 mx-auto" style={{ width: '600px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button className="btn btn-secondary" onClick={addTask}>Add task</button>
      </div>

      <div className="d-flex flex-column align-items-center">
        {tasks.map((task, index) => (
          <Task key={index} text={task} onDelete={() => removeTask(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;