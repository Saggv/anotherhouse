import React,{Fragment, useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import {faBell, faUser, faFeather,faMoon} from '@fortawesome/free-solid-svg-icons';
import Message from "./Message";
import NotificationNav from "./NotificationNav";
import Login from "./Login";
import PostNews from "./PostNews";
import {useDispatch, useSelector} from "react-redux";
import { Hello,OpenLogin, GetUser, SeenNotification, FetchNotification, ToggleOpenMessage, ToggleOpenMessageClose, ToggleOpenNotification, ToggleOpenNotificationClose} from "../Action/User";
import ItemMessage from "./ItemMessage";
import { FetchSeenMessage } from "../Action/MessageSocket";
import EditProfileInfor from "./EditProfileInfor";
function Navigation(){
    const [isOpenMessage,setIsOpenMessage] = useState(false);
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [isOpenPostNews, setIsOpenPostNews] = useState(false);
    const dispatch = useDispatch();
    const {isOpenLogin,token, user, barNotification,openUpdate,dataProfileUpdate, openMessage, openNotification} = useSelector(state=>state.User);
    const {isOpenMessageItem} = useSelector(state=>state.Messager);
    const {notificationMessage} = user;
    useEffect(()=>{ 
        if(token){
            // const interval = setInterval(() => {
            
            //  }, 1000);
            //   return () => clearInterval(interval);
              dispatch(FetchNotification());
              dispatch(GetUser());
        }
    },[dispatch, token]);
    const toggleMessage=()=>{
        if(!token){
           return alert("Please login !");
        }
        if(openNotification){
            dispatch(ToggleOpenNotificationClose())
        }
        if(isOpenPostNews){
            setIsOpenPostNews(false);
        }
        if(notificationMessage >0){
            dispatch(FetchSeenMessage())
        }
       return dispatch(ToggleOpenMessage())
    }
    const toggleNotification=()=>{
        if(!token){
            return alert("Please login !");
         }
        if(openMessage){
            dispatch(ToggleOpenMessageClose())
        }
        if(isOpenPostNews){
            setIsOpenPostNews(false);
        }
        // dispath(FetchNotification());
        if(barNotification > 0){
            dispatch(SeenNotification())
        }
        return dispatch(ToggleOpenNotification())
    }
    const toggleOpenPostNews = ()=>{
        if(!token){
            return alert("Please login !");
         }
        if(isOpenNotification){
            setIsOpenNotification(false);
        }
        if(isOpenMessage){
            setIsOpenMessage(false);
        }
        return setIsOpenPostNews(!isOpenPostNews);
    }
    const toggleOpenLogin=()=>{
        if(isOpenMessage){
            setIsOpenMessage(false);
        }
        if(isOpenNotification){
            setIsOpenNotification(false);
        }
        if(isOpenPostNews){
            setIsOpenPostNews(false);
        }
        dispatch(OpenLogin());
    }
    return(
        <Fragment>
            <nav className="navigation">
                <div className="container">
                    <nav className="Nav">
                        <div className="Nav__logo">
                            {/* <NavLink to="/room">
                                <img src={Logo} alt="Logo for website"></img>
                            </NavLink> */}
                            <NavLink to="/room">
                                Sagvv
                            </NavLink>
                        </div>
                        <div className="Nav__mid">
                            <NavLink to="/" className="Nav__item" activeClassName="active-newsfeed" exact>
                                News feed
                            </NavLink>
                        </div>
                        <ul className="Nav__list">
                            <li className="Nav__item">
                                <NavLink to="/" className="Nav__item icon-newsfeed">
                                    <FontAwesomeIcon icon={faMoon} className="icon" />
                                </NavLink>
                            </li>
                            <li className="Nav__item">
                                <NavLink to="#" className="Nav__item" onClick={()=>toggleMessage()}>
                                    {
                                       notificationMessage > 0? (
                                            <div className="icon-red">
                                                <span>{notificationMessage}</span>
                                            </div>
                                        ): null
                                    }  
                                    <FontAwesomeIcon icon={faFacebookMessenger} className="icon" />
                                </NavLink>
                            </li>
                            <li className="Nav__item" >
                                {
                                    user.hasOwnProperty("avatar") ? (
                                        <NavLink to="/profile" className="Nav__item Nav__item__img">
                                           <img src={user.avatar} alt="avatar" />
                                        </NavLink>
                                    ):(
                                        <NavLink to="#" className="Nav__item" onClick={()=>toggleOpenLogin()}>
                                            <FontAwesomeIcon icon={faUser} className="icon" onClick={()=>dispatch(Hello())} />
                                        </NavLink>
                                    )
                                }
                              
                             
                            </li>
                            <li className="Nav__item">
                                <NavLink to="#" className="Nav__item" onClick={()=>toggleNotification()}>
                                  {
                                      barNotification > 0 ? (
                                        <div className="icon-red">
                                            <span>{barNotification}</span>
                                        </div>
                                      ): null
                                  }  
                                    <FontAwesomeIcon icon={faBell} className="icon" />
                                </NavLink>
                            </li>
                            <li className="Nav__item">
                                <NavLink to="#" className="Nav__item" onClick={()=>toggleOpenPostNews()}>
                                    <FontAwesomeIcon icon={faFeather} className="icon" />
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
            {
                openMessage ?(<Message></Message>):null
            }
            {
                openNotification ?(<NotificationNav></NotificationNav>):null
            }
            {
                isOpenPostNews ? (<PostNews toggleOpenPostNews={()=>toggleOpenPostNews()}></PostNews>):null
            }
            {
                isOpenLogin ? <Login toggleOpenLogin={()=>toggleOpenLogin()} ></Login> : null
            }
            {
                isOpenMessageItem ? (
                    <ItemMessage></ItemMessage>
                ):null
            }
           {
               openUpdate ?(
                <EditProfileInfor data={dataProfileUpdate}></EditProfileInfor>
               ):null
           }
         </Fragment>
    )
}

export default Navigation;