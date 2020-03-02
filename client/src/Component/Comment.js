import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";

function Comment({item}){
    const {userComment, dateComment, contentComment} = item;
    return(
        <Fragment>
            <div className="user-comment">
                <div className="user-comment__img">
                    <img src={userComment.avatar} alt="user comment" />
                </div>
                <div className="user-comment__box-content">
                    <div className="user-comment__content">
                      <NavLink to={`/profilefriend/${userComment.username}.${userComment.id}.anotherfriend`}>{userComment.username}</NavLink>
                        <p>
                        {
                            contentComment
                        }
                        </p>
                    </div>
                    <span>{new Date(Number(dateComment)).toDateString()}</span>
                </div>
            </div>
        </Fragment>
    );
}
export default Comment;