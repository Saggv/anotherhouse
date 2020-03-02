import React from "../../node_modules/@types/react";
import logo from "../Images/Logo.svg";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import {faSearch} from '../../node_modules/@fortawesome/free-solid-svg-icons';
import {Link} from "../../node_modules/react-router-dom";
function Footer(){
    return(
        <div className="footer">
            <div className="footer__logo">
                <img src={logo} alt="logo footer" />
            </div>
            <div className="footer__search">
                <input className="search" type="text" placeholder="Nhập địa chỉ và nơi bạn muốn..."></input>
                <FontAwesomeIcon icon={faSearch} className="icon__search"></FontAwesomeIcon>
            </div>
            <p>Chúng tôi mang lại cho bạn những dịch vụ nhanh chóng nhất và tốt nhất !</p>
            <div className="footer__nav">
                <Link to="#">Trang chủ</Link>
                <Link to="#">Điều khoản</Link>
                <Link to="#">Thông tin</Link>
                <Link to="#">Bảo mật</Link>
                <Link to="#">Góp ý</Link>
            </div>
        </div>
    );
}
export default Footer;