import { useState } from "react";
import React from "react";

const Hello = () => {
    
const [click, setClick] = useState(false)

const handleClick = () => {
    setClick(!click); 
}

    return (
        <div className="text-3xl text-orange-300">
            <button> 
                Click
            </button>
        </div>
    )
}

export default Hello