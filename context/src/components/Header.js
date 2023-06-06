import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Header() {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div>
            active theme {theme}
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>change theme</button>
        </div>
    )
}

export default Header