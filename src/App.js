import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar"

function App() {
  const [theme, ColorMode] = useMode();

  return (
   <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main className="content"></main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
      
  );

}

export default App;
