const mogoose = require("mongoose");

const newsfeedSchema = new mogoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    images:{
        type: Array
    },
    like: {
        type: Number
    },
    dislike: {
        type: Number
    },
    commment:[
        {
            type: mogoose.Schema.Types.ObjectId,
            ref: 'CommentModel'
        }
    ],
    date:{
        type: Date,
        default: Date.now
    },
    likes:[
        {
            type: mogoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        }
    ],
    dislikes:[
        {
            type: mogoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        }
    ],
    createByUser:{
        type: mogoose.Schema.Types.ObjectId,
        ref:'UserModel'
    }
});

module.exports = mogoose.model("NewsfeedModel", newsfeedSchema);