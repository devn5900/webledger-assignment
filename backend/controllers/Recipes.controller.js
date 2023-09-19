const axios= require('axios');
const { makeQueryParams, headers } = require('../utills/queryGenerator');
require('dotenv').config();
const getRecipes=async(req,res)=>{
    const query=req.query;
    
    try {
        const result= await axios.get(makeQueryParams(query,'/recipes/complexSearch'),{
            headers
        })
        return res.status(200).json(result.data)
    } catch (error) {
        console.log(error)
        return res.status(404).json({msg:"Bad Request !"})
    }
}

const getInformationAboutRecipe=async(req,res)=>{

    const {recipeId}= req.params;

    try {
        const result= await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`,{
            headers
        });
        return res.status(200).json(result.data)
    } catch (error) {
        console.log(error)
        return res.status(404).json({msg:"Bad Request !"})
    }
}

module.exports={
    getRecipes,
    getInformationAboutRecipe
}