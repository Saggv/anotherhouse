import React from "../../node_modules/@types/react";
import roomimg from "../Images/roomimage.jpg";
function Itembook(){
    return(
        <div className="listprofile__book__item">
            <div className="listprofile__book__item__img">
                <img src={roomimg} alt="sdfsdf" />
                <p>Day send: 10/2/2020</p>
            </div>
            <div className="listprofile__book__item__right">
                <div className="listprofile__book__item__detail">
                    <div className="listprofile__book__item__detail__item">
                        <label>ID</label>
                        <span>1234325461</span>
                    </div>
                    <div className="listprofile__book__item__detail__item">
                        <label>Số lượng:</label>
                        <span>3</span>
                    </div>
                    <div className="listprofile__book__item__detail__item">
                        <label>Số tiền:</label>
                        <span>300$</span>
                    </div>
                    <div className="listprofile__book__item__detail__item">
                        <label>Loại:</label>
                        <span>3</span>
                    </div>
                    <div className="listprofile__book__item__detail__item">
                        <label>Từ:</label>
                        <span>3/2/2020</span>
                    </div>
                    <div className="listprofile__book__item__detail__item">
                        <label>Đến:</label>
                        <span>6/2/2020</span>
                    </div>
                </div>
                <div className="listprofile__book__item__detail__note">
                    <p>Không có ghi chú gì thêm từ khách hàng…</p>
                </div>
            </div>
        </div>
    );
}
export default Itembook;