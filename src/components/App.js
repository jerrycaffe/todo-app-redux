import React, { Component } from "react";
import { connect } from "react-redux";
import { clearList, deleteItem} from "../actions";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./TodoInput";

class App extends Component {
  handleClearList = e => {
    e.preventDefault();
    this.props.clearList();
  };

  handleDeleteItem = id => {
    this.props.deleteItem(id);
  };
  editItem = id => {
    this.props.editItem(id);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <h1 className="text-center">Todo App</h1>
            <TodoInput />
            <TodoList
              lists={this.props.reduxStateAsProp.items}
              handleClearList={this.handleClearList}
              deleteItem={this.handleDeleteItem}
              editItem={this.editItem}
            />
          </div>
        </div>
      </div>
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
const mapDispatchToProps = {clearList, deleteItem};

export default connect(mapStateToProps, mapDispatchToProps)(App);
