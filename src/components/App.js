import React, { Component } from "react";
import { connect } from 'react-redux';
import {onChange, addTodo, clearList, deleteItem, editItem} from '../actions'
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./TodoInput";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: [],
    //   item: "",
    //   id: uuidv4(),
    //   editItem: false
    // };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearList = this.handleClearList.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    
  }
 
  handleChange(e) {
    const item = e.target.value
    this.props.onChange(item)
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      title: this.props.reduxStateAsProp.item,
      id: uuidv4(),
      editItem: false
    }
    
    if(newItem.title !== '')
      {this.props.addTodo(newItem)}
  }

  handleClearList(e) {
    e.preventDefault();
    this.props.clearList();
  }

  handleDeleteItem(id) {
    this.props.deleteItem(id);
  }
  editItem = (id) => {
    this.props.editItem(id)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <h1 className="text-center">Todo App</h1>
            <TodoInput
              item={this.props.reduxStateAsProp.item}
              handleChange={this.props.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList
              lists={this.props.reduxStateAsProp.items}
              handleClearList={this.handleClearList}
              deleteItem={this.handleDeleteItem}
              editItem= {this.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{ return {reduxStateAsProp: state
  // state comes from the redux store
  }
}
// mapStateToProps decides what part of the state we want from the redux store while the ssecond arguement can be an object or function stating what we are passing into the state
const mapDispatchToProps = {onChange, addTodo, clearList, deleteItem, editItem}

export default connect(mapStateToProps , mapDispatchToProps)(App);

