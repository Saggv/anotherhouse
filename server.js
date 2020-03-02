const express = require("express");
require('dotenv').config();
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const isAuth = require("./Midleware/Auth");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");

//IMPORT MODEL MONGOSE;
const RoomChatModel = require("./Model/RoomChat");
const ChatModel =require("./Model/Chat");
const UserModel = require("./Model/User");
const NewsfeedModel = require("./Model/Newsfeed");
const RoomHotelModel = require("./Model/RoomHotel");
const Schema = require("./Graphql/Schema");
const Resolvers = require("./Graphql/Resolvers");

mongoose.connect(process.env.MONGOOSEURL, 
    {useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false })
    .then(data=>{
        console.log("Connect with mongoose success!")
    })
    .catch(err=>{
        console.log("Connect mongoose err!"+err)
})

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 7000;
// SET VIEWS ENGINE
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/images", express.static("images"));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
});
app.use(isAuth);
app.get("/", (req, res)=>{
    res.render("trangchu");
});
// UPLOAD FILE
const fileStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "images");
    },
    filename:(req, file, cb)=>{
        cb(null, `${Date.now()}-anotherhouse-${file.originalname}`);
    }
});
const  upload = multer({storage:fileStorage});
let uploadAvatar = upload.single('avatar');
let cpUpload = upload.array('photos', 12);
let uploadPhotoRoom = upload.array("images", 5);
app.post("/changeavatar",uploadAvatar,async(req,res)=>{
     if(!req.isAuth){
        // return res.status(400).json({msg:"Authrization error!!!"});
        return res.sendStatus(403);
     }
     let urlAvatar =req.file.filename;
     if(!urlAvatar){
        return res.status(400).json({msg:"No picture was send !!!"});
     }
     await UserModel.findByIdAndUpdate({_id: req.userId},{ $set:{"avatar":`/images/${urlAvatar}`}});
     res.status(200).json({msg:"Changr avatar success !"});
})
//let cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])    console.log( req.files);
app.post("/postnewsfeed", cpUpload ,async(req, res)=>{
        const {title, content} = req.body;
        const images = req.files.length >0 ? ( req.files.map(item=> `/images/${item.filename}`)):[] //"/image/"+req.file.filename;
        if(!req.isAuth){
            throw new Error("Authrization error !!");
        }
        const Newsfeed = new NewsfeedModel({
             title,
            description: content,
            images: images,
            createByUser: req.userId
        });
        const newNewsFeed = await Newsfeed.save();
        const result = await NewsfeedModel.findById({_id:newNewsFeed._id})
                            .populate('createByUser').populate([{path:'commment', populate:{path:'userComment'} }]);
        res.send(result);
})
app.post("/posthotelroom",uploadPhotoRoom, async(req, res)=>{
      const {address, price,roomFor,description,typeOfRoom} = req.body;
      if(!req.isAuth){
        return res.sendStatus(403);
      }
      const images = req.files.length >0 ? ( req.files.map(item=> `/images/${item.filename}`)):null;
      if(!images){
        return res.sendStatus(403);
      }
      const newRoomHotel = new RoomHotelModel({
          address,
          price,
          roomFor,
          description,
          images,
          typeOfRoom
      });
      const result = await newRoomHotel.save();
      res.send(result);
} )
// let cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])

app.use('/graphql',graphqlHTTP({
        schema: Schema,
        rootValue: Resolvers,
        graphiql: true
}))
//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>{
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
server.listen(port, ()=>console.log("Server run on port "+port));
io.on("connection", socket=>{
     socket.on("create-room",async({userReciveId, userSendId})=>{
            const isExistRoomID = await RoomChatModel.findOne({userRecive: userReciveId, userSend: userSendId});
            const isExistRoomID2 = await RoomChatModel.findOne({userRecive: userSendId, userSend: userReciveId });
            if(isExistRoomID){
                 socket.join(isExistRoomID._id);
                 socket.roomID = isExistRoomID._id;
                 let message = await ChatModel.find({idRoom:socket.roomID}).populate('Sender').populate('Reciever').sort({ date:1});
                 socket.emit("LoadOdlMessage", message);
            }
            else if(isExistRoomID2){
                socket.join(isExistRoomID2._id);
                socket.roomID = isExistRoomID2._id;
                 let message = await ChatModel.find({idRoom:socket.roomID}).populate('Sender').populate('Reciever').sort({ date:1});
                 socket.emit("LoadOdlMessage", message);
            }
            else{
                const roomChat = new RoomChatModel({
                    userSend: userSendId,
                    userRecive: userReciveId
                 });
                 const result = await roomChat.save();
                 socket.join(result._id);
                 socket.roomID = result._id;
            }
     });
     socket.on("user-send",async({Sender,Reciever,contentMessage})=>{
             const newChat = new ChatModel({
                Sender: Sender,
                Reciever: Reciever,
                contentMessage: contentMessage,
                idRoom:socket.roomID
             });
             await newChat.save();
             await RoomChatModel.findByIdAndUpdate({_id:socket.roomID},{ $set: { "lastMessage" : contentMessage, "date": new Date().toISOString()} });
             await UserModel.findByIdAndUpdate({_id: Reciever},{$inc:{notificationMessage:1}});
             const message = await ChatModel.find({idRoom:socket.roomID}).populate('Sender').populate('Reciever').sort({ date:1});
             io.in(socket.roomID).emit("server-chat", message);

     })
     
    
     socket.on('disconnect', function(){
        console.log('user disconnected');
    });
})


// io.on("connection", function(socket){
//     socket.on("create-room", (idRoom)=>{
//          socket.join(idRoom);
//          socket.phong = idRoom;
//     })
//     socket.on("user-chat", (data)=>{
//         io.to(socket.phong).emit("server-chat", data);
//     })
//     // disconnet
//     socket.on('disconnect', function(){
//         console.log('user disconnected');
//     });
// })

//5e5012f51141432e045c13ff---5e5012c31141432e045c13fe