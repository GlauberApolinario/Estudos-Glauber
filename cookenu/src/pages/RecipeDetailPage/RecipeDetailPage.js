import { Button } from '@material-ui/core';
import React from 'react';
import useProtedtedPage from '../../hooks/useProtectedPage';

const RecipeDetailPage = () => {
    useProtedtedPage()
    return ( <div>
        <h1>RecipeDetailPage</h1>
    </div> );
}

export default RecipeDetailPage;