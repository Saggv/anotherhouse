import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Pagination() {
  return (
    <ul className="pagination">
      <li className="pagination__item">
        <Link to="#">
          <FontAwesomeIcon className="pagination__icon" icon={faChevronRight} />
        </Link>
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
        <Link to="#">
          <FontAwesomeIcon className="pagination__icon" icon={faChevronLeft} />
        </Link>
      </li>
    </ul>
  );
}

export default Pagination;
