import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">users</NavLink>
            </nav>

            About
        </div>
    )
}
