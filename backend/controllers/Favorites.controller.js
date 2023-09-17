const { FavoriteModel } = require("../models/Favorite.model");
const { fetchRecipes } = require("../utills/api");

const getFavorites=async(req,res)=>{
    const {userId}= req.body
    try {
        const status= await FavoriteModel.findOne({userId});
        if(status){
            const resposne= await fetchRecipes(status.favorites.join(","));
            return res.status(200).json({data:resposne.data});
        }else{
            return res.status(200).json({msg:"There is no Data"})
        }
    } catch (error) {
        console.log(error);
    }
}

const addFavorites=async(req,res)=>{
    const {userId}= req.body;
    const {favId}= req.params;
    try {
        const status= await FavoriteModel.findOne({userId});
        if(!status){
            const isSaved= new FavoriteModel({userId,favorites:[favId]});
            await isSaved.save();
        }else{
            await FavoriteModel.findOneAndUpdate({userId},{
                $push:{favorites:favId}
            })
        }
        return res.status(201).json({msg:"Added to Favorites"})
    } catch (error) {
        
    }
}

module.exports={
    getFavorites,
    addFavorites
}