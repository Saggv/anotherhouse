import React, {useState, useEffect, Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import {CloseMessageItem} from "../Action/MessageSocket";
import {useDispatch, useSelector} from "react-redux";
import {IncreateNotificationMessage} from "../Action/User";
import ScrollToBottom from 'react-scroll-to-bottom';
import io from "socket.io-client";
const socket = io("https://asangvivi.herokuapp.com");
export const CreateRoomChat=(data)=>{
    socket.emit("create-room", data);
}
function ItemMessage(){
    const dispatch = useDispatch();
    const {reciever} = useSelector(state=>state.Messager);
    const userNow = useSelector(state=>state.User.user.id);
    const Sender = useSelector(state=>state.User.user.id);
    const [messages, setMessages] = useState([]); 
    const {id, avatar} = reciever;
    const [textMessage, setTextMessage] = useState("");
    const dataSend = {
        Sender,
        Reciever:id,
        contentMessage:textMessage
    }
    useEffect(()=>{
        socket.on("LoadOdlMessage", data=>{
            setMessages(data);
         });
         socket.on("server-chat", data=>{
             setMessages(data);
             dispatch(IncreateNotificationMessage())
         });
    },[messages, dispatch]);
   const onCloseItemMessage=()=>{
        dispatch(CloseMessageItem())
    }
    const SendMessage =()=>{
        socket.emit("user-send", dataSend);
        setTextMessage("");
    }
    return(
        <div className="itemmessage">
            <div className="itemmessage__box">
                <div className="itemmessage__user" onClick={()=>onCloseItemMessage()}>
                    <img src={avatar} alt="Sdfsa" />
                    <FontAwesomeIcon icon={faTimes} className="itemmessage__user__icon"></FontAwesomeIcon>
                </div>
                <div className="itemmessage__input">
                    <input onChange={(e)=>setTextMessage(e.target.value)} defaultValue={textMessage}></input>
                    <button className="btn btn__sendmessage" onClick={()=>SendMessage()}>SEND</button>
                </div>
                <div className="itemmessage__content">
                    <ScrollToBottom className="sroll-comment">
                    {
                      messages.length > 0 ? (messages.map((item, index)=>{
                             if(item.Sender._id === userNow){
                                 return(
                                    <Fragment key={index}>
                                         <div className="itemmessage__from" >
                                            <div className="itemmessage__from__content">
                                                <p>
                                                    {item.contentMessage}
                                                </p>
                                            </div>
                                            <div className="itemmessage__to__user">
                                                <img src={item.Sender.avatar} alt="sdfasdf" />
                                            </div>
                                        </div>

                                    </Fragment>
                                 )
                             }
                             else{
                              return (
                                    <div className="itemmessage__to" key={index}>
                                        <div className="itemmessage__to__user">
                                            <img src={item.Sender.avatar} alt="sdfasdf" />
                                        </div>
                                        <div className="itemmessage__to__content">
                                            <p>
                                                {
                                                 item.contentMessage
                                                }
                                            </p>
                                        </div>
                                    </div>
                                )
                             }
                         })):(<h3 className="message-error">Bạn chưa có tin nhắn nào  !</h3>)
                    }
                    </ScrollToBottom>
                </div>
            </div>
        </div>
    );
}
export default ItemMessage;