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
        <div>
            <h1>
                {loading && <div>loading...</div>}
                {!loading && <code>
                    {JSON.stringify(user)}
                </code>}

                <br />
                <br />
                <Link to={`/user/${parseInt(id) + 1}`}> Next User ({parseInt(id) + 1})</Link>
            </h1>

        </div>
    )
}

export default User