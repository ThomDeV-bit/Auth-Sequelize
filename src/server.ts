import express from "express"
import db from  "./database"
import userRouter from "./User/User.Controller"

const app = express()

db.sync().then(()=>{
    console.log('data base connect')
    app.use('/'
        ,userRouter)
    app.listen(3000,()=>{console.log('Server running')})
})


