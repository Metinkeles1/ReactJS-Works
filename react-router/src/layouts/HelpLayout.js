import { NavLink, Outlet } from "react-router-dom"

export const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h1>Help</h1>
            <p>lorem ipsum dolar sit  amet</p>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="faq">Faq</NavLink>
            <main>
                <Outlet />
            </main>
        </div>
    )
}