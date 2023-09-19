const {Router}= require('express');
const { getFavorites, addFavorites, removeFromFav } = require('../controllers/Favorites.controller');
const { authentication } = require('../middlewares/authentication.middleware');

const FavoritesRouter=Router();

FavoritesRouter.get("/",authentication,getFavorites)

FavoritesRouter.post("/:favId",authentication,addFavorites)
FavoritesRouter.delete("/:favId",authentication,removeFromFav)

module.exports={
    FavoritesRouter
}