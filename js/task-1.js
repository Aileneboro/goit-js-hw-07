"use strict";

const categoryItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach((categoryItem) => {
  const titleItem = categoryItem.querySelector("h2").textContent;
  const sumItems = categoryItem.querySelectorAll("li").length;
  console.log(`Category: ${titleItem}`);
  console.log(`Elements: ${sumItems}`);
});
