import React from 'react';
import useProtedtedPage from '../../hooks/useProtectedPage';

const AddRecipesPage = () =>{
    useProtedtedPage()
    return (
    <div>
        <h1>AddRecipesPage</h1>
    </div>
)}

export default AddRecipesPage