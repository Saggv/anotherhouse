import *as ActionType from "../Action/type";

const initailState={
     Newsfeed:[],
     idNewsfeed:null,
     toUser:null,
     idLikeNewsfeed:null,
     contentComment:"",
     postNewsfeed:""
};
const NewsfeedReducer =(state=initailState, action)=>{
        switch(action.type){
            case ActionType.FETCH__NEWSFEED__SUCCESS:
                return{
                    ...state,
                    Newsfeed: action.payload.GetNewsfeed
                }
            case ActionType.FETCH__NEWSFEED__COMMENT:
                return{
                    ...state,
                    idNewsfeed: action.payload
                }
            case ActionType.FETCH__NEWSFEED__COMMENT__SUCCESS:
                return{
                    ...state,
                    NewsfeedComment:action.payload.GetCommentNewsfeed
                }
            case ActionType.LIKE__NEWSFEED:
                return{
                    ...state,
                    idLikeNewsfeed: action.payload.id,
                    toUser: action.payload.toUser,
                    Newsfeed: state.Newsfeed.map((item)=>{
                        if(item.id === action.payload){
                            item.like = item.like+1;
                        }
                        return item;
                    })
                }
            case ActionType.DISLIKE__NEWSFEED:
                return{
                    ...state,
                    idLikeNewsfeed: action.payload.id,
                    toUser: action.payload.toUser
                }
            case ActionType.LIKE__NEWSFEED__SUCCESS:
                return{
                    ...state,
                    Newsfeed: state.Newsfeed.map((item)=>{
                        if(item.id === action.payload.LikeNewsfeed.id){
                            item = action.payload.LikeNewsfeed;
                        }
                        return item;
                    })
                }
            case ActionType.DISLIKE__NEWSFEED__SUCCESS:
                return{
                    ...state,
                    Newsfeed: state.Newsfeed.map((item)=>{
                        if(item.id === action.payload.UnLikeNewsfeed.id){
                            item = action.payload.UnLikeNewsfeed;
                        }
                        return item
                    })
                }
            case ActionType.POST__NEWSFEED__COMMENT:
                return{
                    ...state,
                    idNewsfeed:action.payload.id,
                    contentComment: action.payload.contentComment,
                    toUser: action.payload.toUser
                }
            case ActionType.POST__NEWSFEED:
                return{
                    ...state,
                    postNewsfeed: action.payload
                }
            case ActionType.POST__NEWSFEED__COMMENT__SUCCESS:
                return{
                    ...state,
                    Newsfeed: state.Newsfeed.map((item)=>{
                            if(item.id === state.idNewsfeed){
                                item.commment = [...item.commment, action.payload.PostCommentNewsfeed];
                            }
                            return item;
                    })
                }
            case ActionType.POST__NEWSFEED__SUCCESS:
                return{
                    ...state,
                    Newsfeed: [action.payload.data,...state.Newsfeed]
                }
            case ActionType.FETCH__NEWSFEED__USER__NOW__SUCCESS:
                return{
                    ...state,
                    Newsfeed: action.payload.NewsfeedUserNow
                }
            case ActionType.FETCH__ANOTHER__NEWSFEED__SUCCESS:
                return{
                    ...state,
                    Newsfeed: action.payload.GetNewsfeedAnotherProfile
                }
            default:
                return state
      }
};
export default NewsfeedReducer;