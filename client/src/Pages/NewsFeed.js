import React, {useEffect} from "react";
import NewsHeader from "../Component/NewsHeader";
import NewsFeedItem from "../Component/NewsFeedItem";
import {useDispatch, useSelector} from "react-redux";
import {FetchNewsfeed} from "../Action/Newsfeed"
function NewsFeed(){
    const dispatch = useDispatch();
    useEffect(()=>{
        const interval = setInterval(() => {
           dispatch(FetchNewsfeed());
         }, 1000);
         return () => clearInterval(interval);
    },[dispatch]);
    const {Newsfeed} = useSelector(state=> state.Newsfeed);
    return(
        <div className="container">
            <NewsHeader></NewsHeader>
           {
               Newsfeed.map((item,index)=>{
                  return <NewsFeedItem key={index} item={item}></NewsFeedItem>
               })
           }
        </div>
    );
}
export default NewsFeed;