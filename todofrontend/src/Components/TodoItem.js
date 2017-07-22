import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(){
        super();
        this.state={
            editing:false
        };
    }

    edit(){
        this.setState({editing:true});
    }
    save(id){
        this.setState({editing:false});
        let title=this.refs.title.value;
        this.props.onSave(id,title);
    }
    toggleC(id,completed){
        this.props.onToggle(id,!completed);
    }

    deleteTodo(id){
        console.log(id);
        this.props.onDelete(id);
    }

    render() {
        let {todo} = this.props;
        if(this.state.editing){
            return(<li className="unchecked"><span onClick={this.save.bind(this,todo.id)} className="edit">{"\u2713"}</span><input type="text" ref="title" defaultValue={todo.title}/><span onClick={this.deleteTodo.bind(this,todo.id)} className="close">{"\u2716"}</span> </li>);}
        else{if(todo.completed){
            return (<li className="checked"><span onClick={this.edit.bind(this)} className="edit" >{"\u270E"}</span><strong onClick={this.toggleC.bind(this,todo.id,todo.completed)}>{todo.title}</strong><span onClick={this.deleteTodo.bind(this,todo.id)} className="close">{"\u2716"}</span> </li>);}
             else{return (<li><span onClick={this.edit.bind(this)} className="edit">{"\u270E"}</span><strong onClick={this.toggleC.bind(this,todo.id,todo.completed)}>{todo.title}</strong><span onClick={this.deleteTodo.bind(this,todo.id)} className="close">{"\u2716"}</span></li>);}}
    }
}

TodoItem.propTypes={
    todo: PropTypes.object,
    onDelete: PropTypes.func
}


export default TodoItem;


