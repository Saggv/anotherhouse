const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
      Sender:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "UserModel"
      },
      Reciever:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "UserModel"
      },
      date:{
          type: Date,
          default: Date.now
      },
      contentMessage:{
          type: String
      },
      idRoom:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "RoomChatModel"
      }
});
module.exports = mongoose.model("ChatModel", chatSchema);