import React from 'react';
import { LogoImage, ScreenContainer } from './styled';
import logo from "../../assets/logo.png"
import SignUpForm from './SignUpForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const SignUpPage = () => {
    useUnprotectedPage()
    return ( <div>
        <ScreenContainer>
            <LogoImage src={logo} />
            <SignUpForm />
        </ScreenContainer>
    </div> );
}

export default SignUpPage;