import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 pd-2'>
          <div className='flex flex-wrap justify-center gap-3 shodow-lg bg-white px-3 py-1 rounded-3xl'>
            <button onClick={() => setColor("red")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("blue")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => setColor("green")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("yellow")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={() => setColor("black")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "black"}}>black</button>
            <button onClick={() => setColor("pink")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "pink"}}>Pink</button>
            <button onClick={() => setColor("purple")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "purple"}}>Purple</button>
            <button onClick={() => setColor("#E6E6FA")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "#E6E6FA"}}>Lavender</button>
            <button onClick={() => setColor("olive")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "olive"}}>Olive</button>
            <button onClick={() => setColor("gray")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "gray"}}>Gray</button>
            <button onClick={() => setColor("orange")} className='px-4 py-1 rounded-full text-white' style={{backgroundColor: "orange"}}>Orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
