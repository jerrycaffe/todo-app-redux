import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={item}
            onChange={handleChange}
          />
          <button
            className={
              editItem
                ? "btn btn-block btn-success my-3"
                : "btn btn-block btn-primary my-3"
            }
          >
            {editItem ? "Edit Item" : "Add Item"}
          </button>
        </div>
      </form>
    );
  }
}
export default TodoInput;
