import {Request, Response} from 'express'
import EmailService from '../services/EmailService'

const users = [
    {name:'Akram', email:'akrammadi@hotmail.com'}
]

export default {
    async index(req:Request, res:Response){
        return res.json(users)
    },
    
    async create(req:Request,res:Response){
        const emailService = new EmailService()
        
        emailService.sendMail({
            to:{
                name:'Akram',
                email:'akrammadi@hotmail.com'
            },
            message:{
                subject:'fodase',
                body:'gfhdjksacvjnrjskcsacsrjd'
            }
        })
        return res.send()
    }
}