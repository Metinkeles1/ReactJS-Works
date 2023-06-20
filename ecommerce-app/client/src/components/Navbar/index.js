import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import styles from "./styles.module.css"

function Navbar() {
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <NavLink to="/">eCommerce</NavLink>
                    </div>

                    <ul className={styles.menu}>
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.right}>
                    right
                </div>
            </nav>

            <main className={styles.container}>
                <Outlet />
            </main>
        </div>

    )
}

export default Navbar