
(function() {
  const houseElem = document.querySelector('.house');
  const barElem = document.querySelector('.progress-bar');
  let maxScrollValue;
  
  //window size(창 사이즈)가 바뀔때 마다 maxsizevalue 값이 갱신되야 한다. 
  function resizeHandler () {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }
  
  //얼마큼 스크롤 했지는지 수치화 할 수 있어야 한다. 
  window.addEventListener('scroll', function() {
    const scrollPer = pageYOffset / maxScrollValue;
    const zMove = scrollPer * 980 - 490; /* 0 ~ 1000 으로 세팅된다.  */
    houseElem.style.transform = 'translateZ(' + zMove +'vw)';

    // progress bar
    barElem.style.width = scrollPer * 100 + "%";
  });

  //처음에 문서가 로드 되면 resizeHandler를 한 번 실행 해 주어 maxScrollValue 를 초기화 해준다. 
  window.addEventListener('resize', resizeHandler);
  //resizehandler() 함수를 실행 해 주지 않다면 maxScrollValue 값이 없어 -> transform이 적용되지 않는다 -> resize event를 해 주지 않는 이상 스크롤 event가 일어나지 않는다. 
  resizeHandler();
})();