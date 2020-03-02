const CommentModel = require("../../Model/Comment");
const NewsfeedModel = require("../../Model/Newsfeed");
const {CommentNotification} = require("./Notification");

module.exports ={
    PostCommentNewsfeed:async(args, req)=>{
        if(!req.isAuth){
            throw new Error("Authorization error!")
        }
        const {contentComment, images, idNewsfeed,idToUser} = args.inputPostCommentNewsfeed;
        const newsComment = new CommentModel({
             userComment: req.userId,
             contentComment: contentComment,
             images: images,
             idNewsfeed: idNewsfeed
        });
        const result =await newsComment.save();
         await NewsfeedModel.updateOne({_id: idNewsfeed},{$addToSet:{commment:result._id}});
        const comment =await CommentModel.findOne({_id:result._id}).populate('userComment');
        let praram ={
            fromUser:req.userId,
            content:"Comment your post....",
            toUser: idToUser
        }
        CommentNotification(praram);
        return comment;
    },
    // GET COMMENT OF NEWSFEEF
    GetCommentNewsfeed: async(args)=>{
        const result = await NewsfeedModel.findOne({_id: args.idNewsfeed}, {commment:1}).populate('commment');
        const getComment =await Promise.all(result.commment.map(async(item)=>{
             let a =await CommentModel.findOne({_id:item._id}).populate('userComment').sort({dateComment:1});
             return a;
        }));        
        return getComment;
    }

}