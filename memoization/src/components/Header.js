import React from 'react'

function Header({ number, increment }) {
    console.log("re-render")
    return (
        <div>
            header - {number}
            <br />
            <br />
            <button onClick={increment}>arttır</button>
        </div>
    )
}

export default React.memo(Header);