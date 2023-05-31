(function() {
  const houseElem = document.querySelector('.house');
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;
      //얼마큼 스크롤 했지는지 수치화 할 수 있어야 한다. 
  window.addEventListener('scroll', function() {
    const zMove = pageYOffset / maxScrollValue * 980 - 490; /* 0 ~ 1000 으로 세팅된다.  */
    houseElem.style.transform = 'translateZ(' + zMove +'vw)';
  });
})();