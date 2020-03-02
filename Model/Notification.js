const mongose = require("mongoose");

const notificationSchema = new mongose.Schema({
     fromUser:{
         type: mongose.Types.ObjectId,
         ref: 'UserModel'
     },
     contentNotification:{
         type: String
     },
     date:{
         type:Date,
         default:Date.now
     },
     seen:{
         type: Boolean,
         default: false
     },
     toUser:{
         type: mongose.Types.ObjectId,
         ref:'UserModel'
     }
});

module.exports = mongose.model("NotificationModel", notificationSchema);