import React, { Component } from 'react';

class ToDoItem extends Component {

  constructor(props) {
    super()
    this.state = {
      isChecked: props.completed,
      isDeleted: false
    }
  }

  render() {

    const boxClicked = () => {
      this.setState({
        isChecked: this.state.isChecked ? false : true
      })
    }

    const boxDeleted = () => {
      this.setState({
        isDeleted: true
      })
    }

    const undoDelete = () => {
      this.setState({
        isDeleted: false
      })
    }

    if (!this.state.isDeleted) {
      return (
        <div className="toDoItem">
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={boxClicked}
          />
          <p className="taskName">{this.props.checkBoxInfo}</p>
          <button className="taskDeleteButton" onClick={boxDeleted}>Delete</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={undoDelete}>Undo</button>
          <br />
        </div>)
    }

  }

}

export default ToDoItem;
