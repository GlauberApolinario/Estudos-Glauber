import React from 'react';
import { AddRecipeFormContainer, InputsContainer } from './styled';
import useForm from "../../hooks/useForm"
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import {createRecipe} from "../../services/recipe"

const AddRecipeForm = () => {
    const history = useHistory()
    const[form, onChange, clear] = useForm({title:"", description: "", image:""})

    
    const onSubmitForm = (e) => {
        e.preventDefault()
        createRecipe(form, clear)
        console.log(form)
    
    }
    return (
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
                <InputsContainer>
                    <TextField 
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"Título"}
                        fullWidth
                        required
                        autoFocus
                        margim={"normal"}
                    />
                    <TextField 
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        label={"Descrição"}
                        fullWidth
                        required
                        autoFocus
                        margim={"normal"}
                    />
                    <TextField 
                        name={"image"}
                        value={form.image}
                        onChange={onChange}
                        label={"Foto"}
                        fullWidth
                        required
                        autoFocus
                        margim={"normal"}
                    />
                </InputsContainer>
                <Button 
                    color={"primary"}
                    variant={'contained'}
                    type={"submit"}
                    fullWidth
                >
                    Adicionar Receita
                </Button>
            </AddRecipeFormContainer>
        </form>
    );
}

export default AddRecipeForm;