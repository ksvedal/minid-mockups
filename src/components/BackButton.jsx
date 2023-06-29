import React from "react"

const BackButton = ({onClick}) => {

    return (
        <button
            className="bg-custom-light-grey dark:bg-custom-very-darker-grey dark:text-white border-1 border-custom-dark-grey p-3 my-2 bg-custom-blue rounded-full w-full font-semibold"
            onClick={onClick}
        >
            Tilbake
        </button>
    )
}

export default BackButton