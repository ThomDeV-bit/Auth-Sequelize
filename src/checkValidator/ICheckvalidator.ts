import { NextFunction, Request, Response } from "express";
import { UserModel, userDTO } from "./../user/User.Model";
import { Mensage } from "./../status/IMensage";


export class CheckValidator {
    async checkValidator (req: Request, resp: Response, next: NextFunction) {
        const user: userDTO = req.body
        if (user.mail === null) {
            return resp.status(400).json(new Mensage('User name can not be null', user, false))
        }
        if (user.password === null) {
            return resp.status(400).json(new Mensage('Password  can not be null', user, false))
        }
        if (user.mail === '') {
            return resp.status(400).json(new Mensage('User name can not be empty', user, false))
        }
        if (user.password === '') {
            return resp.status(400).json(new Mensage('Password  can not be empty', user, false))
        }

        next()
    }

}


export class UserValidator {
    async userValidator(req: Request, resp: Response, next: NextFunction) {
        const user: userDTO = req.body
        const userModel: UserModel | null = await UserModel.findOne({
            where: {
                mail: user.mail
            }
        })
        const mail: string | undefined = userModel?.dataValues.mail!

        if (user.mail === mail) {
            return resp.status(406).json(new Mensage('Email is already in use', user.mail, false))
        }
        if (user.mail === null) {
            return resp.status(400).json(new Mensage('E-mail can not be null', user, false))
        }
        if (user.mail === '') {
            return resp.status(400).json(new Mensage('E-mail name can not be empty', user, false))

        }
        next()
    }

}


/*export class ContactValidator {
    async contactValidator(req: Request, resp: Response, next: NextFunction) {
        const user = <contactDTO>req.body
        if (user.fullName === '') {
            return resp.status(400).json(new Mensage("Name can not be empty", user, false))
        }
        if (user.fullName=== null) {
            return resp.status(400).json(new Mensage("Name can not be null", user, false))
        }
       
        if (user.number === '') {
            return resp.status(400).json(new Mensage("Number can not be empty", user, false))
        }
        if (user.number === '') {
            return resp.status(400).json(new Mensage("Number can not be empty", user, false))
        }
        next()
    */
