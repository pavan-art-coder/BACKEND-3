const JWT=require('jsonwebtoken')
const USERID=require('../UP/Hardcore')

const token=async()=>{
    try{
        const generatetoken= await JWT.sign({USERID},{expiresIN:10})
        res.json(generatetoken)
    }
    catch(error){
        res.status(500).json({error:'Error In Generating'})

    }
}
module.exports=token