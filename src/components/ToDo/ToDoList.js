import React, { Component } from 'react';
import toDoItemData from "./toDoItemData";
import ToDoItem from './ToDoItem';

class ToDoList extends Component {

  constructor() {
    super()
    this.state = {
      toDos: toDoItemData,
      addToDoVisibility: "none",
      newToDoDescription: "",
      newToDo: [],
      newToDoKey: 4
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      newToDoDescription: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    const openEditMenu = () => {
      this.setState({
        addToDoVisibility: (this.state.addToDoVisibility === "none") ? "block" : "none"
      })
    }

    const addToDo = (event) => {
      event.preventDefault()
      this.setState({
        addToDoVisibility: "none",
        newToDo: [this.state.newToDo, <ToDoItem key={this.state.newToDoKey} checkBoxInfo={this.state.newToDoDescription} />],
        newToDoKey: this.state.newToDoKey + 1,
        newToDoDescription: ""
      })
    }

    var allToDoItems = this.state.toDos.map(
      toDoItems => <ToDoItem
        key={toDoItems.id}
        completed={toDoItems.completed}
        checkBoxInfo={toDoItems.checkBoxInfo}
      />)
    return (
      <div className="toDoContainer" style={{ display: (this.props.currentContent === "todo") ? "block" : "none" }}>
        <h1>To Do List</h1>
        {allToDoItems}
        {this.state.newToDo}
        <button onClick={openEditMenu}>Add To Do</button>
        <form style={{ display: this.state.addToDoVisibility }}>
          <label className="todoInputLabel"><br></br>
            Name:
            <input type="text" name="toDo" value={this.state.newToDoDescription} onChange={this.handleChange} />
          </label>
          <button onClick={addToDo}>Submit</button>
        </form>
      </div>
    );

  }
}

export default ToDoList;
