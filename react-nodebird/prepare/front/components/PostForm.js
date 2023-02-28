import React, {useCallback, useState, useRef, useEffect} from 'react';
import {Button, Form, Input} from 'antd';
import { useSelector, useDispatch, } from 'react-redux';
import { addPost } from '../reducers/post';
import useInput from '../hooks/useInput';

const PostForm = () => {
  const {imagePaths, addPostDone} = useSelector((state) => state.post);
  const dispatch = useDispatch();

  //게시물 텍스트
  const [text, onChangeText, setText] = useInput('');
  useEffect(() => {
    if(addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  
  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
    //게시물 개시 버튼을 누르고 서버에서 에러가 나게 되면 setText('') 로 text를 초기화 시켜 버리면 안된다. 
    //setText(''); 이거 여기에 두면 안된다. useEffect() 에서 해줘야 한다. 
  }, [text]);
  
  //이미지 업로드
  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  
  return (
    <Form style = {{margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        value = {text}
        onChange = {onChangeText}
        maxLength = {140}
        placeholder = "어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick = {onClickImageUpload} >이미지 업로드</Button>
        <Button type="primary" style={{float: 'right'}} htmlType="summit">짹짹</Button>
      </div>

      {/* 이미지 업로드시 미리보기 부분 */}
      <div>
        {imagePaths.map((v) => (
          <div key = {v} style={{display: 'inline-block'}}>
            <img src={v} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  )
}

export default PostForm