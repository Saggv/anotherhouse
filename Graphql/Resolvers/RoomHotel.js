const RoomHotelModel = require("../../Model/RoomHotel");

module.exports={
    FetchRoomHotel: async(args)=>{
        const {typeFetch} = args.inputFetchRoomHotel;
        let typeOfRoom = "hotel";
        if(typeFetch === "/room/motel"){
            typeOfRoom = "motel"
        }else if(typeFetch === "/room/house"){
           typeOfRoom ="BDS";
        }
        console.log(typeOfRoom);
        const result = await RoomHotelModel.find({typeOfRoom: typeOfRoom});
        return result;
    },
    FetchDetailRoom: async(args)=>{
        const {idRoom} = args.inputDetailRoom;
        const result = await RoomHotelModel.findById({_id: idRoom}).populate('createBy');
        return result;
    }
}