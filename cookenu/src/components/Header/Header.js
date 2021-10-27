import  React from 'react';
import { AppBar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { StyledToolBar } from './styled';
import {goToRecipesListPage, goToLoginPage} from "../../routes/coordinator"
import { useHistory } from 'react-router-dom';


const Header = () => {
    const history = useHistory()
    return (
            <AppBar position="static">
                <StyledToolBar >
                    <Button onClick={()=> goToRecipesListPage(history)} color="inherit">Cookenu</Button>
                    <Button onClick={()=> goToLoginPage(history)} color="inherit">Login</Button>
                </StyledToolBar>
            </AppBar>
    );
}
export default Header