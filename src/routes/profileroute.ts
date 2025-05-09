import { Router, Request, Response } from 'express';
import path from'path';
const profileroute =Router();

profileroute.get('/profile',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/profile.html'));
})

profileroute.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
})

export {profileroute};
