const User = require("./User");
const Newsfeed = require("./Newsfeed");
const Comment = require("./Comment");
const Message = require("./Message");
const Room = require("./RoomHotel");
module.exports = {
    ...User,
    ...Newsfeed,
    ...Comment,
    ...Message,
    ...Room
};