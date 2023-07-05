import React, { useContext} from 'react'
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';
import './toggle.css'
import { themeContext } from "../../Context";


const Toggle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        // debugger
        theme.dispatch({ type: "toggle" });
    };
    return (
        <div className="toggle"
            onClick={handleClick}
        >
            <BiMoon />
            <BsSun />

            <div className="t-button"
                style={darkMode ? { left: "2px" } : { right: "2px" }}
            >
            </div>

        </div>
    )
}

export default Toggle