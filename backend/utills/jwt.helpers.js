const jwt = require('jsonwebtoken');
require('dotenv').config();

const getJwtToken=async(data)=>{
    try {
      const token= jwt.sign(data,process.env.JWT_PRIVATE_KEY)
      return token;
    } catch (error) {
        console.log(error)
    }
    
}

module.exports={
    getJwtToken
}