const {Router}= require("express");
const { getRecipes, getInformationAboutRecipe } = require("../controllers/Recipes.controller");

const recipesRouter= Router();

recipesRouter.get("/",getRecipes)

recipesRouter.get("/:recipeId",getInformationAboutRecipe)

module.exports={
    recipesRouter
}