const navBar = document.getElementById("navBar");
const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");

// 메뉴 열기
openMenuBtn.addEventListener("click", () => {
  navBar.classList.add("active");
});

// 메뉴 닫기
closeMenuBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
});

/* 리사이즈 시 트랜지션 방지 코드 */
let resizeTimer;
window.addEventListener("resize", () => {
  // 1. 창 크기가 변할 때 transition-none 클래스 추가 (애니메이션 끔)
  document.body.classList.add("resize-animation-stopper");

  // 2. 리사이즈가 끝나면 (타이머로 감지) 클래스 제거 (애니메이션 다시 켬)
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400); // 0.4초 뒤에 다시 켬
});
