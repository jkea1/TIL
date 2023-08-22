import { useState } from 'react'

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    const newErrors = validate(values)
    if (Object.keys(newErrors).length === 0) {
      //newErrors객체의 key 값만 뽑아서 객체를 만들어 줄 수 있다.
      await onSubmit()
    }
    setErrors(newErrors)
    setIsLoading(false)
  }

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  }
}

export default useForm
