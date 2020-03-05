import * as Action from "./type";

export const FetchRoomHotel =payload=>({
    type: Action.FETCH__ROOM__HOTEL,
    payload
});
export const FetchRoomHotelSuccess =payload=>({
    type: Action.FETCH__ROOM__HOTEL__SUCCESS,
    payload
})
export const FetchRoomHotelFail =payload=>({
    type: Action.FETCH__ROOM__HOTEL__FAIL,
    payload
})

export const FetchDetailRoom =(payload)=>({
    type: Action.FETCH__DETAIL__ROOM,
    payload
})
export const FetchDetailRoomSuccess = payload=>({
    type: Action.FETCH__DETAIL__ROOM__SUCCESS,
    payload
})
export const FetchDetailRoomFail = payload=>({
    type: Action.FETCH__DETAIL__ROOM__FAIL,
    payload
})

// FETCH OTHER ROOM
export const FetchAnotherRoom = (payload)=>({
    type:Action.FETCH__ANOTHER__ROOM,
    payload
});
export const FetchAnotherRoomSuccess = (payload)=>({
    type:Action.FETCH__ANOTHER__ROOM__SUCCESS,
    payload
})
export const FetchAnotherRoomFail = (payload)=>({
    type:Action.FETCH__ANOTHER__ROOM__FAIL,
    payload
})