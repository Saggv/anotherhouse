import React, {Fragment, useEffect, useState} from "../../node_modules/@types/react";
import {Link, useRouteMatch} from "../../node_modules/react-router-dom";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faFacebookMessenger} from '../../node_modules/@fortawesome/free-brands-svg-icons';
import {faChevronCircleLeft, faCheckCircle, faMale} from '../../node_modules/@fortawesome/free-solid-svg-icons';
import MyMap from "../Component/MyMap";
import Pagination from "../Component/Pagination";
import Footer from "../Component/Footer";
import {useDispatch, useSelector} from "../../node_modules/react-redux/lib";
import {FetchDetailRoom} from "../Action/Room";
function Detailroom(){
    const {dataDetailRoom} = useSelector(state=>state.Room);
    const {images,description, price, address} = dataDetailRoom;
    const {params} = useRouteMatch();
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState([]);
    useEffect(()=>{
        dispatch(FetchDetailRoom(params.id));
        setPhoto(images);
    },[dataDetailRoom, dispatch, images, params.id]);
    const keyApi = "AIzaSyBpF1EsqwxHEnyOXuscYq8ivRivfiVUZzU";
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
                                    photo ? (photo.map((item, index)=>{
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
                                <button className="btn btn__primary btn__blue mr-2">
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
                        {/* <div className="row">
                            {
                                arr.map(item=>(
                                    <Room key={item}></Room>
                                ))
                            }
                        </div> */}
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}
export default Detailroom;