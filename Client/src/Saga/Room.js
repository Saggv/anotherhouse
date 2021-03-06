import *as ActionRoom from "../Action/Room";
import {call, put, select} from "../../node_modules/redux-saga/effects";
import {CallAPI} from "../API/CallAPI";
export function* WatchFetchRoom(){
       const {typeFetch} = yield select(state=>state.Room);
       const queryFetch={
            query:`
              mutation{
                     FetchRoomHotel(inputFetchRoomHotel:{typeFetch:"${typeFetch}"}){
                     id,
                     typeOfRoom,
                     address,
                     roomFor,
                     images,
                     price,
                     description
              }
              }
            `
       }
       const result = yield call(CallAPI, queryFetch);
       const {data} = result;
       if(!data.errors){
           let {data} = result.data
           yield put(ActionRoom.FetchRoomHotelSuccess(data));
       }
       else{
           yield put(ActionRoom.FetchRoomHotelFail(data.errors[0]));
       }
}

export function*WatchFetchDetailRoom(){
  const {idRoom} = yield select(state=>state.Room);
  const queryRoo ={
    query:`
        mutation{
            FetchDetailRoom(inputDetailRoom:{idRoom:"${idRoom}"}){
                id,
                typeOfRoom,
                address,
                roomFor,
                images,
                price,
                description
            }
            }
    `
  }
  const result = yield call(CallAPI, queryRoo);
  const {data} = result;
  if(!data.errors){
      let {data} = result.data
      yield put(ActionRoom.FetchDetailRoomSuccess(data));
  }
  else{
      yield put(ActionRoom.FetchDetailRoomFail(data.errors[0]));
  }
}