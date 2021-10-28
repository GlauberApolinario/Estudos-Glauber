import axios from 'axios';
import {BASE_URL} from '../constants/urls'
import {goToRecipesListPage} from "../routes/coordinator"

export const login = (body, clear, history, setLogButtonText) => {
    axios
        .post(`${BASE_URL}/user/login`, body)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesListPage(history)
            setLogButtonText("Logout")
        })
        .catch((err)=>
            alert(err.response.data.message)
        )
}

export const signUp = (body, clear, history, setLogButtonText) => {
    axios
        .post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesListPage(history)
            setLogButtonText("Logout")
        })
        .catch((err) => alert(err.response.data.message))
}