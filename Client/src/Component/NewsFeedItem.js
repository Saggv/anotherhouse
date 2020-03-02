import React,{useState, useEffect} from "../../node_modules/@types/react";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faComment,  faGlobeAsia} from '../../node_modules/@fortawesome/free-solid-svg-icons';
import ScrollToBottom from '../../node_modules/react-scroll-to-bottom/lib';
import Like from "../Images/Like.svg";
import NLike from "../Images/NLike.svg";
import UnLike from "../Images/UnLike.svg";
import NUnLike from "../Images/NUnLike.svg";
import {Link} from "../../node_modules/react-router-dom";
import Comment from "./Comment";
import {LikeNewsfeed, PostNewdfeedComment, DislikeNewsfeed} from "../Action/Newsfeed";
import {useDispatch, useSelector} from "../../node_modules/react-redux/lib";
import {NavLink} from "../../node_modules/react-router-dom";
function NewsFeedItem({item}){
    let {title, description, images, createByUser, date,like, id, commment, dislike} = item;
    // const [commentList, setCommentList] = useState(item.commment);
    const [hideContent, setHideContent] = useState("");
    const [viewMore, setViewMore] = useState("View more");
    const dispatch = useDispatch();
    useEffect(()=>{
        setHideContent(description.slice(0,250));
    },[description])
    const [isLike, setIsLike] = useState(false);
    const [isUnLike, setIsUnLike] = useState(false);
    const [openComment, setComment] = useState(false); 
    const [contentComment, setContentComment] = useState("");
    const {token, user} = useSelector(state=>state.User);
    const toggleComment =()=>{
        setComment(!openComment);
    }
    const ClickLike =(id)=>{
        if(!token){
            return alert("Please login !");
        }
        setIsLike(true);
        let toUser = createByUser.id;
        dispatch(LikeNewsfeed({id, toUser}));
    }
    const ClickDislike = (id)=>{
        if(!token){
            return alert("Please login !");
        }
        setIsUnLike(true);
        let toUser = createByUser.id;
        dispatch(DislikeNewsfeed({id, toUser}));
    }
    const submitComment=(e)=>{
        e.preventDefault();
        let toUser = createByUser.id;
        dispatch(PostNewdfeedComment({contentComment,id, toUser}))
        setContentComment("");
    }
    const ClickViewMore =()=>{
              setHideContent(description);
              setViewMore("The end")
          
    }
    // useEffect(scrollToBottom, [commment]);
    return(
        <div className="newsfeeditem">
            <div className="newsfeeditem__content">
                <div className="newsfeeditem__user">
                    <NavLink to={`/profilefriend/${createByUser.username}.${createByUser.id}.anotherfriend`}>{createByUser.username}</NavLink>
                    <div className="newsfeeditem__user__img-box">
                        <img src={createByUser.avatar} alt="userfsd" />
                    </div>
                <span>{new Date(Number(date)).toDateString()}</span>
                </div>
                <div className="newsfeeditem-box">
                    <div className="newsfeeditem__text">
                        <h4 className="newsfeeditem__text--title">
                            {title}
                        </h4>
                        <p className="newsfeeditem__text--paragrahp">
                            {
                                 description.length < 250 ?(
                                     description
                                 ):(`${hideContent}...`)
                            }
                        </p>
                        {
                            description.length > 250 ?(
                                <div className="textcenter">
                                   <Link to="#" className="newsfeeditem-viewmore" onClick={()=>ClickViewMore()}>{viewMore}</Link>
                               </div>
                            ):null
                        }
                    </div>
                    {
                        images.length > 0 ?(
                            <div className="newsfeeditem__img">
                                <div className="newsfeeditem__img__box">
                                    {
                                        images.map((item, index)=>{
                                            return(
                                                <div className={`newsfeeditem__img__box--${(index+1)*images.length}`} key={index}>
                                                    <img src={item} className="image-newfeeditem" alt="sdfsdafa"/>
                                                </div>
                                            )
                                        })
                                        
                                        
                                    }
                                </div>
                            </div>
                        ):null
                    }
                </div>
                <div className="newsfeeditem__action newsfeeditem__action--right">
                    <span>{like}</span>
                    <div className="triangle">
                        {
                            isLike ? (
                                <img onClick={()=>ClickLike(id)} src={Like} className="triangle__btn triangle__btn--like" alt="lilke" />
                            ):(
                                
                                <img onClick={()=>ClickLike(id)} src={NLike} className="triangle__btn triangle__btn--like" alt="lilke" />
                            )
                        }
                    </div>
                    <div className="comment" onClick={()=>toggleComment(id)}>
                        <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                        <span>{commment.length >0 ?( commment.length):null}</span>
                    </div>
                </div>
                <div className="newsfeeditem__action newsfeeditem__action--left">
                    <span>{dislike}</span>
                    <div className="triangle">
                        {
                            isUnLike ? (
                                <img onClick={()=>ClickDislike(id)} src={NUnLike} className="triangle__btn triangle__btn--like" alt="lilke" />
                            ):(
                                
                                <img onClick={()=>ClickDislike(id)} src={UnLike} className="triangle__btn triangle__btn--like" alt="lilke" />
                            )
                        }
                    </div>
                    <div className="comment" onClick={()=>toggleComment(id)}>
                        <FontAwesomeIcon  icon={faComment}></FontAwesomeIcon>
                        <span>{commment.length >0 ?( commment.length):null}</span>
                    </div>
                </div>
                <div className="newsfeeditem__address">
                    <FontAwesomeIcon className="newsfeeditem__address__icon" icon={faGlobeAsia}></FontAwesomeIcon>
                    <span>Viet Nam</span>
                </div>
            </div>
            {
                openComment ? (
                    <div className="newsfeeditem__comment">
                        {
                            user.avatar ? (
                            <div className="user-now">
                                <div className="user-now__img">
                                    <img src={user.avatar} alt="usadfsadfsa"/>
                                </div>
                                <form className="user-now__input">
                                    <textarea onChange={(e)=>setContentComment(e.target.value)} value={contentComment} placeholder="Write your comment..">
                                    </textarea>
                                    <button type="submit" onClick={(e)=>submitComment(e)} className="btn btn__sendcomment">SEND</button>
                                </form>
                            </div>
                            ): null
                        }
                        <div className="newsfeeditem__comment__area">
                        <ScrollToBottom className="sroll-comment">
                            {
                                commment ? ( commment.map((item,index)=>{
                                    return <Comment item={item} key={index}></Comment>
                                })):null
                            }
                         </ScrollToBottom>
                        </div>
                    </div>
                ):null
            }
        </div>
    );
}
export default NewsFeedItem;