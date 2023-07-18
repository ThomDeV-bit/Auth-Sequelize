import express from "express"
import db from "./database"
import userRouter from "./user/User.Controller"
import loginController from "./login/Login.Controller"
import contactController from "./contact/Contact.Controller"

const app = express()

db.authenticate().then(() => {
    console.log('data base connect')
    app.use('/'
        , userRouter
        , loginController
        ,contactController
    )
    app.listen(3000, () => { console.log('Server running') })
})


