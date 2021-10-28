import  React from 'react';
import { AppBar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { StyledToolBar } from './styled';
import {goToRecipesListPage, goToLoginPage} from "../../routes/coordinator"
import { useHistory } from 'react-router-dom';


const Header = ({logButtonText, setLogButtonText}) => {
    const token = localStorage.getItem("token")
    const history = useHistory()
    
    const logout = () => {
        localStorage.removeItem("token")
    }

    const logButtonAction = () => {
        if(token){
            logout()
            setLogButtonText("Login")
            goToLoginPage(history)
        } else {
            goToLoginPage(history)
        }
    }
    return (
            <AppBar position="static">
                <StyledToolBar >
                    <Button onClick={()=> goToRecipesListPage(history)} color="inherit">Cookenu</Button>
                    <Button onClick={logButtonAction} color="inherit">{logButtonText}</Button>
                </StyledToolBar>
            </AppBar>
    );
}
export default Header