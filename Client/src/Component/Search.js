import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

function Search(){
    return(
        <div className="search__box">
            <input className="search" type="text" placeholder="Nhập địa chỉ và nơi bạn muốn..."></input>
            <FontAwesomeIcon icon={faSearch} className="icon__search"></FontAwesomeIcon>
        </div>
    );
}

export default Search;