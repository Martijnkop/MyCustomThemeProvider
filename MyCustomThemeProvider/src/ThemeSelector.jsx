import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "./Store/themeSlice"
import { Switch } from "@mui/material"

export default function ThemeSelector() {
    const dispatch = useDispatch();
    const selectedTheme = useSelector(state => state.theme.value);
  
    function HandleChange(e) {
      if (e.target.checked) dispatch(setTheme('dark'));
      else dispatch(setTheme('light'));
    }
    
    return (
        <>
            Enable light theme:
            <Switch checked={selectedTheme == 'dark'} onChange={HandleChange}/>
        </>
    )
}