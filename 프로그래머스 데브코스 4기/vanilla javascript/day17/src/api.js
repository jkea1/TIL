export const API_END_POINT = "https://kdt-frontend.todo-api.programmers.co.kr";

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      //ok 검사 꼭 해야 한다.
      const json = await res.json();
      return json;
    }
    throw new Error("API 호출 오류");
  } catch (e) {
    alert(e.message);
  }
};
