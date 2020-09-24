import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      content: ' Example1 ',
      isCompleted: true,
    },
    {
      content: ' Example2 ',
      isCompleted: false,
    }
  ]);
  const [errorText, setErrorText] = useState(false);

  function handleKeyDown(e, i) {
    if (e.key === 'Enter' && (e.target.value).length > 0 && !errorText) {
      createTodoAtIndex(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(e, i) {
    const tempTodo = [];
      todos.map((todo,i)=>{
        if((todo.content).length !== 0){
          tempTodo.push(todo);
      }});
    const newTodos = [...tempTodo];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    if((e.target.value).length <= 20 && (e.target.value).length >=0){
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
    }
    else{
      setErrorText(true);
    }
    
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  function clearList(){
    const initialTodo = [
      {
        content: ' Example1 ',
        isCompleted: false,
      }
      
    ];
    setTodos(initialTodo);
  }

  return (
    <div className="app">
    <div className="header">
    <h2>Tasks</h2>
    <label>Just press Enter to Add a New ToDo </label>
    <button class="clearButton" onClick={() => clearList() }>Clear TodoList </button>
    </div>
    {errorText?(<div className="errorText">Must be 20 Characters or less </div>):''}
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => ((todo.content).length <=20 ? (
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ):''))}
        </ul>
      </form>
    </div>
  );
}

export default App;