import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [scharacter, setScharacter] = useState(false)
  const [password, setPassword] = useState("")

  // useRef

  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(function(){
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "1234567890";
    if (scharacter) str += "!@#$%^&*(){}[];:?><,.+="

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      setPassword(pass)
    }
  }, [length, number, scharacter, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3) // when we have set range of selection
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(() => {
    passwordgenerator()
  }, [length, number, scharacter, passwordgenerator])

  return (
    <>
      <div className='bg-gray-700 mx-auto px-4 py-8 rounded-lg max-w-lg text-orange-500 mt-5'>
        <div className='flex items-center gap-x-1'>
          <input type='text' value={password} placeholder='password' readOnly ref={passwordRef}/>
          <button className='outline:none bg-blue-700 text-white px-3 py-0.5 rounded-sm' onClick={copyPasswordToClipboard}>copy</button>
          
            <input type='range' min={6} max={100} value={length}
            className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={number} id='numberinput' onChange={() => {
              setNumber((prev) => !prev)
            }}/>
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={number} id='characterinput' onChange={() => {
              setScharacter((prev) => !prev)
            }}/>
            <label>Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
