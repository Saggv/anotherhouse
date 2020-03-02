import {call, put, select} from "../../node_modules/redux-saga/effects";
import {CallAPI} from "../API/CallAPI";
import * as Action from "../Action/MessageSocket";

export function* WatchFetchMyMessage(){
    const {token} = yield select(state=>state.User);
    const queryMessage ={
        query:`
            query{
                FetchMyMessage{
                    id,
                    userSend{
                        name,
                        id,
                        avatar,
                        username
                    },
                    userRecive{
                        name,
                        id,
                        avatar,
                        username
                    },
                    lastMessage,
                    date
                }
            }
        `
    };
    const result = yield call(CallAPI,queryMessage, token);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(Action.FetchMyMessageSuccess(data));
    }
    else{
        yield put(Action.FetchMyMessageFail(data.errors[0]));
    }
}