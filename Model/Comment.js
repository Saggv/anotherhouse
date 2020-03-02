const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
        userComment:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "UserModel"
            },
        contentComment:{
            type: String
        },
        images:[
            {type: String}
        ],
        idNewsfeed:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "NewsfeedModel"
        },
        dateComment:{
            type: Date,
            default: Date.now
        }
});

module.exports = mongoose.model("CommentModel", commentSchema);