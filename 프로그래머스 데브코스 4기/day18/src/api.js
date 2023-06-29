export const API_END_POINT = 'https://kdt-frontend.programmers.co.kr';

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // ok는 꼭 체크해주자.
    if (res.ok) {
      return await res.json();
    }
    // ok가 아닌 경우에는 error를 발생시키자.
    throw new Error('API 처리중 뭔가 이상합니다.');
  } catch (e) {
    alert(e.message);
  }
};
