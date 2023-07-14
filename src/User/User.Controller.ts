import express, { Express, Router } from "express";
import userService from "./User.Service";


const userRouter = Router()

userRouter.use(express.json())

userRouter.use('/User', userService )

export default userRouter