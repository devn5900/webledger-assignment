const { UserModel } = require("../models/User.model");
const { getJwtToken } = require("../utills/jwt.helpers");

const userLoginSuccess=async(req,res,user)=>{
    let isExists=null;
    try {
        isExists= await UserModel.findOne({email:user.email});
        if(!isExists){
            const isSaved= new UserModel(user);
            isExists= await isSaved.save();
        }
    } catch (error) {
        console.log(error);
    }
    if(isExists){
        const token= await getJwtToken({userId:isExists._id});
        const data= {name:isExists.name,image:isExists.image,email:isExists.email};
      return token&&res.redirect(`http://localhost:3000/login/success?token=${token}&data=${JSON.stringify(data)}`);
    }
      return  res.status(400).json({msg:"Failed to Access Creadentials"});
}

module.exports={
    userLoginSuccess
}