import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import user from "../Images/lisa.jpg";

import UserBook from "./UserBook";
function ListProfile(){
    return(
        <div className="listprofile">
            <div className="notification__user">
                <img src={user} alt="sadfsdaf" />
            </div>
            <div className="notification__input">
                <input type="text" placeholder="Nhập thông báo cho các thành viên khác...." />
                <FontAwesomeIcon className="notification__input__icon" icon={faBell}></FontAwesomeIcon>
            </div>
            <div className="listprofile__items">
                <div className="listprofile__item">
                        <UserBook></UserBook>
                        <UserBook></UserBook>
                </div>
            </div>
        </div>
    );
}
export default ListProfile;