import React from 'react';
import {useHistory} from "react-router-dom"


function AboutPage() {
    const history = useHistory()

    const gotoHomePage = () =>{
        history.push("/")
    }
    const goBack =() =>{
        history.goBack()
    }
    return ( 
        <div>
            <p>AboutPage</p>
            <iframe 
                src="https://giphy.com/embed/xT9IgrBcGHHemEZ0Ws" 
                width="480" 
                height="270" 
                frameBorder="0" 
                class="giphy-embed" 
                allowFullScreen>
            </iframe>
            <p>
                <button onClick={gotoHomePage}>
                    Ir para Home
                </button>
                <button onClick={goBack}>
                    Voltar
                </button>
            </p>
        </div>
    );
}

export default AboutPage;