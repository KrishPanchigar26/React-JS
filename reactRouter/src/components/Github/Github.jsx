import React from 'react'
import { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/KrishPanchigar26')
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 text-3xl bg-gray-700 text-white p-4'>Github Name: {data.login}
    <img className='text-center' width={300} src={data.avatar_url}  alt="" />
    </div>
  )
}

export default Github