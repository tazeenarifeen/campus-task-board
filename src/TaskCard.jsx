function TaskCard({ task }) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>Category: {task.category}</p>
    </div>
  );
}

export default TaskCard;