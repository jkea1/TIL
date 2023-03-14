import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';

//ButtonWrapper라는 스타일이 적용된 component를 만들어 사용할 수 있다. 
//ButtonWrapper는 div 태그가 된다. 
const ButtonWrapper = styled.div`
  marginTop: 10px;
`;
const FormWrapper = styled(Form)`
  padding: 10px;
`
//setIsLoggedIn은 더미데이터로 AppLayout에서 넘겨 받음
const LoginForm = () => {
  const dispatch = useDispatch()
  const {logInLoading} = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  
  //로그인을 하는 순간 setIsLoggedIn(true)로 인해 
  //isLoggedIn 이 true로 바뀌고 -> <UserProfile /> 로 바뀐다. 
  //서버가 없어도 useState 이용해서 더미데이터로 로그인을 시켜줄 수 있다. 
  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({email, password}))
  }, [email, password]);

  return(
    <FormWrapper onFinish={onSubmitForm}> {/* antd에서는 onSubmit 대신 onFinish를 쓴다.  */}
      <div>
        <label htmlFor = "user-email">이메일</label>
        <br />
        <Input 
          name="user-email" 
          type="email"
          value={email}
          onChange={onChangeEmail} 
          required 
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input 
          name="user-id" 
          value={password} 
          onChange={onChangePassword} 
          required 
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  )
}

export default LoginForm;