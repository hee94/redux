import React from 'react';
import { connect} from 'react-redux';
import Todo from '../components/todo';
import { changeInput, insert, toggle, remove } from '../modules/todo';

const TodoContainer = ({
    input, todos, changeInput, insert, toggle, remove})=>{
    return(
        <Todo input={input} todos={todos} 
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}  />
    );
};
export default connect(
    ({todos}) =>({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput, insert, toggle, remove,
    },
)(TodoContainer)