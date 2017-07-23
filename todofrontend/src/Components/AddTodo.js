import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {


    handleSubmit(e){
        if(e.key === 'Enter'){
            if(this.refs.title.value === "")
            {alert("Title shouldn't be empty");}
            else{this.props.addTodo(this.refs.title.value);}
        }
    }

    render() {
        return (
              <header className="header">
              <h1>My Todos</h1>
              <input onKeyPress={this.handleSubmit.bind(this)} className='new-todo' style={{color:'black'}}type="text" id="myInput" ref="title" placeholder="Title..." />
              <br />
              </header>
        );
    }
}

AddTodo.propTypes={
    addTodo: PropTypes.func
}


export default AddTodo;
