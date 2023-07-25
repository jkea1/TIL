//1. 같은 장르끼리 묶어야 한다. 
//2. 묶인 노래들을 재생 순으로 정렬을 해야 한다.
//3. 노래를 2개까지 자르는 잡업을 해야한다. 

//핵심 키워드 "묶는 것", "정렬"
// "묶는다"는 키워드가 있을때는 해시 테이블과 연관이 있을 가능성이 높다.

function solution(genres, plays) {
  const genreMap = new Map();
  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || {total: 0, songs: []};
      genreMap.set(genre, {
          total: data.total + play,
          songs: [...data.songs, { play, index }]
            .sort((a,b) => b.play - a.play) 
            .slice(0,2)
      })
    })
    return  [...genreMap.entries()]
            .sort((a, b) => b[1].total - a[1].total)
            .flatMap(item => item[1].songs) //map을 쓰면 리스트안에 리스트가 들어가 버린다.
            .map(song => song.index)
} 