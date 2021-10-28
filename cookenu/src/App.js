import { ThemeProvider } from '@material-ui/core/styles';
import React, {useState} from 'react';
import Router from "./routes/Router"
import theme from './constants/theme';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
    const token = localStorage.getItem("token")
    const [logButtonText, setLogButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
          logButtonText={logButtonText}
          setLogButtonText={setLogButtonText}
        />
        <Router 
          logButtonText={logButtonText}
          setLogButtonText={setLogButtonText}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
