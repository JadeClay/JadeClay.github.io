import './Components/HeroPage'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, CssBaseline, responsiveFontSizes, Stack, ThemeProvider } from '@mui/material';
import HeroPage from './Components/HeroPage';
import Navbar from './Components/ResponsiveAppBar';
import Footer from './Components/Footer';


let DarkTheme = createTheme({
  palette:{
    mode: 'dark',
    primary: {
      main: '#028090',
    },
    secondary: {
      main: '#00a896',
    },
  }
})

DarkTheme = responsiveFontSizes(DarkTheme);

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      
      <Navbar/>
      <Stack>
        <HeroPage/>
        <Footer/>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
