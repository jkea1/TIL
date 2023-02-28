import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/followList';
import FollowerList from '../components/followerList';

//div로 나누지 말고 큼직큼직하게 먼저 하는게 좋다. 

const Profile = () => {
  /* //더미 데이터를 미리 만들어 놓는다. 
  const followerList = [{nickname: '제로초'}, {nickname: '바보'}, {nickname: '노드버드오피셜'}];
  const followingList = [{nickname: '제로초'}, {nickname: '바보'}, {nickname: '노드버드오피셜'}]; */
  
  const {me} = useSelector((state) => state.user);
  
  //로그인 안했을때 프로필 못가게 해야 한다.
  //프로필 페이지에 있다가 로그아웃 할 경우에는 메인화면으로 가게함.
  useEffect(() => {
    if(!(me && me.id)) {
      Router.push('/')
    }
  }, [me && me.id]);

  //me가 없을 때 me를 로딩하는 동안 보여줄 화면을 null자리에 넣으면 된다. 
  //me가 없을 때 저 코드가 없으면 에러가 발생한다. 
  if(!me) {
    return null;
  };

  //useEffect과 if대신 if문 하나만 사용해도 된다. 
  /* if(!me) {
    Router.push('/');
    return null;
  } */

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBrisd</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={me.Followings} />
        <FollowList header="팔로워 목록" data={me.Followers} />
      </AppLayout>
    </>
  )
};

export default Profile;