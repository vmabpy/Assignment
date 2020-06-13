import React, { useState } from 'react'
import { View } from 'react-native'

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    }
}

const ThemeContext = React.createContext(
    themes.light
);

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState()

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext };