import React from "../../node_modules/@types/react";
import Room from "./Room";
import {useSelector} from "../../node_modules/react-redux/lib";
function MotelRoom(){
    const {RoomData} = useSelector(state=>state.Room);
    return(
        <div className="row">
            {
                RoomData.map((item, index)=>{
                    return <Room key={index} data={item}></Room>
                })
            }
        </div>
    )
}
export default MotelRoom;