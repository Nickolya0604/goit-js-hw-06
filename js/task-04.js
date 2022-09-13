const decBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const incBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

const span = document.querySelector("#value");

let counterValue = 0;

decBtn.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});

incBtn.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});
