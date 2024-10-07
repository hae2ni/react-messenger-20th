import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import { router } from "routes/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
