const storage = window.localStorage;
export const setItem = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value));
    console.log(key, value);
  } catch (e) {
    console.log(e); //용량을 초과하는 경우 에러가 발생한다.
  }
};

//꺼내 온느데 실패한 경우 defaultvalue를 사용한다.
export const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);

    if (!storedValue) {
      return defaultValue;
    }

    const parsedValue = JSON.parse(storedValue);
    return parsedValue;
  } catch (e) {
    return defaultValue;
  }
};

export const removeItem = (key) => {
  storage.removeItem(key);
};
