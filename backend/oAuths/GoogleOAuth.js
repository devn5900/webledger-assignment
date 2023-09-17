const passPort= require('passport');
require('dotenv').config();
const GoogleStrategy= require("passport-google-oauth").OAuth2Strategy;
passPort.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.GOOGLE_CALLBACK_URL
},
    function (accessToken,refreshToken,profile,callback){
        // console.log(accessToken,refreshToken,profile);
        
        return callback(null,profile)
    }
))

passPort.serializeUser((user,cb)=>{
    cb(null,user);  
})
passPort.deserializeUser((user,cb)=>{
    cb(null,user);  
})


module.exports={
    passPort
}