import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      category: "Study"
    },
    {
      id: 2,
      title: "Submit Project Report",
      category: "Project"
    },
    {
      id: 3,
      title: "Attend Programming Lab",
      category: "Lab"
    }
  ]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() === "") {
      return;
    }
    const task = {
      id: Date.now(),
      title: newTask,
      category: "General"
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);
  
  return (
    <div>
      <h1>Campus Task Board</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
export default App;