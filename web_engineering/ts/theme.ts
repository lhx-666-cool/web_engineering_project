'use client'
import { createTheme } from "@mui/material";
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // 暗色模式
  }
});
const lightTheme = createTheme({
  palette: {
    mode: 'light', // 暗色模式
  }
});


export {
  darkTheme, lightTheme
}