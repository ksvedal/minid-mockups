import React, { useState } from "react";
import {themes} from "../themes.js";

function StyledMinId() {
    // Define your state variable
    const [theme, setTheme] = useState("theme1");

    // Use the theme in your component's className
    return (
        <div className={themes[theme].background + " p-4"}>
            <button
                onClick={() => setTheme("theme1")}
                className="mr-4 p-2 bg-red-500 m-8 bg-red-500 text-white"
            >
                Apply Theme 1
            </button>

            <button
                onClick={() => setTheme("theme2")}
                className="p-2 bg-yellow-500 bg-pink-400 text-white"
            >
                Apply Theme 2
            </button>

            <div className={themes[theme].container}>Hello, World!
            <button className={themes[theme].button + " p-4"}>I'm Frank!</button>
            </div>

        </div>
    );

}

export default StyledMinId;