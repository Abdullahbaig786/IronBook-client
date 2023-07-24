import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Homepage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import Friend from "components/Friend";

function App() {
  //get the value from state
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/*Css baseline is a component from Material-UI that applies basic CSS normalization to your application */}
          <CssBaseline />

          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
