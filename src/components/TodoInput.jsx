import React, { Component } from "react";
import { connect } from "react-redux";
import { onChange, addTodo } from "../actions";
import { v4 as uuidv4 } from "uuid";

class TodoInput extends Component {
  handleChange = e => {
    const item = e.target.value;
    this.props.onChange(item);
  };
 
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      title: this.props.reduxStateAsProp.item,
      id: uuidv4(),
      
    };

    if (newItem.title !== "") {
      this.props.addTodo(newItem);
    }
  };

  render() {
    const { item, editItem } = this.props.reduxStateAsProp;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={item}
            onChange={this.handleChange}
          />
          <button
            className={
              editItem
                ? "btn btn-block btn-success my-3"
                : "btn btn-block btn-primary my-3"
            }
          >
            {editItem ? "Finish Editting" : "Add Item"}
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    reduxStateAsProp: state
    // state comes from the redux store
  };
};
// mapStateToProps decides what part of the state we want from the redux store while the ssecond arguement can be an object or function stating what we are passing into the state
const mapDispatchToProps = {
  onChange,
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
