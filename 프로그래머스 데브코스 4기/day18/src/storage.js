// 로컬스토리지
const storage = window.localStorage;

export const getItem = (key, defaultValue) => {
  // 불러올때는 JSOn.parse로 풀어서 불러온다.
  try {
    const storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export const setItem = (key, value) => {
  // 저장할때는 JSON.stringigy()로 넣는다.
  storage.setItem(key, JSON.stringify(value));
};
