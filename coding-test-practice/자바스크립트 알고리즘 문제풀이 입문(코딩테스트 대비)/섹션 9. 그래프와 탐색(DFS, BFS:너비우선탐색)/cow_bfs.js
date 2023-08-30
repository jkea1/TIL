// 현수가 송아지를 잃어버림
// 송아지에는 위치추적기 달려있음
// 현수의 위치와 송아지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지 다음과 같은 방법으로 이동한다.
// 송아지는 움직이지 않고 제자리에 있다.
// 현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
// 최소 볓 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성해라

// 최소 가짓수를 구하는 문제, 최소 레벨을 구하는 문제이다.
// 한 노드 마다 앞으로 한칸 갈경우, 뒤로 한칸 갈 경우, 앞으로 5칸 갈 경우 이렇게 3개의 가지를 뻗게 하자.
// 방법1
// 레벨로 풀어보자
// 노드 값은 위치값으로 하자.
// 가지를 뻗어 가다가 같은 값이 나오면 큐에 넣지 말자. 비효율적이므로. 체크 배열을 만들어서 체크하자.

// 직선의 좌표 점은 1 ~10000
// 방법2
// 거리좌표 배열(dis)과 체크 배열은 길이가 100001이게 만들자.
// dis배열 값으로는 레벨 값을 넣어주면 된다. 인덱스가 위치가 됨

function solution(s, e) {
  let answer = 0
  let ch = Array.from({ length: 10001 }, () => 0)
  let queue = []
  queue.push(s)
  ch[s] = 1
  let L = 0
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let x = queue.shift()
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) {
          return L + 1
        }
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1
          queue.push(nx)
        }
      }
    }
    L++
  }
  return answer
}

console.log(solution(5, 14))

function solution(s, e) {
  let answer = 0
  let ch = Array.from({ length: 10001 }, () => 0)
  let dis = Array.from({ length: 10001 }, () => 0)
  let queue = []
  ch[s] = 1
  queue.push(s)
  dis[s] = 0
  while (queue.length) {
    let x = queue.shift()
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) {
        return dis[x] + 1
      }
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1
        queue.push(nx)
        dis[nx] = dis[x] + 1
      }
    }
  }

  return answer
}
console.log(solution(8, 3))
