
(function() {
  const houseElem = document.querySelector('.house');
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;
  
  //window size(창 사이즈)가 바뀔때 마다 maxsizevalue 값이 갱신되야 한다. 
  function resizeHandler () {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }
  
  //얼마큼 스크롤 했지는지 수치화 할 수 있어야 한다. 
  window.addEventListener('scroll', function() {
    const zMove = pageYOffset / maxScrollValue * 980 - 490; /* 0 ~ 1000 으로 세팅된다.  */
    houseElem.style.transform = 'translateZ(' + zMove +'vw)';
  });

  window.addEventListener('resize', resizeHandler);
})();