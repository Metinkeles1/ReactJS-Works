import React, { useContext } from 'react'
import Button from './Button';
import Header from './Header';
import ThemeContext from '../context/ThemeContext';

function Container() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`app ${theme}`}>
            <Header />
            <hr />
            <Button />
            <br />
        </div>
    )
}

export default Container