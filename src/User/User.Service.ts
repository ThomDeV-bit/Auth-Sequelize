import { UserModel, userDTO } from "./User.Model";
import uuid, { v4 } from "uuid";
import bcypt from "bcrypt"
import express, { Router, Request, Response } from "express";
import { Console } from "console";


const userService = Router()

userService.use(express.json())


userService.post('/create', async (req: Request, resp: Response) => {
    const id = v4()
    const body = req.body
    const passwordHashed = await bcypt.hash(req.body.password, 10)
    try {
        return resp.status(200).send(await UserModel.create({
            ...body,
            id,
            password: passwordHashed
        }))

    } catch (error) {
        throw console.log(error)

    }
})

userService.get('/find', async (req: Request, resp: Response) => {
    return resp.json(await UserModel.findAll())
})

export default userService