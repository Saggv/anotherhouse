import* as Action from "./type";
export const Hello=(payload)=>({
    type:"HELLO",
    payload
});

export const OpenLogin = payload=>({
    type:Action.OPEN__LOGIN,
    payload
})
export const CloseLogin = payload=>({
    type: Action.CLOSE__LOGIN,
    payload
})
export const LoginAction =payload=>({
    type: Action.LOGIN,
    payload
})
export const LoginSuccess = payload=>({
    type: Action.LOGIN__SUCCESS,
    payload
});
export const LoginFail = payload=>({
    type: Action.LOGIN__FAIL,
    payload
})
export const SignUpAction = payload=>({
    type: Action.SIGNUP,
    payload
});
export const SignUpSuccess=payload=>({
    type: Action.SIGNUP__SUCCESS,
    payload
});
export const SignUpFail = payload=>({
    type: Action.SIGNUP__FAIL,
    payload
})
export const GetUser = payload=>({
    type:Action.GET__USER,
    payload
})
export const GetUserSuccess = payload=>({
    type:Action.GET__USER__SUCCESS,
    payload
})
export const GetUserFail = payload=>({
    type:Action.GET__USER__FAIL,
    payload
});

// NOTIFICATION
export const FetchNotification = payload=>({
    type: Action.FETCH__NOTIFICATION,
    payload
})
export const FetchNotificationSuccess = payload=>({
    type: Action.FETCH__NOTIFICATION__SUCCESS,
    payload
});
export const FetchNotificationFail = payload=>({
    type: Action.FETCH__NOTIFICATION__FAIL,
    payload
});
// SEEN NOTIFICATION 
export const SeenNotification = payload=>({
    type: Action.SEEN__NOTIFICATION,
    payload
});
export const SeenNotificationSuccess =payload=>({
    type: Action.SEEN__NOTIFICATION__SUCCESS,
    payload
});
export const SeenNotificationFail = payload=>({
    type: Action.SEEN__NOTIFICATION__FAIL,
    payload
});

// FETCH NEWSFEED USER NOW
export const FetchNewsfeedUserNow =payload=>({
    type: Action.FETCH__NEWSFEED__USER__NOW,
    payload
});
export const FetchNewsfeedUserNowSuccess = payload=>({
    type: Action.FETCH__NEWSFEED__USER__NOW__SUCCESS,
    payload
});
export const FetchNewsfeedUserNowFail = payload=>({
    type: Action.FETCH__NEWSFEED__USER__NOW__FAIL,
    payload
})

export const FetchAnotherProfile=payload=>({
    type: Action.FETCH__ANOTHER__PROFILE,
    payload
})
export const FetchAnotherProfileSuccess = payload=>({
    type: Action.FETCH__ANOTHER__PROFILE__SUCCESS,
    payload
});
export const FetchAnotherProfileFail=payload=>({
    type: Action.FETCH__ANOTHER__PROFILE__FAIL,
    payload
});
// MESSAGE;
export const IncreateNotificationMessage =payload=>({
        type: Action.INCREASE__NOTIFICATION__MESSAGE,
        payload
})
// VOTE PROFILE UER
export const VoteProfileUser=payload=>({
    type: Action.VOTE__PROFILE__USER,
    payload
})
export const VoteProfileUserSucess=payload=>({
    type: Action.VOTE__PROFILE__USER__SUCCESS,
    payload
})
export const VoteProfileUserFail=payload=>({
    type: Action.VOTE__PROFILE__USER__FAIL,
    payload
})
// DOWN PROFILE
export const DownProfileUser=payload=>({
    type: Action.DOWN__PROFILE__USER,
    payload
})
export const DownProfileUserSucess=payload=>({
    type: Action.DOWN__PROFILE__USER__SUCCESS,
    payload
})
export const DownProfileUserFail=payload=>({
    type: Action.DOWN__PROFILE__USER__FAIL,
    payload
})
// UPDATE PROFILE USER
export const UpdateProfileUser=(payload)=>({
    type: Action.UPDATE__PROFILE__USER,
    payload
})
export const PostUpdateProfileUser = payload=>({
    type: Action.POST__UPDATE__PROFILE__USER,
    payload
})
export const UpdateProfileUserSucess=(payload)=>({
    type: Action.UPDATE__PROFILE__USER__SUCCESS,
    payload
})
export const UpdateProfileUserFail=(payload)=>({
    type: Action.UPDATE__PROFILE__USER__FAIL,
    payload
})

export const Logout = payload=>({
    type: Action.LOGOUT,
    payload
})

// 
export const ToggleOpenMessage=(payload)=>({
    type:Action.TOGGLE__OPEN__MESSAGE,
    payload
})
export const ToggleOpenNotification=payload=>({
    type: Action.TOGGLE__OPEN__NOTIFICATION,
    payload
})
export const ToggleOpenMessageClose=(payload)=>({
    type:Action.TOGGLE__OPEN__MESSAGE,
    payload
})
export const ToggleOpenNotificationClose=payload=>({
    type: Action.TOGGLE__OPEN__NOTIFICATION,
    payload
})