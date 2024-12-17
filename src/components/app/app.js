import { Component } from 'react';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

class App extends Component {

  state = {
    tasks: [
      {
        id: 1,
        description: 'Completed task',
        created: 'created 17 seconds ago',
      },
      {
        id: 2,
        description: 'Editing task',
        created: 'created 5 minutes ago',
      },
      {
        id: 3,
        description: 'Active task',
        created: 'created 5 minutes ago',
      },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ tasks }) => {
      const newTasks = tasks.filter(task => task.id !== id);
      return { tasks: newTasks };
    });
  };

  // Метод render должен быть внутри класса
  render() {
    const { tasks } = this.state;
    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList
          tasks={tasks}
          onDeleted={ this.deleteItem } />
        </section>
        <Footer />
      </section>
    );
  }
}

export default App;
