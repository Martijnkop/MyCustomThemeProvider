import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Themes/darkTheme";
import { lightTheme } from "./Themes/lightTheme";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function MyCustomThemeProvider({ children }) {
    const [activeTheme, setActiveTheme] = useState(darkTheme)
    const selectedTheme = useSelector(state => state.theme.value)

    useEffect(() => {
        switch (selectedTheme) {
            case 'light':
                setActiveTheme(lightTheme);
                break;
            case 'dark':
                setActiveTheme(darkTheme);
                break;
            default:
                setActiveTheme(darkTheme);
        }

    }, [selectedTheme]);

    return (
        <ThemeProvider theme = {activeTheme}>
            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}