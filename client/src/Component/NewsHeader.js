import React, { useState } from 'react';
import feather from '../Images/feather.svg';
import featherfocus from '../Images/featherfocus.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PostNewsfeedSuccess } from '../Action/Newsfeed';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
function NewsHeader() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [fileUps, setFileUps] = useState([]);
  const [openPost, setOpenPost] = useState(false);
  const { token, user } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const SubmitNewsfeed = async () => {
    let fd = new FormData();
    fd.append('title', title);
    fd.append('content', content);
    if (content === '') {
      return alert('Please enter all field !');
    }
    for (const key of Object.keys(fileUps)) {
      fd.append('photos', fileUps[key]);
    }
    if (!token) {
      return alert('Please login !');
    }
    const result = await axios.post('/postnewsfeed', fd, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    if (result.status === 200) {
      dispatch(PostNewsfeedSuccess(result));
      setTitle('');
      setContent('');
      setOpenPost(false);
    } else {
      setContent('Something wrong !');
      setOpenPost(false);
    }
  };
  const ReadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileUps([...fileUps, e.target.files[0]]);
      let reader = new FileReader();
      reader.onload = (event) => {
        setImages([...images, event.target.result]);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const ClickOpenPost = () => {
    setOpenPost(true);
  };
  const ClosePost = () => {
    setOpenPost(false);
  };
  const RemovePrivewImg = (index) => {
    setImages(images.filter((item, stt) => stt !== index));
    setFileUps(fileUps.filter((item, ids) => ids !== index));
  };
  return (
    <div className="container">
      <div className="newsheader">
        <div className="newsheader-box">
          <div className="newsheader-box__user">
            {user.avatar ? <img src={user.avatar} alt="loadding.." onClick={() => ClosePost()} /> : null}
          </div>
          <div className="newsheader-box__input-box">
            {openPost ? (
              <div className="newsheader-box__post">
                <input
                  className="newsheader-box__post__input"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Title of the post..."
                />
              </div>
            ) : null}
            <textarea
              onClick={() => ClickOpenPost()}
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Write something here..."
            ></textarea>
            <br />
            {openPost ? (
              <div className="newsheader-box__privew">
                {images.length > 0
                  ? images.map((item, index) => {
                      return <img src={item} key={index} alt="upload fiel..." onClick={() => RemovePrivewImg(index)}></img>;
                    })
                  : null}
                <i className="file-image">
                  <input id="_" type="file" name="gallery" onChange={(e) => ReadImage(e)} multiple title="" />
                  <label htmlFor="_" className="image"></label>
                </i>
              </div>
            ) : null}
            <img src={feather} className="feather feather--1" alt="dfd" />
            <img src={featherfocus} className="feather feather--2" alt="dfd" />
            {openPost ? (
              <button type="submit" onClick={() => SubmitNewsfeed()} className="btn btn-submit display-block">
                POST
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="newsfeed__search">
        <input className="search search__newsfeed" type="text" placeholder="Tìm bài viết..."></input>
        <FontAwesomeIcon icon={faSearch} className="icon__search"></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default NewsHeader;
