import React from "react";
import Task from "../task/task";
import "./task-list.css";

function TaskList() {
  const tasks = [
    { id: 1, description: "Complete homework", created: "5 minutes ago" },
    { id: 2, description: "Clean the room", created: "10 minutes ago" },
    { id: 3, description: "Buy groceries", created: "15 minutes ago" },
  ];

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          description={task.description} 
          created={task.created} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
