import express, { Express, Router } from "express";
import { Response, Request } from "express";
import  Mensage  from "./../status/Mensage";
import { v4 } from "uuid";
import { ContactModel, contactDTO } from "./Contact.Model";
import { CheckValidator, ContactValidator } from "./../checkValidator/Checkvalidator";
import { StringMappingType } from "typescript";
import { UserModel, userDTO } from "./../user/User.Model";
import { where } from "sequelize";


const contactService = Router()
contactService.use(express.json())
const contactValidator = new ContactValidator()

contactService.post('/create',contactValidator.contactValidator,async(req: Request,resp:Response)=>{
    const body: contactDTO | undefined = req.body
    const id = v4()
    const userExists: UserModel | null = await UserModel.findOne({
        where: {
            id : body?.userId

    }})

    if(userExists){
        const userContact : string | undefined= userExists?.dataValues.id!
        try {
            return resp.status(200).json(new Mensage('Contact Create Sucefully',await ContactModel.create({
                ...req.body,
                id_contact : id,
                userId : userContact
            }),true))
            
        } catch (error) {
            return resp.status(500).json(new Mensage('Internal Error', error, false))
        }
    }
    else{
        return resp.status(404).json(new Mensage('User Does not Exists',req.body.userId,false))
    }
})


contactService.get('/find', async(req:Request, resp: Response)=>{
    return resp.status(200).json(await ContactModel.findAll())
})

export default contactService