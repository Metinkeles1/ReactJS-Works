import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">users</NavLink>
            </nav>
        </div>
    )
}

export default Home