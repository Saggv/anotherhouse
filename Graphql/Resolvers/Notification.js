const Notification = require("../../Model/Notification");
const LikeNotification = async(props)=>{
        const notification = new Notification({
             fromUser: props.fromUser,
             contentNotification: props.content,
             toUser: props.toUser
        });
       const result = await notification.save();
        return 0;
}
const CommentNotification = async(props)=>{
    const notification = new Notification({
         fromUser: props.fromUser,
         contentNotification: props.content,
         toUser: props.toUser
    });
    await notification.save();
    return 0;
}



exports.LikeNotification = LikeNotification;
exports.CommentNotification = CommentNotification;