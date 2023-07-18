import express from "express"
import db from "./database"
import userRouter from "./user/User.Controller"
import loginController from "./login/Login.Controller"

const app = express()

db.authenticate().then(() => {
    console.log('data base connect')
    app.use('/'
        , userRouter
        , loginController
    )
    app.listen(3000, () => { console.log('Server running') })
})


