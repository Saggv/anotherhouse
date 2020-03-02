const RoomChatModel = require("../../Model/RoomChat");

module.exports={
    FetchMyMessage:async(args, req)=>{
        const roomChat = await RoomChatModel.find({$or:[{userSend: req.userId},{userRecive: req.userId}]})
                                        .populate('userSend').populate('userRecive').sort({ date:-1});
        return roomChat
    }
}