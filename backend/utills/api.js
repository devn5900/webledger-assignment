const { default: axios } = require("axios");
const { headers } = require("./queryGenerator");


const fetchRecipes=async(ids)=>{
        try {
            return await axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=${ids}`,{
                headers
            });
            
        } catch (error) {
            console.log(error);
        }
}


module.exports={
    fetchRecipes
}