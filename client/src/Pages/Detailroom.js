import React, {Fragment, useEffect, useState} from "react";
import {Link, useRouteMatch} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import {faChevronCircleLeft, faCheckCircle, faMale} from '@fortawesome/free-solid-svg-icons';
import MyMap from "../Component/MyMap";
import Pagination from "../Component/Pagination";
import Footer from "../Component/Footer";
import {useDispatch, useSelector} from "react-redux";
import {FetchDetailRoom, FetchAnotherRoom} from "../Action/Room";
import {OpenMessageItem} from "../Action/MessageSocket";
import {CreateRoomChat} from "../Component/ItemMessage";
import Room from "../Component/Room";
function Detailroom(){
    const {dataDetailRoom, RoomData} = useSelector(state=>state.Room);
    const {user} = useSelector(state=>state.User);
    const {images,description, price, address, createBy} = dataDetailRoom;
    const {params} = useRouteMatch();
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState([]);
    useEffect(()=>{
        dispatch(FetchDetailRoom(params.id));
        dispatch(FetchAnotherRoom(0));
      //  setPhoto(images);
    },[]);//dataDetailRoom, dispatch, images, params.id
    const keyApi = "AIzaSyBpF1EsqwxHEnyOXuscYq8ivRivfiVUZzU";
    const data={
        userSendId:null,
        userReciveId:null
    }
    const ClickChat=()=>{
        if(!user.hasOwnProperty('id')){
            return alert("Login please!")
        }
        data.userSendId= user.id;
        data.userReciveId = createBy.id;
        const {id, avatar} = createBy;
        dispatch(OpenMessageItem({id, avatar}));
        CreateRoomChat({data})
        console.log(data);
    }

    return(
        <Fragment>
            <div className="container">
                <div className="detailroom">
                    <ul className="url">
                        <li className="url__item">
                            <Link to="#">Trang chủ</Link>
                        </li>
                        <li className="url__item">
                            <Link to="#">Khách sạn</Link>
                        </li>
                        <li className="url__item">
                            <Link to="#">Chi tiết</Link>
                        </li>
                    </ul>
                    <div className="detailroom__area">
                        <div className="detailroom__img">
                            <div className="detailroom__img__box">
                                {
                                    images ? (images.map((item, index)=>{
                                        return(
                                            <div className={`detailroom__img__box__${index+1}`} key={index}>
                                                <img src={item} className="img-detail" alt="box imgs" />
                                        </div>
                                        )                          
                                    })):null
                                }
                            </div>
                            <FontAwesomeIcon icon={faChevronCircleLeft} className="icon-slide"></FontAwesomeIcon>
                            <div className="detail__action">
                                <button className="btn btn__primary btn__blue mr-2" onClick={()=>ClickChat()}>
                                    <FontAwesomeIcon className="btn__icon" icon={faFacebookMessenger}></FontAwesomeIcon> Chat
                                </button>
                                <button className="btn btn__primary btn__blue--1">
                                    <FontAwesomeIcon className="btn__icon" icon={faCheckCircle}></FontAwesomeIcon> Mua ngay
                                </button>
                            </div>
                        </div>
                        <div className="detailroom__detail">
                            <span>Phù hợp:<p><FontAwesomeIcon className="icon__for" icon={faMale}></FontAwesomeIcon></p></span>
                            <span>Số tiền:<p>${price}</p></span>
                            <span>Địa chỉ:<p>{address}</p></span>
                            <span>Mô tả:<p>{description}</p></span>
                            <br/>
                            <div className="detailroom__detail__map">
                            <MyMap
                                googleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${keyApi}`}
                                loadingElement={ <div style={{ height: `100%` }} />}
                                containerElement={ <div style={{ height: `100%` }} />}
                                mapElement={ <div style={{ height: `100%` }} />}
                            >
                            </MyMap>
                            </div>
                        </div>
                    </div>
                    <div className="mayyoulike">
                        <h3>Có thể bạn quan tâm</h3>
                        <div className="row">
                            {
                               RoomData.map((item, index)=>(
                                    <Room key={index} data={item}></Room>
                                ))
                            }
                        </div>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}
export default Detailroom;