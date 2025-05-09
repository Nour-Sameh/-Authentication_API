import { Router, Request, Response } from 'express';
import path from'path';
import {User} from '../modules/user';
import{validator} from '../middleware/validator';
import {writejsondata} from '../middleware/files'
import { validationResult } from 'express-validator';

const registerroute =Router();

registerroute.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/register.html'));
})

registerroute.post('/register',validator(),async(req:any,res:any)=>{
    try{
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()})
        }

        const {username,email,password}=req.body
        const newuser=new User(username,email,password);
        await writejsondata('users.json',newuser);// i.m
        res.redirect('/login')
    }
    catch(err){
        res.status(500).json({error:`Failed to register user: ${err}`})
    }
})
export {registerroute};