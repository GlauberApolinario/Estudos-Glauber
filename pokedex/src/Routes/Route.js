import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import MyPokedex from "../Pages/MyPokedex";
import Details from "../Pages/Details";


const Routes = () => {
    return(

        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/pokedex"}>
                    <MyPokedex />
                </Route>
                <Route exact path={"/detalhes"}>
                    <Details />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;