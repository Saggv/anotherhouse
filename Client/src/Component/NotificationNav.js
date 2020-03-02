import React from "../../node_modules/@types/react";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faBell} from '../../node_modules/@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from "../../node_modules/react-redux/lib";
import {NavLink} from "../../node_modules/react-router-dom";
import {ToggleOpenNotificationClose} from "../Action/User";
function NotificationNav(){
    const {Notification, user} = useSelector(state=>state.User);
    const dispatch = useDispatch();
    return(
        <div className="message">
            <div className="message__box">
                <div className="message__user" onClick={()=>dispatch(ToggleOpenNotificationClose())}>
                        <img src={user.avatar} alt="dsfasdf" />
                        <FontAwesomeIcon icon={faBell} className="message__user__icon"></FontAwesomeIcon>
                </div>
                <div className="message__content-area">
                    {
                        Notification ? ( Notification.map((item, index)=>{
                            return(
                                <div className="message__messager" key={index}>
                                    <div className="message__messager__img">
                                        <img src={item.fromUser.avatar} alt="Dfasfddsa" />
                                    </div>
                                    <div className="notification__content">
                                        <NavLink to={`/profilefriend/${item.fromUser.username}.${item.fromUser.id}.anotherfriend`}>{item.fromUser.username}</NavLink>
                                        <p>{item.contentNotification}</p>
                                        <h4>{new Date(Number(item.date)).toLocaleString()}</h4>
                                    </div>
                                </div>
                            )
                        })
                        ):null
                    }
                </div>
            </div>
        </div>
    );
}
export default NotificationNav;