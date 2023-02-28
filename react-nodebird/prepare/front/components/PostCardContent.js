import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({postData}) => (
  //게시글 안에서 #을 추출해 내서 링크 만들기 
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if(v.match(/(#[^\s#]+)/)) {
        return <Link href = {`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
      }
      return v;
    })}
  </div>
);

PostCardContent.propTypes = { postData: PropTypes.string.isRequired};

export default PostCardContent