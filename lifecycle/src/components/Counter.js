import { useState, useEffect } from 'react'
import React from 'react'

function Counter() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('Metin');

    // useEffect(() => {
    //   console.log("State Update");
    // })

    useEffect(() => {
        console.log("component mount edildi");

        const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        console.log("number component update");
    }, [number])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>click</button>
        </div>
    )
}

export default Counter