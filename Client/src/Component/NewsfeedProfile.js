import React, {useEffect, Fragment} from "react";
import {useSelector} from "react-redux";
import { FetchNewsfeedUserNow } from "../Action/User";
import NewsfeedItem from "./NewsFeedItem";
function NewsfeedProfile(){
    useEffect(()=>{
          FetchNewsfeedUserNow();
    },[])
    const {Newsfeed} = useSelector(state=>state.Newsfeed);
    return(
      <Fragment>
          {
             Newsfeed.length > 0 ? (
                    Newsfeed.map((item, index)=>{
                         return(
                             <NewsfeedItem item={item} key={index}></NewsfeedItem>
                         )
                    })
              ):(<h2 className="no-post-profile">Chưa có bài viết nào ):(</h2>)
          }
      </Fragment>
    )
};
export default NewsfeedProfile;