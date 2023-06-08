// import React from 'react'

// function Navbar({ icon = "bi bi-github", title = "Github Finder" }) {
//     return (
//         <nav className='navbar navbar-dark bg-primary'>
//             <a href='/' className='navbar-brand'>
//                 <i class={icon}></i> {title}
//             </a>
//         </nav>
//     )
// }

// export default Navbar

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-primary'>
                <div className='container'>
                    <a href='/' className='navbar-brand'>
                        <i className={this.props.icon}></i> {this.props.title}
                    </a>
                </div>
            </nav >
        )
    }
}
Navbar.defaultProps = {
    icon: "bi bi-github",
    title: "Github Finder"
};

Navbar.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string
}


export default Navbar