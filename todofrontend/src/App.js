import React, { Component } from 'react';
import $ from 'jquery';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import './App.css';
class App extends Component {
    constructor(){
        super();
        this.state = {
            todos:[]
        };
    }

    getTodos(){
        $.ajax({url: "http://localhost:8000/todos/",
                success: function(data){
                    this.setState({todos:data})}.bind(this),
                cache: false});
    }

    componentWillMount(){
        this.getTodos();
    }

    handleAddTodo(title){
        $.post("http://localhost:8000/todos/",{title:title},()=>this.getTodos());
    }

    handleDeleteTodo(id){
        $.ajax({url: "http://localhost:8000/todos/"+id+"/",
                type: "delete",
                success:()=>this.getTodos(),
                cache: false});
    }

    handleSaveTodo(id,title){
        $.ajax({url: "http://localhost:8000/todos/"+id+"/",
                type: "PATCH",
                data:{title:title},
                success:()=>this.getTodos(),
                cache: false});
    }

    handleToggleC(id,completed){
        $.ajax({url: "http://localhost:8000/todos/"+id+"/",
                type: "PATCH",
                data:{completed:completed},
                success:()=>this.getTodos(),
                cache: false});
    }
    render() {
        return (
            <div className="App">
              <AddTodo addTodo={this.handleAddTodo.bind(this)} />
              <Todos onDelete={this.handleDeleteTodo.bind(this)}  onToggle={this.handleToggleC.bind(this)} onSave={this.handleSaveTodo.bind(this)} todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
