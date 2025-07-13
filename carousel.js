const track30 = document.querySelector(".carousel30-track");
const prev30 = document.querySelector(".carousel30-btn.prev");
const next30 = document.querySelector(".carousel30-btn.next");

const scrollAmount = track30.offsetWidth * 0.3 + 20; // 30% + gap

next30.addEventListener("click", () => {
  track30.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prev30.addEventListener("click", () => {
  track30.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
