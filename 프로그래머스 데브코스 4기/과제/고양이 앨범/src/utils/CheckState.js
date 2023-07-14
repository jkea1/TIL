const STATE_TYPE_LIST = {
  isRoot: 'Boolean',
  isLoading: 'Boolean',
  nodes: 'Object',
  paths: 'Object',
  selectedImageUrl: 'Image Path'
}

function isValidUrl(url) {
  if (typeof url !== 'string') {
    return false
  }

  let pattern =
    /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/
  console.log('test 결과', pattern.test(url))
  return pattern.test(url)
}

export default function CheckState(state) {
  Object.entries(state).map((item) => {
    const [key, value] = item
    if (key in STATE_TYPE_LIST) {
      if (STATE_TYPE_LIST[key] === 'Boolean') {
        if (typeof value !== 'boolean') {
          alert(Error(`${key} state 에러`))
          throw new Error(`${key} state 에러`)
        }
      }
      if (STATE_TYPE_LIST[key] === 'Boolean') {
        if (typeof value !== 'boolean') {
          alert(Error(`${key} state 에러`))
          throw new Error(`${key} state 에러`)
        }
      }
      if (STATE_TYPE_LIST[key] === 'Object') {
        if (typeof value !== 'object') {
          alert(Error(`${key} state 에러`))
          throw new Error(`${key} state 에러`)
        }
      }
      if (STATE_TYPE_LIST[key] === 'Object') {
        if (typeof value !== 'object') {
          alert(Error(`${key} state 에러`))
          throw new Error(`${key} state 에러`)
        }
      }
      if (key === 'selectedImageUrl') {
        console.log(key, value)
        if (value === undefined || value === null) {
          return true
        }
        if (!isValidUrl(value)) {
          alert(Error(`${key} state 에러`))
          throw new Error(`${key} state 에러`)
        }
      }
    } else {
      console.log(item)
      throw new Error(`${key} State가 없습니다.`)
    }
    return true
  })

  return true
}
