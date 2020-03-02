const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    avatar:{
        type: String
    },
    username:{
        type: String,
    },
    password:{
        type: String
    },
    notificationMessage:{
        type: Number
    },
    seemMessage:{
        type: Boolean
    },
    vote:{
        type: Number
    },
    down:{
        type: Number
    }, 
    quote:{
        type: String
    }
});

module.exports = mongoose.model("UserModel", userSchema);