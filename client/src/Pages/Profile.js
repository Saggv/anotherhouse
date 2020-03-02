import React from "react";
import ProfileUser from "../Component/ProfileUser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell, faHome, faThList} from '@fortawesome/free-solid-svg-icons';
import Notification from "../Component/Notification";
import ListProfile from "../Component/ListProfile";
import {Switch, Route,NavLink,useRouteMatch} from "react-router-dom";
import {useSelector} from "react-redux";
import NewsfeedProfile from "../Component/NewsfeedProfile";
function Profile(){
   const {path} = useRouteMatch();
   const dataUser = useSelector(state=>state.User);
    return(
       <div className="container">
            <div className="profileuser__area">
                <ProfileUser dataUser={dataUser.user}></ProfileUser>
            </div>
            <div className="profilecontent__area">
                <div className="profilecontent__nav">
                    <NavLink to={`${path}/notification`} activeClassName="selected">
                        <FontAwesomeIcon icon={faBell} className="profilecontent__nav__icon"></FontAwesomeIcon>
                    </NavLink>
                    <NavLink to={`${path}`} exact activeClassName="selected">
                        <FontAwesomeIcon icon={faHome} className="profilecontent__nav__icon"></FontAwesomeIcon>
                    </NavLink>
                    <NavLink to={`${path}/list`} activeClassName="selected">
                        <FontAwesomeIcon icon={faThList} className="profilecontent__nav__icon"></FontAwesomeIcon>
                    </NavLink>
                </div>
                <div className="profilecontent__display">
                    <h3>Recent activities</h3>
                        <Switch>
                            <Route path={`${path}/notification`} component={Notification}></Route>
                            <Route path={`${path}/list`} component={ListProfile}></Route>
                            <Route path={`${path}`} exact component={NewsfeedProfile}></Route>
                         </Switch>
                </div>
            </div>
       </div>
    );
}
export default Profile;