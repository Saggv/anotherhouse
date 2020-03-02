import { call, put, select} from "redux-saga/effects";
import {CallAPI} from "../API/CallAPI";
import * as NewsfeedAction from "../Action/Newsfeed";

export function* WatchFetchNewsfeed(){
     const queryFetchNewsfeed={
         query:`
            mutation{
                GetNewsfeed(inputGetNewsfeed:{skip:0, limit:2}){
                    id,
                    commment{
                        id,
                        userComment{
                            username,
                            avatar,
                            id
                        },
                        dateComment,
                        contentComment
                    },
                    createByUser{
                        username,
                        avatar,
                        id
                    },
                    images,
                    title,
                    description,
                    date,
                    like,
                    dislike
                }
            }   
         `
     };
     const result = yield call(CallAPI, queryFetchNewsfeed);
     const {data} = result.data;
      yield put(NewsfeedAction.FetchNewsfeedSuccess(data));
};
export function* WatchLikeNewsfeed(){
    const {idLikeNewsfeed, toUser} = yield select(state=>state.Newsfeed);
    const token = yield select(state=>state.User.token);
    const queryLike ={
        query:`
            mutation{
                LikeNewsfeed(inputLikeNewsfeed:{idNewsfeed:"${idLikeNewsfeed}",idToUser:"${toUser}"}){
                    id,
                    commment{
                        id,
                        userComment{
                            username,
                            avatar,
                            id
                        },
                        dateComment,
                        contentComment
                    },
                    createByUser{
                        username,
                        avatar,
                        id
                    },
                    images,
                    title,
                    description,
                    date,
                    like,
                    dislike
                }
            } 
        `
    }
    const result = yield call(CallAPI, queryLike, token);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(NewsfeedAction.LikeNewsfeedSuccess(data));
    }
    else{
        yield put(NewsfeedAction.LikeNewsfeedFail(data.errors[0]));
    }
}
export function* WatchDislikeNewsfeed(){
    const {idLikeNewsfeed, toUser} = yield select(state=>state.Newsfeed);
    const token = yield select(state=>state.User.token);
    const queryLike ={
        query:`
            mutation{
                UnLikeNewsfeed(inputLikeNewsfeed:{idNewsfeed:"${idLikeNewsfeed}",idToUser:"${toUser}"}){
                    id,
                    commment{
                        id,
                        userComment{
                            username,
                            avatar,
                            id
                        },
                        dateComment,
                        contentComment
                    },
                    createByUser{
                        username,
                        avatar,
                        id
                    },
                    images,
                    title,
                    description,
                    date,
                    like,
                    dislike
                }
            } 
        `
    }
    const result = yield call(CallAPI, queryLike, token);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(NewsfeedAction.DislikeNewsfeedSuccess(data));
    }
    else{
        yield put(NewsfeedAction.DislikeNewsfeedFail(data.errors[0]));
    }
}
export function* WatchPostNewsfeedComment(){
    const token = yield select(state=>state.User.token);
    const {contentComment,idNewsfeed, toUser} = yield select(state=>state.Newsfeed);
    const queryComment={
        query:`
            mutation{
                PostCommentNewsfeed(inputPostCommentNewsfeed:{idNewsfeed:"${idNewsfeed}",images:["sdfds"],contentComment:"${contentComment}", idToUser:"${toUser}"}){
                    dateComment,
                    id,
                    userComment{
                        username,
                        avatar,
                        id
                    },
                    contentComment
                }
            }
        `
    };
    const result = yield call(CallAPI,queryComment,token);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(NewsfeedAction.PostNewdfeedCommentSuccess(data));
    }
    else{
        yield put(NewsfeedAction.PostNewdfeedCommentFail(data.errors[0]));
    }
}

export function* WatchPostNewsfeed(){
    const token = yield select(state=>state.User.token);
    const {postNewsfeed} = yield select(state=>state.Newsfeed);
     const {title,content, images} = postNewsfeed;
    const PostNewsfeedQuery={
        query:`
            mutation{
                PostNewsfeed(inputNewsfeed:{description:"${content}",title:"${title}",images:[${images}]}){
                    id,
                    commment{
                        id,
                        userComment{
                            username,
                            avatar,
                            id
                        },
                        dateComment,
                        contentComment
                    },
                    createByUser{
                        username,
                        avatar
                    },
                    images,
                    title,
                    description,
                    date,
                    like,
                    dislike
            }
            }
        `
    };
    const result = yield call(CallAPI, PostNewsfeedQuery, token);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(NewsfeedAction.PostNewsfeedSuccess(data));
    }
    else{
        yield put(NewsfeedAction.PostNewsfeedFail(data.errors[0]));
    }
}

export function* WatchFetchAnotherNewsfeed(){
    const {idAnotherProfile} = yield select(state=>state.User);
    const queryFetch={
        query:`
            mutation{
                GetNewsfeedAnotherProfile(userId:"${idAnotherProfile}"){
                    id,
                    commment{
                        id,
                        userComment{
                            username,
                            avatar,
                            id
                        },
                        dateComment,
                        contentComment
                    },
                    createByUser{
                        username,
                        avatar
                    },
                    images,
                    title,
                    description,
                    date,
                    like,
                    dislike
                }
            }
        `
    };
    const result = yield call(CallAPI, queryFetch);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(NewsfeedAction.FetchAnotherNewsfeedSuccess(data));
    }
    else{
        yield put(NewsfeedAction.FetchAnotherNewsfeedFail(data.errors[0]));
    }
}