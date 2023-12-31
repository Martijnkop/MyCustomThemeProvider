import { createSlice } from "@reduxjs/toolkit";

const defaultTheme = localStorage.getItem("theme") ?? 'dark';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: defaultTheme
    },
    reducers : {
        setTheme: (state, action) => {
            state.value = action.payload;
            localStorage.setItem("theme", action.payload);

        },
        resetTheme: (state) => {
            state.value = defaultTheme;
            localStorage.setItem("theme", null);
        },
    }
});

export const { setTheme, resetTheme } = themeSlice.actions;

export default themeSlice.reducer;