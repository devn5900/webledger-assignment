const mongoose= require('mongoose');

const FavoriteSchema=mongoose.Schema({
    userId:{type:'ObjectId'},
    favorites:[{type:String}]
},{
    versionKey:false
})

const FavoriteModel=mongoose.model("favorites",FavoriteSchema);


module.exports={
    FavoriteModel
}