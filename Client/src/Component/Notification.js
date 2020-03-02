import React from "../../node_modules/@types/react";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faFacebookMessenger} from '../../node_modules/@fortawesome/free-brands-svg-icons';
import {faBell,faLocationArrow, faPhone} from '../../node_modules/@fortawesome/free-solid-svg-icons';
import user from "../Images/lisa.jpg";

function Notification(){
    return(
        <div className="notification">
            <div className="notification__user">
                <img src={user} alt="sadfsdaf" />
            </div>
            <div className="notification__input">
                <input type="text" placeholder="Nhập thông báo cho các thành viên khác...." />
                <FontAwesomeIcon className="notification__input__icon" icon={faBell}></FontAwesomeIcon>
            </div>
            <div className="notification__client">
                <div className="notification__client__user">
                    <div className="notification__client__img">
                        <img src={user} alt="fdasfsa"/>
                    </div>
                    <div className="notification__client__user__box">
                        <h4 className="notification__client__user__box__name">
                            Misd Moncias
                        </h4>
                        <div className="notification__client__address">
                            <FontAwesomeIcon className="notification__client__address__icon" icon={faLocationArrow}></FontAwesomeIcon>
                            <p>Xuân Khanh, Sơn Tây, Hà Nội, Việt Nam</p>
                        </div>
                        <div className="notification__client__contact">
                            <FontAwesomeIcon className="notification__client__contact__icon" icon={faPhone}></FontAwesomeIcon>
                            <FontAwesomeIcon className="notification__client__contact__icon" icon={faFacebookMessenger}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <div className="notification__client__user">
                    <div className="notification__client__img">
                        <img src={user} alt="fdasfsa"/>
                    </div>
                    <div className="notification__client__user__box">
                        <h4 className="notification__client__user__box__name">
                            Misd Moncias
                        </h4>
                        <div className="notification__client__address">
                            <FontAwesomeIcon className="notification__client__address__icon" icon={faLocationArrow}></FontAwesomeIcon>
                            <p>Xuân Khanh, Sơn Tây, Hà Nội, Việt Nam</p>
                        </div>
                        <div className="notification__client__contact">
                            <FontAwesomeIcon className="notification__client__contact__icon" icon={faPhone}></FontAwesomeIcon>
                            <FontAwesomeIcon className="notification__client__contact__icon" icon={faFacebookMessenger}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Notification;