import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {


    handleSubmit(e){
        if(this.refs.title.value === "")
        {alert("Title shouldn't be empty");}
        else{this.props.addTodo(this.refs.title.value);}
        e.preventDefault();
    }

    render() {
        return (
            <div className="header">
              <h3>My Todo List</h3>
              <input style={{color:'black'}}type="text" id="myInput" ref="title" placeholder="Title..." />
              <span onClick={this.handleSubmit.bind(this)} className="addBtn">Add</span>
              <br />
            </div>
        );
    }
}


AddTodo.propTypes={
    addTodo: PropTypes.func
}


export default AddTodo;
