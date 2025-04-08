const express=require("express")
require('dotenv').config()
const router=require('../BACKEND-3/routes/UserRoutes')

const app=express();
app.use(express.json())
app.use('/GET',router)

app.get('/',(req,res)=>{
    res.send("HELLO WORLD")
})


const PORT=5000
app.listen(PORT,async()=>{
  console.log(`Server is running on the PORT${PORT}`)
})

