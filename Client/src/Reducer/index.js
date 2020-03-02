import {combineReducers} from "redux";
import User from "./User";
import NewsfeedReducer from "./Newsfeed";
import Messager from "./Messager";
import RoomHotel from "./Room";
const rootReducer = combineReducers({
    User: User,
    Newsfeed: NewsfeedReducer,
    Messager: Messager,
    Room: RoomHotel
});

export default rootReducer;