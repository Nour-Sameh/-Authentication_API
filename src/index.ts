import  express  from "express";
import path from "path"
import session from "express-session";
import{homeroute} from "./routes/homeroute";
import{loginroute} from "./routes/loginroute";
import{registerroute} from "./routes/registerroute";
import{profileroute} from "./routes/profileroute";

 const app=express();
const port=8000; 

 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(express.static(path.join(__dirname,'public')));

 app.use(session({
    secret:'nour',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60000
    }
 }));

declare module 'express-session'{
    interface SessionData{//لازم نفس word
        user?:{
            username:string;
            email:string;
            password:string;
        };
    }
}

app.use('/',homeroute);
app.use('/',loginroute);
app.use('/',registerroute);
app.use('/',profileroute);

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
});



