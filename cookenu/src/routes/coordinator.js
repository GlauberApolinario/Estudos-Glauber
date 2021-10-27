export const goToLoginPage = (history) => {
    history.push("/login")
};

export const goToSignUpPage = (history) => {
    history.push("/cadastro")
};

export const goToAddRecipesPage = (history) => {
    history.push("/adicionar-receita")
};

export const goToRecipeDetailPage = (history, id) => {
    history.push(`/detalhe/${id}`)
};

export const goToRecipesListPage = (history) => {
    history.push("/")
};