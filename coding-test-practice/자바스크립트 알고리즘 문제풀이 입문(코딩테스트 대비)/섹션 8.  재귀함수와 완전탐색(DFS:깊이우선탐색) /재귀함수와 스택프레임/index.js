// DFS: 깊이 우선 탐색
// L: level
// 재귀함수 : 자기가 자신을 호출하는 함수
// 함수가 호출되면 (콜)스택에 함수정보가 들어간다.
// 함수의 매개변수, 지역변수, 복귀주소(함수코드가 실행된 위치)를 저장한다. = stact frame = 스택에 들어가는 하나의 아이템
// ex) 스택 -> [DFS(3), DFS(2), DFS(1)] -> [DFS(3), DFS(2)] -> [DFS(3)] -> []

function solution(n) {
  function DFS(L) {
    if (L === 0) {
      return
    } else {
      // console.log(L);
      DFS(L - 1)
      console.log('재귀', L)
    }
  }

  DFS(n)
}

solution(3)
