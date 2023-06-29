import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className='navbar-brand' to="/">Yemek Tarifleri</Link>
                <ul className='navbar-nav me-auto'>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/create">create</NavLink>
                    </li>
                </ul>
                <SearchBar />
            </div>
        </nav>

    )
}

export default Navbar