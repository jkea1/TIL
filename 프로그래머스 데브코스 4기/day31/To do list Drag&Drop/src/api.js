const API_END_POINT = "https://kdt-frontend.todo-api.programmers.co.kr/roto";

export const request = async (url, options) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, options);
    if (!res.ok) {
      throw new Error("서버의 상태가 이상합니다!");
    }
    return await res.json();
  } catch (e) {
    throw new Error(`${e.message}`);
  }
};
