import React, {useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import {useDispatch, useSelector} from "react-redux";
import { FetchMyMessage, OpenMessageItem } from "../Action/MessageSocket";
import { CreateRoomChat } from "./ItemMessage";
import {ToggleOpenMessageClose} from "../Action/User";
function Message(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(FetchMyMessage())
    },[dispatch])
    const {AllChat} = useSelector(state=>state.Messager);
    const {id, avatar} = useSelector(state=>state.User.user);
    const toggleMessItem =({userRecive})=>{
        const data={
            userSendId:id,
            userReciveId:userRecive.id
        }
        let reciever={
            avatar: userRecive.avatar,
            id: userRecive.id
        }
         dispatch(OpenMessageItem(reciever));
         CreateRoomChat(data)
    }
    const toggleMessItem2 =({userSend})=>{
        const data={
            userSendId:id,
            userReciveId:userSend.id
        }
        let reciever={
            avatar: userSend.avatar,
            id: userSend.id
        }
         dispatch(OpenMessageItem(reciever));
         CreateRoomChat(data)
    }
    return(
        <div className="message">
            <div className="message__box">
                <div className="message__user" onClick={()=>dispatch(ToggleOpenMessageClose())}>
                    {
                        avatar ? (<img src={avatar} alt="dsfasdf" />) :null
                    }
                    <FontAwesomeIcon icon={faFacebookMessenger} className="message__user__icon"></FontAwesomeIcon>
                </div>
                <div className="message__content-area">
                    {
                      AllChat.length > 0 ?( AllChat.map((item,index)=>{
                            if(item.userSend.id ===id){
                                return(
                                    <div className="message__messager" onClick={()=>toggleMessItem(item)} key={index}>
                                        <div className="message__messager__img">
                                            <img src={item.userRecive.avatar} alt="Dfasfddsa" />
                                        </div>
                                        <div className="message__messager__content">
                                        <h3>{item.userRecive.username}</h3>
                                            <p>{item.lastMessage}</p>
                                        </div>
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div className="message__messager" onClick={()=>toggleMessItem2(item)} key={index}>
                                        <div className="message__messager__img">
                                            <img src={item.userSend.avatar} alt="Dfasfddsa" />
                                        </div>
                                        <div className="message__messager__content">
                                            <h3>{item.userSend.username}</h3>
                                            <p>{item.lastMessage}</p>
                                            <span>{new Date(Number(item.date)).toLocaleString()}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })):(<h3 className="message-error">Bạn chưa có tin nhắn nào  !</h3>)
                    }
                </div>
            </div>
            
               {/* <ItemMessage toggleMessItem={()=>toggleMessItem()}></ItemMessage>  */}
            
        </div>
    );
}
export default Message;