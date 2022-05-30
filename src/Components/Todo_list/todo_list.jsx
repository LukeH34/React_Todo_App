import './todo_list.scss'
import TodoItem from '../Todo_item/todo_item'

function todo_list({todos, setTodos, filteredTodos}) {
    return ( 
        <div className='todo_container'>
            <ul className='todo_list'>
                {filteredTodos.map(todo => (
                    <TodoItem 
                        todos={todos} 
                        todo={todo}
                        setTodos={setTodos} 
                        text={todo.text} 
                        key={todo.id}
                    />
                ))}
            </ul>
        </div>
    );
}

export default todo_list;