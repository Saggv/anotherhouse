const mongoose = require("mongoose");

const RoomChatSchema = new mongoose.Schema({
    userSend:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    userRecive:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    lastMessage:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
});
module.exports = new mongoose.model("RoomChatModel", RoomChatSchema);