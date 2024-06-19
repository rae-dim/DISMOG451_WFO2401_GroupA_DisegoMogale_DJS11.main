import {useState} from "react" //allowa us to add state to components for state management.
import styled, { ThemeProvider } from "styled-components" //styled-components for creating styled components with dynamic theming. 'styled-components is a library that alows us to write CSS-in-JS that looks like a real CSS file, but with all the power of JavaScript
import "./index.css"
import { lightTheme, darkTheme } from "./utils/Themes"
import Sidebar from "./components/Sidebar"

const Container = styled.div`
    background: ${({ theme}) => theme.bg};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    `

export default function App() {
  const {darkMode, setDarkMode} = useState(true) //useState hook used to manage darkMode state. Initializes darkMode as true and provides 'setDarkMode' function to change the state.

  return (
    <ThemeProvider theme={darkMode? darkTheme : lightTheme}> {/**ThemeProvider is used to pass down the current theme to the styled components */}
    <Container>
      <Sidebar />
      Podtastic
    </Container>
    </ThemeProvider>
  );
}

