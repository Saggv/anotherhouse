import io from "socket.io-client";
import * as Action from "./type";
let socket = io("http://localhost:7000");

export const SendMessageSocket=(data)=>{
    socket.emit("user-send",data);
}
export const OpenMessageItem=(payload)=>({
        type: Action.OPEN__MESSAGEITEM,
        payload
});

export const ListMessageData= async()=>{
    socket.on("server-chat",data=>{
          console.log(data);
    });
}
export const CloseMessageItem=payload=>({
    type: Action.CLOSE__MESSAGEITEM,
    payload
})
// FETCH MY MESSAGE
export const FetchMyMessage= payload=>({
    type: Action.FETCH__MY__MESSAGE,
    payload
});
export const FetchMyMessageSuccess = payload=>({
    type: Action.FETCH__MY__MESSAGE__SUCCESS,
    payload
});
export const FetchMyMessageFail = payload=>({
    type: Action.FETCH__MY__MESSAGE__FAIL,
    payload
});

export const FetchSeenMessage = payload=>({
    type: Action.FETCH__SEEN__MESSAGE,
    payload
})