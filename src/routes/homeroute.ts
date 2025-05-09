import { Router, Request, Response } from 'express';
import path from'path';

const homeroute =Router();

homeroute.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/home.html'));
})

homeroute.get('/check-session',(req,res)=>{
    if(req.session.user){
        res.json({
            username:req.session.user.username,
            email:req.session.user.email
        })
    }
    else{
        res.json({});
    }
})
export {homeroute};