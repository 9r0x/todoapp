import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    save(e){
        if(e.key === 'Enter'){
            let {id} =this.props.todo;
            this.setState({editing:false});
            let title=this.refs.title.value;
            this.props.onSave(id,title);
        }}
    toggleC(){
        let {id} =this.props.todo;
        let {completed} =this.props.todo;
        this.props.onToggle(id,!completed);
    }

    onDestroy(){
        let {id} =this.props.todo;
        this.props.onDelete(id);
    }

    render(){
        let {todo} = this.props;
        return (
				    <li className={classNames({completed: todo.completed , editing: this.state.editing})}>
					    <div className="view">
						    <input
							    className="toggle"
							    type="checkbox"
							    checked={todo.completed}
							    onChange={this.toggleC.bind(this)}
						      />
						    <label onDoubleClick={this.edit.bind(this)}>
							    {todo.title}
						    </label>
						    <button className="destroy" onClick={this.onDestroy.bind(this)} />
					    </div>
					    <input
						    ref="editField"
						    className="edit"
                ref='title'
						    defaultValue={todo.title}
						    onKeyDown={this.save.bind(this)}
					      />
				    </li>
		    );}
}

TodoItem.propTypes={
    todo: PropTypes.object,
    onDelete: PropTypes.func
}


export default TodoItem;


