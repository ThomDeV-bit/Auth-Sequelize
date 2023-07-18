
import express, { Express, Router } from "express";
import contactService from "./Contact.Service";

const contactController = Router()


contactController.use(express.json())

contactController.use('/contact', contactService)

export default contactController