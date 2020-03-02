import * as ActionType from "../Action/type";

const initailState ={
    isOpenMessageItem: false,
    reciever:{},
    AllChat:[]
}

const Messager=(state=initailState, action)=>{
    switch(action.type){
        case(ActionType.OPEN__MESSAGEITEM):
            return{
                ...state,
                isOpenMessageItem: true,
                reciever: action.payload
            }
        case(ActionType.CLOSE__MESSAGEITEM):
            return{
                ...state,
                isOpenMessageItem: false
            }
        case(ActionType.FETCH__MY__MESSAGE__SUCCESS):
            return{
                ...state,
                AllChat: action.payload.FetchMyMessage
            }
        default:
            return state
    }
};

export default Messager;