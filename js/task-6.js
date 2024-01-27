function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

const INITIAL_BOX_SIZE = 30;
const BOX_SIZE_INCREMENT = 10;

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxesDiv.innerHTML = "";

  let currentBoxSize = INITIAL_BOX_SIZE;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${currentBoxSize}px`;
    box.style.height = `${currentBoxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);

    currentBoxSize += BOX_SIZE_INCREMENT;
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
