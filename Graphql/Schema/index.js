const {buildSchema} = require("graphql");

module.exports = buildSchema(`
    type User{
        id:ID,
        name:String,
        password: String,
        token: String,
        avatar: String,
        username: String,
        notificationMessage: Int,
        vote: Int,
        down: Int,
        quote: String
    }
    type Comment {
        id:ID,
        userComment:User,
        contentComment:String,
        images: [String],
        dateComment: String,
        idNewsfeed: ID
    }
    type Newsfeed {
        id:ID,
        title: String,
        description: String,
        images:[String],
        createByUser:User,
        date: String,
        like: Int,
        commment:[Comment],
        dislike:Int
    }
    type Auth{
        token: String,
        name: String,
        username:String,
        avatar: String,
        notificationMessage: String,
        id:ID
    }
    type Notification{
        id:ID,
        fromUser:User,
        contentNotification:String,
        date: String,
        seen: Boolean,
    }
    type MyMessage{
        id:ID,
        userSend: User,
        userRecive:User,
        lastMessage: String,
        date: String
    }
    type RoomHotel{
        id:ID,
        description: String,
        address: String,
        createBy: User,
        roomFor: Int,
        price: Int,
        images:[String],
        typeOfRoom:String
    }
    type RootQuery{
        Fruits: [String],
        Newsfeed: [Newsfeed],
        Comment: [Comment],
        GetUser: User,
        Notification:[Notification],
        SeenNotification:[Notification],
        NewsfeedUserNow: [Newsfeed],
        FetchMyMessage: [MyMessage],
        RoomHotel:[RoomHotel]
    } 
    input inputSignUp{
        name: String,
        userName: String,
        password: String
    }
    input inputNewsfeed{
        title: String,
        description: String,
        images:[String]
    }
    input inputPostCommentNewsfeed{
        idNewsfeed: ID,
        contentComment: String,
        images:[String],
        idToUser: ID
    }
    input inputLikeNewsfeed{
        idNewsfeed: ID,
        idToUser: ID
    },
    input inputGetNewsfeed{
        limit:Int,
        skip: Int
    },
    input inputLogin{
        userName:String,
        password: String
    }
    input inputUpdateProfile{
        name: String,
        quote: String,
        username: String
    }
    input inputPostRoomHotel{
        images:[String],
        address: String,
        roomFor:String,
        price: Int,
        description: String
    }
    input inputFetchRoomHotel{
        typeFetch:String
    }
    input inputDetailRoom{
        idRoom: ID
    }
    input inputFetchAnotheroom{
        skip: Int
    }
    type RootMutation{
        SayHello(data:String): String,
        SignUp(inputSignUp: inputSignUp):User,
        Login(inputLogin: inputLogin):Auth,
        PostNewsfeed(inputNewsfeed: inputNewsfeed):Newsfeed,
        PostCommentNewsfeed(inputPostCommentNewsfeed: inputPostCommentNewsfeed):Comment,
        GetCommentNewsfeed(idNewsfeed:ID):[Comment],
        LikeNewsfeed(inputLikeNewsfeed: inputLikeNewsfeed):Newsfeed,
        UnLikeNewsfeed(inputLikeNewsfeed: inputLikeNewsfeed):Newsfeed,
        GetNewsfeed(inputGetNewsfeed:inputGetNewsfeed):[Newsfeed],
        FetchOtherProfile(userId:ID): User,
        GetNewsfeedAnotherProfile(userId: ID): [Newsfeed],
        SeenMessage: String,
        VoteUser(userId: ID): String,
        DownUser(userId: ID): String,
        UpdateUserProfile(inputUpdateProfile:inputUpdateProfile):User,
        PostRoomHotel(inputPostRoomHotel: inputPostRoomHotel): RoomHotel,
        FetchRoomHotel(inputFetchRoomHotel:inputFetchRoomHotel):[RoomHotel],
        FetchDetailRoom(inputDetailRoom: inputDetailRoom):RoomHotel,
        FetchAnotherRoom(inputFetchAnotheroom: inputFetchAnotheroom): [RoomHotel],
        UpadeteData(user:ID): String
    }
    schema {
        query: RootQuery,
        mutation: RootMutation,
    }
`);

//idNewsfeed:"5e4ea2f8577f360f50bf09e4",idFromUser:"5e4e9d1528326319f8d73ee9"}