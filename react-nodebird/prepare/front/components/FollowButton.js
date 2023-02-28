import React from 'react';
import { useCallback } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

//로그인을 했고 게시글의 주인의 id가 내가 팔로잉 한 사람의 id면 버튼에 '언팔로우', 
//로그인을 했고 팔로우한 사람이 아니면 '팔로우' 띄우기.

const FollowButton = ({post}) => {
  const dispatch = useDispatch();
  const { me , followLoading, unfollowLoading } = useSelector((state) => state.user);
  
  const isFollowing = me?.Followings.find((v) => v.id === post.User.id); //이게 불린 값으로 나오나..?
  const onClickButton = useCallback(() => {
    if(isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type : FOLLOW_REQUEST,
        data: post.User.id,
      })
    }
  }, [isFollowing]);
  
  return (
    <Button loading={followLoading || unfollowLoading} onClick = {onClickButton}>
      {isFollowing ? "언팔로우" : "팔로우"}
    </Button>
  )
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,//object 보다 shape로 하는게 좋다. 
};

export default FollowButton;