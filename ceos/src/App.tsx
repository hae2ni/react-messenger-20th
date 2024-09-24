import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import ChattingRoom from "./pages/chattingRoom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChattingRoom />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
