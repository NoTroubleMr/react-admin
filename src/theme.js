import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { Battery20Rounded } from "@mui/icons-material";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
      // Original colors for dark mode
      gray: { 100: '#666666', 200: '#595959', 300: '#4c4c4c', 400: '#404040', 500: '#333333' },
      darkBlue: { 100: '#141b2b', 200: '#131a29', 300: '#121827', 400: '#111725', 500: '#101623' },
      teal: { 100: '#4cceac', 200: '#43c7a1', 300: '#3ac096', 400: '#31b98b', 500: '#28b280' },
      red: { 100: '#db4f4a', 200: '#d44a45', 300: '#cd4540', 400: '#c6403b', 500: '#bf3b36' },
      indigo: { 100: '#6870fa', 200: '#5f68f3', 300: '#565fec', 400: '#4d56e5', 500: '#444dde' },
    }
    : {
      // Inverted colors for light mode
      gray: { 100: '#999999', 200: '#a6a6a6', 300: '#b3b3b3', 400: '#bfbfbf', 500: '#cccccc' },
      darkBlue: { 100: '#ebe4d4', 200: '#ece5d6', 300: '#ede7d8', 400: '#eee8da', 500: '#efe9dc' },
      teal: { 100: '#b33153', 200: '#bc385e', 300: '#c53f69', 400: '#ce4674', 500: '#d74d7f' },
      red: { 100: '#24b0b5', 200: '#2bb5ba', 300: '#32babf', 400: '#39bfc4', 500: '#40c4c9' },
      indigo: { 100: '#978f05', 200: '#a0970c', 300: '#a9a013', 400: '#b2a91a', 500: '#bbb221' },
    }
  )
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette:{
      mode: mode, 
      ...(mode == 'dark'
      ? {
        primary: {
          main: colors.gray[500],
        },
        secondary: {
          main: colors.darkBlue[500],
        },
        neutral: {
          dark: colors.gray[700],
          main: colors.gray[500],
          light: colors.grey[100]
        },
        background: {
          default: colors.gray[500],
        }
        }:{         
        primary: {
          main: colors.gray[100],
        },
        secondary: {
          main: colors.red[500],
          },
        neutral: {
            dark: colors.gray[700],
          main: colors.gray[500],
          light: colors.grayy[100]
          },
        background: {
          default: colors.gray[100],
          }
        }
      ),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
    h1: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
    },
    },
    };
  };



// context for color mode 
export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => 
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
