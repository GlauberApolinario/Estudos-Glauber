import React from 'react';
import {useHistory} from "react-router-dom"

function HomePage() {
    const history = useHistory()

    const gotoAboutPage = () =>{
        history.push("/about")
    }

    return ( 
        <div>
            <p>HomePage</p>
            <iframe 
                src="https://giphy.com/embed/5xtDarqCp0eomZaFJW8" 
                width="480" 
                height="360" 
                frameBorder="0" 
                class="giphy-embed" 
                allowFullScreen>
            </iframe>
            <p>
                <button onClick = {gotoAboutPage}>
                    Ir para Sobre
                </button>
            </p>
        </div>
    );
}

export default HomePage;