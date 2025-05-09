import {check} from "express-validator";
export function validator(){
    return[
        check('username').notEmpty().withMessage("Username shouldn't be empty")
        .isLength({min:5,max:20}).withMessage("Username must be between 5 and 20 charchter"),

        check('email').isEmail().withMessage("Email isn't valid"),
        
        check('password').notEmpty().withMessage("Password shouldn't be empty")
    ]
}