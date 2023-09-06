import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./routers";
import * as Styled from "./styles/global-style";
import { ApiProvider } from "./context/ApiContext";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Styled.ContainerGlobal>
        <ApiProvider>
          <Routes />
        </ApiProvider>
      </Styled.ContainerGlobal>
    </ThemeProvider>
  );
}
