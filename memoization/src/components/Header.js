import React from 'react'

function Header() {
    console.log("re-render")
    return (
        <div>header</div>
    )
}

export default React.memo(Header);