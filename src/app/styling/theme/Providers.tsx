"use client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./theme";
import { useAppSelector } from "@/app/redux/hooks";
import { selectDarkMode } from "@/app/redux/features/darkModeSlice";

const Providers = ({children}: {children: React.ReactNode}) => {
  const darkMode = useAppSelector(selectDarkMode);

  return (
    <ThemeProvider theme={!darkMode ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
