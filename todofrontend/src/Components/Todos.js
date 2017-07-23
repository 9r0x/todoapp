import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        let activeTodoWord;
        let noOfActive = this.props.todos.filter((todo)=> !todo.completed).length;
        console.log(noOfActive);
        if(noOfActive>0){ activeTodoWord = 'items'}else{ activeTodoWord = 'item'};
        return (
              <section className="main">
              <ul className="todo-list">
                {this.filteredTodos()}
              </ul>
              <footer className="footer">
                <span className="todo-count">
						      <strong>{noOfActive}</strong> {activeTodoWord} left
					      </span>
                <ul className="filters">
						      <li>
							      <a
								      href="#/"
                      onClick={()=>this.setState({filter:"all"})}
								      className={classNames({selected:this.state.filter=='all'})}>
									    All
							      </a>
                    <a
								      href="#/"
                      onClick={()=>this.setState({filter:"active"})}
								      className={classNames({selected:this.state.filter=='active'})}>
									    Active
							      </a>
                    <a
								      href="#/"
                      onClick={()=>this.setState({filter:"completed"})}
								      className={classNames({selected:this.state.filter=='completed'})}>
									    Completed
							      </a>
						      </li>
					      </ul>
              </footer>
              </section>
        );
    }
}

Todos.propTypes={
    todos: PropTypes.array,
    onDelete: PropTypes.func
}

export default Todos;
