import { NavLink, Outlet } from "react-router-dom"

export const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h1>Help</h1>
            <p>lorem ipsum dolar sit  amet</p>
            <nav>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="faq">Faq</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}