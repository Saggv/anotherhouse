import React, { useEffect } from 'react';
import ProfileUser from '../Component/ProfileUser';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NewsfeedOtherProfile from '../Component/NewsfeedOtherProfile';
import { FetchAnotherProfile } from '../Action/User';
import { FetchAnotherNewsfeed } from '../Action/Newsfeed';
function OtherProfile() {
  const { params } = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAnotherProfile(params.id));
    dispatch(FetchAnotherNewsfeed());
  }, [dispatch, params.id]);
  const { anotherProfile } = useSelector((state) => state.User);
  const { Newsfeed } = useSelector((state) => state.Newsfeed);
  return (
    <div className="container">
      <div className="profileuser__area">
        <ProfileUser dataUser={anotherProfile}></ProfileUser>
      </div>
      <div className="profilecontent__area">
        <div className="profilecontent__display">
          <h3>Recent activities</h3>
          <NewsfeedOtherProfile Newsfeed={Newsfeed}></NewsfeedOtherProfile>
        </div>
      </div>
    </div>
  );
}
export default OtherProfile;
