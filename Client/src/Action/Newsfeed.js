import * as ActionType from "./type";

export const FetchNewsfeed = payload=>({
    type: ActionType.FETCH__NEWSFEED,
    payload
});
export const FetchNewsfeedSuccess = payload=>({
    type: ActionType.FETCH__NEWSFEED__SUCCESS,
    payload
});
export const FetchNewsfeedFail = payload=>({
    type: ActionType.FETCH__NEWSFEED__FAIL,
    payload
})
//POST NEWSFEED
export const PostNewsfeed =(payload)=>({
    type: ActionType.POST__NEWSFEED,
    payload
})
export const PostNewsfeedSuccess = payload=>({
    type: ActionType.POST__NEWSFEED__SUCCESS,
    payload
});
export const PostNewsfeedFail = payload=>({
    type: ActionType.POST__NEWSFEED__FAIL,
    payload
})

// FETCH COMMENT
export const FetchNewsfeedComment= payload=>({
     type: ActionType.FETCH__NEWSFEED__COMMENT,
     payload
});
export const FetchNewsfeedCommentSuccess = payload=>({
    type: ActionType.FETCH__NEWSFEED__COMMENT__SUCCESS,
    payload
});
// LIKE NEWS FEED
export const LikeNewsfeed = (payload)=>({
    type: ActionType.LIKE__NEWSFEED,
    payload
});
export const LikeNewsfeedSuccess = payload=>({
    type: ActionType.LIKE__NEWSFEED__SUCCESS,
    payload
});
export const LikeNewsfeedFail = payload=>({
    type: ActionType.LIKE__NEWSFEED__FAIL,
    payload
});
// DISLIKE NEWS FEED
export const DislikeNewsfeed = (payload)=>({
    type: ActionType.DISLIKE__NEWSFEED,
    payload
});
export const DislikeNewsfeedSuccess = payload=>({
    type: ActionType.DISLIKE__NEWSFEED__SUCCESS,
    payload
});
export const DislikeNewsfeedFail = payload=>({
    type: ActionType.DISLIKE__NEWSFEED__FAIL,
    payload
});

// POST COMMENT NEWSFEED
export const PostNewdfeedComment = (payload)=>({
    type: ActionType.POST__NEWSFEED__COMMENT,
    payload
});
export const PostNewdfeedCommentSuccess = (payload)=>({
    type: ActionType.POST__NEWSFEED__COMMENT__SUCCESS,
    payload
})
export const PostNewdfeedCommentFail = (payload)=>({
    type: ActionType.POST__NEWSFEED__COMMENT__FAIL,
    payload
});
// ANOTHER NEWSFEED
export const FetchAnotherNewsfeed = payload=>({
    type: ActionType.FETCH__ANOTHER__NEWSFEED,
    payload
});
export const FetchAnotherNewsfeedSuccess = payload=>({
    type: ActionType.FETCH__ANOTHER__NEWSFEED__SUCCESS,
    payload
});
export const FetchAnotherNewsfeedFail = payload=>({
    type: ActionType.FETCH__ANOTHER__NEWFEED__FAIL,
    payload
})