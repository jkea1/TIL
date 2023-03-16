import React, { useCallback} from 'react';
import { Card, Avatar, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';

import {logoutRequestAction} from '../reducers/user'; 

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me ,logOutLoading} = useSelector( (state) => state.user ); //이거 state.user에 {} 안해도 되나?

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    //배열로 jsx쓸때는 key를 붙여줘야 한다. 
    <Card
      actions={[ 
        <div key="twit">짹짹<br />{me.Posts.length}</div>,
        <div key="followings">팔로잉<br />{me.Followings.length}</div>,
        <div key="followers">팔로워<br />{me.Followers.length}</div>,
      ]}
    >
      <Card.Meta 
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile