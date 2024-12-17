import React from "react";
import './task.css'
import { Component } from "react";

class Task extends Component {

    state = {
      completed: false
    }

    onLabelClick = () => {
      this.setState({
        completed: true
      })
    }

    render() {
      const { description, created, onDeleted } = this.props
      const { completed } = this.state

      return (
        <li className={completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" onClick={this.onLabelClick}/>
            <label>
              <span className="description">{description}</span>
              <span className="created">{created}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
          </div>
        </li>
      );
    }
    }
  

export default Task;
