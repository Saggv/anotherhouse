import React from "../../node_modules/@types/react";

import {Link} from "../../node_modules/react-router-dom";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import {faMale, faMapMarkerAlt} from '../../node_modules/@fortawesome/free-solid-svg-icons';
function Room({data}){
      const {address, images, price, description, typeOfRoom, id} = data;
      
    return(
        <div className="room">
            <Link to={`/room/.${typeOfRoom}.${id}.room`} className="room__link">
                <div className="room__img">
                    <img src={images[0]} alt="room for roomsd"/>
                </div>
                <div className="room__detail">
                    <div className="room__detail__header">
                        <p>Hợp với:
                        <FontAwesomeIcon className="icon__for" icon={faMale}></FontAwesomeIcon>
                        <FontAwesomeIcon className="icon__for" icon={faMale}></FontAwesomeIcon>
                        <FontAwesomeIcon className="icon__for" icon={faMale}></FontAwesomeIcon>
                        <FontAwesomeIcon className="icon__for" icon={faMale}></FontAwesomeIcon>
                        </p>
                        <p>Số tiền: <span>${price}<i>/month</i></span></p>
                    </div>
                    <div className="room__detail__description">
                        <p>{description}</p>
                    </div>
                    <div className="room__detail__address">
                        <FontAwesomeIcon className="icon__for" icon={faMapMarkerAlt}></FontAwesomeIcon>
                         {address}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Room;