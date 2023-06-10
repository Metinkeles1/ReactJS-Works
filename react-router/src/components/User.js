import axios from 'axios';
import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router'
import { Link } from 'react-router-dom';

function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUser(res.data))
            .finally(() => setLoading(false));
    }, [id])

    return (
        <div className='user-details'>
            {loading && <div>loading...</div>}
            {!loading && <div >
                <h3>
                    <i className="fa-solid fa-caret-right"></i> {user.name}
                </h3>
                <ul>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                    <li>{user.company.name} / {user.address.city}</li>
                </ul>
            </div>
            }

            <br />
            <Link to={`/users/${parseInt(id) + 1}`}> Next User ({parseInt(id) + 1})</Link>
        </div>
    )
}

export default User