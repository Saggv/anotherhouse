const jwt = require("jsonwebtoken");
require('dotenv').config();
module.exports = (req,res, next)=>{
    const authHead = req.get("Authorization");
    if(!authHead){
        req.isAuth = false;
        return next();
    }
    const token = authHead;
    if(!token || token ===""){
        req.isAuth = false;
        return next();
    }
    let decode;
    try{
        decode = jwt.verify(token,process.env.secretkey);
    }catch(err){
        req.isAuth = false;
        return next();
    }
    if(!decode){
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decode.userId;
    next();
}