import { call, put, select} from "../../node_modules/redux-saga/effects";
import {CallAPI} from "../API/CallAPI";
import * as UserAction from "../Action/User";
export function* WatchLogin(){
    const user = yield select(state=>state.User.user);
    const queryLogin ={
        query:`
            mutation{
                Login(inputLogin:{userName:"${user.userName}", password:"${user.password}"}){
                    name,
                    username,
                    avatar,
                    token,
                    id,
                    notificationMessage
                }
            }          
        `
    };
    const result = yield call(CallAPI,queryLogin);
    if(!result.data.errors){
        const {data} = result.data
        yield put(UserAction.LoginSuccess(data));
    }else{
        yield put(UserAction.LoginFail(result.data.errors[0]))
    }
}

export function* WatchSignUp(){
    const user = yield select(state=>state.User.user);
    const querySignUp = {
        query:`
            mutation{
                SignUp(inputSignUp:{name:"${user.name}", userName:"${user.userName}", password:"${user.password}"}){
                    name,
                    token
                }
            }
        `
    }
    const result = yield call(CallAPI, querySignUp);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(UserAction.SignUpSuccess(data));
    }
    else{
        yield put(UserAction.SignUpFail(data.errors[0]));
    }
};

export function* WatchGetUser(){
    const token = yield select(state=>state.User.token);
    if(!token){
        return 0;
    }
    const query={
        query:`
            query{
                GetUser{
                    name,
                    username,
                    avatar,
                    id,
                    notificationMessage,
                    quote,
                    vote,
                    down
                }
            }
        `
    };
    const result = yield call(CallAPI, query, token);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(UserAction.GetUserSuccess(data));
    }
    else{
        yield put(UserAction.GetUserFail(data.errors[0]));
    }
};

export function* WatchFetchNotification(){
    const token = yield select(state=>state.User.token);
    const queryNotification={
        query:`
            query{
                Notification{
                id,
                fromUser{
                    username,
                    avatar,
                    id
                },
                contentNotification,
                date,
                seen
                }
            }
        `
    };
    const result = yield call(CallAPI, queryNotification, token);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(UserAction.FetchNotificationSuccess(data));
    }
    else{
        yield put(UserAction.FetchNotificationFail(data.errors[0]));
    }
};

export function* WatchSeenNotification(){
    const {token }= yield select(state=>state.User);
    const querySeen ={
        query:`
            query{
                SeenNotification{
                    id,
                    fromUser{
                        username,
                        avatar,
                        id
                    },
                    contentNotification,
                    date,
                    seen
                    }
            }
        `
    }
    const result = yield call(CallAPI,querySeen,token);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(UserAction.SeenNotificationSuccess(data));
    }
    else{
        yield put(UserAction.SeenNotificationFail(data.errors[0]));
    }
}

export function* WatchFetchNewsfeedUserNow(){
    const {token} = yield select(state=>state.User);
    const queryFetch={
        query:`
            query{
                NewsfeedUserNow{
                    id,
                    commment{
                        id,
                        userComment{
                            username,
                            avatar
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
                    like
                }
            }
        `
    };
    const result = yield call(CallAPI, queryFetch, token);
    const {data} = result;
    if(!data.errors){
        let {data} = result.data
        yield put(UserAction.FetchNewsfeedUserNowSuccess(data));
    }
    else{
        yield put(UserAction.FetchNewsfeedUserNowFail(data.errors[0]));
    }
};

export function* WatchFetchAnotherProfile(){
    const {idAnotherProfile} = yield select(state=>state.User);
     const queryFetch={
         query:`
            mutation{
                FetchOtherProfile(userId:"${idAnotherProfile}"){
                    name,
                    username,
                    avatar,
                    id,
                    vote,
                    down,
                    quote
                }
            }
         `
     }
     const result = yield call(CallAPI, queryFetch);
     const {data} = result;
     if(!data.errors){
        let {data} = result.data
        yield put(UserAction.FetchAnotherProfileSuccess(data));
    }
    else{
        yield put(UserAction.FetchAnotherProfileFail(data.errors[0]));
    }
};

export function* WatchFetchSeenMessage(){
    const {token} = yield select(state=>state.User);
    const querySe ={
        query:`
           mutation{
            SeenMessage
           }
        `
    };
    yield call(CallAPI, querySe, token);
}

/// VOTE USER PROFILE
export function* WatchVoteProfileUser(){
    const {token,idVoteUser} = yield select(state=>state.User);
    const voteQuery={
        query:`
            mutation{
                VoteUser(userId:"${idVoteUser}")
            }
        `
    }
    yield call(CallAPI, voteQuery, token);
}

export function* WatchDownProfileUser(){
    const {token,idVoteUser} = yield select(state=>state.User);
    const voteQuery={
        query:`
            mutation{
                DownUser(userId:"${idVoteUser}")
            }
        `
    }
    yield call(CallAPI, voteQuery, token);
}
/// update infor
export function*WatchUpdateInforProfile(){
    const {token, dataProfileUpdate} = yield select(state=>state.User);
    const {updateUserName, updateName, updateQuote} = dataProfileUpdate;
    const queryUpdate={
        query:`
            mutation{
                UpdateUserProfile(inputUpdateProfile:{username:"${updateUserName}",name:"${ updateName}",quote:"${updateQuote}"}){
                id,
                name,
                username
                }
            }
        `
    }
    const result = yield call(CallAPI,queryUpdate, token);
    const {data} =result;
    if(!data.errors){
        let {data} = result.data
        yield put(UserAction.UpdateProfileUserSucess(data));
        yield put(UserAction.GetUser());
    }
    else{
        yield put(UserAction.UpdateProfileUserFail(data.errors[0]));
    }
}