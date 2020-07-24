import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FilterByArea, FilterByPrice } from '../Action/Room';
import { useDispatch } from 'react-redux';

function Search() {
  const dispatch = useDispatch();

  const SelectArea = (e) => {
    dispatch(FilterByArea(e.target.value));
  };

  const SelectPrice = (e) => {
    dispatch(FilterByPrice(e.target.value));
  };
  return (
    <div className="search__box">
      <div>
        <input className="search" type="text" placeholder="Nhập địa chỉ và nơi bạn muốn..."></input>
        <FontAwesomeIcon icon={faSearch} className="icon__search"></FontAwesomeIcon>
      </div>

      <select onChange={(e) => SelectArea(e)}>
        <option value="all">Toàn Quốc</option>
        <option value="Ha Noi">Hà Nội</option>
        <option value="Da Nang">Đà Nắng</option>
        <option value="tp.HCM">Tp.HCM</option>
      </select>

      <select onChange={(e) => SelectPrice(e)}>
        <option value={0}>Tất cả</option>
        <option value={600}>Thấp</option>
        <option value={900}>Trung Bình</option>
        <option value={1000}>Cao</option>
      </select>
    </div>
  );
}

export default Search;
