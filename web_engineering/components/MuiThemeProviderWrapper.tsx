"use client";

import {useTheme} from "next-themes";
import {ThemeProvider} from "@mui/material/styles";
import {lightTheme, darkTheme} from "@/ts/theme";
import React, {useEffect, useState} from "react";

export default function MuiThemeProviderWrapper({
                                                  children,
                                                }: {
  children: React.ReactNode;
}) {
  const {theme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 在客户端挂载后，根据 next-themes 的主题选择 MUI 主题
  const muiTheme = mounted && theme === "dark" ? darkTheme : lightTheme;

  // 在挂载之前或主题未确定时，可以返回一个加载状态或默认主题
  if (!mounted) {
    // 或者返回一个默认主题的 ThemeProvider，避免 hydration 错误
    return (
      <ThemeProvider theme={darkTheme}>
        {children}
      </ThemeProvider>
    );
  }


  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}