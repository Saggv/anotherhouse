const NewsfeedModel = require("../../Model/Newsfeed");
const { LikeNotification} = require("./Notification");
// const fileStorage = multer.diskStorage({
//     destination:(req, file, cb)=>{
//         cb(null, "images");
//     },
//     filename:(req, file, cb)=>{
//         cb(null, "image-"+file.originalname);
//     }
// });
// const  upload = multer({storage:fileStorage});
// app.post("/uploadfile",upload.single("image"),async(req, res)=>{
//     let avatarUrl ="/image/"+req.file.filename;
//     await userModel.findByIdAndUpdate({_id: req.userID}, {"avatar": avatarUrl});
//     res.status(200).json({msg:"success"});
// })

// const postImage = upload.array('photos', 12);

module.exports ={
    PostNewsfeed: async(args,req)=>{
        console.log( req.files);
        console.log(args.inputNewsfeed.images);
        // if(!req.isAuth){
        //     throw new Error("Authrization error !!");
        // }
        // const Newsfeed = new NewsfeedModel({
        //     title: args.inputNewsfeed.title,
        //     description: args.inputNewsfeed.description,
        //     images: args.inputNewsfeed.images,
        //     createByUser: req.userId
        // });
        //  const newNewsFeed = await Newsfeed.save();
        //  const result = await NewsfeedModel.findById({_id:newNewsFeed._id})
        //                         .populate('createByUser').populate([{path:'commment', populate:{path:'userComment'} }])
        //  return result;
    },
    GetNewsfeed: async(args)=>{
        const {limit, skip} = args;
        // const result = await NewsfeedModel.find().limit(limit).skip(skip).populate('createByUser');
        const result = await NewsfeedModel.find().limit(limit).skip(skip).populate('createByUser')
                                .populate([{path:'commment', populate:{path:'userComment'} }]).sort({ "date":1});
   
        return result;
        // Agenda.find().populate([{ path: 'proid', populate: { path: 'userid' }}])
        // const result = await NewsfeedModel.findOne({_id: args.idNewsfeed}, {commment:1}).populate('commment');
        // const getComment =await Promise.all(result.commment.map(async(item)=>{
        //      let a =await CommentModel.findOne({_id:item._id}).populate('userComment').sort({dateComment:1});
        //      return a;
        // }));        
        // return getComment;
    },
    LikeNewsfeed: async(args,req)=>{
        if(!req.isAuth){
            throw new Error("Authorization error!")
        }
        const {idNewsfeed, idToUser} = args.inputLikeNewsfeed;
         await NewsfeedModel.findByIdAndUpdate({_id:idNewsfeed},{$inc:{like:1}, $addToSet:{likes:req.userId}}); 
         const result = await NewsfeedModel.findById({_id:idNewsfeed})
                        .populate('createByUser').populate([{path:'commment', populate:{path:'userComment'} }]);
         let param ={
             fromUser: req.userId,
             content:"Like your post...",
             toUser: idToUser
         }
         LikeNotification(param);
        return result;
    },
    UnLikeNewsfeed: async(args, req)=>{
        if(!req.isAuth){
            throw new Error("Authorization error!")
        }
        const {idNewsfeed, idToUser} = args.inputLikeNewsfeed;
         await NewsfeedModel.findByIdAndUpdate({_id:idNewsfeed},{$inc:{dislike:1}, $addToSet:{dislikes:req.userId}}); 
         const result = await NewsfeedModel.findById({_id:idNewsfeed})
                        .populate('createByUser').populate([{path:'commment', populate:{path:'userComment'} }]);
         let param ={
             fromUser: req.userId,
             content:"Don't like your post...",
             toUser: idToUser
         }
         LikeNotification(param);
        return result;
    },
    NewsfeedUserNow:async(args,req)=>{
        if(!req.isAuth){
            throw new Error("Authorization error !!!");
        }
        const result = await NewsfeedModel.find({createByUser: req.userId})
                                          .populate('createByUser').populate([{path:'commment', populate:{path:'userComment'} }]);
        return result;
    },
    GetNewsfeedAnotherProfile: async(args)=>{
        const result = await NewsfeedModel.find({createByUser: args.userId})
                                .populate('createByUser').populate([{path:'commment', populate:{path:'userComment'} }]);
        return result;
    }
}