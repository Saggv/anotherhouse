import {takeLatest, takeEvery} from "../../node_modules/redux-saga/effects";
import * as Action from "../Action/type";
import {WatchLogin, WatchSignUp, WatchGetUser, WatchFetchNotification, WatchSeenNotification,
     WatchFetchNewsfeedUserNow,WatchFetchAnotherProfile, WatchFetchSeenMessage,
     WatchVoteProfileUser,WatchUpdateInforProfile,
     WatchDownProfileUser} from "./User";
import {WatchFetchNewsfeed, WatchFetchAnotherNewsfeed, WatchLikeNewsfeed, WatchPostNewsfeedComment,
     WatchPostNewsfeed,WatchDislikeNewsfeed} from "./Newsfeed";
import {WatchFetchMyMessage} from "./Message";
import {WatchFetchRoom,WatchFetchDetailRoom} from "./Room";
function* Hello(){
    yield console.log("hello");
    return 0;
}
function* rootSaga(){
    yield Hello();
    yield takeEvery(Action.LOGIN, WatchLogin);
    yield takeEvery(Action.SIGNUP, WatchSignUp);
    yield takeEvery(Action.FETCH__NEWSFEED, WatchFetchNewsfeed);
    // yield takeEvery(Action.FETCH__NEWSFEED__COMMENT, WatchFetchNewsfeedComment);
    yield takeLatest(Action.LIKE__NEWSFEED, WatchLikeNewsfeed);
    yield takeEvery(Action.GET__USER, WatchGetUser);
    yield takeEvery(Action.POST__NEWSFEED__COMMENT, WatchPostNewsfeedComment);
    yield takeLatest(Action.POST__NEWSFEED, WatchPostNewsfeed);
    yield takeLatest(Action.FETCH__NOTIFICATION, WatchFetchNotification);
    yield takeLatest(Action.SEEN__NOTIFICATION, WatchSeenNotification);
    yield takeLatest(Action.FETCH__NEWSFEED__USER__NOW, WatchFetchNewsfeedUserNow);
    yield takeLatest(Action.FETCH__ANOTHER__PROFILE, WatchFetchAnotherProfile);
    yield takeLatest(Action.FETCH__ANOTHER__NEWSFEED, WatchFetchAnotherNewsfeed);
    yield takeEvery(Action.FETCH__MY__MESSAGE, WatchFetchMyMessage);
    yield takeEvery(Action.FETCH__SEEN__MESSAGE, WatchFetchSeenMessage);
    yield takeEvery(Action.VOTE__PROFILE__USER, WatchVoteProfileUser);
    yield takeEvery(Action.DOWN__PROFILE__USER, WatchDownProfileUser);
    yield takeLatest(Action.POST__UPDATE__PROFILE__USER, WatchUpdateInforProfile);
    yield takeEvery(Action.DISLIKE__NEWSFEED, WatchDislikeNewsfeed);
    yield takeEvery(Action.INCREASE__NOTIFICATION__MESSAGE, WatchGetUser);
    yield takeEvery(Action.FETCH__ROOM__HOTEL, WatchFetchRoom);
    yield takeEvery(Action.FETCH__DETAIL__ROOM, WatchFetchDetailRoom);
};

export default rootSaga;