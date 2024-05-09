import Dashboard from "./components/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  mainColors: {
    primary: {
      main: "#152350",
    },
    secondary: {
      main: "#09153E",
    },
    white: {
      main: "#fff",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
