import LoginForm from '../components/LoginForm'

export default {
  title: 'Component/LoginForm',
  component: LoginForm,
  argTypes: {
    // 이렇게 해서 props을 전달해 주구나.
    onSubmit: { action: 'onSubmit' },
  },
}

export const Default = (args) => {
  return <LoginForm {...args} />
}
