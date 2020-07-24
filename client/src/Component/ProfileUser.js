import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram, faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faQuoteRight, faQuoteLeft, faCamera, faEdit, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import Like from "../Images/Like.svg";
import NLike from "../Images/NLike.svg";
import UnLike from "../Images/UnLike.svg";
import NUnLike from "../Images/NUnLike.svg";
import {OpenMessageItem} from "../Action/MessageSocket";
import {CreateRoomChat} from "./ItemMessage";
import {useDispatch, useSelector} from "react-redux";
import { GetUser, VoteProfileUser,DownProfileUser,UpdateProfileUser,Logout} from "../Action/User";
import {Redirect} from "react-router-dom";
function ProfileUser({dataUser}){
    const dispatch =useDispatch();
    const {username, avatar,id, vote, quote, down, name} = dataUser;
    const userSendId = useSelector(state=>state.User.user.id);
    const {token, anotherProfile} = useSelector(state=>state.User);
    const userReciveId = id;
    const [avatarNow, setAvatarNow] = useState(null);
    const [showSubmitAvatar, setShowSubmitAvatar] = useState(false);
    const [isVote, setIsVote] = useState(false);
    const [isDown, setIsDown] = useState(false);
    const [countVote, setCountVote] = useState(null);
    const [countDown, setCountDown] = useState(null);
    useEffect(()=>{
            setAvatarNow(avatar);
            setCountVote(vote);
            setCountDown(down);
    },[avatar, vote, down]);
    const [avatarRead, setAvatarRead] = useState(null);
    // ReadImageAvatar
    const ReadImageAvatar=(e)=>{
        if (e.target.files && e.target.files[0]) {
            setAvatarRead(e.target.files[0]);
             let reader = new FileReader();
             reader.onload = (event) => {
                setAvatarNow(event.target.result);
                setShowSubmitAvatar(true)
             };
             reader.readAsDataURL(e.target.files[0]);
        }
    }
    const ClickChangeAvatar=()=>{
            let fd = new FormData();
            fd.append("avatar",avatarRead);
             axios.post("/changeavatar",fd,{
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization": token
                    }
                }).then(result=>{
                    dispatch(GetUser());
                    setShowSubmitAvatar(false);

                }).catch(error=>{
                    alert("Something was wrong !!!");
                })
    }
    const data={
        userSendId,
        userReciveId
    }
    const OpenMessagerItem=()=>{
        dispatch(OpenMessageItem({avatar,id}));
        CreateRoomChat(data);
    }
    const ClickVote=()=>{
        setIsVote(true);
        dispatch(VoteProfileUser(id));
        setCountVote(countVote+1);
    }
    const ClickDown=()=>{
        setIsDown(true);
        dispatch(DownProfileUser(id))
        setCountDown(countDown+1);
    }
    const UpdateInforProfile=()=>{
         dispatch(UpdateProfileUser({name, quote, username}))
    }
    if(!token){
        return <Redirect to="/"></Redirect>
    }
    return(
    <Fragment>
        <div className="profileuser">
            <div className="profileuser__quote profileuser__quote__left">
                <FontAwesomeIcon className="profileuser__quote__icon" icon={faQuoteLeft} />
                {
                    quote ? (
                        <p className="ml-2">{quote}</p>
                    ):(
                        <p className="ml-2">Hello, say something about you</p>
                    )
                }
            </div>
            <div className="profileuser__box">
                <h3>{username}</h3>
                <div className="profileuser__info">
                    <div className="profileuser__info__img">
                        <img src={avatarNow} alt="dsfsadfadsf" />
                        {
                            showSubmitAvatar ? (
                                <FontAwesomeIcon className="profileuser__info__change-avatar" onClick={()=>ClickChangeAvatar()} icon={faCheckCircle}></FontAwesomeIcon>
                            ):null
                        }
                    </div>
                    <div className="profileuser__info__icon profileuser__info__icon--1">
                        <FontAwesomeIcon className="profileuser__info__icon--icon" icon={faEnvelope} ></FontAwesomeIcon>
                    </div>
                    <div className="profileuser__info__icon profileuser__info__icon--2">
                         <FontAwesomeIcon className="profileuser__info__icon--icon" icon={faInstagram} ></FontAwesomeIcon>
                    </div>
                    <div className="profileuser__info__icon profileuser__info__icon--3">
                         <FontAwesomeIcon className="profileuser__info__icon--icon" icon={faFacebook} ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className="profileuser__quote profileuser__quote__right">
                <FontAwesomeIcon className="profileuser__quote__icon" icon={faQuoteRight} />
            </div>
            <div className="profileuser__like">
                 <span>{countVote}</span>
                 <div className="triangle">
                    {
                        isVote ? (
                            <img onClick={()=>ClickVote(id)} src={Like} className="triangle__btn triangle__btn--like" alt="lilke" />
                        ):(
                            
                            <img onClick={()=>ClickVote(id)} src={NLike} className="triangle__btn triangle__btn--like" alt="lilke" />
                        )
                    }
                 </div>
            </div>
            <div className="profileuser__unlike">
                 <span>{countDown}</span>
                 <div className="triangle">
                    {
                        isDown ? (
                            <img onClick={()=>ClickDown()} src={NUnLike} className="triangle__btn triangle__btn--like" alt="lilke" />
                        ):(
                            
                            <img onClick={()=>ClickDown()} src={UnLike} className="triangle__btn triangle__btn--like" alt="lilke" />
                        )
                    }
                 </div>
            </div>
            <div className="profileuser__mess">
              { 
                 Object.keys(anotherProfile).length > 0 ? (null):(
                     <Fragment>
                        <input type="file" id="change-avatar" onChange={(e)=>ReadImageAvatar(e)}></input>
                        <label htmlFor="change-avatar">
                            <FontAwesomeIcon icon={faCamera} className="profileuser__mess__edit" />
                        </label>
                     </Fragment>
                 )
                }
                <FontAwesomeIcon className="profileuser__mess__icon" onClick={()=>OpenMessagerItem()} icon={faFacebookMessenger}  />
                {
                    Object.keys(anotherProfile).length >0 ? (null):(
                        <FontAwesomeIcon icon={faEdit} onClick={()=>UpdateInforProfile()} className="profileuser__mess__edit" />
                    )
                }
            </div>
        </div>
        {
            Object.keys(anotherProfile).length >0 ? (null):(
                <div className="logout">
                    <button className="logout__btn" onClick={()=>dispatch(Logout())}>Logout</button>
                </div>
            )
        }
    </Fragment>
    );
}
export default ProfileUser;