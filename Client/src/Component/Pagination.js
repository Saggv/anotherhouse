import React from "../../node_modules/@types/react";
import {Link} from "../../node_modules/react-router-dom";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import {faChevronCircleLeft, faChevronCircleRight} from '../../node_modules/@fortawesome/free-solid-svg-icons';

function Pagination(){
    return(
         <ul className="pagination">
             <li className="pagination__item">
                 <Link to="#"><FontAwesomeIcon className="pagination__icon" icon={faChevronCircleRight} /></Link>
             </li>
             <li className="pagination__item">
                 <Link to="#">1</Link>
             </li>
             <li className="pagination__item">
                 <Link to="#">2</Link>
             </li>
             <li className="pagination__item">
                 <Link to="#">3</Link>
             </li>
             <li className="pagination__item">
                 <Link to="#"><FontAwesomeIcon className="pagination__icon" icon={faChevronCircleLeft} /></Link>
             </li>
         </ul>
    );
}

export default Pagination;