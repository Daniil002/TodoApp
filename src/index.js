import React from "react";
import ReactDOM from "react-dom/client";
import './styles/stylee.css'
import NewTaskForm from './components/new-task-form/new-task-form.js';
import TaskList from "./components/task-list/task-list.js";
import Footer from "./components/footer/footer.js";




function App() {
  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList />
      </section>
      <Footer />
    </section>
  );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(< App />)
