import React, { useState, useEffect } from 'react'

export default (props) =>{
    const [count, setCount] = useState(2)
    const [status, setStatus] = useState('Par')

    useEffect(() =>{
        count % 2 === 0 ? setStatus('Par') : setStatus('Impar') 
    })
    return (
        <div>
            <h1>{count}</h1>
            <h3>{status}</h3>
            <button onClick={() => setCount(count+1)}>Inc</button>
        </div>
    )
}