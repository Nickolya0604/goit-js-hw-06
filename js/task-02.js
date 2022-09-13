const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemUl = document.querySelector("#ingredients");

const listItems = ingredients.map((ingredient) => {
  const liEL = document.createElement("li");
  liEL.textContent = ingredient;
  liEL.classList.add("item");
  return liEL;
});

itemUl.append(...listItems);
console.log(itemUl);
