import React, {useEffect} from "../../node_modules/@types/react";
import Pagination from "./Pagination";
import MotelRoom from "./MotelRoom";
import {Switch, NavLink, Route, useRouteMatch,useLocation} from "../../node_modules/react-router-dom";
import HotelRoom from "./HotelRoom";
import HouseRoom from "./HouseRoom";
import {FetchRoomHotel} from "../Action/Room";
import {useDispatch } from "../../node_modules/react-redux/lib";
function Contentroom(){
    const {path} = useRouteMatch();
    const dispatch = useDispatch();
    const b = useLocation();
    useEffect(()=>{
        dispatch(FetchRoomHotel(b.pathname))
    },[b, dispatch]);
    return(
        <div className="contentroom">
            <div className="contentroom__nav">
               <div className="contentroom__nav__item">
                    <NavLink to={`${path}/motel`} activeClassName="actives">Phòng trọ</NavLink>
               </div>
               <div className="contentroom__nav__item">
                    <NavLink to={`${path}`} activeClassName="actives" exact >Khách sạn</NavLink>
               </div>
               <div className="contentroom__nav__item">
                    <NavLink to={`${path}/house`} activeClassName="actives">Nhà đất</NavLink>
               </div>
            </div>
            <div className="contentroom__filter">
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <div className="contentroom__filter__btn">
                    <NavLink to="#" className="btn-a btn-a__primary">Căn hộ </NavLink>
                    <NavLink to="#" className="btn-a btn-a__primary">Nhà </NavLink>
                    <NavLink to="#" className="btn-a btn-a__primary">Mặt bằng </NavLink>
                </div>
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="contentroom__area">
                <Switch>
                    <Route path={`${path}/motel`} component={MotelRoom}></Route>
                    <Route path={`${path}/house`} component={HouseRoom}></Route>
                    <Route path={`${path}`} exact component={HotelRoom}></Route>
                </Switch>
                <Pagination></Pagination>
            </div>
        </div>
    );
}
export default Contentroom;