const API_END_POINT = 'https://kdt-frontend.cat-api.programmers.co.kr'

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`)

    if (res.ok) {
      return await res.json()
    }

    throw new Error('API 처리중 문제가 발생했습니다.')
  } catch (e) {
    alert(e.message)
  }
}
