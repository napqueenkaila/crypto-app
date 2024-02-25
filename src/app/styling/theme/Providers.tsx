"use client";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, lightTheme, darkTheme } from "./theme";

type Props = {
    displayMode: string;
    children: React.ReactNode;
};

const Providers = (props: Props) => {
  return (
    <ThemeProvider theme={props.displayMode === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};

export default Providers;
