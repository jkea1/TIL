export const parse = (querystring) => {
  //`?name=roto&position=bassist`
  // &로 쪼갠다.
  // key=value의 조합을 object 형태로 만든다.
  // 만들어진 거 리턴한다.

  //루프 돌면서 querystrings에 키와 값 추가
  return querystring.split("&").reduce((acc, keyAndValue) => {
    const [key, value] = keyAndValue.split("=");

    if (key && value) {
      acc[key] = value;
      console.log(acc, key, value);
    }
    return acc;
  }, {});
};
