function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const bd = document.querySelector("body");
const f = getRandomHexColor();

console.log(bd);

btn.addEventListener("click", () => {
  span.textContent = f;
  bd.style.background = f;
});
