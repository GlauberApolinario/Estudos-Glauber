import React from 'react';
import {ScreenContainer, LogoImage, SignUpButtonContainer} from "./styled"
import logo from "../../assets/logo.png"
import { Button } from '@material-ui/core';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router';
import {goToSignUpPage} from "../../routes/coordinator"
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = ({setLogButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return ( 
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm
                setLogButtonText={setLogButtonText}
            />
            <SignUpButtonContainer>
                <Button
                    onClick={()=> goToSignUpPage(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    >
                        Cadastre-se
                    </Button>
                </SignUpButtonContainer>
        </ScreenContainer> );
}

export default LoginPage;