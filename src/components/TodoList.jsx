import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { lists, handleClearList, deleteItem, editItem } = this.props;
    return (
      <ul className="list-group my-5">
        {lists.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              deleteItem={() => deleteItem(item.id)}
              editItem={() => editItem(item.id)}
            />
          );
        })}
        <button
          className="btn btn-danger  btn-block my-4"
          onClick={handleClearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
export default TodoList;
