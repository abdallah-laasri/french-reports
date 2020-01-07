import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    grey1: "#B8B2DB",
    grey2: "#9B99A3",
    black: "#0A0915",
    blue: "#2010F4"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
