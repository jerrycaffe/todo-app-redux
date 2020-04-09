import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, deleteItem, editItem } = this.props;
    return (
      <li className="list-group-item">
        <div className="d-flex justify-content-between">
          <h3>{title}</h3>
          <div>
            <span className="mx-3" onClick={editItem}>
              <i className="fas fa-pen fa-2x"></i>
            </span>
            <span onClick={deleteItem}>
              <i className="fas fa-trash fa-2x"></i>
            </span>
          </div>
        </div>
      </li>
    );
  }
}
export default TodoItem;
