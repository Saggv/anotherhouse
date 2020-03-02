import React, { useState } from "../../node_modules/@types/react";
import {PostUpdateProfileUser} from "../Action/User";
import {useDispatch} from "../../node_modules/react-redux/lib";
function EditProfileInfor({data}){
    const {name, quote, username} = data;
    const [updateUserName, setUpdateUserName] = useState("");
    const [updateName, setUpdateName] = useState("");
    const [updateQuote, setUpdateQuote] = useState("");
    const dispatch = useDispatch();
    const ClickUpDateProfile=()=>{
        if(updateUserName.length <6 || updateName.length <6){
            return alert("Ít nhất 6 ký tự cho update !");
        }
        dispatch(PostUpdateProfileUser({updateUserName,updateQuote,updateName}))
    }
    return(
        <div className="postnews">
        <div className="postnews__body">
            <div className="postnews__form">
                <input type="text" defaultValue={name} onChange={(e)=>setUpdateName(e.target.value)} />
                <input type="text" defaultValue={username} onChange={(e)=>setUpdateUserName(e.target.value)} />
                <textarea  defaultValue={quote} onChange={(e)=>setUpdateQuote(e.target.value)} ></textarea>
                <div className="textalign-center">
                    <button type="submit" className="btn__submit" onClick={()=>ClickUpDateProfile()}>Update</button>
                </div>
            </div>
        </div>
        </div>
    )
};
export default EditProfileInfor;