import React from 'react';
import useProtedtedPage from '../../hooks/useProtectedPage';

const RecipesListPage = () => {
    useProtedtedPage()
    return ( <div>
        <h1>RecipesListPage</h1>
    </div> );
}

export default RecipesListPage;