import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo =() => {
    if(inputValue.trim()!==""){
      setTodo([todos,inputValue]);
      setInputValue("");
    }
  };



  return (
    <div>
    <input 
    name='Enter ToDo' 
    value={inputValue}
    onChange={e => setInputValue(e.target.value)}
    />
    <button onClick={addTodo}>Add</button>
      <ul>
      {todos.map((todos, index)=>(
        <li key={index}>{todos}</li>
      ))}

      </ul>
    </div>
  );
}

export default App;
