import {useState, useCallback } from 'react';

//범용적으로 쓸수 있게 변수 이름을 바꿔주면 된다. 
export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  
  //이렇게 return하면 둘이 합쳐져서 return된다. 
  return [value, handler, setValue];
}
