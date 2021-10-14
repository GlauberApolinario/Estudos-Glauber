import React from 'react';

function HomePage() {
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
            <p><a href="https://giphy.com/gifs/philipparice-house-diving-wheels-5xtDarqCp0eomZaFJW8">via GIPHY</a></p>
        </div>
    );
}

export default HomePage;