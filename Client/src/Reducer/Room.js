import * as Action from "../Action/type";

const initialState={
      typeFetch:null,
      RoomData:[],
      Error:null,
      idRoom:null,
      dataDetailRoom:{},
      photoRoom:[]
}
const RoomHotel = (state = initialState, action)=>{
    switch(action.type){
        case Action.FETCH__ROOM__HOTEL:
            return{
                ...state,
                typeFetch: action.payload
            }
        case Action.FETCH__ROOM__HOTEL__SUCCESS:
            return{
                ...state,
                RoomData: action.payload.FetchRoomHotel
            }
        case Action.FETCH__ROOM__HOTEL__FAIL:
            return{
                ...state,
                Error: action.payload
            }
        case Action.FETCH__DETAIL__ROOM:
            return{
                ...state,
                idRoom: action.payload
            }
        case Action.FETCH__DETAIL__ROOM__SUCCESS:
            return{
                ...state,
                dataDetailRoom: action.payload.FetchDetailRoom,
                photoRoom: action.payload.FetchDetailRoom.images
            }
        default:
            return state
    }
}
export default RoomHotel;