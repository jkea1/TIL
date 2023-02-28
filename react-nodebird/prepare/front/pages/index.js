import React, {useEffect} from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';


//<AppLayout>으로 감싸진 애들이 children이 된다. 
//의미있는 단위로 컴포넌트를 나눠주면 된다. 
const Home = () => {
  const dispatch = useDispatch();
  const {me} = useSelector((state) => state.user);
  const {mainPosts, hasMorePosts, loadPostsLoading} = useSelector((state) => state.post);

  //main page 불러올때 LOAD_POSTS_REQUEST 가 호출된다. 
  //빈 배열만 넣는다면 componentdidmount 효과를 낼 수 있다. 
  //로딩을 초기에만 1번한다. 
  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  //스크롤 내려서 끝까지 갔을때 다시 로딩하게 한다. 
  useEffect(() => {
    //스크롤이 얼마나 됐는지도 알려주는 함수이다. 
    function onScroll() {
      console.log("너비",window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      //게시물을 다 내렸을 때 새로운 개시물을 로딩한다. 
      if(Math.floor(window.scrollY) + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
        if(hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
          });
          console.log("확인✅");
        };
      };
    };

    //useEffect에서 window.addEventListener() 할 때는 return을 꼭 해줘야 한다.
    //removeEventListener()로 앞에서 쌓여 있는걸 지워줘야 한다. 아니면 posts가 메모리에 계속 쌓인다. 
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post}/>)}
    </AppLayout>
  );
}

export default Home;