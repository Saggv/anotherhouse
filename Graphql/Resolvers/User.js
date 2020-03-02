const UserModel = require("../../Model/User");
const NotificationModel = require("../../Model/Notification");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { LikeNotification} = require("./Notification");
require('dotenv').config();
module.exports = {
     SignUp: async(args)=>{
            const isUserExist = await UserModel.findOne({name: args.inputSignUp.userName});
            if(isUserExist){
                throw new Error("User name already existed !!!");
            }
            const password = await bcrypt.hash(args.inputSignUp.password, 12);
            const newUser = new UserModel({
                name: args.inputSignUp.name,
                username: args.inputSignUp.userName,
                password: password,
                avatar: "https://tinyjpg.com/images/social/website.jpg"
            });
            const result = await newUser.save();
            if(!result){
                throw new Error("Error! please fill again   !")
            }
            const token = jwt.sign({userId:result._id, name:result.name},process.env.secretkey);
            return{
                ...result._doc,
                id: result.id,
                name: result.name,
                token: token,
                avatar: result.avatar
            }
     },
     Login: async(args)=>{
         const {userName, password} = args.inputLogin;
         const user =await UserModel.findOne({username: userName});
         if(!user){
             throw new Error("User doesn't exist !");
         }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new Error("Password wrong !");
        }
        const token = jwt.sign({userId: user._id, userName: user.userName}, process.env.secretkey);
        return{
            token: token,
            name:user.name,
            username: user.username,
            avatar: user.avatar,
            id: user._id,
            notificationMessage: user.notificationMessage
        }
     },
     GetUser: async(args, req)=>{
         if(!req.isAuth){
             throw new Error("Authorization error!");
         }
         const result = await UserModel.findById({_id:req.userId});
         return{
             name: result.name,
             username: result.username,
             avatar: result.avatar,
             notificationMessage: result.notificationMessage,
             seemMessage: result.seemMessage,
             id: result._id,
             vote: result.vote,
             down: result.down,
             quote: result.quote
         }
     },
     Notification: async(args, req)=>{
         if(!req.isAuth){
             throw new Error("Authorization error!");
         }
         const result = await NotificationModel.find({toUser: req.userId}).populate('fromUser').sort( { date: -1 } );
         return result;
     },
     SeenNotification:async(args, req)=>{
         if(!req.isAuth){
             throw new Error("Authorization error!!");
         }
          await NotificationModel.updateMany({toUser: req.userId, seen: false},{ $set: { "seen" : true }});
          const result = await NotificationModel.find({toUser: req.userId}).populate('fromUser');
         return result;
     },
     FetchOtherProfile: async(args)=>{
        const result = await UserModel.findById({_id: args.userId});
        return{
            name: result.name,
            username: result.username,
            avatar: result.avatar,
            id: result._id
        }
     },
     SeenMessage: async(args, req)=>{
         if(!req.isAuth){
             throw new Error("Authorization error !");
         }
         await UserModel.findByIdAndUpdate({_id: req.userId},{ $set: { notificationMessage: 0} });
         return "Seen message";
     },
     VoteUser: async(args, req)=>{
         if(!req.isAuth){
             throw new Error("Authization error !!");
         }
         await UserModel.findByIdAndUpdate({_id: args.userId}, {$inc: {vote:1}});
         // await NewsfeedModel.findByIdAndUpdate({_id:idNewsfeed},{$inc:{like:1}, $addToSet:{likes:req.userId}});
         let param ={
            fromUser: req.userId,
            content:"Vote your profile...",
            toUser: args.userId
        }
        LikeNotification(param); 
        return "Vote profile !!!";
     },
     DownUser: async(args, req)=>{
        if(!req.isAuth){
            throw new Error("Authization error !!");
        }
        await UserModel.findByIdAndUpdate({_id: args.userId}, {$inc: {down:1}});
        // await NewsfeedModel.findByIdAndUpdate({_id:idNewsfeed},{$inc:{like:1}, $addToSet:{likes:req.userId}});
        let param ={
           fromUser: req.userId,
           content:"Have something wrong with your profile...",
           toUser: args.userId
       }
       LikeNotification(param); 
       return "Down profile !!!";
     },
     UpdateUserProfile: async(args, req)=>{
         if(!req.isAuth){
             throw new Error("Authization error !");
         }
         const {username, name, quote} = args.inputUpdateProfile;
         const result = await UserModel.findByIdAndUpdate({_id: req.userId}, {$set:{"username": username, "name":name, "quote":quote}});
         return result;
     }
}