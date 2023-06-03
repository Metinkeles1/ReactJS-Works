import { Link, Router, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios";


function Users() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false));
    }, [])

    return (
        <div>
            <h1>User</h1>
            {loading && <div>loading...</div>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>

            <Outlet />
        </div >
    )
}

export default Users