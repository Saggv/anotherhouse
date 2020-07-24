import React, { Fragment } from 'react';
import NewsfeedItem from './NewsFeedItem';
function NewsfeedProfile({ Newsfeed }) {
  return (
    <Fragment>
      {Newsfeed.length > 0 ? (
        Newsfeed.map((item, index) => {
          return <NewsfeedItem item={item} key={index}></NewsfeedItem>;
        })
      ) : (
        <h2 className="no-post-profile">Chưa có bài viết nào ):(</h2>
      )}
    </Fragment>
  );
}
export default NewsfeedProfile;
