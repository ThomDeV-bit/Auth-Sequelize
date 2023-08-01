import express, { Express, Router, Request, Response } from "express";
import { CheckValidator, UserValidator } from "../checkValidator/Checkvalidator";
import { v4 } from "uuid";
import bcrypt from 'bcrypt'
import { UserModel } from "../user/User.Model";
import Mensage from "../status/Mensage";
import jwt from "jsonwebtoken"



const loginService = Router()
loginService.use(express.json())
const SECRET = 'APLICAÇAO'
const validator = new CheckValidator()
const userValidator = new UserValidator()

loginService.post('/singIn', validator.checkValidator, async (req: Request, resp: Response) => {
    const body: UserModel = req.body
    const user: UserModel | null = await UserModel.findOne({
        where: {
            mail: body.mail
        }
    })
    if (user) {
        try {
            const passwordHasd: string | undefined = user?.dataValues.password

            const hashed = await bcrypt.compare(body.password!, passwordHasd!)

            if (hashed == true) {
                const token = jwt.sign({id: user.id}, SECRET, { expiresIn: 300 })
                return resp.status(200).json({ token, Connection: new Mensage('User Connect', {id: user.id} , true) })
            }
            else {
                return resp.status(203).json(new Mensage('Incorrect Credentials', user, false))
            }

        } catch (error) {
            return resp.status(500).json(new Mensage('Internal Error', error, false))
        }

    }
    else {
        resp.status(404).json(new Mensage('Unavalible Account ', req.body.mail, false))
    }
})


export default loginService