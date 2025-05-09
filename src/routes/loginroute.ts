import {Router} from 'express';
import path from 'path';
import{User}from '../modules/user'
import{readjsonfile}from '../middleware/files'

const loginroute =Router();

loginroute.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/login.html'))
})

loginroute.post('/login',async(req:any,res:any)=>{
    try{
        const {email,password} =req.body;
        if(!email||!password){
            return res.status(400).json({error:'Email and password are required'})
        }
        const data:User[] =await readjsonfile();
        const user=data.find((x)=>x.email===email&&x.password===password)
        if(!user){
            return res.status(400).json({error:'Invalid email or password'})
        }
        req.session.user=user;// i.m
        res.redirect('/profile');
    }
    catch(err){
        res.status(500).json({error:`Failed to process login request: ${err}`})
    }
})

export {loginroute};