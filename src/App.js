import React, { useState } from 'react';
import Hello from "./components/Hello";
import StyledMinId from "./components/StyledMinId";

function App() {
    const [activeStyle, setActiveStyle] = useState('style-1');

    return (
        <div>
            <StyledMinId activeStyle={activeStyle} />

            <body className="flex justify-center lg:p-20 h-screen">
            <container className="flex bg-red-500 p-10 w-full lg:w-2/5 h-full lg:h-2/3 rounded-3xl">
                <div>
                    <Hello />
                </div>
            </container>
            </body>
        </div>
    );
}

export default App;