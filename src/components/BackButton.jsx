import React from "react"

const BackButton = ({onClick, children}) => {
    return (
        <button className="" onClick={onClick}>{children}
        </button>
    )
}

export default BackButton