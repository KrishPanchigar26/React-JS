import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let obj = {
    username: "Krish",
    age: 21
  }
  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      {/* <Card name = "React" myObj = {obj} Arr = {myArr} /> */}
      <Card name = "React" btnText = "Click Me"/>

    </>
  )
}

export default App
