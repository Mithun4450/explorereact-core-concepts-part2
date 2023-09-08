import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  
  function handleClick(){
    alert('Button Clicked')

  }
  const handleClick2 = () =>{
    alert('Button 2 Clicked')
  }
  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
     <h2>React Core Concepts part-2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click2</button>
     <button onClick={()=>{alert('Third Button Clicked')}}>Third</button>
      
      <button onClick={() => addToFive(3)}>Four</button>
      
    </>
  )
}

export default App
