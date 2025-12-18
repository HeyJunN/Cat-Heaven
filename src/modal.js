const dialog = document.getElementById("ThanksDialog");
const showThanksBtn = document.getElementById("showThanksBtn");
const closeBtn = document.getElementById("closeBtn");

showThanksBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
