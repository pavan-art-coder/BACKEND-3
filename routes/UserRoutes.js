const token=require('../middleware/auth')
const express=require('express')
const router=express.Router()

router.get('/dashboard',(req,res)=>{
    try{
        if(token){
            res.status(201).json({message:"Welcome to your Employee Dashboard! ",tok:token})
        }
        res.status(401).json({error:"Unauthorized"})

    }
    catch(error){
        res.status(500).json({error:'Error In Server'})
    }
})


router.post('/login',async(req,res)=>{
    const UserID="E12345"
    const password="securepass"
    try{
        if(!UserID || !password){
            res.status(400).json({message:'Enter Valid Crendentials'})
        }
    
         

    }
    catch(error){
        res.status(500).json({error:'Error In Server'})
    }
})

module.exports=router