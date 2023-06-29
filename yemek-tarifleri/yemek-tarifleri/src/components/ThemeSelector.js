import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './ThemeSelector.css';

const themeColors = ["warning", "danger", "primary"];

export default function ThemeSelector() {
    const { changeColor } = useContext(ThemeContext);

    return (
        <div className="container theme-selector">
            <div className="theme-links">
                {
                    themeColors.map(color => (
                        <span
                            key={color}
                            className={`bg-${color}`}
                            onClick={() => changeColor(color)}
                        ></span>
                    ))
                }
            </div>
        </div >
    )
}