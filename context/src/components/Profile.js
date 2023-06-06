import React from 'react'
import { useState } from 'react'
import { useUser } from '../context/UserContext'

function Profile() {
    const { user, setUser } = useUser()
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({
                id: 1,
                username: "mkeles",
                bio: "lorem ipsum olar."
            })
            setLoading(false);
        }, 1500);
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            {!user && <button onClick={handleLogin}>{loading ? "loading" : "login"}</button>}

            <br />
            <br />
            <code>
                {JSON.stringify(user)}
            </code>

            <br />
            {user && <button onClick={handleLogout}>logout</button>}
        </div>
    )
}

export default Profile