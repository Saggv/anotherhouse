const RoomHotelModel = require('../../Model/RoomHotel');

module.exports = {
  FetchRoomHotel: async (args) => {
    const { typeFetch } = args.inputFetchRoomHotel;
    let typeOfRoom = 'hotel';
    if (typeFetch === '/room/motel') {
      typeOfRoom = 'motel';
    } else if (typeFetch === '/room/house') {
      typeOfRoom = 'BDS';
    }
    const result = await RoomHotelModel.find({ typeOfRoom: typeOfRoom });
    return result;
  },
  FetchDetailRoom: async (args) => {
    const { idRoom } = args.inputDetailRoom;
    const result = await RoomHotelModel.findById({ _id: idRoom }).populate('createBy');
    return result;
  },
  FetchAnotherRoom: async (args) => {
    const { skip } = args.inputFetchAnotheroom;
    const result = await RoomHotelModel.find().skip(skip).limit(8).populate('createBy');
    return result;
  },
  UpadeteData: async (args) => {
    const result = await RoomHotelModel.find({ address: 'Ha Noi, Viet Nam' }).updateMany({
      $set: { createBy: '5e5012f51141432e045c13ff' },
    });
    return 'Sdfsfa';
  },
};
//  const result = await RoomHotelModel.find({address: "Ha Noi, Viet Nam"}).Update({$set:{"createBy":"5e5012f51141432e045c13ff"}})
