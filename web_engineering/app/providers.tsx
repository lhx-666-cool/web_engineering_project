'use client'
import {ThemeProvider} from "next-themes";
import React, {ReactNode} from "react";
import {SnackbarProvider} from 'notistack';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({children}: ProvidersProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <>
      </>
    );
  }
  return (
    <>
      <ThemeProvider attribute={"class"}>
        <SnackbarProvider maxSnack={3}>
          {children}
        </SnackbarProvider>
        <div className="theme fixed bottom-1 right-1">
        </div>
      </ThemeProvider>
    </>
  );
}