import *as Action from "../Action/type";
const initailState=({
    user:{},
    token:localStorage.getItem('token'),
    error:null,
    isOpenLogin: false,
    Notification:[],
    barNotification: null,
    NewsfeedOfUser:[],
    idAnotherProfile:null,
    anotherProfile:{},
    NotificationMessage:0,
    idVoteUser: null,
    openUpdate: false,
    dataProfileUpdate:{},
    openMessage: false,
    openNotification: false
});

const User=(state=initailState, action)=>{
    switch(action.type){
        case "HELLO":
            return{
                ...state,
                name:"Hello world"
            }
        case Action.SIGNUP:
        case Action.LOGIN:
            return{
                ...state,
                user: action.payload
            }
        case Action.SIGNUP__SUCCESS:
            localStorage.setItem('token',action.payload.SignUp.token);
            return{
                ...state,
                token:action.payload.SignUp.token,
                isOpenLogin: false
            }
        case Action.LOGIN__SUCCESS:
            localStorage.setItem('token',action.payload.Login.token);
            return{
                ...state,
                token: action.payload.Login.token,
                user: action.payload.Login,
                isOpenLogin: false
            }
        case Action.LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user:{}
            }
        case Action.SIGNUP__FAIL:
        case Action.LOGIN__FAIL:
            return{
                ...state,
                error: action.payload.message
            }
        case Action.CLEARE__ERROR:
            return{
                ...state,
                error: null
            }
        case Action.OPEN__LOGIN:
            return{
                ...state,
                isOpenLogin: true
            }
        case Action.CLOSE__LOGIN:
            return{
                ...state,
                isOpenLogin: false
            }
        case Action.GET__USER__SUCCESS:
            return{
                ...state,
                user: action.payload.GetUser
            }
        case Action.FETCH__NOTIFICATION__SUCCESS:
            return{
                ...state,
                Notification: action.payload.Notification,
                barNotification: action.payload.Notification.filter((item)=>item.seen !== true).length
            }
        case Action.SEEN__NOTIFICATION__SUCCESS:
            return{
                ...state,
                Notification: action.payload.SeenNotification,
                barNotification: null
            }
        case Action.FETCH__NEWSFEED__USER__NOW__SUCCESS:
            return{
                ...state,
                NewsfeedOfUser: action.payload.NewsfeedUserNow
            }
        case Action.FETCH__ANOTHER__PROFILE:
            return{
                ...state,
                idAnotherProfile: action.payload
            }
        case Action.FETCH__ANOTHER__PROFILE__SUCCESS:
            return{
                ...state,
                anotherProfile: action.payload.FetchOtherProfile
            }
        case Action.INCREASE__NOTIFICATION__MESSAGE:
            return{
                ...state,
                user:{...state.user, notificationMessage:+1}
            }
        case Action.FETCH__SEEN__MESSAGE:
            return{
                ...state,
                user: {...state.user,notificationMessage:0}
            }
        case Action.DOWN__PROFILE__USER:
        case Action.VOTE__PROFILE__USER:
            return{
                ...state,
                idVoteUser: action.payload
            }
        case Action.UPDATE__PROFILE__USER:
            return{
                ...state,
                openUpdate: !state.openUpdate,
                dataProfileUpdate: action.payload
            }
        case Action.POST__UPDATE__PROFILE__USER:
            return{
                ...state,
                dataProfileUpdate: action.payload
            }
        case Action.UPDATE__PROFILE__USER__SUCCESS:
            return{
                ...state,
                openUpdate: false
            }
        case Action.TOGGLE__OPEN__MESSAGE:
            return{
                ...state,
                openMessage: !state.openMessage
            }
        case Action.TOGGLE__OPEN__NOTIFICATION:
            return{
                ...state,
                openNotification: !state.openNotification
            }
        case Action.TOGGLE__OPEN__MESSAGE__CLOSE:
            return{
                ...state,
                openMessage: false
            }
        case Action.TOGGLE__OPEN__NOTIFICATION__CLOSE:
            return{
                ...state,
                openNotification: false
            }
        default:
            return state;
    }
}
export default User;