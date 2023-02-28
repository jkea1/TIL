import React, {useCallback, useState , useEffect} from 'react';
import {Button, Form, Input} from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import useInput from '../hooks/useInput';
//까먹지 말자
import { ADD_COMMENT_REQUEST } from '../reducers/post'; 



const CommentForm = ({post}) => {
  const dispatch = useDispatch();
  
  //로그인 안했으면 me가 없기 때문에 없는 경우를 대비해줘야 한다. 
  const id = useSelector((state) => state.user.me?.id);
  const {addCommentLoading, addCommentDone} = useSelector((state) => state.post);

  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  useEffect(() => {
    if(addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  //post는 props로 받고, id는 redecer에서 받고, 댓글은 컴포넌트내 state로 가져온다. 
  //이 data를 리듀서의 ADD_COMMENT_REQUEST에 올려준다. -> 이를 saga가 받는다. 
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {content: commentText, postId: post.id, userId : id},//여기부터 다시 보자 
    });
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position : 'relative', margin: 0}}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button 
        style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }}
        type="primary"
        htmlType="submit"
        loading={addCommentLoading}
        >삐약</Button>
      </Form.Item>
    </Form>
  );
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;