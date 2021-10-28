import React from 'react';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from "../../hooks/useRequestData"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import { RecipeListContainer, AddRecipeButton } from './styled';
import { Add } from '@material-ui/icons';
import { goToAddRecipesPage, goToRecipeDetailPage } from '../../routes/coordinator';
import { useHistory } from 'react-router';

const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    console.log(recipes)

    const onClickCard = (id) => {
        goToRecipeDetailPage(history, id)
        console.log("entrei")
    }

    const recipeList = recipes.map((recipe) => {
        return (
            <RecipeCard 
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClickCard(recipe.recipe_id)}
            />
        )
    })
    return (<RecipeListContainer>
                {recipeList}
                <AddRecipeButton 
                    color={'primary'}
                    onClick={()=> goToAddRecipesPage(history)}
                >
                    <Add/>
                </AddRecipeButton>
            </RecipeListContainer> );
}

export default RecipesListPage;