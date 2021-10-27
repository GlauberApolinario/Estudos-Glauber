import React from 'react';
import { useHistory } from 'react-router';
import { LogoImage, ScreenContainer } from './styled';
import logo from "../../assets/logo.png"
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
    const history = useHistory()
    return ( <div>
        <ScreenContainer>
            <LogoImage src={logo} />
            <SignUpForm />
        </ScreenContainer>
    </div> );
}

export default SignUpPage;