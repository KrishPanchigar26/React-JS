import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)// it is not necessary to name setcounter u can give any name
 
  // let counter = 5;

  const addValue = function(){
    // setCounter(counter + 1)
    // counter = counter + 1;  
    // setCounter(counter)
    if(counter === 20){
      alert("You have reached maximum limit")
    } else{
      setCounter(counter + 1)
    }
  }

  const removeValue = function(){
    console.log("Clicked", counter);
    // counter = counter - 1;  
    // setCounter(counter)
    if(counter === 0){
      alert("You have reached maximum limit")
    } else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App