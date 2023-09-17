const jwt= require('jsonwebtoken');
require('dotenv').config();
const authentication=async(req,res,next)=>{
    const token= req.headers.authorization.split(" ")[1];
    console.log(token)
    if(!token){
        return res.status(401).json({msg:"You are not Authorizaed !"});
    }
    try {
        jwt.verify(token,process.env.JWT_PRIVATE_KEY,(err,code)=>{
            req.body.userId=code.userId;
            next();
        })
    } catch (error) {
        console.log(error)
        return res.status(401).json({msg:"Token expired, Please login again !"});
    }
}

module.exports={
    authentication
}