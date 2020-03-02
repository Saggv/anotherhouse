const mongoose = require("mongoose");

const roomHotelSchema = new mongoose.Schema({
      images:[
          {
              type: String
          }
      ],
      description:{
          type:String
      },
      address:{
          type: String
      },
      roomFor:{
          type: Number
      },
      price:{
          type: Number
      },
      createBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
      },
      typeOfRoom:{
          type:String,
          required: true
      }
});
module.exports = new mongoose.model("RoomHotelModel", roomHotelSchema);