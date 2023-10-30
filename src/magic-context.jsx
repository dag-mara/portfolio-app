import React, { createContext, useContext, useState } from 'react';

export const MagicContext = createContext();

export const useMagic = () => useContext(MagicContext);


export const MagicProvider = ({children}) => {
    const [color, setColor] = useState(false);

    const handleColorChange = () => {
        setColor(!color);
    }

    var randomColor = 50 + Math.floor(Math.random() * 150);


    const magicColor = () => {
        if (color == true) {
        return ('rgb(210, 90,' + randomColor + ')')
        }
        else {
        return 'white'
        }
    }
    
    return(
        <MagicContext.Provider value={{color, handleColorChange, magicColor}}>
            {children}
        </MagicContext.Provider>
    )
}


