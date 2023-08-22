import styled from '@emotion/styled'
import Input from './Input'
import Button from './Button'
import useForm from '../hooks/useForm'

const CardForm = styled.form`
  padding: 16px;
  width: 400px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`

const sleep = () => {
  // 1초가 지나고 promise가 resolve 되게
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000)
  })
}

const LoginForm = ({ onSubmit }) => {
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: async () => {
      await sleep()
      console.log('Submit!')
    },
    validate: ({ name, password }) => {
      const newErrors = {}
      if (!name) {
        newErrors.name = '이름을 입력해 주세요.'
      }
      if (!password) {
        newErrors.password = '비밀번호를 입력해주세요.'
      }
      return newErrors
    },
  })

  console.log(values, errors)

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input
        type='text'
        name='name'
        placeholder='Name'
        onChange={handleChange}
      />
      <Input
        type='password'
        name='password'
        placeholder='Password'
        onChange={handleChange}
        style={{ marginTop: 8 }}
      />
      <Button type='submit' disabled={isLoading} style={{ marginTop: 16 }}>
        Login
      </Button>
    </CardForm>
  )
}

export default LoginForm
