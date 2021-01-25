import jwt from 'jsonwebtoken'
import asynchandler from 'express-async-handler'
import User from '../models/userModel.js'


const protect = asynchandler(async(req,res,next) =>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        try{
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            
             next()

        }
        catch(err){
            res.status(401)
            console.log(err)
            throw new Error('Not authorised')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not Authorised')
    }
})
const admin = (req,res,next) =>{
    if(req.user && req.user.isAdmin){
        next()
    }
    else{
        res.status(401)
        throw new Error('Not Authorised as admin')
    }
}

export {protect,admin}