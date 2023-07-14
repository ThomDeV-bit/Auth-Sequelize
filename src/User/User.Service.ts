import { UserModel, userDTO } from "./User.Model";
import { v4 } from "uuid";
import bcypt from "bcrypt"
import express, { Router, Request, Response } from "express";
import {CheckValidator, UserValidator}  from "../checkValidator/Checkvalidator";
import  Mensage  from "../status/Mensage";


const userService = Router()

userService.use(express.json())
const validator = new CheckValidator()
const userValidator = new UserValidator()

userService.post('/create', validator.checkValidator,userValidator.userValidator, async (req: Request, resp: Response) => {
    const id = v4()
    const body = req.body
    const passwordHashed = await bcypt.hash(req.body.password, 10)
    try {
        return resp.status(200)
            .json(new Mensage('User created sucefully', await UserModel.create({
                ...body,
                id,
                password: passwordHashed
            }), true))

    } catch (error) {
        throw console.log(error)

    }
})

userService.get('/find', async (req: Request, resp: Response) => {
    return resp.json(await UserModel.findAll())
})

export default userService