const scrollTopBtn = document.querySelector(".scroll-top-btn");
const footer = document.querySelector("footer");

// 1. 스크롤 탑 버튼 보이기/숨기기 로직
window.addEventListener("scroll", () => {
  // footer 위치 확인
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Footer가 화면에 조금이라도 보이면 버튼이 나타남
  // (footerRect.top < windowHeight) 조건은 Footer의 윗부분이 화면 아래쪽 경계선을 넘어왔다는 뜻
  if (footerRect.top < windowHeight - 50) {
    // 50px 정도 여유 둠
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }

  // 2. 클릭 시 최상단 이동 + 회전 애니메이션
  scrollTopBtn.addEventListener(
    "click",
    () => {
      // 회전 클래스추가
      scrollTopBtn.classList.add("scrolling");

      // 스크롤 이동
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 부드러운 스크롤
      });

      // 스크롤이 끝났는지 감지하여 클래스 제거
      const checkScroll = setInterval(() => {
        // 스크롤이 0에 도달했으면 (혹은 거의 다 왔으면)
        if (window.scrollY === 0) {
          scrollTopBtn.classList.remove("scrolling"); // 회전 멈춤
          clearInterval(checkScroll); // 감지 종료
        }
      });
    },
    100
  ); // 0.1초마다 체크
});
