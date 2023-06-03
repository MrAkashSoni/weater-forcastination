import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "./theme";
import "./App.css";
import Home from "./pages/Home";
import DemoPage from "./pages/DemoPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/demopage" element={<DemoPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
