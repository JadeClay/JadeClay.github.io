import './Components/HeroPage'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import HeroPage from './Components/HeroPage';
import Navbar from './Components/ResponsiveAppBar';
import Footer from './Components/Footer';


const DarkTheme = createTheme({
  palette:{
    mode: 'dark',
  }
})

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
