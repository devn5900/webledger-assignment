const mongoose= require('mongoose')
require('dotenv').config();

const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('connected to DB')
    } catch (error) {
        console.log('Error while connecting to DB')
    }
}

module.exports={
    dbConnection
}