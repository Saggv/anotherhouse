import React, {Fragment, useState} from "react";
import user from "../Images/lisa.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';
import Itembook from "./Itembook";
function UserBook(){
    const [isOpen, setIsOpen] =useState(false);
    return(
        <Fragment>
            <div className="notification__client__user relative">
                <div className="notification__client__img">
                    <img src={user} alt="fdasfsa"/>
                </div>
                <div className="notification__client__user__box">
                    <h4 className="notification__client__user__box__name">
                        Misd Moncias
                    </h4>
                    <div onClick={()=>setIsOpen(!isOpen)}>
                        <FontAwesomeIcon className="notification__client__address__icon" icon={faChevronCircleDown}></FontAwesomeIcon>
                    </div>
                    <div className="notification__client__contact">
                        <FontAwesomeIcon className="notification__client__contact__icon" icon={faPhone}></FontAwesomeIcon>
                        <FontAwesomeIcon className="notification__client__contact__icon" icon={faFacebookMessenger}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            {
                isOpen ?(
                    <div className="listprofile__item__list">
                        <Itembook></Itembook>
                        <Itembook></Itembook>
                        <Itembook></Itembook>
                    </div>
                ): null
            }
        </Fragment>
    );
}
export default UserBook;