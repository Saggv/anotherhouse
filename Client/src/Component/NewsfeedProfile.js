import React, {useEffect, Fragment} from "../../node_modules/@types/react";
import {useSelector} from "../../node_modules/react-redux/lib";
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