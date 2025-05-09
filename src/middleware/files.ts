import {  promises as fs } from "fs";
import path from 'path'
import {User} from '../modules/user'

const filepath = path.join(__dirname,'../users.json' );

export async function readjsonfile(): Promise<User[]>{// i.m 
    try{
        await fs.access(filepath);
        const data =await fs.readFile(filepath,'utf-8');
        return JSON.parse(data) as User[];// i.m from json to obj
    }
    catch(err){
        throw new Error(`Failed to read users.json ${err}`); // i.m
    }
}

export async function writejsondata(file:any,data:any){
    try{
        if(await exists(file)){
            const raw =await fs.readFile(file,'utf8');
            const arr=JSON.parse(raw);// i.m
            arr.push(data);
            await fs.writeFile(file,JSON.stringify(arr,null,2));// i.m
        }
        else{
            await fs.writeFile(file,JSON.stringify(data,null,2))
        }
    }
    catch(err){
        console.log(err)
    }
}

async function exists(file:any) {
   try{
    await fs.access(file);
    return true;
   }
   catch(err){
    return false;
   }
   
}