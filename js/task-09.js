function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const bd = document.querySelector("body");

console.log(bd);

btn.addEventListener("click", () => {
  const f = getRandomHexColor();
  span.textContent = f;
  bd.style.background = f;
});
