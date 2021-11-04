import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainTodo from './components/MainTodo';


function App() {

//Hook useState
  const[todoData, setTodoData] = useState([]);
  const[statusAll, setStatusAll]= useState(true)
  const[statusCompleted, setStatusCompleted]= useState(false)
  const[statusPending, setStatusPending]= useState(false)

//Hook useEffect
  useEffect (() => {
    const handleTodoAPI = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        const resultSliced = await result.slice(0, 20);
        setTodoData(resultSliced);
        
    }

    handleTodoAPI();

}, [])

console.log(todoData);

//Functions


let arrayTodoAll = todoData.filter(data => data)  
let arrayTodoCompleted = todoData.filter(data => data.completed)
let arrayTodoPending = todoData.filter(data => !data.completed)




// let newTodos = []
const handleCompletedValue = todoData.filter(data => !data.completed).length


const handleAll = () => {
  setStatusAll(true)
  setStatusCompleted(false)
  setStatusPending(false)
   
  console.log(statusAll)
}

const handleCompleted = () => {
  setStatusAll(false)
  setStatusCompleted(true)
  setStatusPending(false)
  console.log(statusCompleted)
}

const handlePending = () => {
  setStatusAll(false)
  setStatusCompleted(false)
  setStatusPending(true)
  console.log(statusPending)
}



const handleStatus = (id) => {
  setTodoData(todoData.map(data => data.id === id ? {...data, completed: !data.completed} : data));
};

const handleOneView = () => {

  
  if(statusAll){
   return  (arrayTodoAll.map(todo =>
    <MainTodo 
      title={todo.title} 
      status={todo.completed} 
      id={todo.id}
      handleStatus={handleStatus}
      key={todo.id} 
    />))
  }

  if(statusCompleted){
     return ( arrayTodoCompleted.map(todo =>
    <MainTodo 
      title={todo.title} 
      status={todo.completed} 
      id={todo.id}
      handleStatus={handleStatus}
      key={todo.id} 
     
    />))
  }

  if(statusPending){
    return  (arrayTodoPending.map(todo =>
      <MainTodo 
        title={todo.title} 
        status={todo.completed} 
        id={todo.id}
        handleStatus={handleStatus}
        key={todo.id} 
        
      />))
  }

}
  return (
    <div className="App">
      <div>
          <Header
          handleCompletedValue={handleCompletedValue}
          handleCompleted={handleCompleted} 
          handleAll={handleAll}
          handlePending={handlePending}
          />
    </div>
      {handleOneView()} 
  </div>
  );
}

export default App;
