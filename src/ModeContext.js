import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { themeSettings } from './theme';

export const ModeContext = createContext();

export const ModeProvider = ({children}) => {
    const [mode, setMode] = useState('light');

    const toggleMode = () =>{
        setMode(prevMode => prevMode === 'light'? 'dark': 'light');
    };

    const theme = useMemo(()=> themeSettings(mode), [mode]);

    return(
        <ModeContext.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ModeContext.Provider>
    )
}
