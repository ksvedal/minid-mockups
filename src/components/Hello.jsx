import { useState } from "react";
import React from "react";

const Hello = () => {
    
const [click, setClick] = useState(false)

const handleClick = () => {
    setClick(!click); 
}

    return (
        <div className="text-3xl text-orange-300">Hellooo
            <p className="text-2xl bg-emerald-600 bg-green-300">Press here </p>
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