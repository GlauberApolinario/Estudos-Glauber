export const goToLogin = (history) => {
    history.push("/login")
};

export const goToSignUp = (history) => {
    history.push("")
};

export const goToAddRecipesPage = (history) => {
    history.push("/adicionar-receita")
};

export const goToRecipeDetailPage = (history, id) => {
    history.push(`/detalhe/${id}`)
};

export const goToRecipesList = (history) => {
    history.push("/")
};