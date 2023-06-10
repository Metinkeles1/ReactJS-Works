import { Link, Outlet } from 'react-router-dom'
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
        <div className='users'>
            <h1>User</h1>
            {loading && <div>loading...</div>}
            <ul>
                {users.map((user) => (
                    <div className='card'>
                        <h3>
                            <i className='fa-solid fa-caret-right'></i>{user.name}
                        </h3>
                        <Link to={`/users/${user.id}`} key={user.id}>
                            <i className='fa-regular fa-square-caret-right'></i>
                        </Link>
                        {/* <li >
                        </li> */}
                    </div>
                ))}
            </ul>

            <Outlet />
        </div >
    )
}

export default Users