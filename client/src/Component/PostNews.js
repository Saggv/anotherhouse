import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {useSelector} from "react-redux";
function PostNews({toggleOpenPostNews}){
     const [typeOfRoom, setTypeOfRoom] = useState("");
     const [description, setDescription] = useState("");
     const [price, setPrice] = useState("");
     const [roomFor, setRoomFor] = useState("");
     const [address, setAddress] = useState("");
     const [imageShow, setImageShow] = useState([]);
     const [uploadImage, setUploadImage] = useState([]);
     const {token, user} = useSelector(state=>state.User);
     const ReadImageRoom=(e)=>{
        if (e.target.files && e.target.files[0]) {
            setUploadImage([...uploadImage,e.target.files[0]]);
             let reader = new FileReader();
             reader.onload = (event) => {
                setImageShow([...imageShow, event.target.result]);
             };
             reader.readAsDataURL(e.target.files[0]);
        }
     }
     const RemovePrivewImg=(index)=>{
        setImageShow(imageShow.filter((item, stt)=>stt !==index));
        setUploadImage(uploadImage.filter((item,ids)=>ids !== index));
    }
     const SubmitPostRoom=()=>{
         if(price === ""||roomFor ===""||address===""){
             return alert("Please enter all field !");
         }
        let fd = new FormData();
        fd.append("typeOfRoom", typeOfRoom);
        fd.append("roomFor", roomFor);
        fd.append("description", description);
        fd.append("address", address);
        fd.append("price", price);
        for (const key of Object.keys(uploadImage)) {
           fd.append('images', uploadImage[key])
        };
          axios.post("/posthotelroom", fd,{
            headers:{
                "Content-Type":"application/json",
                "Authorization": token
            }
          }).then(data=>{
              console.log(data);
          }).catch(err=>{
              console.log(err);
          })

     }
    return(
        <div className="postnews">
            <div className="postnews__header">
                <select onChange={(e)=>setTypeOfRoom(e.target.value)}>
                    <option value="Phongtro">Phòng trọ</option>
                    <option value="hotel">Khách sạn</option>
                    <option value="BDS">Bất động sản</option>
                </select>
                {
                token ?  (<div className="postnews__user">
                    <img src={user.avatar} alt="sdfsafdsa" /> 
                    </div>) :null
                }
                <FontAwesomeIcon icon={faTimes} onClick={()=>toggleOpenPostNews()} className="login__icon"></FontAwesomeIcon>
            </div>
            <div className="postnews__body">
                <div className="postnews__form">
                    <input type="number" placeholder="Room for..."onChange={(e)=>setRoomFor(e.target.value)} />
                    <textarea placeholder="Describe this..." onChange={(e)=>setDescription(e.target.value)}></textarea>
                    <input type="text" placeholder="Location of this..." onChange={(e)=>setAddress(e.target.value)}/>
                    <input type="number" placeholder="Price for this..." onChange={(e)=>setPrice(e.target.value)}/>
                    <div className="newsheader-box__privew">
                        { 
                            imageShow.length >0 ?(imageShow.map((item, index)=>{
                            return(
                                    <img src={item} key={index} alt="file upload" onClick={()=>RemovePrivewImg(index)}></img>
                                )
                            })):null
                        }
                        <i className="file-image">
                            <input  id="_img"  type="file" name="gallery" onChange={(e)=>ReadImageRoom(e)} multiple title="" />
                            <label htmlFor="_img" className="image"></label>
                        </i>
                    </div>
                    <div className="textalign-center">
                        <button type="submit" className="btn__submit" onClick={()=>SubmitPostRoom()}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostNews;