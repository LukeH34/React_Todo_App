import './todo_item.scss'

function Todo_item({todos, todo, setTodos, completed, text}) {

    // Event Handlers
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return{
                    ...item, completed:!item.completed
                }
            }
            return item;
        }))
    }

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    return ( 
        <div className={todo.completed ? 'todo completed' : 'todo'}>
            <li className='text'>{text}</li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
     );
}

export default Todo_item;