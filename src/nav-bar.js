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
