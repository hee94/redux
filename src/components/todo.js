import React from 'react';

const TodoItem = ({TodoItem, onToggle, onRemove}) => {
    return(
        <div>
            <input type="checkbox" />
            <span>텍스트</span>
            <button>삭제</button>
        </div>
    );
};

const Todo =({input, todos, onChangeInput, onInsert, onToggle, onRemove})=>{
    const onSubmit =e =>{
        e.preventDefault();
    };
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}

export default Todo;