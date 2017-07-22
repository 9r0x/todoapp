import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todos extends Component {
    constructor(){
        super();
        this.state={
            filter:"all"
        };
    }

    deleteTodo(id){
        this.props.onDelete(id);
    }

    saveTodo(id,title){
        this.props.onSave(id,title);
    }
    toggleC(id,completed){
        this.props.onToggle(id,completed);
    }

    showAll(){
        if (this.props.todos){
            return(this.props.todos.map(todo => <TodoItem onSave={this.saveTodo.bind(this)} onDelete={this.deleteTodo.bind(this)} onToggle={this.toggleC.bind(this)} key={todo.id} todo={todo} />));}
    }
    showCompleted(){
        if (this.props.todos){
            return(this.props.todos.filter((todo)=> todo.completed).map(todo => <TodoItem onSave={this.saveTodo.bind(this)} onDelete={this.deleteTodo.bind(this)} onToggle={this.toggleC.bind(this)} key={todo.id} todo={todo} />));}}

    showActive(){
        if (this.props.todos){
            return(this.props.todos.filter((todo)=> !todo.completed).map(todo => <TodoItem onSave={this.saveTodo.bind(this)} onDelete={this.deleteTodo.bind(this)} onToggle={this.toggleC.bind(this)} key={todo.id} todo={todo} />));}}

    filteredTodos(){
        let {filter}= this.state;
        switch(filter){
        case "all":
            return(this.showAll());
        case "active":
            return(this.showActive());
        case "completed":
            return(this.showCompleted());
        default:
            return(this.showAll());
        }}

    render() {
        return (
            <div className="Todos">
              <div className="pure-button-group" role="group" aria-label="...">
              <button className="button-secondary pure-button" onClick={()=>this.setState({filter:"all"})}>All</button>
              <button className="button-success pure-button" onClick={()=>this.setState({filter:"completed"})}>Completed</button>
              <button className="button-error pure-button" onClick={()=>this.setState({filter:"active"})}>Active</button></div>
              <ul className="todo-list">
                {this.filteredTodos()}
              </ul>
            </div>
        );
    }
}

Todos.propTypes={
    todos: PropTypes.array,
    onDelete: PropTypes.func
}

export default Todos;
