import React, { useCallback, useState, useEffect} from 'react';
import Head from 'next/head';
import { Checkbox, Form, Input, Button} from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';


const ErrorMessage = styled.div`
  color: red;
`

const Signup = () => {
  const dispatch = useDispatch();
  const {signUpLoading, signUpDone, signUpError, me} = useSelector((state) => state.user);
  //회원가입 완료되면 mainpage로 돌아가게 만든다.
  useEffect(() => {
    if(me && me.id) {
      Router.replace('/')
    }
  }, [me && me.id]);
  
  useEffect(() => {
    if(signUpDone) {
      Router.replace('/');
    };
  }, [signUpDone]);

  useEffect(() => {
    if(signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const [email, onChangeEmail] = useInput('');
  const [password,onChangepassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  
  //password와 passwordcheck가 다른지를 확인하는 부분이 다르기 때문에 passwordcheck는 useInput을 못쓴다. 
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  
  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if(password !== passwordCheck) {
      return setPasswordError(true);
    };
    //약관동의를 누르지 않고 submit 했다면
    if(!term) {
      return setTermError(true);
    };

    console.log(email, nickname, password);
    
    //useDispatch를 이용해서 액션 생성함수를 실행하여 변경된 값을 리듀서에 다시 저정한다. 
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {email, password, nickname},
    });

  }, [email, password, passwordCheck, term]); //나중에 이걸 서버에 보내주면 된다. 

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish ={onSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          {/* type="email"을 적어줘야 html에서 자동으로 검사를 해준다. */}
          <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" value={password} required onChange={onChangepassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input 
            name="user-password" 
            type="password"
            value={passwordCheck} 
            required 
            onChange={onChangePasswordCheck} 
            />
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 동의합니다.</Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ margintop: 10}}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  
  );
};

export default Signup;