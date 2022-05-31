import ProjectContainer from './containers/ProjectContainer'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { lightTheme, darkTheme } from './styles/theme'
import '@fontsource/roboto'

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <ProjectContainer />
        </ThemeProvider>
    )
}

export default App
