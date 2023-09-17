const express= require("express");
const cors= require('cors');
const session= require('express-session')
const { dbConnection } = require("../connection/db.con");
const { userRouter } = require("../routes/Users.routes");
const { passPort } = require("../oAuths/GoogleOAuth");
const { recipesRouter } = require("../routes/Recipes.routes");
const { FavoritesRouter } = require("../routes/Favorites.routes");
const app= express();
require('dotenv').config();
const port= process.env.PORT||8080
app.use(express.json());
app.use(cors());
app.use(session({
    secret:"devvn",
    resave:false,
    saveUninitialized:true
}));

app.use(passPort.initialize());
app.use(passPort.session());

app.use("/api/user",userRouter);
app.use("/api/recipes",recipesRouter);
app.use("/api/favorites",FavoritesRouter)

app.listen(port,()=>{
    console.log('server is running on',port);
    dbConnection();
})