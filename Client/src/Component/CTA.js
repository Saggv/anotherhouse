import React from "../../node_modules/@types/react";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import {faCheckCircle, faGlobeAsia} from '../../node_modules/@fortawesome/free-solid-svg-icons';
import {Link} from "../../node_modules/react-router-dom";

function CTA(){
    return(
        <div className="cta">
            <div className="cta__left">
                <button className="btn btn__primary">
                    <FontAwesomeIcon className="btn__icon" icon={faCheckCircle}></FontAwesomeIcon> Support
                </button>
                <div className="cta__left__globe">
                    <FontAwesomeIcon className="icon__globe" icon={faGlobeAsia}></FontAwesomeIcon>
                    Viet Nam
                </div>
            </div>
            <div className="cta__right">
                <div className="cta__right__head">
                    <h1 className="cta__title">Nhanh chóng, Tiện lợi, Hiệu quả</h1>
                    <button className="btn btn__primary btn__right">
                        <FontAwesomeIcon className="btn__icon" icon={faCheckCircle}></FontAwesomeIcon> Đăng ký
                    </button>
                </div>
                <div className="cta__right__detail">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link to="#">View more</Link>
                </div>
            </div>
        </div>
    );
}

export default CTA;