const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = input =>({
    type: CHANGE_INPUT,
    input
});

let id =3;
export const insert =text =>({
    type: INSERT,
    todo:{
        id:id++,
        text,
        done:false
    }
});
export const toggle =id=>({
    type:TOGGLE,
    id
});
export const remove =id =({
    type:REMOVE,
    id
})

const initState ={
    input:'',
    todos : [
        {
            id:1,
            text: '리덕스1',
            done: true
        },
        {
            id:2,
            text: '리덕스2',
            done: true
        },
        {
            id:3,
            text: '리덕스3',
            done: true
        },
    ]
};

const todo =(state = initState, action) =>{
    switch(action.type){
        case CHANGE_INPUT:
            return{
                ...state,
                input: action.input
            };
        case INSERT:
            return{
                ...state,
                todos : state.todos.concat(action.todo)
            };
        case TOGGLE :
            return{
                ...state,
                todos: state.todos.map(todo => todo.id === action.id?{...todo, done: !todo.done} : todo)
            };
            case REMOVE :
                return{
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.id)
                };
            default:
                return state;
    }
}

export default todo;