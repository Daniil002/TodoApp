import React from "react";
import Task from "../task/task";
import "./task-list.css";


function TaskList({tasks, onDeleted}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          description={task.description} 
          created={task.created} 
          onDeleted={() => onDeleted(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
