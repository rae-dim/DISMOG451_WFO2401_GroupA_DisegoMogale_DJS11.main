import {useState} from "react"
import styled, { ThemeProvider } from "styled-components"
import "./index.css"
import { lightTheme, darkTheme } from "./utils/Themes"

const Container = styled.div`
    background: ${({ theme}) => theme.bg};
    width: 100%;
    height: 100vh;`

export default function App() {
  const {darkMode, setDarkMode} = useState(true) 

  return (
    <ThemeProvider theme={lightTheme}>
    <Container>
      Podtastic
    </Container>
    </ThemeProvider>
  );
}

