import axios from "axios"

export const fetchRecipeDetails=async(recipeId)=>{
    return await axios.get(`http://localhost:8080/api/recipes/${recipeId}`);
}

