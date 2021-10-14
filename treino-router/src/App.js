import './App.css';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
        <HomePage />
        </Route>
        <Route exact path={"/about"}>
          <AboutPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
