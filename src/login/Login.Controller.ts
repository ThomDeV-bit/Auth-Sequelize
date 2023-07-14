import express, { Router } from "express";
import loginService from "./Login.Service";

const loginController = Router()


loginController.use(express.json())

loginController.use('/login', loginService)


export default loginController