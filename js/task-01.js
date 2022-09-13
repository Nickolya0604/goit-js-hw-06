const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((item) => {
  const liH2 = item.querySelector("h2");
  console.log(`Category: ${liH2.textContent}`);

  const listLi = item.querySelector("ul");
  console.log(`Elements: ${listLi.children.length}`);
});
