import React from 'react';
import { Switch, Route} from "react-router-dom"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPaage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({setLogButtonText}) => {
    return ( 
        <Switch>
            <Route exact path="/login">
                <LoginPage 
                    setLogButtonText={setLogButtonText}
                />
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage 
                    setLogButtonText={setLogButtonText}
                />
            </Route>
            <Route exact path="/">
                <RecipesListPage />
            </Route>
            <Route exact path="/adicionar-receita">
                <AddRecipesPage />
            </Route>
            <Route exact path="/detalhe/:id">
                <RecipeDetailPaage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    );
}

export default Router;