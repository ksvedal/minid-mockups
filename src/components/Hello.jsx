import { useState } from "react";
import React from "react";

const Hello = () => {
    
const [click, setClick] = useState(false)

const handleClick = () => {
    setClick(!click); 
}

    return (
        <div className="text-3xl text-orange-300">Hellooo
            <p className="text-2xl">Press here </p>
            <button onClick = {handleClick} className = {
                click 
                ? 'text-8xl'
                : 'text-xs'
            }
            >
                Click
            </button>
        </div>
    )
}

export default Hello