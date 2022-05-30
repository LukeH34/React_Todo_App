import Todolist from './Components/Todo_list/todo_list';
import Form from './Components/Form/Form';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // runs once
  useEffect(() => {
    getLocalTodos();
  }, []);

  // runs every time the state in brackets changes
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status) {
      case 'Completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'Uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // save the todos to local storage
  const saveLocalTodos = () => {
    if(todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  // load local todos
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Lukes To-Do List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
