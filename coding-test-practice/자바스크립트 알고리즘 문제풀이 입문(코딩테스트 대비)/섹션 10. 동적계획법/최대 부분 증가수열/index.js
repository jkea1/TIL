// N개의 자연수로 이루어진 수열이 주어졌을 때,
// 차례대로 뽑아내어 그 중에서 가장 길게 증가하는(작은 수에서 큰수로) 원소들의 집합을 찾는 프로그램을 작성하라.
// ex) 2, 7, 5, 8, 6, 4, 7, 12, 3
// -> 2, 5, 6, 7, 12

// arr [5,3,7,8,6,2,9,4]
// dy [1,1,2,3,2,1,4,2]

function solution(arr) {
  let answer = 0
  let dy = Array.from({ length: arr.length }, () => 0)
  dy[0] = 1
  for (let i = 0; i < arr.length; i++) {
    let max = 0
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j]
      }
    }
    dy[i] = max + 1
    answer = Math.max(answer, dy[i])
  }
  return answer
}
