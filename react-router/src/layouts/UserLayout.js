import { NavLink, Outlet } from "react-router-dom"

export const UserLayout = () => {
    return (
        <div className="help-layout">
            <h1>User</h1>
            <p>lorem ipsum dolar sit  amet</p>

            <main>
                <Outlet />
            </main>
        </div>
    )
}